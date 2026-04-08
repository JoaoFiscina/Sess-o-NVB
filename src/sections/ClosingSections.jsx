import { BookOpen, CheckCircle2, FileImage, RotateCcw } from "lucide-react";
import { useMemo, useState } from "react";
import SectionHeader from "../components/SectionHeader";

export default function ClosingSections({ quiz, references, footer, onOpenImage }) {
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  const selectedOption = useMemo(
    () => quiz.options.find((option) => option.id === selectedAnswer) ?? null,
    [quiz.options, selectedAnswer],
  );

  return (
    <div className="space-y-6 lg:space-y-8">
      <section id={quiz.id} className="section-shell reveal px-6 py-8 sm:px-8 sm:py-10 lg:px-10">
        <SectionHeader kicker={quiz.kicker} title={quiz.title} description={quiz.description} />
        <div className="relative z-10 mt-8 grid gap-6 xl:grid-cols-[minmax(0,1.1fr)_22rem] xl:items-start">
          <div className="rounded-[2rem] border border-stone-200 bg-white/90 p-6 shadow-sm">
            <p className="font-display text-4xl uppercase tracking-[0.04em] text-ink">Pergunta</p>
            <p className="mt-4 text-base leading-8 text-stone-700">{quiz.question}</p>
            <div className="mt-6 grid gap-3">
              {quiz.options.map((option) => {
                const isSelected = option.id === selectedAnswer;
                const isCorrect = option.id === quiz.answer;

                return (
                  <button
                    key={option.id}
                    type="button"
                    onClick={() => setSelectedAnswer(option.id)}
                    className={[
                      "rounded-[1.5rem] border px-5 py-4 text-left transition-all duration-300",
                      selectedAnswer
                        ? isSelected && isCorrect
                          ? "border-olive-600 bg-olive-100 text-olive-950"
                          : isSelected
                            ? "border-alert/40 bg-orange-50 text-alert"
                            : isCorrect
                              ? "border-olive-600/30 bg-olive-50 text-olive-900"
                              : "border-stone-200 bg-white text-stone-700"
                        : "border-stone-200 bg-white text-stone-700 hover:border-olive-500 hover:text-olive-900",
                    ].join(" ")}
                  >
                    <span className="font-display text-3xl uppercase tracking-[0.04em]">{option.label}</span>
                  </button>
                );
              })}
            </div>

            {selectedOption ? (
              <div className="mt-6 rounded-[1.75rem] border border-stone-200 bg-stone-50 p-5">
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-olive-700">
                  <CheckCircle2 className="h-4 w-4" />
                  Feedback imediato
                </div>
                <p className="mt-3 text-sm leading-7 text-stone-700">{selectedOption.feedback}</p>
              </div>
            ) : null}

            <div className="mt-5 flex flex-wrap gap-3">
              <button
                type="button"
                onClick={() => setSelectedAnswer(null)}
                className="inline-flex items-center gap-2 rounded-full border border-stone-200 bg-white px-4 py-2 text-sm font-semibold text-stone-700 transition hover:border-olive-500 hover:text-olive-900"
              >
                <RotateCcw className="h-4 w-4" />
                Tentar novamente
              </button>
              <button
                type="button"
                onClick={() =>
                  onOpenImage({
                    title: "Questão original do PDF",
                    image: quiz.sourceImage,
                    alt: "Slide com a questão de revisão do material.",
                    description: "Slide original usado como base para o mini quiz interativo.",
                    origin: "Slide 48 do PDF",
                  })
                }
                className="inline-flex items-center gap-2 rounded-full border border-stone-200 bg-white px-4 py-2 text-sm font-semibold text-stone-700 transition hover:border-olive-500 hover:text-olive-900"
              >
                <FileImage className="h-4 w-4" />
                Ver slide original
              </button>
            </div>
          </div>

          <aside className="rounded-[2rem] border border-olive-700/15 bg-olive-100/60 p-6 shadow-sm">
            <p className="font-display text-4xl uppercase tracking-[0.04em] text-ink">Gabarito</p>
            <p className="mt-4 text-sm leading-7 text-stone-700">
              A resposta esperada no material é <strong>{quiz.answer}</strong>, porque o tipo IIIA envolve o ducto hepático direito e orienta o raciocínio para hepatectomia direita.
            </p>
            <div className="mt-5 rounded-[1.5rem] border border-dashed border-olive-700/25 bg-white/70 p-4 text-sm leading-7 text-stone-700">
              Use este bloco como fechamento rápido da apresentação ou como revisão ativa antes da sessão.
            </div>
          </aside>
        </div>
      </section>

      <section id={references.id} className="section-shell reveal px-6 py-8 sm:px-8 sm:py-10 lg:px-10">
        <SectionHeader kicker={references.kicker} title={references.title} description={references.description} />
        <div className="relative z-10 mt-8 grid gap-5 xl:grid-cols-2">
          {references.groups.map((group) => (
            <article key={group.title} className="rounded-[2rem] border border-stone-200 bg-white/90 p-6 shadow-sm">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-olive-700">
                <BookOpen className="h-4 w-4" />
                {group.title}
              </div>
              <div className="mt-4 space-y-3">
                {group.items.map((item) => (
                  <p key={item} className="rounded-[1.15rem] bg-stone-50 px-4 py-3 text-sm leading-7 text-stone-700">
                    {item}
                  </p>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <footer className="section-shell reveal overflow-hidden px-6 py-8 sm:px-8 sm:py-10 lg:px-10">
        <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(150,174,87,0.18),transparent_35%,rgba(45,60,23,0.06))]" />
        <div className="relative z-10 grid gap-8 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:items-end">
          <div>
            <p className="font-display text-6xl uppercase tracking-[0.04em] text-ink sm:text-7xl">{footer.thanks}</p>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-stone-700">{footer.note}</p>
          </div>
          <div className="grid gap-3 rounded-[2rem] border border-stone-200 bg-white/80 p-6 shadow-sm">
            {footer.credits.map((credit) => (
              <p key={credit} className="text-sm leading-7 text-stone-700">
                {credit}
              </p>
            ))}
            <div className="mt-2 flex flex-wrap gap-3 text-xs font-semibold uppercase tracking-[0.22em] text-olive-700">
              <span>{footer.period}</span>
              <span>{footer.contact}</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

