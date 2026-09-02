import { emptyState, normalizeState, STORAGE_KEY, PREVIOUS_STORAGE_KEY, LEGACY_STORAGE_KEY, LEGACY_PRENATAL_MAP } from './storageKeys'

export interface AppState {
  completed: Record<string, boolean>
  notes: Record<string, string>
  prenatalCompleted: Record<string, boolean>
  prenatalNotes: Record<string, string>
  storageUnavailable: boolean
}

export { emptyState }

export function loadState(): AppState {
  try {
    const parsed: unknown = JSON.parse(localStorage.getItem(STORAGE_KEY) ?? 'null')
    if (parsed && typeof parsed === 'object') return normalizeState(parsed as Record<string, unknown>, false)
    const previous: unknown = JSON.parse(localStorage.getItem(PREVIOUS_STORAGE_KEY) ?? 'null')
    if (previous && typeof previous === 'object') return normalizeState(previous as Record<string, unknown>, false)
    const legacy: unknown = JSON.parse(localStorage.getItem(LEGACY_STORAGE_KEY) ?? 'null')
    if (!legacy || typeof legacy !== 'object') return emptyState(false)
    const legacyState = legacy as { completed?: Record<string, boolean>; notes?: Record<string, string> }
    const migrated = normalizeState({ completed: legacyState.completed || {}, notes: legacyState.notes || {} }, false)
    Object.entries(LEGACY_PRENATAL_MAP).forEach(([taskId, prenatalId]) => {
      if (legacyState.completed?.[taskId]) migrated.prenatalCompleted[prenatalId] = true
      if (legacyState.notes?.[taskId]) migrated.prenatalNotes[prenatalId] = legacyState.notes[taskId]
    })
    return migrated
  } catch {
    return emptyState(true)
  }
}

export function saveState(state: AppState): boolean {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify({
      completed: state.completed,
      notes: state.notes,
      prenatalCompleted: state.prenatalCompleted,
      prenatalNotes: state.prenatalNotes,
    }))
    return true
  } catch {
    return false
  }
}

export function clearStoredProgress(): void {
  try {
    localStorage.removeItem(STORAGE_KEY)
    localStorage.removeItem(PREVIOUS_STORAGE_KEY)
    localStorage.removeItem(LEGACY_STORAGE_KEY)
  } catch {
    /* 页面仍可使用 */
  }
}
