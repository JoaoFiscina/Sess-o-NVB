import { Plus, X } from "lucide-react";
import { useEffect, useState } from "react";

export default function ImageModal({ item, onClose }) {
  const [isZoomed, setIsZoomed] = useState(false);

  useEffect(() => {
    setIsZoomed(false);
  }, [item]);

  useEffect(() => {
    if (!item) return undefined;

    const onKeyDown = (event) => {
      if (event.key === "Escape") onClose();
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [item, onClose]);

  if (!item) return null;

  return (
    <div className="fixed inset-0 z-[80] flex items-center justify-center bg-ink/75 px-4 py-6 backdrop-blur-sm">
      <button type="button" className="absolute inset-0 cursor-default" onClick={onClose} aria-label="Fechar modal" />
      <div className="relative z-10 flex max-h-full w-full max-w-6xl flex-col overflow-hidden rounded-[2rem] border border-white/10 bg-ink shadow-2xl">
        <div className="flex items-start justify-between gap-4 border-b border-white/10 px-5 py-4 text-white sm:px-6">
          <div>
            <p className="font-display text-3xl uppercase tracking-wide">{item.title}</p>
            {item.description ? <p className="mt-1 max-w-3xl text-sm text-white/70">{item.description}</p> : null}
            {item.origin ? <p className="mt-1 text-xs uppercase tracking-[0.2em] text-olive-300">{item.origin}</p> : null}
          </div>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => setIsZoomed((value) => !value)}
              className="rounded-full border border-white/10 bg-white/10 p-2 text-white transition hover:bg-white/20"
              aria-label={isZoomed ? "Reduzir zoom" : "Ampliar zoom"}
            >
              <Plus className={`h-5 w-5 transition-transform ${isZoomed ? "rotate-45" : ""}`} />
            </button>
            <button
              type="button"
              onClick={onClose}
              className="rounded-full border border-white/10 bg-white/10 p-2 text-white transition hover:bg-white/20"
              aria-label="Fechar modal"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
        </div>
        <div className="overflow-auto bg-gradient-to-b from-white/5 to-transparent p-4 sm:p-6">
          <div className="mx-auto flex min-h-[50vh] items-center justify-center overflow-auto rounded-[1.5rem] border border-white/10 bg-black/25 p-4">
            <img
              src={item.image}
              alt={item.alt || item.title}
              className="max-w-full rounded-2xl transition-transform duration-300"
              style={{ transform: isZoomed ? "scale(1.55)" : "scale(1)" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
