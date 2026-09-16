import { TODAY, formatShortDate, gestationOn, overviewPosition, pregnancyPercent } from '../lib/date'
import {
  PRENATAL_MILESTONES,
  currentPrenatalIndex,
  nextPrenatalIndex,
  prenatalDisplayStatus,
  prenatalRange,
} from '../data/prenatal'
import { PHOTO_STATE_LABELS, PRENATAL_STATE_LABELS } from '../data/labels'
import { PRESET_PRENATAL_COMPLETED } from '../lib/storageKeys'
import type { PrenatalMilestone, PrenatalStatus } from '../types'
import type { AppActions } from '../hooks/useAppState'
import type { AppState } from '../lib/storage'
import { IconCamera, IconChevron } from './icons'
import { celebrate } from '../lib/celebrate'

interface PrenatalPanelProps {
  state: AppState
  actions: AppActions
  active: boolean
  openIds: Set<string>
  onToggleExpand: (id: string, open: boolean) => void
  onJumpFromRail: (id: string) => void
}

function detailList(title: string, values?: string[], extraClass = '') {
  if (!values?.length) return null
  return (
    <div className={`detail-block ${extraClass}`} key={title}>
      <strong>{title}</strong>
      <ul>{values.map((value) => <li key={value}>{value}</li>)}</ul>
    </div>
  )
}

