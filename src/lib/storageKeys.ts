import type { AppState } from './storage'

export const STORAGE_KEY = 'pregnancy-companion-v3'
export const PREVIOUS_STORAGE_KEY = 'pregnancy-companion-v2'
export const LEGACY_STORAGE_KEY = 'pregnancy-companion-v1'

/** 真实世界进展已确认的固定项 */
export const PRESET_COMPLETED: Record<string, boolean> = {
  'first-ultrasound': true,
  'hangzhou-booklet': true,
  'nt-scan': true,
  'nipt': true,
  'hk-hago-booking': true,
  'hk-to-sydney-flight': true,
  'australia-sydney': true,
  'australia-tasmania': true,
  'australia-melbourne': true,
}
export const PRESET_PRENATAL_COMPLETED: Record<string, boolean> = {
  'early-confirmation': true,
  'first-ultrasound': true,
  'nt-scan': true,
  'aneuploidy-choice': true,
}

/** 新计划沿用旧备注供参考；旧计划的完成状态不代表本次安排已落实。 */
const PREVIOUS_PLAN_NOTES: Record<string, string[]> = {
  'hk-booking-recheck': ['hk-transit-precheck'],
  'hk-hospital-registration': ['hk-hospital-booking-day'],
  'hangzhou-care-research': ['center-research', 'yuesao-shortlist'],
  'hangzhou-care-visits': ['center-visits', 'yuesao-interviews'],
  'hangzhou-care-contract': ['center-contract', 'yuesao-contract'],
  'hangzhou-care-reconfirm': ['center-reconfirm', 'yuesao-reconfirm'],
  'hangzhou-return-care': ['shenzhen-center', 'home-yuesao'],
}

export const LEGACY_PRENATAL_MAP: Record<string, string> = {
  'first-ultrasound': 'first-ultrasound',
  'baseline-labs': 'baseline-booking',
  'nt-scan': 'nt-scan',
  'anatomy-scan': 'anatomy-scan',
  'ogtt': 'ogtt',
  'move-hk': 'move-hk-waiting',
  'gbs': 'gbs-screen',
  'weekly-visits': 'term-visits',
}

export function emptyState(storageUnavailable = false): AppState {
  return {
    completed: { ...PRESET_COMPLETED },
    notes: {},
    prenatalCompleted: { ...PRESET_PRENATAL_COMPLETED },
    prenatalNotes: {},
    storageUnavailable,
  }
}

export function normalizeState(value: Record<string, unknown>, storageUnavailable = false): AppState {
  const base = emptyState(storageUnavailable)
  const valueState = value as Partial<AppState>
  const notes = { ...(valueState.notes || {}) }
  Object.entries(PREVIOUS_PLAN_NOTES).forEach(([currentId, previousIds]) => {
    if (currentId in notes) return
    const previousNotes = previousIds
      .map((id) => notes[id])
      .filter((note) => typeof note === 'string' && note.trim())
    if (previousNotes.length) notes[currentId] = `旧计划备注（供参考）：\n${previousNotes.join('\n\n')}`
  })
  return {
    ...base,
    ...valueState,
    completed: { ...(valueState.completed || {}), ...PRESET_COMPLETED },
    notes,
    prenatalCompleted: { ...(valueState.prenatalCompleted || {}), ...PRESET_PRENATAL_COMPLETED },
    prenatalNotes: { ...(valueState.prenatalNotes || {}) },
    storageUnavailable,
  }
}
