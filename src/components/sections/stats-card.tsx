interface StatCardProps {
  label: string;
  value: string | number;
  suffix?: string;
}

export function StatCard({ label, value, suffix }: StatCardProps) {
  return (
    <div className="rounded-2xl border border-border bg-card p-6 text-center">
      <p className="text-foreground/80 mb-2">{label}</p>
      <p className="text-3xl font-bold text-yellow-400">
        {value}
        {suffix && (
          <span className="text-lg text-foreground ml-1">{suffix}</span>
        )}
      </p>
    </div>
  );
}

interface StatsGridProps {
  stats: {
    followers: number;
    following: number;
    repos: number;
    contributions: number;
    thisWeek: number;
    bestDay: number;
    dailyAvg: number;
  };
}

export function StatsGrid({ stats }: StatsGridProps) {
  return (
    <div className="space-y-4 mb-8">
      <div className="grid grid-cols-3 gap-4 ">
        <StatCard label="Pengikut" value={stats.followers} />
        <StatCard label="Mengikuti" value={stats.following} />
        <StatCard label="Repositori" value={stats.repos} />
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <StatCard label="Kontribusi" value={stats.contributions} />
        <StatCard label="Minggu Ini" value={stats.thisWeek} />
        <StatCard label="Hari Terbaik" value={stats.bestDay} />
        <StatCard label="Rata-rata Harian" value={stats.dailyAvg} suffix="/ hari" />
      </div>
    </div>
  );
}