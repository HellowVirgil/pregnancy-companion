import { PROFILE, TODAY, addDays, diffDays, formatChineseDate, formatShortDate, gestationOn, overviewPosition, parseLocalDate, pregnancyPercent } from '../lib/date'
import { COUNTDOWNS, FRUIT_SIZES, STATUS_LABELS } from '../data/labels'
import { TASKS, chooseNextTask, taskRange } from '../data/tasks'
import { PRENATAL_MILESTONES, BELLY_PHOTO_MILESTONES } from '../data/prenatal'
import type { AppActions } from '../hooks/useAppState'
import type { AppState } from '../lib/storage'
import { IconActivity, IconCheck, IconCompass, IconHeart, IconSprout } from './icons'
import { celebrate } from '../lib/celebrate'

interface DashboardPanelProps {
  state: AppState
  actions: AppActions
  active: boolean
  onOpenSos: () => void
  onOpenTask: (taskId: string) => void
  onBeaconJump: (taskId: string) => void
}

export default function DashboardPanel({ state, actions, active, onOpenSos, onOpenTask, onBeaconJump }: DashboardPanelProps) {
  const date = TODAY
  const gest = gestationOn(date)
  const week = gest.weeks
  const dueIn = diffDays(date, PROFILE.dueDate)
  const weekday = '日一二三四五六'[parseLocalDate(date).getDay()]
  const traveled = diffDays(PROFILE.lmp, date) + 1
  const fruit = FRUIT_SIZES[Math.min(40, Math.max(1, week))]
  const trimester = week < 14 ? '孕早期' : week < 28 ? '孕中期' : '孕晚期'

  const countdownItems = COUNTDOWNS
    .map((item) => ({ ...item, days: diffDays(date, item.date) }))
    .filter((item) => item.days >= 0)
    .slice(0, 4)

  const next = chooseNextTask(date, state.completed)
  const completedCount = TASKS.filter((task) => state.completed[task.id]).length
  const percentage = Math.round((completedCount / TASKS.length) * 100)
  const prenatalTotal = PRENATAL_MILESTONES.filter((item) => item.kind !== 'photo').length
  const prenatalDone = PRENATAL_MILESTONES.filter((item) => item.kind !== 'photo' && state.prenatalCompleted[item.id]).length
  const photoTotal = BELLY_PHOTO_MILESTONES.length
  const photoDone = BELLY_PHOTO_MILESTONES.filter((item) => state.prenatalCompleted[item.id]).length

  const futureLimit = addDays(date, 30)
  const upcoming = TASKS
    .filter((task) => !state.completed[task.id] && task.end >= date && task.start <= futureLimit)
    .sort((a, b) => a.end.localeCompare(b.end))
    .slice(0, 6)
  const deadline = TASKS
    .filter((task) => task.hardDeadline && !state.completed[task.id] && task.end >= date)
    .sort((a, b) => a.end.localeCompare(b.end))[0]

  return (
    <section id="panel-dashboard" className={`panel${active ? ' is-active' : ''}`} role="tabpanel" aria-labelledby="tab-dashboard">
      <div className="hero">
        <div className="hero-grid">
          <div className="hero-main">
            <div className="hero-top">
              <div>
                <p className="kicker">{`今天是 ${formatChineseDate(date)} · 星期${weekday}`}</p>
                <h1 data-testid="gestation-age">{`孕${week}周+${gest.days}天`}</h1>
                <p className="hero-due" data-testid="due-date">
                  {dueIn > 0 ? `预产期 ${formatChineseDate(PROFILE.dueDate)} · 还有 ${dueIn} 天` : `预产期 ${formatChineseDate(PROFILE.dueDate)}`}
                </p>
              </div>
              <span className="pill pill-brand">{`${trimester} · 第${week + 1}周`}</span>
            </div>
            <p className="companion-line">
              <IconHeart size={13} />
              <span>{`和宝宝同行第 ${traveled} 天${dueIn > 0 ? ` · 距离见面还有 ${dueIn} 天` : ''}`}</span>
            </p>
            <div className="fruit-chip">
              <IconSprout size={15} />
              <span>{'宝宝现在差不多有'}<strong>{fruit}</strong>{'那么大'}</span>
            </div>
            <div className="trimester-wrap" aria-hidden="true">
              <div className="trimester-bar">
                <div className="t-fill" style={{ width: `${pregnancyPercent(date)}%` }} />
                <div className={`t-seg${week < 14 ? ' is-current' : ''}`} data-seg="1"><span>孕早期</span></div>
                <div className={`t-seg${week >= 14 && week < 28 ? ' is-current' : ''}`} data-seg="2"><span>孕中期</span></div>
                <div className={`t-seg${week >= 28 ? ' is-current' : ''}`} data-seg="3"><span>孕晚期</span></div>
                <div className="t-marker" style={{ left: `${overviewPosition(date)}%` }}>
                  <span>{`今天 ${week}周+${gest.days}天`}</span>
                </div>
              </div>
            </div>
          </div>
          <div className="hero-art print-hide" aria-hidden="true">
            <svg viewBox="0 0 220 190" fill="none">
              <defs>
                <linearGradient id="hero-sun" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0" stopColor="#f6d9b4" />
                  <stop offset="1" stopColor="#eeb09a" />
                </linearGradient>
              </defs>
              <circle cx="158" cy="54" r="45" fill="url(#hero-sun)" opacity=".9" />
              <path d="M14 170 C 58 158, 66 128, 104 118 S 168 98, 194 52" stroke="#4d7d64" strokeWidth="2.5" strokeLinecap="round" strokeDasharray="0.5 9" />
              <circle cx="58" cy="149" r="4" fill="#c99b3f" />
              <circle cx="124" cy="113" r="4" fill="#4d7d64" />
              <circle cx="180" cy="70" r="4" fill="#bf6b5d" />
              <path d="M194 52c0-9 5.5-14.5 14.5-14.5 0 9-5.5 14.5-14.5 14.5z" fill="#4d7d64" opacity=".9" />
              <path d="M194 52c0-6.5-4.2-10.5-11-10.5 0 6.8 4.2 10.5 11 10.5z" fill="#7fa98e" />
              <path d="M30 62.2c0-3.4 2.6-5.5 5.8-5.5 0 3.4-2.6 5.5-5.8 5.5z" fill="#bf6b5d" opacity=".55" />
              <path d="M196 128.2c0-3.4 2.6-5.5 5.8-5.5 0 3.4-2.6 5.5-5.8 5.5z" fill="#4d7d64" opacity=".5" />
            </svg>
          </div>
        </div>
        <div className="countdown-row">
          {countdownItems.map((item) => (
            <div key={item.label} className={`count-chip${item.days === 0 ? ' is-today' : item.days <= 14 ? ' is-urgent' : ''}`}>
              <span className="n">{item.label}</span>
              <span className="d">{item.days === 0 ? '就是今天' : `${item.days} 天后`}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="confirmed-strip" data-testid="confirmed-progress" role="status">
        <span className="confirmed-title">最新进展</span>
        <div className="confirmed-item"><small>社区建档</small><strong>已完成杭州社区建册</strong></div>
        <div className="confirmed-item"><small>NT 超声</small><strong>已完成</strong></div>
        <div className="confirmed-item"><small>筛查方案</small><strong>已确定无创 Plus</strong></div>
        <div className="confirmed-item"><small>四维检查</small><strong>待预约检查时间</strong></div>
        <div className="confirmed-item"><small>省妇保建档</small><strong>{`孕${PROFILE.hangzhouBookingWeek}周起办理 · 具体日期待定`}</strong></div>
        <div className="confirmed-item"><small>澳洲旅行</small><strong>已完成行程并返程</strong></div>
        <div className="confirmed-item"><small>HA Go 已预约</small><strong>{`${formatShortDate(PROFILE.hkBookingDate)} · 东区建档（可改期）`}</strong></div>
        <div className="confirmed-item"><small>下次赴港</small><strong>正式建档，同步确定待产酒店</strong></div>
        <div className="confirmed-item"><small>返杭计划</small><strong>暂定出院日办证，高铁商务座返杭</strong></div>
        <div className="confirmed-item"><small>产后照护</small><strong>杭州月子中心接站入住 · 待落实</strong></div>
      </div>

      <button className="emergency-compact" type="button" onClick={onOpenSos} data-testid="emergency-alert">
        <IconActivity size={19} />
        <strong>紧急情况不等待计划节点</strong>
        <span className="hint">明显出血、持续或单侧剧痛、晕厥、肩痛、发热、严重呕吐脱水；中晚期胎动明显减少、疑似破水或规律宫缩时立即联系医院。</span>
        <span className="cta">查看全部警示</span>
      </button>

      {next ? (
        <article className="beacon" data-testid="next-beacon" data-task-ref={next.task.id}>
          <div className="beacon-top">
            <span className="kicker beacon-kicker"><IconCompass size={14} />下一件最重要的事</span>
            <span className={`status-chip status-${next.status}`}>{STATUS_LABELS[next.status]}</span>
          </div>
          <h3>{next.task.title}</h3>
          <p className="beacon-why">{next.task.why}</p>
          <p className="beacon-meta">{taskRange(next.task)} · {next.task.gestation}</p>
          <div className="beacon-actions print-hide">
            <button
              className="button button-primary"
              type="button"
              onClick={(event) => { actions.toggleTask(next.task.id); celebrate(event.currentTarget) }}
            >
              <IconCheck size={17} />标记完成
            </button>
            <button className="button" type="button" onClick={() => onBeaconJump(next.task.id)}>查看详细指引</button>
          </div>
        </article>
      ) : (
        <article className="beacon beacon-done">
          <div className="beacon-top">
            <span className="kicker beacon-kicker"><IconCompass size={14} />下一件最重要的事</span>
            <span className="status-chip status-completed">已完成</span>
          </div>
          <h3>时间线任务全部完成</h3>
          <p className="beacon-why">保持每天留意胎动和身体信号，按医院安排复诊即可。</p>
        </article>
      )}

      <div className="home-grid">
        <div className="side-card">
          <h3>接下来30天</h3>
          <div className="mini-list">
            {upcoming.length > 0 ? upcoming.map((task) => (
              <button key={task.id} className="mini-item" type="button" onClick={() => onOpenTask(task.id)}>
                <time>{formatShortDate(task.start)}</time>
                <span className="mini-title">{task.title}</span>
                <span className="mini-arrow" aria-hidden="true">›</span>
              </button>
            )) : (
              <p style={{ margin: '10px 0 0', color: 'var(--ink-3)', fontSize: 13 }}>未来30天暂无新任务。</p>
            )}
          </div>
        </div>
        <div className="home-side">
          {deadline && (
            <div className="side-card deadline">
              <div className="label">最近的硬截止日期</div>
              <h3>{deadline.title}</h3>
              <p>{taskRange(deadline)} · {deadline.gestation}</p>
            </div>
          )}
          <div className="side-card">
            <div className="side-head"><h3>整体进度</h3><span className="progress-num">{completedCount} / {TASKS.length}</span></div>
            <div className="progress-track" aria-label="整体完成进度"><div className="progress-fill" style={{ width: `${percentage}%` }} /></div>
            <div className="side-head sub"><h3>产检里程碑</h3><span className="progress-num">{prenatalDone} / {prenatalTotal}</span></div>
            <div className="progress-track" aria-label="产检里程碑完成进度"><div className="progress-fill" style={{ width: `${prenatalTotal ? Math.round((prenatalDone / prenatalTotal) * 100) : 0}%` }} /></div>
            <div className="side-head sub"><h3>孕肚周记</h3><span className="progress-num">{photoDone} / {photoTotal}</span></div>
            <div className="progress-track" aria-label="孕肚周记完成进度">
              <div className="progress-fill" style={{ width: `${photoTotal ? Math.round((photoDone / photoTotal) * 100) : 0}%`, background: 'linear-gradient(90deg, #e8b09a, var(--blush))' }} />
            </div>
            <p className="progress-hint">产检、香港登记、旅行、杭州产后照护和证件统一记录；孕肚周记每两周一张</p>
          </div>
        </div>
      </div>
    </section>
  )
}
