export default function SectionHeader({
  kicker,
  title,
  description,
  align = "left",
  className = "",
}) {
  const alignment = align === "center" ? "items-center text-center" : "items-start text-left";

  return (
    <header className={`relative z-10 flex flex-col gap-4 ${alignment} ${className}`.trim()}>
      {kicker ? <span className="section-header-kicker">{kicker}</span> : null}
      <div className="space-y-3">
        <h2 className="text-balance font-display text-4xl uppercase tracking-[0.02em] text-ink sm:text-5xl lg:text-6xl">
          {title}
        </h2>
        {description ? (
          <p className="max-w-3xl text-sm leading-7 text-stone-700 sm:text-base">{description}</p>
        ) : null}
      </div>
    </header>
  );
}
