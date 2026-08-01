interface ContributionDay {
  date: string;
  count: number;
}

interface ContributionHeatmapProps {
  data: ContributionDay[];
}

const getIntensity = (count: number) => {
  if (count === 0) return "bg-muted";
  if (count <= 2) return "bg-green-900";
  if (count <= 5) return "bg-green-700";
  if (count <= 9) return "bg-green-500";
  return "bg-green-400";
};

const MONTH_NAMES = [
  "Jan", "Feb", "Mar", "Apr", "May", "Jun",
  "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
];

export function ContributionHeatmap({ data }: ContributionHeatmapProps) {
  const weeks: ContributionDay[][] = [];
  for (let i = 0; i < data.length; i += 7) {
    weeks.push(data.slice(i, i + 7));
  }

  // Tentukan label bulan berdasarkan minggu pertama tiap bulan baru muncul
  const monthLabels: { weekIndex: number; label: string }[] = [];
  let lastMonth = -1;
  weeks.forEach((week, i) => {
    const firstDay = week[0];
    if (!firstDay) return;
    const month = new Date(firstDay.date).getMonth();
    if (month !== lastMonth) {
      monthLabels.push({ weekIndex: i, label: MONTH_NAMES[month] });
      lastMonth = month;
    }
  });

  return (
    <div className="overflow-x-auto">
      <div className="relative min-w-max mb-2" style={{ height: "1.25rem" }}>
        {monthLabels.map((m) => (
          <span
            key={`${m.weekIndex}-${m.label}`}
            className="absolute text-sm text-muted-foreground"
            style={{ left: `${m.weekIndex * 18}px` }}
          >
            {m.label}
          </span>
        ))}
      </div>

      <div className="flex gap-1 min-w-max">
        {weeks.map((week, wi) => (
          <div key={wi} className="flex flex-col gap-1">
            {week.map((day, di) => (
              <div
                key={di}
                title={`${day.date}: ${day.count} kontribusi`}
                className={`size-3.5 rounded-sm ${getIntensity(day.count)}`}
              />
            ))}
          </div>
        ))}
      </div>

      <div className="flex items-center gap-2 mt-4 text-sm text-muted-foreground">
        <span>Sedikit</span>
        <div className="flex gap-1">
          <div className="size-3.5 rounded-sm bg-muted" />
          <div className="size-3.5 rounded-sm bg-green-900" />
          <div className="size-3.5 rounded-sm bg-green-700" />
          <div className="size-3.5 rounded-sm bg-green-500" />
          <div className="size-3.5 rounded-sm bg-green-400" />
        </div>
        <span>Banyak</span>
      </div>
    </div>
  );
}