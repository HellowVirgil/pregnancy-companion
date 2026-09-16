import type { PrenatalMilestone, PrenatalStatus } from '../types'
import { PROFILE, addDays } from '../lib/date'
import { PRENATAL_MEDICAL } from './_generated_prenatal'

/* ===== 孕肚周记与孕妇照节点 ===== */
const BELLY_PHOTO_WEEKS = [12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32, 34, 36, 38, 40]

const BELLY_PHOTO_MILESTONES: PrenatalMilestone[] = BELLY_PHOTO_WEEKS.map((week) => {
  const start = addDays(PROFILE.lmp, week * 7)
  return {
    id: `belly-w${week}`, kind: 'photo', title: `孕肚周记 · 孕${week}周`,
    railLabel: `孕肚${week}周`, railRow: 0, gestation: `孕${week}周`,
    start, end: addDays(start, 6), place: '在家',
    summary: '同姿势、同背景拍一张孕肚照片，两周一张见证变化',
    actions: ['和上一张同姿势、同光线、同背景，拍正面与侧面各一张', '按孕周命名归档到同一相册，孕晚期可拼成成长视频'],
    why: ['直观记录腹部与体重的变化曲线', '将来送给宝宝的一份成长纪念'],
  }
})

const MATERNITY_PHOTO_MILESTONE: PrenatalMilestone = {
  id: 'maternity-photoshoot', kind: 'photo', title: '孕晚期孕妇照拍摄', railLabel: '孕妇照', railRow: 0, railPriority: true,
  gestation: '孕28–30周+5天', start: '2027-01-11', end: '2027-01-30', place: '杭州 · 摄影棚',
  summary: '黄金窗口拍一组孕妇照，作为三口之家的第一张"全家福"',
  actions: ['孕25–26周完成摄影套系预约（见任务清单）', '拍摄控制在半天以内，优先室内棚拍，外景注意防滑保暖', '当天体力不支或身体不适，果断改期'],
  why: ['孕28–30周孕肚圆润、浮肿较少、体力尚可', '孕35周+4天就要赴港待产，拍摄宜早不宜迟'],
}

/** 医学产检节点 + 孕肚打卡节点，按生效日期（预约日优先于窗口起点）排序 */
export const PRENATAL_MILESTONES: PrenatalMilestone[] = [
  ...PRENATAL_MEDICAL,
  ...BELLY_PHOTO_MILESTONES,
  MATERNITY_PHOTO_MILESTONE,
].sort((a, b) => (a.appointment ?? a.start).localeCompare(b.appointment ?? b.start))

export { BELLY_PHOTO_MILESTONES }

export function prenatalRange(milestone: PrenatalMilestone): string {
  if (milestone.appointment) return `${milestone.appointment} · 已预约`
  if (milestone.displayEnd === '起') return `${milestone.start}起`
  return `${milestone.start}–${milestone.end}`
}

export function currentPrenatalIndex(date: string): number {
  let current = 0
  PRENATAL_MILESTONES.forEach((item, index) => {
    if (item.kind !== 'photo' && date >= item.start) current = index
  })
  return current
}

export function nextPrenatalIndex(currentIndex: number, prenatalCompleted: Record<string, boolean>): number {
  for (let index = currentIndex + 1; index < PRENATAL_MILESTONES.length; index += 1) {
    if (PRENATAL_MILESTONES[index].kind !== 'photo' && !prenatalCompleted[PRENATAL_MILESTONES[index].id]) return index
  }
  return -1
}

export function prenatalDisplayStatus(
  item: PrenatalMilestone,
  index: number,
  currentIndex: number,
  nextIndex: number,
  prenatalCompleted: Record<string, boolean>,
  today: string,
): PrenatalStatus {
  if (item.kind === 'photo') {
    if (prenatalCompleted[item.id]) return 'completed'
    if (today > item.end) return 'past'
    if (today >= item.start) return 'current'
    const nextPhoto = BELLY_PHOTO_MILESTONES.find((photo) => !prenatalCompleted[photo.id] && photo.start > today)
    if (nextPhoto && nextPhoto.id === item.id) return 'next'
    return 'future'
  }
  if (index === currentIndex) return 'current'
  if (prenatalCompleted[item.id]) return 'completed'
  if (index === nextIndex) return 'next'
  return index < currentIndex ? 'past' : 'future'
}
