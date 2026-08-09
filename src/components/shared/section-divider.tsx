export function SectionDivider() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-16">
      <div className="relative">
        <div className="h-px w-full bg-border/60" />

        <div className="absolute left-1/2 top-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-yellow-500 shadow-[0_0_15px_theme(colors.yellow.500)]" />
      </div>
    </div>
  );
}