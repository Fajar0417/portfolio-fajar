"use client";

interface FilterOption<T extends string> {
  label: string;
  value: T;
}

interface FilterTabsProps<T extends string> {
  label: string;
  options: FilterOption<T>[];
  active: T;
  onChange: (value: T) => void;
}

export function FilterTabs<T extends string>({
  label,
  options,
  active,
  onChange,
}: FilterTabsProps<T>) {
  return (
    <div className="mb-4">
      <p className="text-sm text-muted-foreground uppercase tracking-wide mb-2">
        {label}
      </p>
      <div className="flex flex-wrap gap-2">
        {options.map((opt) => (
          <button
            key={opt.value}
            onClick={() => onChange(opt.value)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              active === opt.value
                ? "bg-accent text-accent-foreground"
                : "bg-muted text-muted-foreground hover:bg-muted/70"
            }`}
          >
            {opt.label}
          </button>
        ))}
      </div>
    </div>
  );
}