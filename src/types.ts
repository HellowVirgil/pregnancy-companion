export type CategoryKey = 'medical' | 'hangzhou' | 'hong-kong' | 'travel' | 'postpartum' | 'documents'
export type StatusKey = 'upcoming' | 'active' | 'overdue' | 'completed'

export interface Task {
  id: string
  category: CategoryKey
  title: string
  start: string
  end: string
  gestation: string
  why: string
  materials: string[]
  actions: string[]
  cautions: string[]
  hardDeadline?: boolean
  references?: { label: string; url: string }[]
}

export interface PrenatalMilestone {
  id: string
  title: string
  railLabel: string
  railRow: number
  railPriority?: boolean
  gestation: string
  start: string
  end: string
  place: string
  summary: string
  actions: string[]
  why: string[]
  preparation?: string[]
  questions?: string[]
  warnings?: string[]
  appointment?: string
  displayEnd?: string
  kind?: 'photo'
}

export type PrenatalStatus = 'current' | 'next' | 'completed' | 'past' | 'future'
