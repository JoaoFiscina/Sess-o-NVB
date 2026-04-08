param(
  [string]$PdfPath = 'C:\Users\joaov\Downloads\NEOPLASIAS DE VIAS BILIARES DEF.pdf',
  [string]$OutputDir = '.\tmp\pdf',
  [int[]]$RenderPages = @(),
  [switch]$RenderAllPages,
  [int]$MaxPages = 166
)

$ErrorActionPreference = 'Stop'

Add-Type -AssemblyName System.Runtime.WindowsRuntime

function Get-AsTaskMethod {
  param(
    [switch]$Generic,
    [string]$ParameterTypeName
  )

  [System.WindowsRuntimeSystemExtensions].GetMethods() | Where-Object {
    $_.Name -eq 'AsTask' -and
    $_.IsGenericMethod -eq $Generic.IsPresent -and
    $_.GetParameters().Count -eq 1 -and
    $_.GetParameters()[0].ParameterType.Name -eq $ParameterTypeName
  } | Select-Object -First 1
}

function Await-WinRT {
  param(
    [Parameter(Mandatory = $true)] [object]$Operation,
    [Parameter(Mandatory = $true)] [type]$ResultType
  )

  $method = Get-AsTaskMethod -Generic -ParameterTypeName 'IAsyncOperation`1'
  $generic = $method.MakeGenericMethod($ResultType)
  $task = $generic.Invoke($null, @($Operation))
  $task.Wait()
  return $task.Result
}

function Await-Action {
  param(
    [Parameter(Mandatory = $true)] [object]$Operation
  )

  $method = Get-AsTaskMethod -ParameterTypeName 'IAsyncAction'
  $task = $method.Invoke($null, @($Operation))
  $task.Wait()
}

function Render-PdfPage {
  param(
    [Parameter(Mandatory = $true)] [Windows.Data.Pdf.PdfPage]$Page,
    [Parameter(Mandatory = $true)] [string]$OutputPath
  )

  $stream = New-Object Windows.Storage.Streams.InMemoryRandomAccessStream
  try {
    Await-Action ($Page.RenderToStreamAsync($stream))
    $reader = New-Object Windows.Storage.Streams.DataReader($stream.GetInputStreamAt(0))

    try {
      [void](Await-WinRT ($reader.LoadAsync([uint32]$stream.Size)) ([uint32]))
      $bytes = New-Object byte[] ([int]$stream.Size)
      $reader.ReadBytes($bytes)
      [IO.File]::WriteAllBytes($OutputPath, $bytes)
    }
    finally {
      $reader.Dispose()
    }
  }
  finally {
    $stream.Dispose()
  }
}

function Get-OcrText {
  param(
    [Parameter(Mandatory = $true)] [string]$ImagePath
  )

  $storageFileType = [Windows.Storage.StorageFile, Windows.Storage, ContentType = WindowsRuntime]
  $streamType = [Windows.Storage.Streams.IRandomAccessStream, Windows.Storage.Streams, ContentType = WindowsRuntime]
  $decoderType = [Windows.Graphics.Imaging.BitmapDecoder, Windows.Graphics.Imaging, ContentType = WindowsRuntime]
  $softwareBitmapType = [Windows.Graphics.Imaging.SoftwareBitmap, Windows.Graphics.Imaging, ContentType = WindowsRuntime]
  $ocrResultType = [Windows.Media.Ocr.OcrResult, Windows.Media.Ocr, ContentType = WindowsRuntime]

  $file = Await-WinRT ([Windows.Storage.StorageFile]::GetFileFromPathAsync($ImagePath)) $storageFileType
  $stream = Await-WinRT ($file.OpenAsync([Windows.Storage.FileAccessMode]::Read)) $streamType

  try {
    $decoder = Await-WinRT ([Windows.Graphics.Imaging.BitmapDecoder]::CreateAsync($stream)) $decoderType
    $bitmap = Await-WinRT ($decoder.GetSoftwareBitmapAsync()) $softwareBitmapType
    $engine = [Windows.Media.Ocr.OcrEngine]::TryCreateFromUserProfileLanguages()
    $result = Await-WinRT ($engine.RecognizeAsync($bitmap)) $ocrResultType
    return ($result.Text -replace '\s+', ' ').Trim()
  }
  finally {
    $stream.Dispose()
  }
}

$resolvedPdf = (Resolve-Path -LiteralPath $PdfPath).Path
$resolvedOutput = [IO.Path]::GetFullPath((Join-Path (Get-Location) $OutputDir))
$renderOutput = Join-Path $resolvedOutput 'rendered-pages'

New-Item -ItemType Directory -Force -Path $resolvedOutput | Out-Null
New-Item -ItemType Directory -Force -Path $renderOutput | Out-Null

$storageFileType = [Windows.Storage.StorageFile, Windows.Storage, ContentType = WindowsRuntime]
$pdfDocType = [Windows.Data.Pdf.PdfDocument, Windows.Data.Pdf, ContentType = WindowsRuntime]

$file = Await-WinRT ([Windows.Storage.StorageFile]::GetFileFromPathAsync($resolvedPdf)) $storageFileType
$doc = Await-WinRT ([Windows.Data.Pdf.PdfDocument]::LoadFromFileAsync($file)) $pdfDocType

$pageCount = [Math]::Min($doc.PageCount, $MaxPages)

if ($RenderAllPages) {
  $pagesToRender = 1..$pageCount
}
elseif ($RenderPages.Count -gt 0) {
  $pagesToRender = $RenderPages
}
else {
  $pagesToRender = 1..$pageCount
}

$results = New-Object System.Collections.Generic.List[object]

for ($pageNumber = 1; $pageNumber -le $pageCount; $pageNumber++) {
  $page = $doc.GetPage($pageNumber - 1)

  try {
    $pngPath = Join-Path $renderOutput ('page-{0:D3}.png' -f $pageNumber)

    if ($pagesToRender -contains $pageNumber) {
      Render-PdfPage -Page $page -OutputPath $pngPath
    }

    $ocr = ''
    if (Test-Path -LiteralPath $pngPath) {
      $ocr = Get-OcrText -ImagePath $pngPath
    }

    $results.Add([ordered]@{
      page = $pageNumber
      width = [Math]::Round($page.Size.Width, 2)
      height = [Math]::Round($page.Size.Height, 2)
      image = if (Test-Path -LiteralPath $pngPath) { $pngPath } else { $null }
      ocr = $ocr
    })

    if ($pageNumber % 10 -eq 0) {
      Write-Host ('Processadas {0}/{1} páginas...' -f $pageNumber, $pageCount)
    }
  }
  finally {
    $page.Dispose()
  }
}

$results | ConvertTo-Json -Depth 5 | Set-Content -LiteralPath (Join-Path $resolvedOutput 'pages.json') -Encoding UTF8
$results | Select-Object -First 20 | Format-Table -Wrap -AutoSize

