const logo = "assets/brand/lacir-logo.gif";
const coverSlide = "assets/brand/cover-slide.png";
const orientadorSlide = "assets/people/orientador-leonardo-canedo.png";

const anatomyOverview = "assets/anatomy/revisao-vias-biliares.png";
const anatomyIntra = "assets/anatomy/revisao-ductos-intrahepaticos.png";
const anatomyExtra = "assets/anatomy/revisao-ductos-extrahepaticos.png";
const anatomyGallbladder = "assets/anatomy/revisao-vesicula-biliar.png";
const anatomyVariants = "assets/anatomy/revisao-anomalias-anatomicas.png";
const anatomyBlood = "assets/anatomy/revisao-irrigacao.png";
const anatomyNodes = "assets/anatomy/revisao-drenagem-linfatica.png";

const ccaCompare = "assets/cca/comparativo-cvb-vs-cca.png";
const ccaMap = "assets/cca/divisao-anatomica-cca.png";
const sweetSyndrome = "assets/cca/paraneoplasia-sweet.png";
const porphyria = "assets/cca/paraneoplasia-porfiria.png";
const acanthosis = "assets/cca/paraneoplasia-acantose.png";
const tcIntrahepatic = "assets/cca/tc-lesao-intrahepatica.png";
const tcMass = "assets/cca/tc-massa-hepatica.png";
const bismuthOverview = "assets/cca/bismuth-overview.png";
const differentialChart = "assets/cca/diagnosticos-diferenciais.png";
const blumgartDiagram = "assets/cca/blumgart-diagrama.png";
const surgeryA = "assets/cca/cirurgia-ressecada-a.png";
const surgeryB = "assets/cca/cirurgia-remanescente-b.png";
const surgeryC = "assets/cca/cirurgia-remanescente-c.png";
const usgTransabdominal = "assets/cca/imagem-usg-transabdominal.png";
const cprmImage = "assets/cca/imagem-cprm.png";
const rmT1Image = "assets/cca/imagem-rm-t1.png";
const rmT2Image = "assets/cca/imagem-rm-t2.png";
const eusImage = "assets/cca/imagem-usg-endoscopica.png";
const cpreImage = "assets/cca/imagem-cpre.png";
const bismuthType1 = "assets/cca/bismuth-tipo-1.png";
const bismuthType2 = "assets/cca/bismuth-tipo-2.png";
const bismuthType3a = "assets/cca/bismuth-tipo-3a.png";
const bismuthType3b = "assets/cca/bismuth-tipo-3b.png";
const bismuthType4 = "assets/cca/bismuth-tipo-4.png";
const flrSlide = "assets/cca/tratamento-flr.png";
const alppsSlide = "assets/cca/tratamento-alpps.png";
const transplantInclusionSlide = "assets/cca/tratamento-transplante-inclusao.png";
const transplantExclusionSlide = "assets/cca/tratamento-transplante-exclusao.png";

const cvbOverviewSlide = "assets/cvb/cvb-aspectos-gerais.png";
const cvbRiskSlide = "assets/cvb/cvb-fatores-risco.png";
const cvbPolypUsg = "assets/cvb/cvb-polipo-usg.png";
const cvbPolypFlowchart = "assets/cvb/cvb-polipo-fluxograma.png";
const cvbPorcelainUsg = "assets/cvb/cvb-vesicula-porcelana-usg.png";
const cvbUsg = "assets/cvb/cvb-usg.png";
const cvbCt = "assets/cvb/cvb-tomografia.png";
const cvbRm = "assets/cvb/cvb-ressonancia.png";
const cvbTreatmentStages = "assets/cvb/cvb-tratamento-estadios.png";

const quizSource = "assets/review/quiz-bismuth.png";

const navSections = [
  { id: "hero", label: "Capa" },
  { id: "orientador", label: "Orientador" },
  { id: "apresentadores", label: "Apresentadores" },
  { id: "objetivos", label: "Objetivos" },
  { id: "revisao-anatomica", label: "Revisão anatômica" },
  { id: "visao-geral", label: "Visão geral" },
  { id: "colangiocarcinoma", label: "Colangiocarcinoma" },
  { id: "galeria", label: "Galeria de exames" },
  { id: "bismuth", label: "Bismuth-Corlette" },
  { id: "tnm", label: "Estadiamento TNM" },
  { id: "tratamento", label: "Tratamento do CCA" },
  { id: "cancer-vesicula", label: "Câncer de vesícula" },
  { id: "polipos-porcelana", label: "Pólipo e porcelana" },
  { id: "quiz", label: "Mini quiz" },
  { id: "referencias", label: "Referências" },
];

