/** 办理条件核对于 2026.10.12；以实际办理时的官方指引及受理回执为准。 */
export const BABY_DOCUMENT_SOURCES = {
  birth: {
    label: '入境处：出生登记及新生儿旅行证件特别安排',
    url: 'https://www.immd.gov.hk/hkt/services/birth-death/Registration_of_a_Birth.html',
  },
  passport: {
    label: '入境处：特区护照及11岁以下儿童身份证申请',
    url: 'https://www.immd.gov.hk/hkt/service/travel_document/apply_for_hksar_passport.html',
  },
  reentry: {
    label: '入境处：回港证申请',
    url: 'https://www.immd.gov.hk/hkt/service/travel_document/Application_for_HKSAR_Re-entry_Permit.html',
  },
  mainland: {
    label: '香港中旅：回乡证申请须知',
    url: 'https://www.ctshk.com/mep/ch-chinapermit/',
  },
  temporary: {
    label: '香港中旅：临时通行证受理条件',
    url: 'https://www.ctshk.com/mep/zh/ch-chinapermitemp/',
  },
  experience: {
    label: '参考经验：港宝五证办理攻略（2025年12月7日）',
    url: 'https://www.xiaohongshu.com/explore/693562c1000000001d03f2e3',
  },
} as const
