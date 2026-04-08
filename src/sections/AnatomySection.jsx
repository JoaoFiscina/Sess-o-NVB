import { FileImage, Layers3, MoveRight, ShieldCheck } from "lucide-react";
import { useMemo, useState } from "react";
import SectionHeader from "../components/SectionHeader";
import Tabs from "../components/Tabs";

export default function AnatomySection({ anatomy, overview, onOpenImage }) {
  const [activeTabId, setActiveTabId] = useState(anatomy.tabs[0]?.id ?? null);

  const activeTab = useMemo(
    () => anatomy.tabs.find((tab) => tab.id === activeTabId) ?? anatomy.tabs[0],
    [activeTabId, anatomy.tabs],
  );

  return (
    <div className="space-y-6 lg:space-y-8">
      <section id={anatomy.id} className="section-shell reveal px-6 py-8 sm:px-8 sm:py-10 lg:px-10">
        <SectionHeader kicker={anatomy.kicker} title={anatomy.title} description={anatomy.description} />
        <Tabs items={anatomy.tabs.map(({ id, label }) => ({ id, label }))} activeId={activeTab.id} onChange={setActiveTabId} className="mt-8" />

        <div className="relative z-10 mt-8 grid gap-6 xl:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] xl:items-start">
          <div className="space-y-5 rounded-[2rem] border border-stone-200 bg-white/90 p-6 shadow-sm">
            <div>
              <p className="text-xs uppercase tracking-[0.24em] text-olive-700">Foco anatômico</p>
              <h3 className="mt-2 font-display text-4xl uppercase tracking-[0.04em] text-ink">{activeTab.label}</h3>
            </div>
            <p className="text-sm leading-7 text-stone-700">{activeTab.summary}</p>
            <div className="flex flex-wrap gap-2">
              {activeTab.chips.map((chip) => (
                <span key={chip} className="rounded-full border border-olive-700/15 bg-olive-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-olive-900">
                  {chip}
                </span>
              ))}
            </div>
            <div className="space-y-3">
              {activeTab.bullets.map((bullet) => (
                <div key={bullet} className="flex gap-3 rounded-[1.25rem] bg-stone-50 p-4 text-sm leading-7 text-stone-700">
                  <Layers3 className="mt-1 h-4 w-4 shrink-0 text-olive-800" />
                  <span>{bullet}</span>
                </div>
              ))}
            </div>
            <div className="flex items-center gap-3 rounded-[1.5rem] border border-dashed border-olive-700/25 bg-olive-100/40 p-4 text-sm leading-7 text-stone-700">
              <ShieldCheck className="h-5 w-5 shrink-0 text-olive-900" />
              <p>As estruturas selecionadas são as mesmas destacadas visualmente no PDF para orientar o raciocínio cirúrgico.</p>
            </div>
          </div>

          <figure className="overflow-hidden rounded-[2rem] border border-stone-200 bg-ink shadow-card">
            <button
              type="button"
              onClick={() =>
                onOpenImage({
                  title: activeTab.label,
                  image: activeTab.image,
                  alt: activeTab.alt,
                  description: activeTab.summary,
                  origin: activeTab.caption,
                })
              }
              className="group block w-full text-left"
            >
              <img
                src={activeTab.image}
                alt={activeTab.alt}
                loading="lazy"
                className="w-full object-cover transition duration-500 group-hover:scale-[1.01]"
              />
            </button>
            <figcaption className="flex items-center justify-between gap-4 border-t border-white/10 px-5 py-4 text-sm text-white/70">
              <span>{activeTab.caption}</span>
              <button
                type="button"
                onClick={() =>
                  onOpenImage({
                    title: activeTab.label,
                    image: activeTab.image,
                    alt: activeTab.alt,
                    description: activeTab.summary,
                    origin: activeTab.caption,
                  })
                }
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-3 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-white transition hover:bg-white/20"
              >
                <FileImage className="h-4 w-4" />
                Ampliar
              </button>
            </figcaption>
          </figure>
        </div>
      </section>

      <section id={overview.id} className="section-shell reveal px-6 py-8 sm:px-8 sm:py-10 lg:px-10">
        <SectionHeader kicker={overview.kicker} title={overview.title} description={overview.description} />
        <div className="relative z-10 mt-8 grid gap-4 xl:grid-cols-4">
          {overview.summaryCards.map((card) => (
            <article key={card.title} className="rounded-[1.75rem] border border-stone-200 bg-white/90 p-5 shadow-sm">
              <p className="font-display text-3xl uppercase tracking-[0.04em] text-ink">{card.title}</p>
              <p className="mt-3 text-sm leading-7 text-stone-700">{card.text}</p>
            </article>
          ))}
        </div>

        <div className="relative z-10 mt-8 grid gap-6 xl:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] xl:items-start">
          <div className="overflow-hidden rounded-[2rem] border border-stone-200 bg-white shadow-card">
            <button
              type="button"
              onClick={() =>
                onOpenImage({
                  title: "Comparativo entre CVB e colangiocarcinoma",
                  image: overview.comparisonImage,
                  alt: overview.comparisonImageAlt,
                  description: "Infográfico extraído do roteiro-base para resumir as diferenças didáticas entre as duas entidades.",
                  origin: "Imagem incorporada ao DOCX",
                })
              }
              className="group block w-full text-left"
            >
              <img
                src={overview.comparisonImage}
                alt={overview.comparisonImageAlt}
                loading="lazy"
                className="w-full object-cover transition duration-500 group-hover:scale-[1.01]"
              />
            </button>
          </div>

          <div className="grid gap-5">
            <div className="rounded-[2rem] border border-stone-200 bg-white/90 p-6 shadow-sm">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.24em] text-olive-700">
                <MoveRight className="h-4 w-4" />
                Conceitos-chave
              </div>
              <div className="mt-4 space-y-3">
                {overview.conceptNotes.map((note) => (
                  <p key={note} className="rounded-[1.25rem] bg-stone-50 px-4 py-3 text-sm leading-7 text-stone-700">
                    {note}
                  </p>
                ))}
              </div>
            </div>
            <div className="grid gap-4 lg:grid-cols-2">
              {overview.compareCards.map((card) => (
                <article key={card.title} className="rounded-[2rem] border border-stone-200 bg-white/90 p-6 shadow-sm">
                  <p className="font-display text-4xl uppercase tracking-[0.04em] text-ink">{card.title}</p>
                  <div className="mt-4 space-y-3">
                    {card.bullets.map((bullet) => (
                      <p key={bullet} className="rounded-[1.15rem] border border-stone-200 bg-stone-50 px-4 py-3 text-sm leading-7 text-stone-700">
                        {bullet}
                      </p>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