const siteContent = {
  branding: {
    logo,
    league: "Liga Acadêmica de Cirurgia da Bahia — Prof. Jorge Bastos",
    course: "Módulo cirurgia oncológica",
    period: "UFBA · 2026.1",
    contact: "@lacir.ufba",
  },
  hero: {
    id: "hero",
    kicker: "Sessão acadêmica digital",
    title: "Neoplasias de Vias Biliares",
    subtitle:
      "Revisão anatômica, colangiocarcinoma e câncer de vesícula biliar em uma experiência visual interativa.",
    description:
      "O conteúdo do roteiro e do PDF foi reorganizado em um atlas navegável, pensado tanto para estudo quanto para apresentação ao vivo.",
    presenters: ["João Victor Fiscina", "Maria Luiza Alves"],
    guide: "Dr. Leonardo Canedo",
    coverArt: coverSlide,
    quickFacts: [
      "Baixa incidência, alta letalidade e apresentação frequentemente silenciosa.",
      "Ênfase em anatomia, classificação, estadiamento e tomada de decisão cirúrgica.",
      "Material desenhado para leitura fluida no desktop e no celular.",
    ],
  },
  orientador: {
    id: "orientador",
    kicker: "Professor orientador",
    title: "Dr. Leonardo Canedo",
    description:
      "O material-base destaca o orientador como referência em cirurgia hepatobiliar e oncologia cirúrgica, com trajetória acadêmica e institucional que dá o tom da sessão.",
    image: orientadorSlide,
    alt: "Slide institucional com foto do Dr. Leonardo Canedo e suas credenciais.",
    credentials: [
      "Médico pela Universidade Federal da Bahia",
      "Cirurgião geral pela USP",
      "Cirurgião do aparelho digestivo pela USP",
      "Cirurgião hepatobiliar pela Université Paris Descartes",
      "Aperfeiçoamento em cirurgia oncológica pela Memorial Sloan-Kettering Cancer Center",
      "Doutorado em ciências médicas pela USP",
    ],
    highlight:
      "Professor orientador da LACIR, associado no material a uma formação fortemente conectada à cirurgia hepatobiliopancreática e oncológica.",
  },
  presenters: {
    id: "apresentadores",
    kicker: "Apresentadores",
    title: "Equipe da sessão",
    description:
      "Os arquivos não trazem retratos dos apresentadores, então os cards assumem uma solução editorial discreta, com foco em autoria e contexto acadêmico.",
    cards: [
      {
        name: "João Victor Fiscina",
        shortName: "João Fiscina",
        initials: "JF",
        role: "Ligante · cirurgia oncológica",
        note: "Corresponsável pela curadoria do conteúdo e pela condução da sessão.",
      },
      {
        name: "Maria Luiza Alves",
        shortName: "Maria Luiza Alves",
        initials: "ML",
        role: "Ligante · cirurgia oncológica",
        note: "Corresponsável pela apresentação e organização didática dos tópicos centrais.",
      },
    ],
  },
  objectives: {
    id: "objetivos",
    kicker: "Objetivos da sessão",
    title: "Uma trilha clara para revisar e apresentar",
    description:
      "Os objetivos foram preservados do slide original e transformados em uma sequência mais escaneável para estudo rápido.",
    items: [
      "Revisar a anatomia das vias biliares.",
      "Entender o conceito geral das neoplasias de vias biliares.",
      "Estudar o colangiocarcinoma e seu estadiamento.",
      "Explorar o tratamento do colangiocarcinoma.",
      "Destrinchar o diagnóstico e os aspectos envolvidos no câncer de vesícula biliar.",
      "Diagnosticar, estadiar e tratar o câncer de vesícula biliar.",
    ],
  },
  anatomy: {
    id: "revisao-anatomica",
    kicker: "Revisão anatômica",
    title: "Anatomia biliar em camadas, com leitura orientada por imagem",
    description:
      "A sessão original organiza a revisão anatômica como uma progressão visual. Aqui, cada aba vira um ponto de consulta independente, mantendo a figura central em destaque.",
    tabs: [
      {
        id: "vias-biliares",
        label: "Vias biliares",
        image: anatomyOverview,
        alt: "Slide da revisão anatômica mostrando canalículos biliares, ductos interlobulares e ductos coletores.",
        caption: "Slide 4 do PDF · visão geral da árvore biliar intra-hepática.",
        summary:
          "Sistema responsável por armazenar e conduzir a bile do fígado ao intestino, articulando canalículos, ductos intra-hepáticos, vias extra-hepáticas e vesícula biliar.",
        bullets: [
          "Canalículos biliares iniciam a drenagem microscópica da bile.",
          "Ductos bilíferos interlobulares e coletores organizam a convergência intra-hepática.",
          "As vias extra-hepáticas fazem a conexão com o ducto hepático comum, ducto cístico e colédoco.",
        ],
        chips: ["Canalículos", "Ductos interlobulares", "Ductos coletores"],
      },
      {
        id: "intrahepaticos",
        label: "Ductos intra-hepáticos",
        image: anatomyIntra,
        alt: "Slide com destaque para ductos hepáticos direito e esquerdo.",
        caption: "Slide 5 do PDF · convergência dos ductos hepáticos direito e esquerdo.",
        summary:
          "O material reforça a organização da drenagem intra-hepática em direção aos ductos hepáticos direito e esquerdo.",
        bullets: [
          "A anatomia segmentar orienta a leitura das lesões intra-hepáticas.",
          "A confluência dos ductos principais é decisiva para classificação e planejamento cirúrgico.",
        ],
        chips: ["Ducto hepático direito", "Ducto hepático esquerdo", "Confluência"],
      },
      {
        id: "extrahepaticos",
        label: "Ductos extra-hepáticos",
        image: anatomyExtra,
        alt: "Slide com ducto hepático comum, ducto cístico e colédoco.",
        caption: "Slide 6 do PDF · principais segmentos das vias extra-hepáticas.",
        summary:
          "Ducto hepático comum, ducto cístico e colédoco compõem a porção extra-hepática mais relevante para obstrução biliar e tumores distais.",
        bullets: [
          "O ducto cístico conecta a vesícula ao sistema principal.",
          "O colédoco é o eixo anatômico central do CCA distal.",
        ],
        chips: ["Ducto hepático comum", "Ducto cístico", "Colédoco"],
      },
      {
        id: "vesicula",
        label: "Vesícula biliar",
        image: anatomyGallbladder,
        alt: "Slide com as partes da vesícula biliar: colo, infundíbulo, corpo e fundo.",
        caption: "Slide 7 do PDF · divisão anatômica da vesícula biliar.",
        summary:
          "A vesícula é apresentada com suas partes clássicas, relevantes para distribuição topográfica do câncer vesicular.",
        bullets: [
          "Fundo, corpo, infundíbulo e colo definem a topografia cirúrgica da vesícula.",
          "Tumores do colo costumam associar-se mais a icterícia e pior prognóstico no roteiro.",
        ],
        chips: ["Fundo", "Corpo", "Infundíbulo", "Colo"],
      },
      {
        id: "anomalias",
        label: "Anomalias anatômicas",
        image: anatomyVariants,
        alt: "Slide sobre anomalias anatômicas das vias biliares.",
        caption: "Slide 8 do PDF · variações que impactam o reconhecimento anatômico.",
        summary:
          "As variações anatômicas são lembradas como ponto de atenção para interpretação de imagem e planejamento operatório.",
        bullets: [
          "Mudanças no trajeto ou na confluência ductal podem alterar abordagem e risco intraoperatório.",
          "O reconhecimento prévio reduz erros de leitura e de dissecção.",
        ],
        chips: ["Variação ductal", "Planejamento cirúrgico", "Leitura de imagem"],
      },
      {
        id: "irrigacao",
        label: "Irrigação",
        image: anatomyBlood,
        alt: "Slide com a irrigação da via biliar e da vesícula.",
        caption: "Slide 9 do PDF · irrigação cística e hepática relacionada ao trato biliar.",
        summary:
          "A vascularização aparece como base para entendimento de invasão tumoral, ressecabilidade e preservação do remanescente funcional.",
        bullets: [
          "Artéria cística e ramos hepáticos entram no raciocínio de ressecção segura.",
          "A relação com a artéria hepática comum e a gastroduodenal influencia estratégia oncológica.",
        ],
        chips: ["Artéria cística", "Hepática própria", "Gastroduodenal", "Tronco celíaco"],
      },
      {
        id: "linfatica",
        label: "Drenagem linfática",
        image: anatomyNodes,
        alt: "Slide com a drenagem linfática hepatobiliar.",
        caption: "Slide 10 do PDF · cadeias linfonodais mais citadas no material.",
        summary:
          "A drenagem linfática é essencial para estadiamento, prognóstico e decisão sobre extensão da linfadenectomia.",
        bullets: [
          "Linfonodos císticos, hepáticos e celíacos aparecem como estações-chave.",
          "O acometimento linfonodal desloca prognóstico e conduta em CCA e CVB.",
        ],
        chips: ["Linfonodos císticos", "Hepáticos", "Celíacos"],
      },
    ],
  },
  overview: {
    id: "visao-geral",
    kicker: "Visão geral das neoplasias de vias biliares",
    title: "Baixa incidência, comportamento agressivo e manejo heterogêneo",
    description:
      "O material-base insiste em um ponto central: são tumores raros, letais e anatomicamente diversos, o que exige raciocínio diagnóstico e terapêutico altamente contextualizado.",
    summaryCards: [
      {
        title: "Baixa incidência",
        text: "A apresentação ressalta a raridade desses tumores no cenário humano geral, mas sem reduzir sua relevância clínica.",
      },
      {
        title: "Alta letalidade",
        text: "Grande parte dos casos surge em estágio avançado, reduzindo janela curativa e impactando a sobrevida.",
      },
      {
        title: "Apresentação silenciosa",
        text: "Sintomas específicos costumam aparecer quando já há obstrução biliar, invasão locorregional ou metástases.",
      },
      {
        title: "Heterogeneidade terapêutica",
        text: "O comportamento muda conforme localização tumoral, relação vascular, invasão ductal e reserva funcional hepática.",
      },
    ],
    comparisonImage: ccaCompare,
    comparisonImageAlt: "Infográfico comparando câncer de vesícula biliar e colangiocarcinoma.",
    conceptNotes: [
      "Câncer de vesícula biliar é apresentado como a neoplasia maligna mais comum do trato biliar.",
      "Colangiocarcinoma concentra maior variedade anatômica, histológica e terapêutica.",
      "As duas entidades compartilham agressividade, mas não a mesma lógica diagnóstica e cirúrgica.",
    ],
    compareCards: [
      {
        title: "Câncer de vesícula biliar",
        bullets: [
          "Mais relacionado a colelitíase e inflamação crônica da parede vesicular.",
          "Percentual relevante de diagnóstico incidental após colecistectomia.",
          "Menor variedade anatômica e histológica no material da sessão.",
        ],
      },
      {
        title: "Colangiocarcinoma",
        bullets: [
          "Fortemente ligado a doenças hepatobiliares crônicas, em especial CEP e anomalias ductais.",
          "Menos descobertas incidentais e maior diversidade anatômica.",
          "Diferenças importantes entre formas intra-hepática, perihilar e distal.",
        ],
      },
    ],
  },
  cca: {
    id: "colangiocarcinoma",
    kicker: "Colangiocarcinoma",
    title: "Organizado para revisão rápida, sem perder densidade clínica",
    description:
      "O bloco abaixo resume definição, clínica, diagnóstico e suspeição diagnóstica com navegação interna em abas e conteúdo fragmentado para leitura mais leve.",
    tabs: [
      {
        id: "fundamentos",
        label: "Fundamentos",
        intro: "Definição, divisão anatômica, epidemiologia e fatores de risco reunidos em um panorama único.",
        blocks: [
          {
            title: "Definição",
            bullets: [
              "Neoplasia das células epiteliais dos ductos biliares intra e extra-hepáticos.",
              "Geralmente diagnosticada quando já se encontra localmente avançada.",
              "O roteiro enfatiza seu caráter raro, porém altamente letal.",
            ],
          },
          {
            title: "Divisão anatômica",
            bullets: [
              "Intra-hepático: cerca de 10% no material apresentado.",
              "Perihilar: cerca de 50%, incluindo os tumores de Klatskin.",
              "Extra-hepático distal: cerca de 40%.",
            ],
          },
          {
            title: "Epidemiologia",
            bullets: [
              "Representa aproximadamente 3% das malignidades do trato gastrointestinal.",
              "Incidência citada no roteiro: 3 a 4 casos por 1.000.000 de habitantes no Brasil.",
              "A sessão menciona aumento global de incidência nas últimas décadas.",
            ],
          },
          {
            title: "Fatores de risco",
            bullets: [
              "Colangite esclerosante primária, doença fibropolicística e cistos do colédoco.",
              "Litiase intra-hepática crônica, cirrose e hepatopatias crônicas.",
              "Parasitas hepáticos, doenças genéticas, exposição ocupacional, tabagismo, álcool, obesidade e sobrecarga de ferro.",
            ],
          },
        ],
        asideImage: ccaMap,
        asideAlt: "Esquema ilustrando as divisões intra-hepática, perihilar e distal do colangiocarcinoma.",
        asideCaption: "Esquema incorporado ao roteiro para reforçar as três localizações principais.",
      },
      {
        id: "clinica",
        label: "Clínica e exame físico",
        intro: "A apresentação diferencia bem a forma extra-hepática da intra-hepática e ainda lembra síndromes cutâneas paraneoplásicas.",
        blocks: [
          {
            title: "Quadro clínico extra-hepático",
            bullets: [
              "Icterícia, prurido, acolia fecal e urina escura quando há obstrução do sistema de drenagem biliar.",
              "Dor surda em hipocôndrio direito, perda de peso, febre, fadiga e mal-estar.",
              "Colangite é descrita como apresentação incomum.",
            ],
          },
          {
            title: "Quadro clínico intra-hepático",
            bullets: [
              "Menor probabilidade de icterícia em comparação com as lesões extra-hepáticas.",
              "Dor em QSD, perda de peso e elevação de fosfatase alcalina.",
              "Parte dos pacientes é assintomática e descoberta incidentalmente em exames de imagem.",
            ],
          },
          {
            title: "Exame físico",
            bullets: [
              "Nas formas extra-hepáticas: icterícia, hepatomegalia, massa em QSD e febre.",
              "Nas intra-hepáticas: sensibilidade em QSD, perda ponderal e febre pouco frequente.",
              "Sinal de Courvoisier-Terrier é raro no roteiro.",
            ],
          },
        ],
        illustrations: [
          {
            title: "Síndrome de Sweet",
            image: sweetSyndrome,
            alt: "Fotografia clínica com placas eritematodescamativas associadas à síndrome de Sweet.",
            note: "Manifestação cutânea lembrada no roteiro como síndrome paraneoplásica possível.",
          },
          {
            title: "Porfiria cutânea tardia",
            image: porphyria,
            alt: "Fotografia clínica das mãos com lesões associadas à porfiria cutânea tardia.",
            note: "Exemplo de manifestação dermatológica citada na sessão.",
          },
          {
            title: "Acantose nigricans",
            image: acanthosis,
            alt: "Fotografia do pescoço demonstrando acantose nigricans.",
            note: "Outra manifestação paraneoplásica evocada pelo material-base.",
          },
        ],
      },
      {
        id: "diagnostico",
        label: "Diagnóstico",
        intro: "O roteiro prioriza um diagnóstico escalonado, combinando laboratório, imagem e exclusão de mimetizadores clínicos.",
        blocks: [
          {
            title: "Exames laboratoriais",
            bullets: [
              "Aminotransferases, FA e bilirrubinas em pacientes com icterícia e dor em QSD.",
              "Nos extra-hepáticos há padrão colestático com elevação de bilirrubina direta e FA.",
              "Marcadores tumorais CA 19-9 e CEA ajudam na suspeição; AFP alta sugere alternativa diagnóstica em lesões intra-hepáticas.",
            ],
          },
          {
            title: "Exames de imagem",
            bullets: [
              "USG transabdominal para dilatação ductal, localização da obstrução e exclusão de cálculos.",
              "TC, RM e CPRM para massa, anatomia ductal, invasão vascular e estadiamento.",
              "USG endoscópica e CPRE são reservadas a cenários em que biópsia, escovado ou drenagem possam mudar a conduta.",
            ],
          },
          {
            title: "Diagnósticos diferenciais",
            bullets: [
              "Obstruções biliares benignas e coledocolitíase.",
              "Lesão hepatocelular, CHC e metástase hepática.",
              "Colecistite aguda, hepatite viral, pancreatite aguda e neoplasias pancreáticas, conforme o eixo clínico dominante.",
            ],
          },
        ],
        asideImage: differentialChart,
        asideAlt: "Infográfico de diagnósticos diferenciais em icterícia, dor abdominal e perda de peso.",
        asideCaption: "Quadro do roteiro reunindo eixos de diagnóstico diferencial por apresentação clínica.",
      },
      {
        id: "suspeicao",
        label: "Suspeição e abordagem",
        intro: "A sessão detalha o que desperta a suspeita e qual exame tende a vir em seguida conforme a topografia da lesão.",
        blocks: [
          {
            title: "Quando suspeitar de CCA",
            bullets: [
              "Obstrução biliar sem explicação benigna convincente.",
              "Massa intra-hepática isolada em imagem com AFP sérico normal.",
              "CEP com deterioração rápida, icterícia, dor abdominal e perda ponderal.",
              "Dilatação biliar progressiva associada a estenose dominante ou espessamento ductal.",
            ],
          },
          {
            title: "Lesão extra-hepática distal",
            bullets: [
              "EUS ou CPRE são preferíveis como próximo passo.",
              "EUS costuma vir primeiro quando não há necessidade imediata de drenagem endoscópica.",
              "CPRE acrescenta stent e escovado, mas carrega risco de colangite ascendente.",
            ],
          },
          {
            title: "Lesão perihilar ou intra-hepática",
            bullets: [
              "CPRM emerge como técnica de escolha nas lesões hilares.",
              "Colangioscopia, biópsia guiada por TC/RM e até cirurgia confirmatória entram em casos incertos.",
              "Nas lesões intra-hepáticas, exames seccionais diferenciam CCA de CHC e ajudam a excluir metástases.",
            ],
          },
        ],
      },
    ],
  },
  gallery: {
    id: "galeria",
    kicker: "Galeria interativa de exames de imagem",
    title: "Atlas rápido de achados representativos do material",
    description:
      "As imagens abaixo foram extraídas do roteiro e das páginas renderizadas do PDF. Cada item mantém rótulo, contexto e origem para estudo dirigido.",
    filters: ["Todos", "CCA", "CVB", "USG", "TC", "RM", "CPRM", "CPRE"],
    items: [
      {
        title: "USG transabdominal",
        description: "USG sugerindo área hipoecoica mal definida, com obstrução biliar e exclusão de cálculos.",
        origin: "Slide 28 do PDF",
        section: "Colangiocarcinoma",
        categories: ["CCA", "USG"],
        image: usgTransabdominal,
        alt: "Slide de ultrassonografia transabdominal destacando lesão hipoecoica em colangiocarcinoma.",
      },
      {
        title: "TC intra-hepática",
        description: "Tomografia com lesão intra-hepática ilustrando o raciocínio de massa em fígado não cirrótico.",
        origin: "Imagem extraída do DOCX",
        section: "Colangiocarcinoma",
        categories: ["CCA", "TC"],
        image: tcIntrahepatic,
        alt: "Tomografia axial com lesão intra-hepática.",
      },
      {
        title: "TC com massa hepática",
        description: "Tomografia mostrando massa hepática sólida em topografia compatível com doença biliar avançada.",
        origin: "Imagem extraída do DOCX",
        section: "Colangiocarcinoma",
        categories: ["CCA", "TC"],
        image: tcMass,
        alt: "Tomografia axial com massa hepática sólida.",
      },
      {
        title: "CPRM hilar",
        description: "CPRM evidenciando estenose biliar irregular, dilatação biliar e interrupção da confluência hilar.",
        origin: "Slide 32 do PDF",
        section: "Colangiocarcinoma",
        categories: ["CCA", "CPRM"],
        image: cprmImage,
        alt: "Slide de CPRM com interrupção hilar destacada.",
      },
      {
        title: "RM intra-hepática · T1",
        description: "Ressonância mostrando massa hepática sólida hipointensa em T1 no contexto intra-hepático.",
        origin: "Slide 33 do PDF",
        section: "Colangiocarcinoma",
        categories: ["CCA", "RM"],
        image: rmT1Image,
        alt: "Ressonância magnética hepática em T1 com lesão destacada.",
      },
      {
        title: "RM intra-hepática · T2",
        description: "Ressonância em T2 reforçando o comportamento de massa hepática descrito no material.",
        origin: "Slide 34 do PDF",
        section: "Colangiocarcinoma",
        categories: ["CCA", "RM"],
        image: rmT2Image,
        alt: "Ressonância magnética hepática em T2 com lesão destacada.",
      },
      {
        title: "USG endoscópica",
        description: "Ecoendoscopia com visualização direta e possibilidade de PAAF ou citologia por escovado.",
        origin: "Slide 36 do PDF",
        section: "Colangiocarcinoma",
        categories: ["CCA", "USG"],
        image: eusImage,
        alt: "Slide de USG endoscópica em colangiocarcinoma.",
      },
      {
        title: "CPRE terapêutica",
        description: "CPRE destacada pela intervenção terapêutica, injeção de contraste e risco de colangite ascendente.",
        origin: "Slide 37 do PDF",
        section: "Colangiocarcinoma",
        categories: ["CCA", "CPRE"],
        image: cpreImage,
        alt: "Slide de CPRE em colangiocarcinoma.",
      },
      {
        title: "USG de pólipo > 10 mm",
        description: "Ultrassonografia contrapondo pólipo vesicular de maior preocupação e litíase biliar com sombra acústica.",
        origin: "Imagem extraída do DOCX",
        section: "Câncer de vesícula biliar",
        categories: ["CVB", "USG"],
        image: cvbPolypUsg,
        alt: "Imagem comparativa entre pólipo vesicular e litíase biliar na ultrassonografia.",
      },
      {
        title: "USG de vesícula em porcelana",
        description: "Imagem ultrassonográfica enfatizando hiperecogenicidade e sombra acústica na calcificação da parede vesicular.",
        origin: "Imagem extraída do DOCX",
        section: "Câncer de vesícula biliar",
        categories: ["CVB", "USG"],
        image: cvbPorcelainUsg,
        alt: "Ultrassonografia com sinal compatível com vesícula em porcelana.",
      },
      {
        title: "USG em câncer de vesícula",
        description: "Exemplo de USG utilizado no material para ilustrar achado suspeito em vesícula biliar.",
        origin: "Imagem extraída do DOCX",
        section: "Câncer de vesícula biliar",
        categories: ["CVB", "USG"],
        image: cvbUsg,
        alt: "Ultrassonografia abdominal com achado vesicular suspeito.",
      },
      {
        title: "TC em câncer de vesícula",
        description: "Tomografia computadorizada usada para avaliar massa, limites tumorais e relação com fígado adjacente.",
        origin: "Imagem extraída do DOCX",
        section: "Câncer de vesícula biliar",
        categories: ["CVB", "TC"],
        image: cvbCt,
        alt: "Tomografia computadorizada em câncer de vesícula biliar.",
      },
      {
        title: "RM em câncer de vesícula",
        description: "Ressonância magnética reforçando a leitura anatômica e a investigação de extensão local.",
        origin: "Imagem extraída do DOCX",
        section: "Câncer de vesícula biliar",
        categories: ["CVB", "RM"],
        image: cvbRm,
        alt: "Ressonância magnética em câncer de vesícula biliar.",
      },
    ],
  },
  bismuth: {
    id: "bismuth",
    kicker: "Classificação Bismuth-Corlette",
    title: "Seleção interativa para memorizar a topografia perihilar",
    description:
      "Cada tipo pode ser revisto isoladamente, com a definição resumida extraída do roteiro e a conduta cirúrgica associada quando ela aparece no material.",
    overviewImage: bismuthOverview,
    overviewAlt: "Esquema geral da classificação Bismuth-Corlette.",
    types: [
      {
        id: "I",
        label: "Tipo I",
        image: bismuthType1,
        alt: "Slide com ilustração do Bismuth-Corlette tipo I.",
        definition: "Tumor abaixo da confluência dos ductos hepáticos direito e esquerdo.",
        surgicalHint: "No material, relaciona-se à excisão extra-hepática com anastomose biliodigestiva.",
        origin: "Slides 39 e 46 do PDF",
      },
      {
        id: "II",
        label: "Tipo II",
        image: bismuthType2,
        alt: "Slide com ilustração do Bismuth-Corlette tipo II.",
        definition: "Tumor que atinge a confluência biliar.",
        surgicalHint: "O PDF associa o tipo II à anastomose na placa hilar.",
        origin: "Slides 40 e 46 do PDF",
      },
      {
        id: "IIIA",
        label: "Tipo IIIA",
        image: bismuthType3a,
        alt: "Slide com ilustração do Bismuth-Corlette tipo IIIA.",
        definition: "Tumor que oclui o ducto hepático comum e o ducto hepático direito.",
        surgicalHint: "A sessão relaciona o tipo IIIA à hepatectomia direita.",
        origin: "Slides 42 e 46 do PDF",
      },
      {
        id: "IIIB",
        label: "Tipo IIIB",
        image: bismuthType3b,
        alt: "Slide com ilustração do Bismuth-Corlette tipo IIIB.",
        definition: "Tumor que oclui o ducto hepático comum e o ducto hepático esquerdo.",
        surgicalHint: "No material, o tipo IIIB aparece ligado à hepatectomia esquerda.",
        origin: "Slides 44 e 46 do PDF",
      },
      {
        id: "IV",
        label: "Tipo IV",
        image: bismuthType4,
        alt: "Slide com ilustração do Bismuth-Corlette tipo IV.",
        definition: "Tumor multicêntrico ou que envolve a confluência e ambos os ductos hepáticos.",
        surgicalHint: "A apresentação cita transplante hepático como associação possível neste contexto selecionado.",
        origin: "Slides 45 e 46 do PDF",
      },
    ],
  },
  tnm: {
    id: "tnm",
    kicker: "Estadiamento TNM",
    title: "Localização primeiro, extensão depois",
    description:
      "O roteiro apresenta o TNM do CCA como um raciocínio dependente da localização tumoral, com peso para invasão vascular, estruturas adjacentes, linfonodos e metástases.",
    flow: ["Localização tumoral", "Extensão / invasão", "Linfonodos regionais", "Metástases e conduta"],
    locationCards: [
      {
        title: "Intra-hepático",
        text: "Valoriza número de nódulos, invasão vascular, peritônio e estruturas adjacentes para compor o estágio.",
      },
      {
        title: "Perihilar",
        text: "A topografia hilar exige integração entre extensão ductal, acometimento vascular e impacto sobre ressecabilidade.",
      },
      {
        title: "Extra-hepático distal",
        text: "A leitura se organiza pela profundidade de invasão local, linfonodos regionais e doença metastática.",
      },
    ],
    cards: [
      {
        title: "T · Tumor",
        bullets: [
          "Leva em conta extensão tumoral e profundidade de invasão.",
          "Valoriza invasão vascular e acometimento de estruturas adjacentes.",
          "Peritônio e multiplicidade tumoral sinalizam doença mais avançada.",
        ],
      },
      {
        title: "N · Linfonodos",
        bullets: [
          "Acometimento linfonodal regional redefine prognóstico, ressecabilidade e planejamento terapêutico.",
          "Hilo hepático, cadeia hepatoduodenal e região peripancreática aparecem como estações centrais.",
          "A avaliação linfonodal adequada também qualifica a indicação de adjuvância.",
        ],
      },
      {
        title: "M · Metástases",
        bullets: [
          "M0 significa ausência de metástases; M1, presença de doença à distância.",
          "O material destaca fígado, peritônio, pulmões, ossos e linfonodos distantes.",
          "Em geral, M1 desloca o raciocínio para tratamento paliativo ou estratégias muito selecionadas.",
        ],
      },
    ],
    chips: [
      "Invasão vascular",
      "Estruturas adjacentes",
      "Peritônio",
      "Nódulo único x múltiplos",
      "Linfonodos regionais",
      "Metástases à distância",
    ],
  },
  treatment: {
    id: "tratamento",
    kicker: "Tratamento do colangiocarcinoma",
    title: "Cirurgia quando possível; preparo, reserva funcional e seleção quando necessário",
    description:
      "A seção reúne o racional de ressecabilidade, Blumgart, FLR, drenagem pré-operatória, técnicas de aumento de remanescente e o papel da adjuvância ou do transplante.",
    overviewCards: [
      {
        title: "Ressecabilidade",
        text: "Bismuth-Corlette e TNM não definem sozinhos a ressecabilidade; ela se confirma na exploração cirúrgica.",
      },
      {
        title: "Objetivo cirúrgico",
        text: "Buscar ressecção R0 preservando fluxo vascular adequado e função do remanescente hepático.",
      },
      {
        title: "Blumgart",
        text: "Para tumores perihilares, combina extensão biliar, acometimento portal e atrofia lobar hepática.",
      },
    ],
    blumgartImage: blumgartDiagram,
    blumgartAlt: "Diagrama do sistema de Blumgart em tumores perihilares.",
    blumgartStages: [
      {
        title: "T1",
        description: "Confluência biliar com extensão unilateral até ductos biliares de segunda ordem.",
        detail: "Ressecabilidade destacada no slide: cerca de 64,3%.",
      },
      {
        title: "T2",
        description: "Extensão unilateral associada a acometimento da veia porta ipsilateral ou atrofia lobar ipsilateral.",
        detail: "Ressecabilidade aproximada: 41,3%.",
      },
      {
        title: "T3",
        description: "Extensão bilateral ou associação com acometimento portal contralateral, atrofia contralateral ou portal principal/bilateral.",
        detail: "Ressecabilidade no material: cerca de 1,3%.",
      },
    ],
    flrImage: flrSlide,
    flrAlt: "Slide sobre FLR e drenagem biliar pré-operatória.",
    flrThresholds: [
      "FLR ≥ 25% do volume hepático pré-operatório em fígado previamente normal.",
      "FLR entre 30 e 40% em fígados comprometidos por esteatose, cirrose ou quimioterapia.",
    ],
    drainNotes: [
      "Colangite obstrutiva é indicação absoluta de drenagem biliar pré-operatória.",
      "Na ausência de colangite, o benefício é discutível diante do risco de infecção associada ao procedimento.",
    ],
    augmentationImage: alppsSlide,
    augmentationAlt: "Slide descrevendo embolização portal e ALPPS.",
    augmentationNotes: [
      "Embolização da veia porta e ALPPS entram em casos com volume ou função inadequados do FLR.",
      "O objetivo é evitar insuficiência hepática pós-hepatectomia em pacientes potencialmente ressecáveis.",
    ],
    surgeryGallery: [
      {
        title: "Peça cirúrgica ressecada",
        image: surgeryA,
        alt: "Peça cirúrgica após hepatectomia direita estendida.",
        note: "Hepatectomia direita estendida com segmento I, via biliar extra-hepática, bifurcação portal e tecido hilar.",
      },
      {
        title: "Remanescente hepático · vista lateral",
        image: surgeryB,
        alt: "Remanescente hepático em vista lateral após hepatectomia direita estendida.",
        note: "Segmentos II, III e parte do IV após reconstrução portal.",
      },
      {
        title: "Remanescente hepático · vista anterior",
        image: surgeryC,
        alt: "Remanescente hepático em vista anterior após hepatectomia direita estendida.",
        note: "Segmentos II, III e parte do IV mantidos após ressecção ampliada.",
      },
    ],
    distalNotes: [
      "No CCA distal, o único tratamento com potencial curativo é a ressecção completa com margens negativas.",
      "O procedimento de escolha costuma ser a pancreatoduodenectomia (Whipple), associada à linfadenectomia regional.",
      "R0 e adequada avaliação linfonodal são destacados como determinantes de melhor sobrevida.",
    ],
    adjuvance: [
      "Adjuvância pós-ressecção: capecitabina por 24 semanas em 8 ciclos aparece como esquema mais frequente.",
      "Doença irresecável, recorrente ou metastática: gemcitabina + cisplatina; durvalumabe pode ser incorporado como manutenção quando apropriado.",
      "Radioterapia pode ser adjuvante em casos selecionados ou paliativa para controle local e sintomático.",
    ],
    transplant: {
      inclusionImage: transplantInclusionSlide,
      exclusionImage: transplantExclusionSlide,
      inclusion: [
        "Tumor irressecável.",
        "Lesão com diâmetro máximo de 3 cm.",
        "Ausência de metástases intra-hepáticas e extra-hepáticas.",
        "Condição clínica favorável para quimiorradioterapia e transplante.",
      ],
      exclusion: [
        "Ressecção biliar prévia ou tentativa de ressecção.",
        "Doença extra-hepática ou metástases intra-hepáticas.",
        "História de outra neoplasia nos últimos cinco anos.",
        "Biópsia transperitoneal ou contexto que fuja ao protocolo descrito.",
      ],
      neoadjuvance: [
        "Radioterapia externa seguida de braquiterapia com 5-FU como radiossensibilizante.",
        "Capecitabina mantida até o transplante.",
        "A sessão ressalta que CCA intra-hepático não entra nesse protocolo.",
      ],
    },
  },
  gallbladder: {
    id: "cancer-vesicula",
    kicker: "Câncer de vesícula biliar",
    title: "Uma entidade própria, com lógica diagnóstica e terapêutica distinta do CCA",
    description:
      "O roteiro separa o câncer de vesícula biliar como o tumor maligno mais comum do trato biliar, fortemente influenciado por colelitíase, inflamação crônica e diagnóstico incidental.",
    tabs: [
      {
        id: "geral",
        label: "Aspectos gerais",
        image: cvbOverviewSlide,
        alt: "Slide de aspectos gerais do câncer de vesícula biliar.",
        caption: "Slide 89 do PDF · origem mucosa e distribuição anatômica do CVB.",
        blocks: [
          {
            title: "Aspectos gerais",
            bullets: [
              "Origina-se da mucosa que reveste a cavidade da vesícula biliar.",
              "Distribuição descrita no roteiro: 60% no fundo, 30% no corpo e 10% no colo.",
              "Tumores do colo tendem a cursar mais com icterícia e pior prognóstico.",
            ],
          },
          {
            title: "Diagnóstico incidental",
            bullets: [
              "Uma parcela importante dos casos é descoberta no anatomopatológico após colecistectomia por doença aparentemente benigna.",
              "Essa característica muda o fluxo de decisão, sobretudo nos estágios T1b ou superiores.",
            ],
          },
        ],
      },
      {
        id: "risco",
        label: "Fatores de risco",
        image: cvbRiskSlide,
        alt: "Slide reunindo fatores de risco para câncer de vesícula biliar.",
        caption: "Slide do roteiro enfatizando colelitíase, pólipos e vesícula em porcelana.",
        blocks: [
          {
            title: "Colelitíase e inflamação crônica",
            bullets: [
              "Principal fator associado ao CVB, presente em cerca de 90% dos casos segundo o roteiro.",
              "A prevalência de neoplasia entre portadores de cálculos ainda é baixa, girando em torno de 0,5 a 3%.",
              "A lógica fisiopatológica proposta é: inflamação crônica → lesão epitelial repetida → metaplasia/displasia → carcinoma.",
            ],
          },
          {
            title: "Outros fatores de preocupação",
            bullets: [
              "Pólipos vesiculares com risco crescente conforme o tamanho.",
              "Vesícula em porcelana, sobretudo na forma incompleta/focal.",
              "Contextos clínicos de alto risco, como parede espessada, CEP e idade avançada.",
            ],
          },
        ],
      },
      {
        id: "diagnostico",
        label: "Diagnóstico",
        image: cvbUsg,
        alt: "Ultrassonografia ilustrativa de câncer de vesícula biliar.",
        caption: "A avaliação combina clínica, marcadores, USG e métodos seccionais.",
        blocks: [
          {
            title: "Clínica e laboratório",
            bullets: [
              "Sintomas costumam ser tardios e pouco específicos: dor em hipocôndrio direito, anorexia, náuseas, perda ponderal, astenia e febre.",
              "Icterícia sugere doença mais avançada, especialmente em tumores do colo ou com invasão hilar.",
              "Bilirrubinas, FA, GGT, CEA e CA 19-9 podem fortalecer a suspeita, mas não servem isoladamente como rastreio ou confirmação.",
            ],
          },
          {
            title: "Imagem",
            bullets: [
              "USG costuma ser o primeiro exame pela disponibilidade e baixo custo, apesar da acurácia limitada para extensão tumoral.",
              "Tomografia e ressonância são centrais para avaliar bordas, invasão hepática, relação vascular, linfonodos e metástases.",
              "CPRM, ecoendoscopia, CPRE e PET entram em casos selecionados conforme a dúvida anatômica ou terapêutica.",
            ],
          },
          {
            title: "Aspectos patológicos",
            bullets: [
              "Macroscopicamente, o tumor pode aparecer como massa intraluminal, espessamento focal ou espessamento difuso simulando colecistite crônica.",
              "A distinção com doenças benignas e a correlação anatomopatológica explicam a frequência de diagnóstico incidental.",
            ],
          },
        ],
        imageStrip: [
          {
            title: "Tomografia",
            image: cvbCt,
            alt: "Tomografia computadorizada em câncer de vesícula biliar.",
          },
          {
            title: "Ressonância",
            image: cvbRm,
            alt: "Ressonância magnética em câncer de vesícula biliar.",
          },
        ],
      },
      {
        id: "estadiamento",
        label: "Estadiamento",
        image: cvbTreatmentStages,
        alt: "Esquema terapêutico por estágio do câncer de vesícula biliar.",
        caption: "O material liga estadiamento e tratamento cirúrgico de forma muito direta.",
        blocks: [
          {
            title: "Leitura prática do T",
            bullets: [
              "T1a: tumor restrito à lâmina própria.",
              "T1b: invasão da camada muscular.",
              "T2: tecido perimuscular sem ultrapassar a serosa; T2b na face hepática tende a pior prognóstico.",
              "T3: perfura serosa e/ou invade fígado ou estrutura adjacente; T4 envolve estrutura vascular maior e/ou múltiplos órgãos.",
            ],
          },
          {
            title: "Linfonodos e metástases",
            bullets: [
              "N1: até 3 linfonodos acometidos; N2: 4 ou mais.",
              "M1 sinaliza metástase à distância e muda radicalmente o plano terapêutico.",
              "A leitura do slide sugere que T1b-T2 ainda sustentam cirurgia ampliada quando factível.",
            ],
          },
        ],
      },
      {
        id: "tratamento",
        label: "Tratamento",
        image: cvbTreatmentStages,
        alt: "Quadro do tratamento cirúrgico por estágio no câncer de vesícula biliar.",
        caption: "Tratamento orientado pelo estágio e pela possibilidade de obter R0.",
        blocks: [
          {
            title: "Tratamento cirúrgico",
            bullets: [
              "T1a: colecistectomia simples costuma ser suficiente quando margens são adequadas.",
              "T1b e T2: padrão é colecistectomia radical com linfadenectomia regional e ressecção hepática do leito vesicular.",
              "T3 exige cirurgia individualizada visando R0; T4 tende a indicar paliatividade ou casos excepcionalmente selecionados.",
            ],
          },
          {
            title: "Reoperação e adjuvância",
            bullets: [
              "Em tumores incidentais ≥ T1b, a rerressecção radical deve ser considerada após recuperação adequada da cirurgia índice.",
              "Capecitabina por 6 meses aparece como padrão adjuvante mais aceito após ressecção curativa.",
              "Doença irresecável ou metastática: gemcitabina + cisplatina com durvalumabe quando clinicamente apropriado.",
            ],
          },
          {
            title: "Procedimentos especiais",
            bullets: [
              "Ressecção em cunha do leito hepático ou segmentectomia IVb/V são estratégias descritas sem superioridade oncológica inequívoca quando R0 é atingida.",
              "Duodenopancreatectomia pode entrar em discussão apenas em tumores muito selecionados com extensão distal.",
            ],
          },
        ],
      },
    ],
  },
  polypPorcelain: {
    id: "polipos-porcelana",
    kicker: "Pólipo e vesícula em porcelana",
    title: "Red flags para não perder o timing cirúrgico",
    description:
      "O material dedica um bloco próprio a essas duas condições por seu peso na tomada de decisão e no risco de câncer vesicular.",
    polyp: {
      image: cvbPolypFlowchart,
      ultrasound: cvbPolypUsg,
      riskFlags: [
        "Pólipo ≥ 10 mm.",
        "Pólipo sintomático.",
        "Idade > 60 anos.",
        "Espessamento da parede vesicular.",
        "CEP.",
        "Contexto asiático ou maior risco clínico, conforme fluxograma do slide.",
      ],
      conduct: [
        "Colecistectomia recomendada quando o pólipo mede 10 mm ou mais.",
        "Pólipos menores exigem estratificação por sintomas e fatores de risco.",
        "Sem fator de risco e pólipo menor que 5 mm, o material admite dispensar seguimento.",
        "Quando indicado acompanhamento, o fluxograma cita USG em 6 meses, 1 ano e 2 anos.",
      ],
    },
    porcelain: {
      image: cvbPorcelainUsg,
      bullets: [
        "Calcificação da parede vesicular decorrente de processo inflamatório crônico prolongado.",
        "Forma completa e homogênea parece ter risco menor que a forma incompleta/focal.",
        "Na forma focal, permanecem áreas mucosas potencialmente displásicas, elevando a preocupação oncológica.",
        "Se houver sintomas, suspeita de malignidade ou dúvida diagnóstica importante, a estratégia cirúrgica deve assumir potencial neoplasia.",
      ],
      riskMatrix: [
        {
          title: "Calcificação completa",
          note: "> 80% da parede calcificada · menor risco relativo no material.",
        },
        {
          title: "Calcificação incompleta / focal",
          note: "Calcificações não uniformes em menos de 80% da parede · maior risco relativo.",
        },
      ],
    },
  },
  quiz: {
    id: "quiz",
    kicker: "Questão de revisão",
    title: "Fixe a lógica cirúrgica da classificação perihilar",
    description:
      "A pergunta abaixo foi inspirada diretamente na questão do PDF e mantém o foco na associação entre anatomia hilar e estratégia operatória.",
    sourceImage: quizSource,
    question:
      "Um paciente portador de colangiocarcinoma peri-hilar deverá ser submetido à ressecção da via biliar associada à hepatectomia direita se o tumor for, segundo a classificação de Bismuth-Corlette, do tipo:",
    answer: "IIIA",
    options: [
      {
        id: "I",
        label: "Tipo I",
        feedback: "O tipo I fica abaixo da confluência e não corresponde ao padrão do ducto hepático direito descrito na questão.",
      },
      {
        id: "II",
        label: "Tipo II",
        feedback: "O tipo II atinge a confluência, mas sem a extensão unilateral para o ducto hepático direito exigida aqui.",
      },
      {
        id: "IIIA",
        label: "Tipo IIIA",
        feedback: "Correta. O roteiro associa o tipo IIIA à oclusão do ducto hepático comum e do ducto hepático direito, alinhando-se à hepatectomia direita.",
      },
      {
        id: "IIIB",
        label: "Tipo IIIB",
        feedback: "No tipo IIIB, o comprometimento recai sobre o ducto hepático esquerdo, o que muda o lado da hepatectomia.",
      },
    ],
  },
  references: {
    id: "referencias",
    kicker: "Referências do material",
    title: "Organizadas por eixo temático",
    description:
      "As referências abaixo foram condensadas a partir da lista final do PDF e do roteiro-base, preservando a lógica temática da sessão.",
    groups: [
      {
        title: "Colangiocarcinoma",
        items: [
          "ANDERSON, Christopher D.; STUART, Keith E. Adjuvant and neoadjuvant therapy for localized resectable cholangiocarcinoma. UpToDate, 2024.",
          "LOWE, Robert C.; ANDERSON, Christopher D.; KOWDLEY, Kris V. Clinical presentation, diagnosis, and staging of cholangiocarcinoma. UpToDate, 2025.",
          "CILLO, Umberto et al. Surgery for cholangiocarcinoma. Liver International, 2019.",
          "GIOVINAZZO, Francesco et al. Current perspectives in liver transplantation for perihilar cholangiocarcinoma. Current Oncology, 2023.",
          "PDQ ADULT TREATMENT EDITORIAL BOARD. PDQ bile duct cancer (cholangiocarcinoma) treatment. National Cancer Institute, 2026.",
        ],
      },
      {
        title: "Câncer de vesícula biliar",
        items: [
          "PAVLIDIS, Efstathios T.; GALANIS, Ioannis N.; PAVLIDIS, E. New trends in diagnosis and management of gallbladder carcinoma. World Journal of Gastrointestinal Oncology, 2024.",
          "ROA, Juan C. et al. Gallbladder cancer. Nature Reviews Disease Primers, 2022.",
          "Current management of incidental gallbladder cancer: review. International Journal of Surgery, 2022.",
          "WALLER, Giacomo C.; SARPEI, Umut. Gallbladder Cancer. Surgical Clinics of North America, 2024.",
        ],
      },
      {
        title: "Guias e revisão oncológica",
        items: [
          "VOGEL, A. et al. Biliary tract cancer: ESMO Clinical Practice Guideline for diagnosis, treatment and follow up. Annals of Oncology, 2023.",
          "ROTH, Gael S. et al. French national clinical practice guidelines for biliary tract cancers. European Journal of Cancer, 2024.",
          "PATEL, Tushar; MODY, Kabir. Cancer of the biliary tree. In: DeVita, Hellman, and Rosenberg’s Cancer.",
          "PILEPU, Jagannath et al. IHPBA-APHPBA clinical practice guidelines for gallbladder cancer. HPB, 2024.",
        ],
      },
      {
        title: "Pólipos e vesícula em porcelana",
        items: [
          "ZAHEDPISHI, Reza; SALVATORE, Mary. Porcelain gallbladder revisited. Ultrasound, 2026.",
          "RIDDELL, Zena C. et al. Gallbladder polyps and adenomyomatosis. The British Journal of Radiology, 2023.",
          "FOLEY, K. Gallbladder polyps and adenomyomatosis. Referência citada no roteiro-base.",
          "Link do vídeo de ressecção em cunha do leito hepático incluído ao final do roteiro original.",
        ],
      },
    ],
  },
  footer: {
    thanks: "Muito obrigado",
    note:
      "Sessão transformada em experiência digital para revisão, memorização e apresentação em cirurgia oncológica.",
    credits: [
      "Apresentadores: João Victor Fiscina e Maria Luiza Alves",
      "Orientação: Dr. Leonardo Canedo",
      "Liga Acadêmica de Cirurgia da Bahia — Prof. Jorge Bastos",
    ],
    period: "UFBA · 2026.1",
    contact: "@lacir.ufba",
  },
};

