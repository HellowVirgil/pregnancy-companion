/** 铁路公开指引核对于 2026.10.12；车次、席别和受理要求以实际出行时为准。 */
export const RETURN_HOME_SOURCES = {
  tickets: {
    label: '港铁高铁：购票途径、预售期及起售时间',
    url: 'https://www.highspeed.mtr.com.hk/tc/ticket/ticket-purchase-channels.html',
  },
  children: {
    label: '港铁高铁：儿童票及免费随行儿童',
    url: 'https://www.highspeed.mtr.com.hk/tc/ticket/ticket-type.html',
  },
  identity: {
    label: '港铁高铁：实名制及乘车证件',
    url: 'https://www.highspeed.mtr.com.hk/tc/ticket/real-name-checking.html',
  },
  departure: {
    label: '港铁高铁：西九龙乘车、通关及截闸流程',
    url: 'https://www.highspeed.mtr.com.hk/tc/guide/process-departure.html',
  },
} as const

export const RETURN_HOME_STEPS = [
  { taskId: 'hangzhou-care-contract', phase: '产前', title: '落实杭州月子中心', summary: '约定弹性入住、接站车辆、婴儿安全座椅、夜间抵达及延误处理。' },
  { taskId: 'return-rail-plan', phase: '购票准备', title: '核对证件与高铁路线', summary: '先确认宝宝实际可用证件，再比较西九龙直达或内地车站始发，核对杭州具体到站。' },
  { taskId: 'return-business-seat-booking', phase: '候选乘车日放票时', title: '购买商务座并准备改签', summary: '按起售时间购票或查询候补，保存退改规则；出生、办证及出院时间变化时同步调整。' },
  { taskId: 'birth-discharge-documents', phase: '出生后尽早', title: '落实出院日办证衔接', summary: '查医院出生呈报、预约和照片，争取出院日递交五证申请，逐项记录哪些已经领妥。' },
  { taskId: 'hk-recovery', phase: '预计出院前1天至当天', title: '确认母婴适合长途出行', summary: '分别向产科和儿科确认，并落实黄疸、体重、喂养和伤口等后续复查安排。' },
  { taskId: 'discharge-return-decision', phase: '出院当天启程前', title: '决定启程或续住', summary: '核对母婴意见、有效证件、车票与时间、中心接收；任一未落实则调整日期并启用备用住宿。' },
  { taskId: 'hangzhou-return-care', phase: '实际抵杭当天', title: '中心接站，直接入住', summary: '按确认的车站和车次接人，交接母婴记录、药物及复查要求，办理入住。' },
  { taskId: 'post-return-documents-followup', phase: '返杭后按通知', title: '衔接剩余领证与复查', summary: '落实护照、身份证等后续取证，核对宝宝本人到场要求，接续杭州复查。' },
] as const
