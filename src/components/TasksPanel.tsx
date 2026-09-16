import { useEffect, useState } from 'react'
import { TODAY, scrollBehavior } from '../lib/date'
import { CATEGORY_LABELS, STATUS_LABELS } from '../data/labels'
import { TASKS, taskRange, taskStatus } from '../data/tasks'
import type { CategoryKey, StatusKey } from '../types'
import type { AppActions } from '../hooks/useAppState'
import type { AppState } from '../lib/storage'
import { IconCheck, IconChevron } from './icons'
import { celebrate } from '../lib/celebrate'

export interface Filters {
  category: CategoryKey | 'all'
  status: StatusKey | 'all'
  incompleteOnly: boolean
}

interface TasksPanelProps {
  state: AppState
  actions: AppActions
  active: boolean
  filters: Filters
  onFiltersChange: (filters: Filters) => void
  focusTask: { id: string; nonce: number } | null
}

const CATEGORY_ORDER: Array<CategoryKey | 'all'> = ['all', 'medical', 'hangzhou', 'hong-kong', 'travel', 'postpartum', 'documents']
const STATUS_ORDER: Array<StatusKey | 'all'> = ['all', 'active', 'upcoming', 'overdue', 'completed']

export default function TasksPanel({ state, actions, active, filters, onFiltersChange, focusTask }: TasksPanelProps) {
  const [expandedIds, setExpandedIds] = useState<Set<string>>(new Set())

  useEffect(() => {
    if (!focusTask) return
    setExpandedIds((prev) => new Set(prev).add(focusTask.id))
    const raf = requestAnimationFrame(() => {
      const card = document.querySelector(`[data-task-id="${focusTask.id}"]`)
      if (!card) return
      card.scrollIntoView({ behavior: scrollBehavior(), block: 'center' })
      card.classList.add('is-flash')
      window.setTimeout(() => card.classList.remove('is-flash'), 1600)
    })
    return () => cancelAnimationFrame(raf)
  }, [focusTask])

  const catCounts: Record<string, number> = { all: TASKS.length }
  const statusCounts: Record<string, number> = { all: TASKS.length }
  TASKS.forEach((task) => {
    catCounts[task.category] = (catCounts[task.category] || 0) + 1
    const status = taskStatus(task, TODAY, Boolean(state.completed[task.id]))
    statusCounts[status] = (statusCounts[status] || 0) + 1
  })

  const filtered = TASKS.filter((task) => {
    const matchesCategory = filters.category === 'all' || task.category === filters.category
    const matchesCompletion = !filters.incompleteOnly || !state.completed[task.id]
    const status = taskStatus(task, TODAY, Boolean(state.completed[task.id]))
    const matchesStatus = filters.status === 'all' || status === filters.status
    return matchesCategory && matchesCompletion && matchesStatus
  })

  const clearFilters = () => onFiltersChange({ category: 'all', status: 'all', incompleteOnly: false })

  return (
    <section id="panel-tasks" className={`panel${active ? ' is-active' : ''}`} role="tabpanel" aria-labelledby="tab-tasks">
      <div className="panel-head">
        <div>
          <h2>完整任务时间线</h2>
          <p>所有窗口均为指引，医生和医院的实际安排优先。</p>
        </div>
        <span className="result-count" role="status">{`显示 ${filtered.length} / ${TASKS.length} 项`}</span>
      </div>

      <div className="filter-bar" aria-label="任务筛选">
        <div className="chip-row" id="category-chips" role="group" aria-label="按类别筛选">
          {CATEGORY_ORDER.map((key) => (
            <button
              key={key}
              type="button"
              className={`chip${filters.category === key ? ' is-active' : ''}`}
              aria-pressed={filters.category === key}
              onClick={() => onFiltersChange({ ...filters, category: key })}
            >
              <span className={`chip-dot dot-${key}`} aria-hidden="true" />
              {key === 'all' ? '全部' : CATEGORY_LABELS[key]}
              <span className="chip-count">{catCounts[key] ?? 0}</span>
            </button>
          ))}
        </div>
        <span className="chip-divider" aria-hidden="true" />
        <div className="chip-row" id="status-chips" role="group" aria-label="按状态筛选">
          {STATUS_ORDER.map((key) => (
            <button
              key={key}
              type="button"
              className={`chip${filters.status === key ? ' is-active' : ''}`}
              aria-pressed={filters.status === key}
              onClick={() => onFiltersChange({ ...filters, status: key })}
            >
              {key === 'all' ? '全部状态' : STATUS_LABELS[key]}
              <span className="chip-count">{statusCounts[key] ?? 0}</span>
            </button>
          ))}
        </div>
        <label className="switch">
          <input
            id="incomplete-only"
            type="checkbox"
            checked={filters.incompleteOnly}
            onChange={(event) => onFiltersChange({ ...filters, incompleteOnly: event.target.checked })}
          />
          <span className="switch-track" aria-hidden="true" />
          只看未完成
        </label>
      </div>

      <div id="timeline-list" className="timeline-list">
        {filtered.map((task) => {
          const completed = Boolean(state.completed[task.id])
          const status = taskStatus(task, TODAY, completed)
          const expanded = expandedIds.has(task.id)
          return (
            <article key={task.id} className="task-card" data-task-id={task.id} data-category={task.category} data-status={status}>
              <div className="task-row">
                <button
                  className="task-check"
                  type="button"
                  aria-pressed={completed}
                  aria-label={`${completed ? '取消完成：' : '标记完成：'}${task.title}`}
                  disabled={Boolean(task.id === 'first-ultrasound')}
                  title={task.id === 'first-ultrasound' ? '真实进展已确认' : undefined}
                  onClick={(event) => {
                    const marking = !completed
                    actions.toggleTask(task.id)
                    if (marking) celebrate(event.currentTarget)
                  }}
                >
                  <IconCheck size={17} />
                </button>
                <div className="task-body">
                  <div className="task-meta">
                    <span className={`cat-chip cat-${task.category}`}>{CATEGORY_LABELS[task.category]}</span>
                    <span>{taskRange(task)}</span>
                    <span>{task.gestation}</span>
                    {task.hardDeadline && !completed && <span className="flag-chip">硬截止</span>}
                    <span className={`status-chip status-${status}`}>{STATUS_LABELS[status]}</span>
                  </div>
                  <h3 className="task-title">{task.title}</h3>
                </div>
                <button
                  className={`task-expand${expanded ? ' is-open' : ''}`}
                  type="button"
                  aria-expanded={expanded}
                  aria-label={`展开${task.title}的详细指引`}
                  onClick={() => setExpandedIds((prev) => {
                    const next = new Set(prev)
                    if (expanded) next.delete(task.id); else next.add(task.id)
                    return next
                  })}
                >
                  <IconChevron size={15} />
                </button>
              </div>
              <div className="task-detail" hidden={!expanded}>
                <div className="detail-grid">
                  <div className="detail-block"><strong>为什么</strong><p>{task.why}</p></div>
                  <div className="detail-block"><strong>准备材料</strong><p>{task.materials.join('；')}</p></div>
                  <div className="detail-block"><strong>执行建议</strong><ul>{task.actions.map((value) => <li key={value}>{value}</li>)}</ul></div>
                  <div className="detail-block caution"><strong>注意事项</strong><ul>{task.cautions.map((value) => <li key={value}>{value}</li>)}</ul></div>
                </div>
                <label className="note-label">
                  个人备注（自动保存在本机）
                  <textarea
                    rows={3}
                    placeholder="记录预约日期、医院或待确认问题"
                    value={state.notes[task.id] ?? ''}
                    onChange={(event) => actions.setTaskNote(task.id, event.target.value)}
                  />
                </label>
                <p className="print-note"><strong>个人备注：</strong>{state.notes[task.id] || '无'}</p>
              </div>
            </article>
          )
        })}
        {filtered.length === 0 && (
          <div className="empty-state">
            没有符合当前筛选条件的任务。
            <button type="button" onClick={clearFilters}>清除筛选</button>
          </div>
        )}
      </div>
    </section>
  )
}
