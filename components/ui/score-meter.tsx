export function ScoreMeter({
  label,
  value,
}: {
  label: string;
  value: number;
  delay?: number;
}) {
  return (
    <div>
      <div className="flex items-baseline justify-between gap-3 text-sm">
        <span className="font-medium text-cloud/80">{label}</span>
        <span className="font-semibold">{value}/100</span>
      </div>
      <meter
        className="mt-2 h-3 w-full"
        min={0}
        max={100}
        value={value}
        aria-label={label}
      />
    </div>
  );
}
