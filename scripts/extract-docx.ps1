param(
  [string]$DocxPath = 'C:\Users\joaov\Downloads\ROTEIRO COMPLETO CCA E CVB.docx',
  [string]$OutputDir = '.\tmp\docx'
)

$ErrorActionPreference = 'Stop'

Add-Type -AssemblyName System.IO.Compression.FileSystem

function Convert-DocxNode {
  param(
    [System.Xml.XmlNode]$Node,
    [System.Text.StringBuilder]$Builder
  )

  if (-not $Node) {
    return
  }

  switch ($Node.LocalName) {
    't' {
      [void]$Builder.Append($Node.InnerText)
    }
    'tab' {
      [void]$Builder.Append("`t")
    }
    'br' {
      [void]$Builder.AppendLine()
    }
    default {
      foreach ($child in $Node.ChildNodes) {
        Convert-DocxNode -Node $child -Builder $Builder
      }
    }
  }
}

$resolvedDocx = (Resolve-Path -LiteralPath $DocxPath).Path
$resolvedOutput = Join-Path (Get-Location) $OutputDir
$mediaOutput = Join-Path $resolvedOutput 'media'

New-Item -ItemType Directory -Force -Path $resolvedOutput | Out-Null
New-Item -ItemType Directory -Force -Path $mediaOutput | Out-Null

$zip = [System.IO.Compression.ZipFile]::OpenRead($resolvedDocx)

try {
  $documentEntry = $zip.GetEntry('word/document.xml')
  if (-not $documentEntry) {
    throw 'word/document.xml não encontrado no DOCX.'
  }

  $stream = $documentEntry.Open()
  try {
    $reader = New-Object System.IO.StreamReader($stream)
    $xmlContent = $reader.ReadToEnd()
  }
  finally {
    if ($reader) { $reader.Dispose() }
    $stream.Dispose()
  }

  $doc = New-Object System.Xml.XmlDocument
  $doc.PreserveWhitespace = $true
  $doc.LoadXml($xmlContent)

  $ns = New-Object System.Xml.XmlNamespaceManager($doc.NameTable)
  $ns.AddNamespace('w', 'http://schemas.openxmlformats.org/wordprocessingml/2006/main')

  $paragraphs = New-Object System.Collections.Generic.List[object]
  $index = 0

  foreach ($p in $doc.SelectNodes('//w:body/w:p', $ns)) {
    $builder = New-Object System.Text.StringBuilder
    Convert-DocxNode -Node $p -Builder $builder
    $text = $builder.ToString().Trim()

    if ($text) {
      $index++
      $paragraphs.Add([ordered]@{
        index = $index
        text = $text
      })
    }
  }

  $paragraphsPath = Join-Path $resolvedOutput 'paragraphs.json'
  $paragraphs | ConvertTo-Json -Depth 4 | Set-Content -LiteralPath $paragraphsPath -Encoding UTF8

  foreach ($entry in $zip.Entries | Where-Object { $_.FullName -like 'word/media/*' }) {
    $target = Join-Path $mediaOutput ([IO.Path]::GetFileName($entry.FullName))
    $entryStream = $entry.Open()
    try {
      $fileStream = [IO.File]::Open($target, [IO.FileMode]::Create, [IO.FileAccess]::Write)
      try {
        $entryStream.CopyTo($fileStream)
      }
      finally {
        $fileStream.Dispose()
      }
    }
    finally {
      $entryStream.Dispose()
    }
  }

  $media = Get-ChildItem -LiteralPath $mediaOutput | Sort-Object Name | ForEach-Object {
    [ordered]@{
      name = $_.Name
      extension = $_.Extension
      size = $_.Length
    }
  }

  $summary = [ordered]@{
    source = $resolvedDocx
    paragraphCount = $paragraphs.Count
    mediaCount = $media.Count
    media = $media
  }

  $summary | ConvertTo-Json -Depth 5 | Set-Content -LiteralPath (Join-Path $resolvedOutput 'summary.json') -Encoding UTF8
  $paragraphs | Select-Object -First 25 | Format-Table -AutoSize
}
finally {
  $zip.Dispose()
}
