import { ChevronRight, Menu, X } from "lucide-react";

function NavContent({ sections, activeId, branding, onNavigate }) {
  return (
    <div className="flex h-full flex-col gap-8">
      <div className="space-y-4">
        <div className="flex items-center gap-4 rounded-[1.75rem] border border-white/10 bg-white/5 p-4">
          <img src={branding.logo} alt="Logo da LACIR" className="h-16 w-16 rounded-2xl bg-white/90 object-contain p-2" />
          <div>
            <p className="font-display text-3xl uppercase tracking-[0.08em] text-white">LACIR</p>
            <p className="text-xs uppercase tracking-[0.22em] text-olive-300">{branding.course}</p>
          </div>
        </div>
        <div className="rounded-[1.75rem] border border-white/10 bg-white/5 p-4 text-sm text-white/75">
          <p className="font-semibold text-white">{branding.league}</p>
          <p className="mt-1">{branding.period}</p>
          <p className="mt-3 text-xs uppercase tracking-[0.2em] text-olive-300">{branding.contact}</p>
        </div>
      </div>

      <nav className="flex-1 space-y-2 overflow-y-auto pr-1" aria-label="Navegação lateral da sessão">
        {sections.map((section) => {
          const isActive = section.id === activeId;

          return (
            <a
              key={section.id}
              href={`#${section.id}`}
              onClick={onNavigate}
              className={[
                "group flex items-center justify-between rounded-2xl border px-4 py-3 text-sm transition-all duration-300",
                isActive
                  ? "border-olive-500/60 bg-olive-500/15 text-white shadow-halo"
                  : "border-transparent bg-white/5 text-white/70 hover:border-white/10 hover:bg-white/10 hover:text-white",
              ].join(" ")}
              aria-current={isActive ? "location" : undefined}
            >
              <span>{section.label}</span>
              <ChevronRight className={`h-4 w-4 transition-transform ${isActive ? "translate-x-1" : "group-hover:translate-x-1"}`} />
            </a>
          );
        })}
      </nav>
    </div>
  );
}

export default function Sidebar({ sections, activeId, branding, open, onToggle, onClose }) {
  const handleNavigate = () => {
    if (open) onClose();
  };

  return (
    <>
      <button
        type="button"
        onClick={onToggle}
        className="fixed left-4 top-4 z-[70] rounded-full border border-olive-700/20 bg-white/90 p-3 text-olive-900 shadow-card backdrop-blur lg:hidden"
        aria-label={open ? "Fechar navegação" : "Abrir navegação"}
      >
        {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
      </button>

      <aside className="fixed inset-y-0 left-0 z-40 hidden w-72 border-r border-white/10 bg-ink px-5 py-5 lg:block">
        <NavContent sections={sections} activeId={activeId} branding={branding} onNavigate={handleNavigate} />
      </aside>

      <div
        className={`fixed inset-0 z-[60] bg-ink/55 backdrop-blur-sm transition lg:hidden ${open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"}`}
        onClick={onClose}
        aria-hidden="true"
      />

      <aside
        className={`fixed inset-y-0 left-0 z-[65] w-[84vw] max-w-xs border-r border-white/10 bg-ink px-5 py-20 transition-transform duration-300 lg:hidden ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <NavContent sections={sections} activeId={activeId} branding={branding} onNavigate={handleNavigate} />
      </aside>
    </>
  );
}
