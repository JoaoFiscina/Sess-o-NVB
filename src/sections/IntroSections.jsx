import { ArrowUpRight, CheckCircle2, GraduationCap, Landmark, Sparkles } from "lucide-react";
import SectionHeader from "../components/SectionHeader";

export default function IntroSections({ hero, orientador, presenters, objectives, branding, onOpenImage }) {
  return (
    <div className="space-y-6 lg:space-y-8">
      <section id={hero.id} className="reveal relative overflow-hidden rounded-[2.5rem] bg-ink px-6 py-8 shadow-halo sm:px-8 sm:py-10 lg:px-12 lg:py-14">
        <div className="absolute inset-0 bg-[linear-gradient(140deg,rgba(150,174,87,0.22),transparent_26%,transparent_62%,rgba(216,227,181,0.08))]" />
        <div className="absolute -right-24 top-8 h-72 w-72 rounded-full border border-white/10 bg-olive-500/20 blur-3xl" />
        <div className="absolute inset-y-0 right-0 hidden w-[42%] lg:block">
          <img
            src={hero.coverArt}
            alt="Capa original da apresentação"
            className="h-full w-full object-cover opacity-15 mix-blend-screen"
            loading="lazy"
          />
        </div>
        <div className="relative z-10 grid gap-10 lg:grid-cols-[minmax(0,1fr)_24rem] lg:items-end">
          <div className="space-y-8">
            <div className="flex flex-wrap items-center gap-3">
              <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-olive-300">
                {hero.kicker}
              </span>
              <span className="rounded-full border border-white/10 bg-olive-500/15 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-white">
                {branding.course}
              </span>
            </div>

            <div className="space-y-5">
              <p className="max-w-lg text-sm uppercase tracking-[0.25em] text-white/60">{branding.league}</p>
              <h1 className="max-w-4xl text-balance font-display text-[4.25rem] uppercase leading-[0.88] tracking-[0.02em] text-white sm:text-[5.5rem] lg:text-[7rem]">
                {hero.title}
              </h1>
              <p className="max-w-2xl text-balance text-base leading-8 text-white/75 sm:text-lg">{hero.subtitle}</p>
            </div>

            <div className="grid gap-4 sm:grid-cols-[auto_1fr] sm:items-start">
              <div className="flex items-center gap-4 rounded-[1.75rem] border border-white/10 bg-white/5 p-4 shadow-card backdrop-blur">
                <img src={branding.logo} alt="Logo da LACIR" className="h-16 w-16 rounded-2xl bg-white/90 object-contain p-2" />
                <div>
                  <p className="font-display text-3xl uppercase tracking-[0.08em] text-white">LACIR</p>
                  <p className="text-xs uppercase tracking-[0.24em] text-olive-300">{branding.contact}</p>
                </div>
              </div>
              <div className="rounded-[1.75rem] border border-white/10 bg-white/5 p-5 text-white/80 shadow-card backdrop-blur">
                <div className="grid gap-4 lg:grid-cols-2">
                  <div>
                    <p className="text-xs uppercase tracking-[0.24em] text-olive-300">Apresentadores</p>
                    <p className="mt-2 text-lg font-semibold text-white">{hero.presenters.join(" · ")}</p>
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-[0.24em] text-olive-300">Orientador</p>
                    <p className="mt-2 text-lg font-semibold text-white">{hero.guide}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid gap-4">
            <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6 backdrop-blur">
              <p className="font-accent text-3xl italic text-olive-100">Panorama de navegação</p>
              <div className="mt-5 space-y-4">
                {hero.quickFacts.map((fact) => (
                  <div key={fact} className="flex gap-3 text-sm leading-7 text-white/75">
                    <Sparkles className="mt-1 h-4 w-4 shrink-0 text-olive-300" />
                    <span>{fact}</span>
                  </div>
                ))}
              </div>
            </div>
            <button
              type="button"
              onClick={() =>
                onOpenImage({
                  title: "Capa original do PDF",
                  image: hero.coverArt,
                  alt: "Capa original do PDF da sessão",
                  description: "Referência visual usada para compor a hero section.",
                  origin: "Slide 1 do PDF",
                })
              }
              className="inline-flex items-center justify-between rounded-[1.5rem] border border-white/10 bg-olive-500/15 px-5 py-4 text-left text-white transition hover:bg-olive-500/25"
            >
              <span>
                <span className="block text-xs uppercase tracking-[0.24em] text-olive-200">Material original</span>
                <span className="mt-1 block font-semibold">Abrir capa da apresentação</span>
              </span>
              <ArrowUpRight className="h-5 w-5 shrink-0" />
            </button>
          </div>
        </div>
      </section>

      <section id={orientador.id} className="section-shell reveal px-6 py-8 sm:px-8 sm:py-10 lg:px-10">
        <SectionHeader kicker={orientador.kicker} title={orientador.title} description={orientador.description} />
        <div className="relative z-10 mt-8 grid gap-6 lg:grid-cols-[1.1fr_minmax(0,1fr)] lg:items-start">
          <button
            type="button"
            onClick={() =>
              onOpenImage({
                title: orientador.title,
                image: orientador.image,
                alt: orientador.alt,
                description: orientador.highlight,
                origin: "Slide 2 do PDF",
              })
            }
            className="group overflow-hidden rounded-[2rem] border border-stone-200 bg-ink text-left shadow-card"
          >
            <img
              src={orientador.image}
              alt={orientador.alt}
              loading="lazy"
              className="h-full w-full object-cover object-left transition duration-500 group-hover:scale-[1.02]"
            />
          </button>
          <div className="grid gap-5">
            <div className="rounded-[2rem] border border-olive-700/15 bg-olive-100/60 p-6">
              <div className="flex items-start gap-3">
                <Landmark className="mt-1 h-5 w-5 text-olive-900" />
                <p className="text-sm leading-7 text-olive-950">{orientador.highlight}</p>
              </div>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {orientador.credentials.map((credential) => (
                <div key={credential} className="rounded-[1.5rem] border border-stone-200 bg-white/90 p-4 text-sm leading-6 text-stone-700 shadow-sm">
                  {credential}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id={presenters.id} className="section-shell reveal px-6 py-8 sm:px-8 sm:py-10 lg:px-10">
        <SectionHeader kicker={presenters.kicker} title={presenters.title} description={presenters.description} />
        <div className="relative z-10 mt-8 grid gap-5 lg:grid-cols-2">
          {presenters.cards.map((card) => (
            <article key={card.name} className="rounded-[2rem] border border-stone-200 bg-white/90 p-6 shadow-sm">
              <div className="flex items-start gap-5">
                <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-[1.75rem] bg-gradient-to-br from-olive-700 to-olive-900 font-display text-4xl uppercase tracking-[0.1em] text-white shadow-card">
                  {card.initials}
                </div>
                <div className="flex-1">
                  <p className="font-display text-3xl uppercase tracking-[0.04em] text-ink">{card.name}</p>
                  <p className="mt-1 text-xs uppercase tracking-[0.24em] text-olive-700">{card.role}</p>
                  <p className="mt-4 text-sm leading-7 text-stone-700">{card.note}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id={objectives.id} className="section-shell reveal px-6 py-8 sm:px-8 sm:py-10 lg:px-10">
        <SectionHeader kicker={objectives.kicker} title={objectives.title} description={objectives.description} />
        <div className="relative z-10 mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {objectives.items.map((item, index) => (
            <article key={item} className="rounded-[1.75rem] border border-stone-200 bg-white/90 p-5 shadow-sm">
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-olive-900 text-white shadow-halo">
                  {index + 1}
                </div>
                <div>
                  <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.24em] text-olive-700">
                    <CheckCircle2 className="h-4 w-4" />
                    Meta da sessão
                  </div>
                  <p className="mt-3 text-base leading-7 text-stone-700">{item}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
        <div className="relative z-10 mt-6 flex items-center gap-3 rounded-[1.75rem] border border-dashed border-olive-700/25 bg-olive-100/40 p-4 text-sm text-stone-700">
          <GraduationCap className="h-5 w-5 shrink-0 text-olive-900" />
          <p>Estrutura pensada para que o usuário possa alternar entre revisão rápida, aprofundamento pontual e uso em aula.</p>
        </div>
      </section>
    </div>
  );
}
