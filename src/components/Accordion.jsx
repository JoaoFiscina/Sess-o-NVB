import { ChevronDown } from "lucide-react";
import { useState } from "react";

export default function Accordion({ items, defaultOpen }) {
  const [openId, setOpenId] = useState(defaultOpen ?? items[0]?.id ?? null);

  return (
    <div className="relative z-10 space-y-3">
      {items.map((item) => {
        const isOpen = item.id === openId;

        return (
          <div
            key={item.id}
            className="overflow-hidden rounded-3xl border border-stone-200/80 bg-white/90 shadow-sm"
          >
            <button
              type="button"
              onClick={() => setOpenId(isOpen ? null : item.id)}
              className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
              aria-expanded={isOpen}
            >
              <div>
                <h3 className="font-display text-2xl uppercase tracking-wide text-ink">{item.title}</h3>
                {item.subtitle ? <p className="mt-1 text-sm text-stone-700">{item.subtitle}</p> : null}
              </div>
              <ChevronDown
                className={`h-5 w-5 shrink-0 text-olive-800 transition-transform ${isOpen ? "rotate-180" : ""}`}
              />
            </button>
            <div
              className={`grid transition-[grid-template-rows] duration-300 ease-out ${
                isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
              }`}
            >
              <div className="overflow-hidden">
                <div className="border-t border-stone-200/80 px-5 py-5">{item.content}</div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
