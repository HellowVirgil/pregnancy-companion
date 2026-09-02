import { useRef } from 'react'
import type { KeyboardEvent as ReactKeyboardEvent, ReactNode } from 'react'
import { IconBook, IconCalendar, IconChecklist, IconHome, IconPlane } from './icons'

export const TAB_IDS = ['dashboard', 'prenatal', 'tasks', 'trip', 'topics'] as const
export type TabId = (typeof TAB_IDS)[number]

const TAB_META: Record<TabId, { label: string; icon: ReactNode }> = {
  dashboard: { label: '今天', icon: <IconHome /> },
  prenatal: { label: '产检', icon: <IconCalendar /> },
  tasks: { label: '任务', icon: <IconChecklist /> },
  trip: { label: '行程', icon: <IconPlane /> },
  topics: { label: '专题', icon: <IconBook /> },
}

interface TabBarProps {
  active: TabId
  onSelect: (tab: TabId) => void
  pendingCount: number
}

export default function TabBar({ active, onSelect, pendingCount }: TabBarProps) {
  const buttonRefs = useRef<(HTMLButtonElement | null)[]>([])

  const handleKeyDown = (event: ReactKeyboardEvent) => {
    if (event.key !== 'ArrowRight' && event.key !== 'ArrowLeft') return
    const current = TAB_IDS.indexOf(active)
    const next = (current + (event.key === 'ArrowRight' ? 1 : -1) + TAB_IDS.length) % TAB_IDS.length
    buttonRefs.current[next]?.focus()
    onSelect(TAB_IDS[next])
    event.preventDefault()
  }

  return (
    <nav className="tab-bar" aria-label="手册栏目">
      <div className="shell tab-bar-inner" role="tablist" onKeyDown={handleKeyDown}>
        {TAB_IDS.map((id, index) => {
          const on = id === active
          return (
            <button
              key={id}
              ref={(el) => { buttonRefs.current[index] = el }}
              className={`tab-button${on ? ' is-active' : ''}`}
              role="tab"
              id={`tab-${id}`}
              data-tab={id}
              aria-selected={on}
              aria-controls={`panel-${id}`}
              tabIndex={on ? 0 : -1}
              onClick={() => onSelect(id)}
            >
              {TAB_META[id].icon}
              <span>{TAB_META[id].label}</span>
              {id === 'tasks' && pendingCount > 0 && <span className="tab-badge">{pendingCount}</span>}
            </button>
          )
        })}
      </div>
    </nav>
  )
}
