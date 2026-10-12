export const PROFILE = {
  lmp: '2026-06-29',
  dueDate: '2027-04-05',
  tripStart: '2026-10-02',
  tripEnd: '2026-10-11',
  hkBookingDate: '2026-10-26', // HA Go 当前预约，可按医院确认改期
  hangzhouBookingWeek: 30, // 省妇保正式建档需到孕30周，具体办理日待医院确认
  hkWaitingStart: '2027-03-05',
  identity: '太太：香港优才主申请人；丈夫：受养人',
} as const

export function parseLocalDate(value: string): Date {
  const [year, month, day] = value.split('-').map(Number)
  return new Date(year, month - 1, day, 12, 0, 0)
}

export function diffDays(from: string, to: string): number {
  return Math.floor((parseLocalDate(to).getTime() - parseLocalDate(from).getTime()) / 86400000)
}

export function gestationOn(date: string): { weeks: number; days: number } {
  const days = Math.max(0, diffDays(PROFILE.lmp, date))
  return { weeks: Math.floor(days / 7), days: days % 7 }
}

export function todayISO(): string {
  const override = new URLSearchParams(window.location.search).get('today')
  if (override) return override
  const now = new Date()
  return `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')}`
}

// 应用启动时固定一次"今天"，与原版行为一致
export const TODAY = todayISO()

export function formatChineseDate(value: string): string {
  const date = parseLocalDate(value)
  return `${date.getFullYear()}年${date.getMonth() + 1}月${date.getDate()}日`
}

export function formatDotDate(value: string): string {
  const date = parseLocalDate(value)
  return `${date.getFullYear()}.${String(date.getMonth() + 1).padStart(2, '0')}.${String(date.getDate()).padStart(2, '0')}`
}

export function formatShortDate(value: string): string {
  const date = parseLocalDate(value)
  return `${date.getMonth() + 1}.${String(date.getDate()).padStart(2, '0')}`
}

export function addDays(value: string, amount: number): string {
  const date = parseLocalDate(value)
  date.setDate(date.getDate() + amount)
  return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`
}

export function pregnancyPercent(date: string): number {
  const elapsed = parseLocalDate(date).getTime() - parseLocalDate(PROFILE.lmp).getTime()
  const total = parseLocalDate(PROFILE.dueDate).getTime() - parseLocalDate(PROFILE.lmp).getTime()
  return Math.min(100, Math.max(0, (elapsed / total) * 100))
}

export function overviewPosition(date: string): number {
  return Math.min(98, Math.max(2, pregnancyPercent(date)))
}

export const motionOK = (): boolean => !window.matchMedia('(prefers-reduced-motion: reduce)').matches
export const scrollBehavior = (): ScrollBehavior => (motionOK() ? 'smooth' : 'auto')
