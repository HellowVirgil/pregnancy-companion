import { useCallback, useEffect, useState } from 'react'
import { TODAY, gestationOn, scrollBehavior } from './lib/date'
import { TASKS, taskStatus } from './data/tasks'
import { TASK_TO_PRENATAL } from './data/labels'
import { useAppState } from './hooks/useAppState'
import Header from './components/Header'
import TabBar, { type TabId } from './components/TabBar'
import DashboardPanel from './components/DashboardPanel'
import PrenatalPanel from './components/PrenatalPanel'
import TasksPanel, { type Filters } from './components/TasksPanel'
import TripPanel from './components/TripPanel'
import TopicsPanel from './components/TopicsPanel'
import SosModal from './components/SosModal'

const ANCHOR_TAB: Record<string, TabId> = {
  dashboard: 'dashboard', prenatal: 'prenatal', timeline: 'tasks', tasks: 'tasks',
  trip: 'trip', australia: 'trip', topics: 'topics', hangzhou: 'topics', 'hong-kong': 'topics',
  postpartum: 'topics', documents: 'topics', 'emergency-detail': 'topics',
}

export default function App() {
  const { state, actions } = useAppState()

  const [initialNav] = useState(() => {
    const hash = window.location.hash.replace('#', '')
    const tab = ANCHOR_TAB[hash]
    return { tab: (tab ?? 'dashboard') as TabId, anchor: tab && tab === hash ? undefined : (hash || undefined) }
  })
  const [activeTab, setActiveTab] = useState<TabId>(initialNav.tab)
  const [sosOpen, setSosOpen] = useState(false)
  const [filters, setFilters] = useState<Filters>({ category: 'all', status: 'all', incompleteOnly: false })
  const [openPrenatalIds, setOpenPrenatalIds] = useState<Set<string>>(new Set())
  const [focusTask, setFocusTask] = useState<{ id: string; nonce: number } | null>(null)

  useEffect(() => {
    if (!initialNav.anchor) return
    requestAnimationFrame(() => {
      document.getElementById(initialNav.anchor as string)?.scrollIntoView({ behavior: scrollBehavior(), block: 'start' })
    })
    // 仅在首次挂载时按初始 hash 滚动
  }, [])

  const setTab = useCallback((name: TabId, options: { anchor?: string; keepScroll?: boolean } = {}) => {
    setActiveTab(name)
    window.history.replaceState(null, '', `#${name}`)
    if (options.anchor) {
      requestAnimationFrame(() => {
        document.getElementById(options.anchor as string)?.scrollIntoView({ behavior: scrollBehavior(), block: 'start' })
      })
    } else if (!options.keepScroll) {
      window.scrollTo(0, 0)
    }
  }, [])

  const openPrenatalMilestone = useCallback((id: string, shouldScroll = false) => {
    setOpenPrenatalIds((prev) => new Set(prev).add(id))
    setTab('prenatal', { keepScroll: true })
    if (shouldScroll) {
      requestAnimationFrame(() => {
        document.querySelector(`[data-prenatal-id="${id}"]`)?.scrollIntoView({ behavior: scrollBehavior(), block: 'center' })
      })
    }
  }, [setTab])

  const openTask = useCallback((taskId: string) => {
    const task = TASKS.find((item) => item.id === taskId)
    if (!task) return
    const status = taskStatus(task, TODAY, Boolean(state.completed[taskId]))
    const matches = (filters.category === 'all' || task.category === filters.category)
      && (filters.status === 'all' || status === filters.status)
      && (!filters.incompleteOnly || !state.completed[taskId])
    if (!matches) setFilters({ category: 'all', status: 'all', incompleteOnly: false })
    setFocusTask((prev) => ({ id: taskId, nonce: (prev?.nonce ?? 0) + 1 }))
    setTab('tasks', { keepScroll: true })
  }, [filters, state.completed, setTab])

  const jumpFromBeacon = useCallback((taskId: string) => {
    const prenatalId = TASK_TO_PRENATAL[taskId]
    if (prenatalId) openPrenatalMilestone(prenatalId, true)
    else openTask(taskId)
  }, [openPrenatalMilestone, openTask])

  const resetProgress = useCallback(() => {
    if (!window.confirm('确定清空所有完成状态和个人备注吗？固定孕期资料不会改变。')) return
    actions.reset()
    setOpenPrenatalIds(new Set())
    setFilters({ category: 'all', status: 'all', incompleteOnly: false })
  }, [actions])

  const togglePrenatalManual = useCallback((id: string, open: boolean) => {
    setOpenPrenatalIds((prev) => {
      const next = new Set(prev)
      if (open) next.add(id)
      else next.delete(id)
      return next
    })
  }, [])

  const gest = gestationOn(TODAY)
  const pendingCount = TASKS.filter((task) => !state.completed[task.id]).length

  return (
    <div data-testid="app-shell">
      <a className="skip-link" href="#main">跳到主要内容</a>

      <Header
        weekLabel={`孕${gest.weeks}周+${gest.days}天`}
        onPrint={() => window.print()}
        onReset={resetProgress}
        onOpenSos={() => setSosOpen(true)}
      />

      <TabBar active={activeTab} onSelect={setTab} pendingCount={pendingCount} />

      <main id="main" className="shell">
        {state.storageUnavailable && (
          <div id="storage-warning" className="storage-warning" role="status" style={{ display: 'block' }}>
            浏览器禁止本地存储：手册仍可阅读，但完成状态和备注无法保存。
          </div>
        )}

        <DashboardPanel
          state={state}
          actions={actions}
          onOpenSos={() => setSosOpen(true)}
          onOpenTask={openTask}
          onBeaconJump={jumpFromBeacon}
        />

        <PrenatalPanel
          state={state}
          actions={actions}
          openIds={openPrenatalIds}
          onToggleExpand={togglePrenatalManual}
          onJumpFromRail={(id) => openPrenatalMilestone(id, true)}
        />

        <TasksPanel
          state={state}
          actions={actions}
          filters={filters}
          onFiltersChange={setFilters}
          focusTask={focusTask}
        />

        <TripPanel />

        <TopicsPanel />

        <footer className="app-footer">
          <strong>使用说明</strong>：本手册用于整理行动，不提供诊断或处方。任何出血、腹痛、胎动异常或医生提出的特殊风险，都应优先按医疗机构指引处理。香港资格、医院流程和宝宝证件政策可能更新，办理前请再次核对官方要求。
          <p>香港官方参考：
            <a href="https://www.fhs.gov.hk/tc_chi/fee_cha/general_pub/general_pub.html" target="_blank" rel="noreferrer">符合资格人士定义</a> ·
            <a href="https://www.fhs.gov.hk/tc_chi/main_ser/process.html" target="_blank" rel="noreferrer">产前服务登记</a> ·
            <a href="https://www.famplan.org.hk/en/our-services/clinic-services/pre-marital-fertility-preparation/early-pregnancy-assessment" target="_blank" rel="noreferrer">家计会验孕及证明</a> ·
            <a href="https://www.had.gov.hk/en/public_services/public_enquiry_services/faq.htm" target="_blank" rel="noreferrer">民政署宣誓服务</a> ·
            <a href="https://www.info.gov.hk/gia/general/202607/03/P2026070200739.htm" target="_blank" rel="noreferrer">2026产前服务整合</a> ·
            <a href="https://www.immd.gov.hk/eng/services/birth-death/Registration_of_a_Birth.html" target="_blank" rel="noreferrer">出生登记</a>
          </p>
        </footer>
      </main>

      <SosModal open={sosOpen} onClose={() => setSosOpen(false)} />
    </div>
  )
}
