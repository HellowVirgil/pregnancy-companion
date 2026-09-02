import type { Task } from '../types'
import { formatDotDate } from '../lib/date'
import { TASKS } from './_generated_tasks'

export { TASKS }

export function taskStatus(task: Task, date: string, completed = false): 'completed' | 'upcoming' | 'overdue' | 'active' {
  if (completed) return 'completed'
  if (date < task.start) return 'upcoming'
  if (date > task.end) return 'overdue'
  return 'active'
}

export function taskRange(task: Task): string {
  return task.start === task.end
    ? formatDotDate(task.start)
    : `${formatDotDate(task.start)}–${formatDotDate(task.end)}`
}

export type TaskWithStatus = { task: Task; status: ReturnType<typeof taskStatus> }

export function chooseNextTask(date: string, completed: Record<string, boolean>): TaskWithStatus | null {
  const candidates = TASKS
    .filter((task) => !completed[task.id])
    .map((task) => ({ task, status: taskStatus(task, date, false) }))
  return candidates.find(({ task, status }) => status === 'active' && task.hardDeadline)
    ?? candidates.find(({ status }) => status === 'active')
    ?? candidates.find(({ status }) => status === 'upcoming')
    ?? null
}
