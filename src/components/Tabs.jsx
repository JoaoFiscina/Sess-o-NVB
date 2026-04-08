export default function Tabs({ items, activeId, onChange, className = "" }) {
  return (
    <div className={`relative z-10 flex gap-3 overflow-x-auto pb-1 ${className}`.trim()}>
      {items.map((item) => {
        const isActive = item.id === activeId;

        return (
          <button
            key={item.id}
            type="button"
            onClick={() => onChange(item.id)}
            className={[
              "whitespace-nowrap rounded-full border px-4 py-2 text-sm font-semibold transition-all duration-300",
              isActive
                ? "border-olive-700 bg-olive-900 text-white shadow-halo"
                : "border-stone-200 bg-white/80 text-stone-700 hover:border-olive-500 hover:text-olive-900",
            ].join(" ")}
          >
            {item.label}
          </button>
        );
      })}
    </div>
  );
}
