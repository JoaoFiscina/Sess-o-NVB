import { AlertTriangle, ScanSearch, Syringe } from "lucide-react";
import { useMemo, useState } from "react";
import Accordion from "../components/Accordion";
import SectionHeader from "../components/SectionHeader";
import Tabs from "../components/Tabs";

function BulletGroup({ items }) {
  return (
    <div className="space-y-3">
      {items.map((item) => (
        <p key={item} className="rounded-[1.15rem] bg-stone-50 px-4 py-3 text-sm leading-7 text-stone-700">
          {item}
        </p>
      ))}
    </div>
  );
}

export default function GallbladderSections({ gallbladder, polypPorcelain, onOpenImage }) {
  const [activeTabId, setActiveTabId] = useState(gallbladder.tabs[0]?.id ?? null);

  const activeTab = useMemo(
    () => gallbladder.tabs.find((tab) => tab.id === activeTabId) ?? gallbladder.tabs[0],
    [activeTabId, gallbladder.tabs],
  );

  const accordionItems = activeTab.blocks.map((block) => ({
    id: block.title,
    title: block.title,
    content: <BulletGroup items={block.bullets} />,
  }));

  return (
    <div className="space-y-6 lg:space-y-8">
      <section id={gallbladder.id} className="section-shell reveal px-6 py-8 sm:px-8 sm:py-10 lg:px-10">
        <SectionHeader kicker={gallbladder.kicker} title={gallbladder.title} description={gallbladder.description} />
        <Tabs items={gallbladder.tabs.map(({ id, label }) => ({ id, label }))} activeId={activeTab.id} onChange={setActiveTabId} className="mt-8" />

        <div className="relative z-10 mt-8 grid gap-6 xl:grid-cols-[minmax(0,0.88fr)_minmax(0,1.12fr)] xl:items-start">
          <div className="space-y-5">
            <figure className="overflow-hidden rounded-[2rem] border border-stone-200 bg-white shadow-card">
              <button
                type="button"
                onClick={() =>
                  onOpenImage({
                    title: `${gallbladder.title} · ${activeTab.label}`,
                    image: activeTab.image,
                    alt: activeTab.alt,
                    description: activeTab.caption,
                    origin: activeTab.caption,
                  })
                }
                className="group block w-full text-left"
              >
                <img src={activeTab.image} alt={activeTab.alt} loading="lazy" className="w-full object-cover transition duration-500 group-hover:scale-[1.01]" />
              </button>
              <figcaption className="border-t border-stone-200 bg-white px-5 py-4 text-sm text-stone-700">{activeTab.caption}</figcaption>
            </figure>

            {activeTab.imageStrip ? (
              <div className="grid gap-4 sm:grid-cols-2">
                {activeTab.imageStrip.map((item) => (
                  <article key={item.title} className="overflow-hidden rounded-[1.75rem] border border-stone-200 bg-white shadow-sm">
                    <button
                      type="button"
                      onClick={() =>
                        onOpenImage({
                          title: item.title,
                          image: item.image,
                          alt: item.alt,
                          description: `${gallbladder.title} · ${activeTab.label}`,
                          origin: "Imagem extraída do DOCX",
                        })
                      }
                      className="group block w-full text-left"
                    >
                      <img src={item.image} alt={item.alt} loading="lazy" className="h-52 w-full object-cover transition duration-500 group-hover:scale-[1.03]" />
                    </button>
                    <div className="p-4">
                      <p className="font-display text-2xl uppercase tracking-[0.04em] text-ink">{item.title}</p>
                    </div>
                  </article>
                ))}
              </div>
            ) : null}
          </div>

          <div className="space-y-5">
            <Accordion key={activeTab.id} items={accordionItems} defaultOpen={accordionItems[0]?.id} />
            <div className="rounded-[2rem] border border-olive-700/15 bg-olive-100/60 p-5 text-sm leading-7 text-stone-700">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-olive-800">
                <ScanSearch className="h-4 w-4" />
                Leitura dirigida
              </div>
              <p className="mt-3">
                A aba atual concentra um recorte do material para facilitar a apresentação oral. A galeria de exames acima mantém as figuras prontas para revisão visual em paralelo.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id={polypPorcelain.id} className="section-shell reveal px-6 py-8 sm:px-8 sm:py-10 lg:px-10">
        <SectionHeader kicker={polypPorcelain.kicker} title={polypPorcelain.title} description={polypPorcelain.description} />
        <div className="relative z-10 mt-8 grid gap-6 xl:grid-cols-2 xl:items-start">
          <article className="rounded-[2rem] border border-stone-200 bg-white/90 p-6 shadow-sm">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-olive-700">
              <AlertTriangle className="h-4 w-4" />
              Pólipos vesiculares
            </div>
            <div className="mt-5 grid gap-5 lg:grid-cols-[minmax(0,1fr)_18rem] lg:items-start">
              <div className="space-y-4">
                <div>
                  <p className="font-display text-4xl uppercase tracking-[0.04em] text-ink">Red flags</p>
                  <div className="mt-4 space-y-3">
                    {polypPorcelain.polyp.riskFlags.map((flag) => (
                      <p key={flag} className="rounded-[1.15rem] bg-stone-50 px-4 py-3 text-sm leading-7 text-stone-700">{flag}</p>
                    ))}
                  </div>
                </div>
                <div>
                  <p className="font-display text-4xl uppercase tracking-[0.04em] text-ink">Conduta</p>
                  <div className="mt-4 space-y-3">
                    {polypPorcelain.polyp.conduct.map((step) => (
                      <p key={step} className="rounded-[1.15rem] border border-dashed border-olive-700/25 bg-olive-100/45 px-4 py-3 text-sm leading-7 text-stone-700">{step}</p>
                    ))}
                  </div>
                </div>
              </div>
              <button
                type="button"
                onClick={() =>
                  onOpenImage({
                    title: "USG de pólipo vesicular",
                    image: polypPorcelain.polyp.ultrasound,
                    alt: "Imagem ultrassonográfica comparando pólipo vesicular e litíase.",
                    description: "Comparativo usado no material para diferenciar pólipo > 10 mm e litíase biliar.",
                    origin: "Imagem extraída do DOCX",
                  })
                }
                className="group overflow-hidden rounded-[1.75rem] border border-stone-200 bg-ink shadow-sm"
              >
                <img src={polypPorcelain.polyp.ultrasound} alt="USG de pólipo vesicular" loading="lazy" className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.02]" />
              </button>
            </div>
            <button
              type="button"
              onClick={() =>
                onOpenImage({
                  title: "Fluxograma de condução em achado de pólipos",
                  image: polypPorcelain.polyp.image,
                  alt: "Fluxograma de manejo de pólipos vesiculares.",
                  description: "Fluxograma extraído do material para decisão de seguimento ou colecistectomia.",
                  origin: "Imagem extraída do DOCX",
                })
              }
              className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-olive-800"
            >
              <Syringe className="h-4 w-4" />
              Abrir fluxograma de conduta
            </button>
          </article>

          <article className="rounded-[2rem] border border-stone-200 bg-white/90 p-6 shadow-sm">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-olive-700">
              <AlertTriangle className="h-4 w-4" />
              Vesícula em porcelana
            </div>
            <div className="mt-5 grid gap-5 lg:grid-cols-[minmax(0,1fr)_18rem] lg:items-start">
              <div className="space-y-4">
                {polypPorcelain.porcelain.bullets.map((item) => (
                  <p key={item} className="rounded-[1.15rem] bg-stone-50 px-4 py-3 text-sm leading-7 text-stone-700">{item}</p>
                ))}
                <div className="grid gap-4 sm:grid-cols-2">
                  {polypPorcelain.porcelain.riskMatrix.map((item) => (
                    <div key={item.title} className="rounded-[1.5rem] border border-stone-200 bg-olive-100/45 p-4">
                      <p className="font-display text-3xl uppercase tracking-[0.04em] text-ink">{item.title}</p>
                      <p className="mt-3 text-sm leading-7 text-stone-700">{item.note}</p>
                    </div>
                  ))}
                </div>
              </div>
              <button
                type="button"
                onClick={() =>
                  onOpenImage({
                    title: "Vesícula em porcelana",
                    image: polypPorcelain.porcelain.image,
                    alt: "Ultrassonografia de vesícula em porcelana.",
                    description: "Imagem usada no material para ilustrar hiperecogenicidade e sombra acústica posterior.",
                    origin: "Imagem extraída do DOCX",
                  })
                }
                className="group overflow-hidden rounded-[1.75rem] border border-stone-200 bg-ink shadow-sm"
              >
                <img src={polypPorcelain.porcelain.image} alt="Vesícula em porcelana" loading="lazy" className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.02]" />
              </button>
            </div>
          </article>
        </div>
      </section>
    </div>
  );
}

