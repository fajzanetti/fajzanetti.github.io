import type { Period } from '../data/types';

export function formatPeriod({ start, end }: Period): string {
  return end ? `${start} — ${end}` : start;
}

export function formatCoursePeriod(period: Period, hours?: number): string {
  const base = formatPeriod(period);
  return hours ? `${base} · ${hours}h` : base;
}