export default function PrenatalPanel({ state, actions, active, openIds, onToggleExpand, onJumpFromRail }: PrenatalPanelProps) {
  const currentIndex = currentPrenatalIndex(TODAY)
  const nextIndex = nextPrenatalIndex(currentIndex, state.prenatalCompleted)
  const gest = gestationOn(TODAY)
  const week = gest.weeks

  const statusOf = (item: PrenatalMilestone, index: number): PrenatalStatus =>
    prenatalDisplayStatus(item, index, currentIndex, nextIndex, state.prenatalCompleted, TODAY)

  return (
    <section id="panel-prenatal" className={`panel${active ? ' is-active' : ''}`} role="tabpanel" aria-labelledby="tab-prenatal" data-testid="prenatal-timeline">
      <div className="panel-head">
        <div>
          <h2>孕检里程碑</h2>
          <p>先看当前与下一阶段，再按需展开整个孕期；产检与孕肚周记（两周一张）节点同轴排列，点击上方芯片可快速跳转。</p>
        </div>
        <span className="pill pill-info">28周前约每4周 · 28–36周约每2周 · 36周后通常每周</span>
      </div>

      <div id="pregnancy-overview" className="pregnancy-overview" aria-label="完整孕期总览">
        <div className="trimester-bar" aria-hidden="true">
          <div className="t-fill" style={{ width: `${pregnancyPercent(TODAY)}%` }} />
          <div className={`t-seg${week < 14 ? ' is-current' : ''}`}><span>孕早期</span></div>
          <div className={`t-seg${week >= 14 && week < 28 ? ' is-current' : ''}`}><span>孕中期</span></div>
          <div className={`t-seg${week >= 28 ? ' is-current' : ''}`}><span>孕晚期</span></div>
          <div className="t-marker" style={{ left: `${overviewPosition(TODAY)}%` }}>
            <span>{`今天 ${week}周+${gest.days}天`}</span>
          </div>
        </div>
        <div className="rail-scroll" role="group" aria-label="孕检里程碑快速跳转">
          {PRENATAL_MILESTONES.map((item, index) => {
            const status = statusOf(item, index)
            const state = (item.kind === 'photo' ? PHOTO_STATE_LABELS : PRENATAL_STATE_LABELS)[status]
            const day = item.appointment || item.start
            const suffix = item.appointment ? '' : (item.displayEnd === '起' ? '起' : '')
            return (
              <button
                key={item.id}
                className={`rail-chip is-${status}${item.kind === 'photo' ? ' is-photo' : ''}`}
                type="button"
                onClick={() => onJumpFromRail(item.id)}
                aria-label={`${item.title}，${state}`}
              >
                <span className="rail-name">{item.railLabel}</span>
                <span className="rail-date">{formatShortDate(day)}{suffix}</span>
              </button>
            )
          })}
        </div>
      </div>

      <div id="prenatal-spine" className="prenatal-spine">
        {PRENATAL_MILESTONES.map((item, index) => {
          const status = statusOf(item, index)
          const expanded = status === 'current' || status === 'next' || openIds.has(item.id)
          const completed = Boolean(state.prenatalCompleted[item.id])
          const stateLabels = item.kind === 'photo' ? PHOTO_STATE_LABELS : PRENATAL_STATE_LABELS
          const stateLabel = completed && status === 'current'
            ? (item.kind === 'photo' ? '本周已拍摄' : '当前阶段 · 已完成')
            : stateLabels[status]
          return (
            <article
              key={item.id}
              className="prenatal-item"
              data-prenatal-id={item.id}
              data-prenatal-status={status}
              data-kind={item.kind || 'medical'}
              data-completed={completed}
            >
              <div className="prenatal-rail" aria-hidden="true"><span className="prenatal-dot" /></div>
              <div className="prenatal-card">
                <button
                  className="prenatal-toggle"
                  type="button"
                  aria-expanded={expanded}
                  aria-controls={`prenatal-body-${item.id}`}
                  onClick={() => onToggleExpand(item.id, !expanded)}
                >
                  <span className="prenatal-toggle-main">
                    <span className="prenatal-heading">
                      {item.kind === 'photo' && <span className="photo-ico" aria-hidden="true"><IconCamera size={17} /></span>}
                      {item.title}
                      <span className="state-chip">{stateLabel}</span>
                    </span>
                    <span className="prenatal-summary">{item.summary}</span>
                    <span className="prenatal-when">{item.gestation} · {prenatalRange(item)} · {item.place}</span>
                  </span>
                  <span className="prenatal-chevron" aria-hidden="true"><IconChevron size={15} /></span>
                </button>
                <div id={`prenatal-body-${item.id}`} className="prenatal-body" hidden={!expanded}>
                  <div className="detail-grid">
                    {detailList('要做什么', item.actions)}
                    {detailList('为什么', item.why)}
                    {detailList('检查准备', item.preparation)}
                    {detailList('问医生', item.questions)}
                    {detailList('异常信号', item.warnings, 'prenatal-warning')}
                  </div>
                  <div className="prenatal-actions print-hide">
                    <button
                      className="complete-button"
                      type="button"
                      disabled={Boolean(PRESET_PRENATAL_COMPLETED[item.id])}
                      aria-label={PRESET_PRENATAL_COMPLETED[item.id] ? '真实进展已确认' : undefined}
                      onClick={(event) => {
                        const marking = !state.prenatalCompleted[item.id]
                        actions.togglePrenatal(item.id)
                        if (marking) celebrate(event.currentTarget)
                      }}
                    >
                      {PRESET_PRENATAL_COMPLETED[item.id] ? '已确认' : completed ? '取消完成' : '标记完成'}
                    </button>
                  </div>
                  <label className="note-label">
                    个人备注（自动保存在本机）
                    <textarea
                      rows={3}
                      placeholder="记录预约日期、医院、医生要求或待确认问题"
                      value={state.prenatalNotes[item.id] ?? ''}
                      onChange={(event) => actions.setPrenatalNote(item.id, event.target.value)}
                    />
                  </label>
                  <p className="print-note"><strong>个人备注：</strong>{state.prenatalNotes[item.id] || '无'}</p>
                </div>
              </div>
            </article>
          )
        })}
      </div>
      <p className="panel-foot">以上为低风险妊娠的通用时间指引，具体项目、窗口和复诊频率以杭州及香港接诊医院安排为准；如医生认定为高风险妊娠，应使用个体化计划。</p>
    </section>
  )
}
