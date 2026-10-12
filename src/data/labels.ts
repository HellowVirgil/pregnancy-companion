import type { CategoryKey, PrenatalStatus, StatusKey } from '../types'
import { PROFILE } from '../lib/date'

export const STATUS_LABELS: Record<StatusKey, string> = {
  upcoming: '待办', active: '进行中', overdue: '已逾期', completed: '已完成',
}

export const CATEGORY_LABELS: Record<CategoryKey, string> = {
  medical: '医疗', hangzhou: '杭州', 'hong-kong': '香港', travel: '旅行', postpartum: '月子与月嫂', documents: '证件',
}

export const TASK_TO_PRENATAL: Record<string, string> = {
  'first-ultrasound': 'first-ultrasound',
  'baseline-labs': 'baseline-booking',
  'nt-scan': 'nt-scan',
  'anatomy-scan': 'anatomy-scan',
  'ogtt': 'ogtt',
  'move-hk': 'move-hk-waiting',
  'gbs': 'gbs-screen',
  'weekly-visits': 'term-visits',
  'maternity-photoshoot': 'maternity-photoshoot',
}

export const PRENATAL_STATE_LABELS: Record<PrenatalStatus, string> = {
  current: '当前阶段', next: '下一阶段', completed: '已完成', past: '已过窗口', future: '后续阶段',
}

export const PHOTO_STATE_LABELS: Record<PrenatalStatus, string> = {
  current: '本周打卡', next: '下次打卡', completed: '已拍摄', past: '可补拍', future: '待拍摄',
}

/** 宝宝每周平均大小（趣味对照，非医学指标） */
export const FRUIT_SIZES: Record<number, string> = {
  1: '芝麻粒', 2: '芝麻粒', 3: '芝麻粒', 4: '芝麻粒', 5: '苹果籽', 6: '小扁豆',
  7: '蓝莓', 8: '桑葚', 9: '青提', 10: '金桔', 11: '无花果', 12: '青柠',
  13: '豌豆荚', 14: '柠檬', 15: '苹果', 16: '牛油果', 17: '梨', 18: '甜椒',
  19: '番茄', 20: '香蕉', 21: '胡萝卜', 22: '丝瓜', 23: '西柚', 24: '玉米',
  25: '白萝卜', 26: '西葫芦', 27: '花椰菜', 28: '茄子', 29: '卷心菜', 30: '哈密瓜',
  31: '菠萝', 32: '椰子', 33: '木瓜', 34: '蜜瓜', 35: '冬瓜', 36: '长叶莴苣',
  37: '大白菜', 38: '小西瓜', 39: '西瓜', 40: '小南瓜',
}

export interface CountdownItem { label: string; date: string }

export const COUNTDOWNS: CountdownItem[] = [
  { label: 'NT检查', date: '2026-09-28' },
  { label: '澳洲出发', date: '2026-10-02' },
  { label: '香港建档（可改期）', date: PROFILE.hkBookingDate },
  { label: '大排畸窗口', date: '2026-11-16' },
  { label: '赴港待产', date: '2027-03-05' },
  { label: '预产期', date: '2027-04-05' },
]
