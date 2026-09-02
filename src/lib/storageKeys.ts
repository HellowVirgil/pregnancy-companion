import type { AppState } from './storage'

export const STORAGE_KEY = 'pregnancy-companion-v3'
export const PREVIOUS_STORAGE_KEY = 'pregnancy-companion-v2'
export const LEGACY_STORAGE_KEY = 'pregnancy-companion-v1'

/** 真实世界进展已确认的固定项 */
export const PRESET_COMPLETED: Record<string, boolean> = { 'first-ultrasound': true }
export const PRESET_PRENATAL_COMPLETED: Record<string, boolean> = { 'early-confirmation': true, 'first-ultrasound': true }

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
  return {
    ...base,
    ...valueState,
    completed: { ...(valueState.completed || {}), ...PRESET_COMPLETED },
    notes: { ...(valueState.notes || {}) },
    prenatalCompleted: { ...(valueState.prenatalCompleted || {}), ...PRESET_PRENATAL_COMPLETED },
    prenatalNotes: { ...(valueState.prenatalNotes || {}) },
    storageUnavailable,
  }
}
