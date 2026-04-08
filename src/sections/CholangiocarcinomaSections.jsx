import { ArrowRight, FlaskConical, GalleryHorizontal, Microscope, Orbit, ShieldPlus } from "lucide-react";
import { useDeferredValue, useMemo, useState } from "react";
import Accordion from "../components/Accordion";
import SectionHeader from "../components/SectionHeader";
import Tabs from "../components/Tabs";

function BulletList({ items }) {
  return (
    <div className="space-y-3">
      {items.map((item) => (
        <div key={item} className="rounded-[1.15rem] bg-stone-50 px-4 py-3 text-sm leading-7 text-stone-700">
          {item}
        </div>
      ))}
    </div>
  );
}

export default function CholangiocarcinomaSections({ cca, gallery, bismuth, tnm, treatment, onOpenImage }) {
  const [activeCcaTab, setActiveCcaTab] = useState(cca.tabs[0]?.id ?? null);
  const [activeFilter, setActiveFilter] = useState(gallery.filters[0]);
  const [activeBismuth, setActiveBismuth] = useState(bismuth.types[0]?.id ?? null);
  const deferredFilter = useDeferredValue(activeFilter);

  const currentCcaTab = useMemo(
    () => cca.tabs.find((tab) => tab.id === activeCcaTab) ?? cca.tabs[0],
    [activeCcaTab, cca.tabs],
  );

  const accordionItems = currentCcaTab.blocks.map((block) => ({
    id: block.title,
    title: block.title,
    content: <BulletList items={block.bullets} />,
  }));

  const filteredGallery = useMemo(() => {
    if (deferredFilter === "Todos") return gallery.items;
    return gallery.items.filter((item) => item.categories.includes(deferredFilter));
  }, [gallery.items, deferredFilter]);

  const currentBismuth = useMemo(
    () => bismuth.types.find((type) => type.id === activeBismuth) ?? bismuth.types[0],
    [activeBismuth, bismuth.types],
  );

  return (
    <div className="space-y-6 lg:space-y-8">
      <section id={cca.id} className="section-shell reveal px-6 py-8 sm:px-8 sm:py-10 lg:px-10">
        <SectionHeader kicker={cca.kicker} title={cca.title} description={cca.description} />
        <Tabs items={cca.tabs.map(({ id, label }) => ({ id, label }))} activeId={currentCcaTab.id} onChange={setActiveCcaTab} className="mt-8" />

        <div className="relative z-10 mt-6 grid gap-6 xl:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] xl:items-start">
          <div className="space-y-5">
            <div className="rounded-[2rem] border border-stone-200 bg-white/90 p-6 shadow-sm">
              <p className="text-sm leading-7 text-stone-700">{currentCcaTab.intro}</p>
            </div>
            <Accordion key={currentCcaTab.id} items={accordionItems} defaultOpen={accordionItems[0]?.id} />
          </div>

          <div className="grid gap-5">
            {currentCcaTab.asideImage ? (
              <figure className="overflow-hidden rounded-[2rem] border border-stone-200 bg-white shadow-card">
                <button
                  type="button"
                  onClick={() =>
                    onOpenImage({
                      title: currentCcaTab.label,
                      image: currentCcaTab.asideImage,
                      alt: currentCcaTab.asideAlt,
                      description: currentCcaTab.intro,
                      origin: currentCcaTab.asideCaption,
                    })
                  }
                  className="group block w-full text-left"
                >
                  <img src={currentCcaTab.asideImage} alt={currentCcaTab.asideAlt} loading="lazy" className="w-full object-cover transition duration-500 group-hover:scale-[1.01]" />
                </button>
                <figcaption className="border-t border-stone-200 bg-white px-5 py-4 text-sm text-stone-700">{currentCcaTab.asideCaption}</figcaption>
              </figure>
            ) : null}

            {currentCcaTab.illustrations ? (
              <div className="grid gap-4 sm:grid-cols-3">
                {currentCcaTab.illustrations.map((illustration) => (
                  <article key={illustration.title} className="overflow-hidden rounded-[1.75rem] border border-stone-200 bg-white shadow-sm">
                    <button
                      type="button"
                      onClick={() =>
                        onOpenImage({
                          title: illustration.title,
                          image: illustration.image,
                          alt: illustration.alt,
                          description: illustration.note,
                          origin: "Imagens incorporadas ao DOCX",
                        })
                      }
                      className="group block w-full text-left"
                    >
                      <img src={illustration.image} alt={illustration.alt} loading="lazy" className="h-48 w-full object-cover transition duration-500 group-hover:scale-[1.03]" />
                    </button>
                    <div className="p-4">
                      <p className="font-display text-2xl uppercase tracking-[0.04em] text-ink">{illustration.title}</p>
                      <p className="mt-2 text-sm leading-6 text-stone-700">{illustration.note}</p>
                    </div>
                  </article>
                ))}
              </div>
            ) : null}

            <div className="rounded-[2rem] border border-olive-700/15 bg-olive-100/60 p-5 text-sm leading-7 text-stone-700">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.24em] text-olive-800">
                <Microscope className="h-4 w-4" />
                Leitura clínica
              </div>
              <p className="mt-3">
                O bloco foi dividido para priorizar consulta rápida. Quando necessário, a galeria, o estadiamento e o tratamento abaixo aprofundam o eixo diagnóstico-terapêutico.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id={gallery.id} className="section-shell reveal px-6 py-8 sm:px-8 sm:py-10 lg:px-10">
        <SectionHeader kicker={gallery.kicker} title={gallery.title} description={gallery.description} />
        <div className="relative z-10 mt-8 flex flex-wrap gap-3">
          {gallery.filters.map((filter) => {
            const isActive = filter === activeFilter;
            return (
              <button
                key={filter}
                type="button"
                onClick={() => setActiveFilter(filter)}
                className={[
                  "rounded-full border px-4 py-2 text-sm font-semibold transition-all duration-300",
                  isActive
                    ? "border-olive-700 bg-olive-900 text-white shadow-halo"
                    : "border-stone-200 bg-white/90 text-stone-700 hover:border-olive-500 hover:text-olive-900",
                ].join(" ")}
              >
                {filter}
              </button>
            );
          })}
        </div>

        <div className="relative z-10 mt-8 grid gap-5 md:grid-cols-2 2xl:grid-cols-3">
          {filteredGallery.map((item) => (
            <article key={`${item.title}-${item.origin}`} className="overflow-hidden rounded-[2rem] border border-stone-200 bg-white shadow-sm">
              <button
                type="button"
                onClick={() =>
                  onOpenImage({
                    title: item.title,
                    image: item.image,
                    alt: item.alt,
                    description: item.description,
                    origin: item.origin,
                  })
                }
                className="group block w-full text-left"
              >
                <div className="relative overflow-hidden bg-ink">
                  <img src={item.image} alt={item.alt} loading="lazy" className="h-72 w-full object-cover transition duration-500 group-hover:scale-[1.02]" />
                  <div className="absolute left-4 top-4 rounded-full border border-white/15 bg-ink/75 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-white backdrop-blur">
                    {item.section}
                  </div>
                </div>
              </button>
              <div className="space-y-4 p-5">
                <div>
                  <p className="font-display text-3xl uppercase tracking-[0.04em] text-ink">{item.title}</p>
                  <p className="mt-2 text-sm leading-7 text-stone-700">{item.description}</p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {item.categories.map((category) => (
                    <span key={category} className="rounded-full bg-olive-100 px-3 py-1 text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-olive-900">
                      {category}
                    </span>
                  ))}
                </div>
                <div className="flex items-center justify-between gap-3 text-xs uppercase tracking-[0.18em] text-stone-500">
                  <span>{item.origin}</span>
                  <button
                    type="button"
                    onClick={() =>
                      onOpenImage({
                        title: item.title,
                        image: item.image,
                        alt: item.alt,
                        description: item.description,
                        origin: item.origin,
                      })
                    }
                    className="inline-flex items-center gap-2 font-semibold text-olive-800"
                  >
                    <GalleryHorizontal className="h-4 w-4" />
                    Abrir
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id={bismuth.id} className="section-shell reveal px-6 py-8 sm:px-8 sm:py-10 lg:px-10">
        <SectionHeader kicker={bismuth.kicker} title={bismuth.title} description={bismuth.description} />
        <Tabs items={bismuth.types.map(({ id, label }) => ({ id, label }))} activeId={currentBismuth.id} onChange={setActiveBismuth} className="mt-8" />

        <div className="relative z-10 mt-8 grid gap-6 xl:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] xl:items-start">
          <div className="space-y-5">
            <figure className="overflow-hidden rounded-[2rem] border border-stone-200 bg-white shadow-card">
              <button
                type="button"
                onClick={() =>
                  onOpenImage({
                    title: `${bismuth.title} · ${currentBismuth.label}`,
                    image: currentBismuth.image,
                    alt: currentBismuth.alt,
                    description: currentBismuth.definition,
                    origin: currentBismuth.origin,
                  })
                }
                className="group block w-full text-left"
              >
                <img src={currentBismuth.image} alt={currentBismuth.alt} loading="lazy" className="w-full object-cover transition duration-500 group-hover:scale-[1.01]" />
              </button>
            </figure>
            <button
              type="button"
              onClick={() =>
                onOpenImage({
                  title: "Visão geral da classificação Bismuth-Corlette",
                  image: bismuth.overviewImage,
                  alt: bismuth.overviewAlt,
                  description: "Esquema-resumo do roteiro com os cinco tipos perihilares.",
                  origin: "Imagem extraída do DOCX",
                })
              }
              className="rounded-[1.5rem] border border-stone-200 bg-white/90 p-4 text-left text-sm leading-7 text-stone-700 shadow-sm transition hover:border-olive-500"
            >
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-olive-700">
                <Orbit className="h-4 w-4" />
                Visão geral
              </div>
              <p className="mt-3">Abrir esquema resumido com todos os tipos em sequência.</p>
            </button>
          </div>

          <div className="grid gap-5">
            <article className="rounded-[2rem] border border-stone-200 bg-white/90 p-6 shadow-sm">
              <p className="text-xs uppercase tracking-[0.24em] text-olive-700">Tipo selecionado</p>
              <h3 className="mt-2 font-display text-5xl uppercase tracking-[0.04em] text-ink">{currentBismuth.label}</h3>
              <p className="mt-4 text-base leading-8 text-stone-700">{currentBismuth.definition}</p>
            </article>
            <article className="rounded-[2rem] border border-olive-700/15 bg-olive-100/60 p-6 shadow-sm">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-olive-800">
                <ShieldPlus className="h-4 w-4" />
                Associação cirúrgica citada
              </div>
              <p className="mt-4 text-sm leading-7 text-stone-800">{currentBismuth.surgicalHint}</p>
              <p className="mt-4 text-xs uppercase tracking-[0.22em] text-olive-700">{currentBismuth.origin}</p>
            </article>
            <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
              {bismuth.types.map((type) => (
                <button
                  key={type.id}
                  type="button"
                  onClick={() => setActiveBismuth(type.id)}
                  className={[
                    "rounded-[1.5rem] border p-4 text-left transition",
                    type.id === currentBismuth.id
                      ? "border-olive-600 bg-olive-900 text-white shadow-card"
                      : "border-stone-200 bg-white/90 text-stone-700 hover:border-olive-500",
                  ].join(" ")}
                >
                  <p className="font-display text-3xl uppercase tracking-[0.04em]">{type.label}</p>
                  <p className="mt-2 text-sm leading-6">{type.definition}</p>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id={tnm.id} className="section-shell reveal bg-ink px-6 py-8 text-white sm:px-8 sm:py-10 lg:px-10">
        <SectionHeader kicker={tnm.kicker} title={tnm.title} description={tnm.description} />
        <div className="relative z-10 mt-8 grid gap-3 lg:grid-cols-4">
          {tnm.flow.map((step, index) => (
            <div key={step} className="flex items-center gap-3 rounded-[1.5rem] border border-white/10 bg-white/5 px-4 py-4 text-sm font-semibold uppercase tracking-[0.16em] text-white/85">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-olive-500 text-ink">{index + 1}</span>
              <span>{step}</span>
            </div>
          ))}
        </div>

        <div className="relative z-10 mt-8 grid gap-4 xl:grid-cols-3">
          {tnm.locationCards.map((card) => (
            <article key={card.title} className="rounded-[1.75rem] border border-white/10 bg-white/5 p-5 backdrop-blur">
              <p className="font-display text-4xl uppercase tracking-[0.04em] text-white">{card.title}</p>
              <p className="mt-3 text-sm leading-7 text-white/75">{card.text}</p>
            </article>
          ))}
        </div>

        <div className="relative z-10 mt-8 grid gap-5 xl:grid-cols-3">
          {tnm.cards.map((card) => (
            <article key={card.title} className="rounded-[2rem] border border-white/10 bg-white/5 p-6 backdrop-blur">
              <p className="font-display text-4xl uppercase tracking-[0.04em] text-white">{card.title}</p>
              <div className="mt-4 space-y-3">
                {card.bullets.map((bullet) => (
                  <p key={bullet} className="rounded-[1.2rem] border border-white/10 bg-black/15 px-4 py-3 text-sm leading-7 text-white/75">
                    {bullet}
                  </p>
                ))}
              </div>
            </article>
          ))}
        </div>

        <div className="relative z-10 mt-6 flex flex-wrap gap-2">
          {tnm.chips.map((chip) => (
            <span key={chip} className="rounded-full border border-white/10 bg-olive-500/20 px-3 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-olive-100">
              {chip}
            </span>
          ))}
        </div>
      </section>

      <section id={treatment.id} className="section-shell reveal px-6 py-8 sm:px-8 sm:py-10 lg:px-10">
        <SectionHeader kicker={treatment.kicker} title={treatment.title} description={treatment.description} />

        <div className="relative z-10 mt-8 grid gap-4 xl:grid-cols-3">
          {treatment.overviewCards.map((card) => (
            <article key={card.title} className="rounded-[1.75rem] border border-stone-200 bg-white/90 p-5 shadow-sm">
              <p className="font-display text-3xl uppercase tracking-[0.04em] text-ink">{card.title}</p>
              <p className="mt-3 text-sm leading-7 text-stone-700">{card.text}</p>
            </article>
          ))}
        </div>

        <div className="relative z-10 mt-8 grid gap-6 xl:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] xl:items-start">
          <figure className="overflow-hidden rounded-[2rem] border border-stone-200 bg-white shadow-card">
            <button
              type="button"
              onClick={() =>
                onOpenImage({
                  title: "Sistema de Blumgart",
                  image: treatment.blumgartImage,
                  alt: treatment.blumgartAlt,
                  description: "Diagrama usado na sessão para graduar ressecabilidade em tumores perihilares.",
                  origin: "Imagem extraída do DOCX",
                })
              }
              className="group block w-full text-left"
            >
              <img src={treatment.blumgartImage} alt={treatment.blumgartAlt} loading="lazy" className="w-full object-cover transition duration-500 group-hover:scale-[1.01]" />
            </button>
          </figure>
          <div className="grid gap-4 md:grid-cols-3">
            {treatment.blumgartStages.map((stage) => (
              <article key={stage.title} className="rounded-[1.75rem] border border-stone-200 bg-white/90 p-5 shadow-sm">
                <p className="font-display text-4xl uppercase tracking-[0.04em] text-ink">{stage.title}</p>
                <p className="mt-3 text-sm leading-7 text-stone-700">{stage.description}</p>
                <p className="mt-3 text-xs uppercase tracking-[0.2em] text-olive-700">{stage.detail}</p>
              </article>
            ))}
          </div>
        </div>

        <div className="relative z-10 mt-8 grid gap-6 xl:grid-cols-2">
          <article className="rounded-[2rem] border border-stone-200 bg-white/90 p-6 shadow-sm">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-olive-700">
              <FlaskConical className="h-4 w-4" />
              FLR e drenagem pré-operatória
            </div>
            <div className="mt-4 space-y-3">
              {treatment.flrThresholds.map((item) => (
                <p key={item} className="rounded-[1.2rem] bg-stone-50 px-4 py-3 text-sm leading-7 text-stone-700">{item}</p>
              ))}
            </div>
            <div className="mt-5 grid gap-3 md:grid-cols-2">
              {treatment.drainNotes.map((item) => (
                <p key={item} className="rounded-[1.2rem] border border-dashed border-olive-700/25 bg-olive-100/50 px-4 py-3 text-sm leading-7 text-stone-700">
                  {item}
                </p>
              ))}
            </div>
            <button
              type="button"
              onClick={() =>
                onOpenImage({
                  title: "FLR e drenagem biliar pré-operatória",
                  image: treatment.flrImage,
                  alt: treatment.flrAlt,
                  description: "Slide do PDF reunindo limiares do fígado remanescente e indicação de drenagem.",
                  origin: "Slide 72 do PDF",
                })
              }
              className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-olive-800"
            >
              <ArrowRight className="h-4 w-4" />
              Abrir slide de FLR
            </button>
          </article>

          <article className="rounded-[2rem] border border-stone-200 bg-white/90 p-6 shadow-sm">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-olive-700">
              <Microscope className="h-4 w-4" />
              Embolização portal e ALPPS
            </div>
            <div className="mt-4 space-y-3">
              {treatment.augmentationNotes.map((item) => (
                <p key={item} className="rounded-[1.2rem] bg-stone-50 px-4 py-3 text-sm leading-7 text-stone-700">{item}</p>
              ))}
            </div>
            <button
              type="button"
              onClick={() =>
                onOpenImage({
                  title: "Embolização portal e ALPPS",
                  image: treatment.augmentationImage,
                  alt: treatment.augmentationAlt,
                  description: "Slide do PDF descrevendo aumento de remanescente hepático.",
                  origin: "Slide 73 do PDF",
                })
              }
              className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-olive-800"
            >
              <ArrowRight className="h-4 w-4" />
              Abrir slide de ALPPS
            </button>
          </article>
        </div>

        <div className="relative z-10 mt-8 grid gap-4 xl:grid-cols-3">
          {treatment.surgeryGallery.map((image) => (
            <article key={image.title} className="overflow-hidden rounded-[1.75rem] border border-stone-200 bg-white shadow-sm">
              <button
                type="button"
                onClick={() =>
                  onOpenImage({
                    title: image.title,
                    image: image.image,
                    alt: image.alt,
                    description: image.note,
                    origin: "Imagens operatórias extraídas do DOCX",
                  })
                }
                className="group block w-full text-left"
              >
                <img src={image.image} alt={image.alt} loading="lazy" className="h-56 w-full object-cover transition duration-500 group-hover:scale-[1.03]" />
              </button>
              <div className="p-4">
                <p className="font-display text-2xl uppercase tracking-[0.04em] text-ink">{image.title}</p>
                <p className="mt-2 text-sm leading-7 text-stone-700">{image.note}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="relative z-10 mt-8 grid gap-6 xl:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] xl:items-start">
          <div className="space-y-4 rounded-[2rem] border border-stone-200 bg-white/90 p-6 shadow-sm">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-olive-700">
              <ShieldPlus className="h-4 w-4" />
              CCA extra-hepático distal e adjuvância
            </div>
            <BulletList items={treatment.distalNotes} />
            <div className="space-y-3 pt-2">
              {treatment.adjuvance.map((item) => (
                <p key={item} className="rounded-[1.2rem] border border-dashed border-olive-700/20 bg-olive-100/45 px-4 py-3 text-sm leading-7 text-stone-700">
                  {item}
                </p>
              ))}
            </div>
          </div>

          <div className="space-y-5 rounded-[2rem] border border-stone-200 bg-white/90 p-6 shadow-sm">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-olive-700">Mayo Clinic Protocol</p>
              <h3 className="mt-2 font-display text-4xl uppercase tracking-[0.04em] text-ink">Transplante hepático</h3>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="rounded-[1.5rem] border border-stone-200 bg-stone-50 p-4">
                <p className="font-display text-2xl uppercase tracking-[0.04em] text-ink">Inclusão</p>
                <div className="mt-3 space-y-2 text-sm leading-7 text-stone-700">
                  {treatment.transplant.inclusion.map((item) => (
                    <p key={item}>{item}</p>
                  ))}
                </div>
              </div>
              <div className="rounded-[1.5rem] border border-stone-200 bg-stone-50 p-4">
                <p className="font-display text-2xl uppercase tracking-[0.04em] text-ink">Exclusão</p>
                <div className="mt-3 space-y-2 text-sm leading-7 text-stone-700">
                  {treatment.transplant.exclusion.map((item) => (
                    <p key={item}>{item}</p>
                  ))}
                </div>
              </div>
            </div>
            <div className="rounded-[1.5rem] border border-olive-700/15 bg-olive-100/50 p-4 text-sm leading-7 text-stone-700">
              <p className="font-semibold text-olive-900">Neoadjuvância descrita no material</p>
              <div className="mt-3 space-y-2">
                {treatment.transplant.neoadjuvance.map((item) => (
                  <p key={item}>{item}</p>
                ))}
              </div>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              <button
                type="button"
                onClick={() =>
                  onOpenImage({
                    title: "Critérios de inclusão para transplante",
                    image: treatment.transplant.inclusionImage,
                    alt: "Slide sobre critérios de inclusão para transplante hepático.",
                    description: "Resumo visual do protocolo citado no material para doença perihilar selecionada.",
                    origin: "Slide 76 do PDF",
                  })
                }
                className="rounded-[1.35rem] border border-stone-200 bg-white px-4 py-3 text-left text-sm font-semibold text-olive-800 transition hover:border-olive-500"
              >
                Abrir critérios de inclusão
              </button>
              <button
                type="button"
                onClick={() =>
                  onOpenImage({
                    title: "Critérios de exclusão e neoadjuvância",
                    image: treatment.transplant.exclusionImage,
                    alt: "Slide sobre critérios de exclusão para transplante hepático.",
                    description: "Quadro com exclusões e estratégia neoadjuvante pré-transplante.",
                    origin: "Slide 77 do PDF",
                  })
                }
                className="rounded-[1.35rem] border border-stone-200 bg-white px-4 py-3 text-left text-sm font-semibold text-olive-800 transition hover:border-olive-500"
              >
                Abrir exclusões e neoadjuvância
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

