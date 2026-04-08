# Neoplasias de Vias Biliares

Site single-page em React + Vite + Tailwind CSS criado a partir dos arquivos:

- `ROTEIRO COMPLETO CCA E CVB.docx`
- `NEOPLASIAS DE VIAS BILIARES DEF.pdf`

A proposta é transformar a sessão acadêmica em uma experiência digital navegável, responsiva e visualmente alinhada ao material original da LACIR.

## Stack

- React 18
- Vite 5
- Tailwind CSS 3
- Lucide React

## Como executar

1. Instale as dependências:

```bash
npm install
```

2. Inicie o ambiente local:

```bash
npm run dev
```

3. Gere a versão de produção:

```bash
npm run build
```

4. Visualize o build:

```bash
npm run preview
```

## Deploy estático

O `vite.config.js` usa `base: "./"`, então o projeto fica pronto para deploy estático simples, inclusive em GitHub Pages.

Fluxo sugerido:

```bash
npm run build
```

Depois publique o conteúdo da pasta `dist/` na branch ou serviço de hospedagem da sua preferência.

## Estrutura de pastas

```text
src/
  assets/
    anatomy/
    brand/
    cca/
    cvb/
    people/
    review/
  components/
    Accordion.jsx
    BackToTopButton.jsx
    ImageModal.jsx
    SectionHeader.jsx
    Sidebar.jsx
    Tabs.jsx
  data/
    siteContent.js
  sections/
    AnatomySection.jsx
    CholangiocarcinomaSections.jsx
    ClosingSections.jsx
    GallbladderSections.jsx
    IntroSections.jsx
  App.jsx
  index.css
  main.jsx
scripts/
  extract-docx.ps1
  extract-pdf.ps1
```

## Onde ajustar conteúdo e visual

- Conteúdo textual e organização das seções: `src/data/siteContent.js`
- Navegação lateral: `src/data/siteContent.js` em `navSections`
- Hero, objetivos, Bismuth, TNM, tratamento, quiz e referências: `src/data/siteContent.js`
- Componentes reutilizáveis: `src/components/`
- Layout e renderização das seções: `src/sections/`
- Paleta, fontes e animações: `tailwind.config.js` e `src/index.css`
- Imagens e logos: `src/assets/`

## Assets usados

Os assets finais foram organizados em `src/assets/` a partir da extração dos arquivos originais.

- Logo da LACIR: `src/assets/brand/`
- Slide do orientador: `src/assets/people/`
- Revisão anatômica: `src/assets/anatomy/`
- Colangiocarcinoma, Bismuth, FLR, cirurgia e exames: `src/assets/cca/`
- Câncer de vesícula, pólipos e vesícula em porcelana: `src/assets/cvb/`
- Questão de revisão: `src/assets/review/`

## Scripts auxiliares

Os scripts em `scripts/` servem para reproduzir a extração local do conteúdo-base:

- `scripts/extract-docx.ps1`: extrai texto e mídias do `DOCX`
- `scripts/extract-pdf.ps1`: renderiza páginas do `PDF` e faz OCR via APIs do Windows

Saídas temporárias geradas durante a curadoria:

- `tmp/docx/`
- `tmp/pdf/`

## Observações

- As fotos dos apresentadores não estavam disponíveis no material-base, então o site usa placeholders editoriais com iniciais.
- O conteúdo médico foi resumido e reorganizado para leitura digital, sem replicar blocos extensos literalmente.
- O projeto foi preparado para deploy estático e organização de estudo, mas depende de `npm install` para execução local.
- Se você quiser trocar qualquer imagem por versões novas, mantenha o mesmo arquivo em `src/assets/` ou atualize os imports em `src/data/siteContent.js`.
