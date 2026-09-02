import { useCallback, useEffect, useMemo, useState } from 'react'
import { clearStoredProgress, emptyState, loadState, saveState, type AppState } from '../lib/storage'

export interface AppActions {
  toggleTask: (id: string) => void
  setTaskNote: (id: string, value: string) => void
  togglePrenatal: (id: string) => void
  setPrenatalNote: (id: string, value: string) => void
  reset: () => void
}

export function useAppState(): { state: AppState; actions: AppActions } {
  const [state, setState] = useState<AppState>(loadState)

  useEffect(() => {
    const ok = saveState(state)
    if (!ok && !state.storageUnavailable) setState((prev) => ({ ...prev, storageUnavailable: true }))
  }, [state])

  const actions = useMemo<AppActions>(() => ({
    toggleTask: (id) => setState((prev) => ({ ...prev, completed: { ...prev.completed, [id]: !prev.completed[id] } })),
    setTaskNote: (id, value) => setState((prev) => ({ ...prev, notes: { ...prev.notes, [id]: value } })),
    togglePrenatal: (id) => setState((prev) => ({ ...prev, prenatalCompleted: { ...prev.prenatalCompleted, [id]: !prev.prenatalCompleted[id] } })),
    setPrenatalNote: (id, value) => setState((prev) => ({ ...prev, prenatalNotes: { ...prev.prenatalNotes, [id]: value } })),
    reset: () => {
      clearStoredProgress()
      setState(emptyState(false))
    },
  }), [])

  const markReset = useCallback(() => actions.reset(), [actions])

  return { state, actions: { ...actions, reset: markReset } }
}
