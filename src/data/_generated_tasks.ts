import type { Task } from '../types'
import { PROFILE, addDays, formatChineseDate, gestationOn } from '../lib/date'
import { BABY_DOCUMENT_SOURCES } from './babyDocuments'
import { RETURN_HOME_SOURCES } from './returnHome'

const hkBookingGestation = gestationOn(PROFILE.hkBookingDate)
const hangzhouBookingStart = addDays(PROFILE.lmp, PROFILE.hangzhouBookingWeek * 7)

    export const TASKS: Task[] = [
      {
        id: 'folic-medication', category: 'medical', title: '开始叶酸并逐项核查用药',
        start: '2026-07-29', end: '2026-08-09', gestation: '孕4周–5周+6天',
        why: '叶酸有助于降低胎儿神经管缺陷风险，早孕期也应尽快确认处方药、保健品和中药是否适合继续。',
        materials: ['当前所有药物和保健品清单', '慢性病及过敏史'],
        actions: ['普通风险通常每日叶酸0.4mg', '处方药不要自行停用，交由产科或原专科判断'],
        cautions: ['不要自行使用黄体酮、阿司匹林或肝素', '避免含高剂量维生素A的保健品']
      },
      {
        id: 'first-ultrasound', category: 'medical', title: '杭州首次B超',
        start: '2026-08-10', end: '2026-08-30', gestation: '孕6周–8周+6天',
        why: '确认宫内孕、胎数、胎心及孕周，并排除明显早孕异常。',
        materials: ['身份证/医保凭证', '末次月经日期', '既往孕产和手术史'],
        actions: ['无症状时安排在孕6–8周', '索取报告及电子影像'],
        cautions: ['过早检查可能看不到胎心，需要复查', '单侧剧痛、肩痛、晕厥或大量出血应立即急诊'], hardDeadline: true
      },
      {
        id: 'baseline-labs', category: 'medical', title: '完成首次产检和基础化验',
        start: '2026-08-24', end: '2026-09-27', gestation: '孕8周–12周+6天',
        why: '建立血型、感染、贫血、肝肾功能和血糖等基础资料。',
        materials: ['既往病历', '用药和过敏清单', '首次B超'],
        actions: ['按医院完成血常规、尿常规、血型/Rh、抗体、肝肾功能、血糖、乙肝、丙肝、梅毒、HIV等', '高风险时增加甲状腺、铁蛋白等项目'],
        cautions: ['不同医院项目不同，以产科医嘱为准']
      },
      {
        id: 'nipt', category: 'medical', title: '确定染色体筛查方案：无创 Plus',
        start: '2026-09-07', end: '2026-10-12', gestation: '孕10–15周 · 方案已确定',
        why: '已确定选择无创 Plus，本项记录筛查方案选择已完成。',
        materials: ['NT及既往超声报告', '医院提供的无创 Plus 项目说明', '家族史资料'],
        actions: ['保存所选项目说明，向接诊医生确认检测范围、局限和后续安排', '采血及报告进度在后续筛查跟进任务中分别记录'],
        cautions: ['无创DNA是筛查，不是确诊', '不能替代NT和系统超声']
      },
      {
        id: 'hangzhou-booklet', category: 'hangzhou', title: '办理杭州社区孕产妇建册',
        start: '2026-09-28', end: '2026-09-30', gestation: '孕13周–13周+1天',
        why: '社区建册已完成，已进入社区孕产妇公共卫生管理。',
        materials: ['已办理的社区小卡（母子健康手册）', '既往产检报告'],
        actions: ['保存母子健康手册，按后续产检安排携带', '向社区确认后续随访和产后服务衔接'],
        cautions: ['社区建册与医院产科建档分别记录']
      },
      {
        id: 'nt-scan', category: 'medical', title: '完成NT超声',
        start: '2026-09-28', end: '2026-09-28', gestation: '孕13周整 · 原预约',
        why: 'NT超声已完成，保存结果供后续筛查及香港产科衔接使用。',
        materials: ['NT正式报告', '超声影像及电子备份'],
        actions: ['归档NT报告及影像', '后续产检和香港建档时携带，按医生意见衔接无创 Plus 与系统结构超声'],
        cautions: ['检查结果按接诊医生解读；如需进一步评估，按医院安排办理']
      },
      {
        id: 'hk-to-sydney-flight', category: 'travel', title: '香港中转并飞往悉尼',
        start: '2026-10-02', end: '2026-10-02', gestation: '孕13周+4天',
        why: '澳洲旅行的香港中转和去程已完成，保留行程记录。',
        materials: ['航班和旅行资料', '已有文件电子备份'],
        actions: ['保留10月2日杭州经香港赴悉尼的航班记录'],
        cautions: ['东区医院正式建档另按当前预约办理']
      },
      {
        id: 'australia-sydney', category: 'travel', title: '澳大利亚旅行 · 悉尼段',
        start: '2026-10-03', end: '2026-10-04', gestation: '孕13周+5天–13周+6天',
        why: '红眼航班抵达后安排悉尼市区，并在10月4日晚转飞霍巴特。',
        materials: ['孕期英文摘要', '保险资料', '全部报告电子版', '叶酸和处方药'],
        actions: ['10月3日06:10抵达悉尼，市区景点只选3–4处', '10月4日包车路线在Kiama/Gerringong与Leura/Bowral/Taralga之间精简', '10月4日19:50–21:50悉尼飞霍巴特'],
        cautions: ['避免生食海鲜，长途车程每60–90分钟活动', '发生急症在澳大利亚拨打000'], hardDeadline: true
      },
      {
        id: 'australia-tasmania', category: 'travel', title: '澳大利亚旅行 · 塔斯马尼亚段',
        start: '2026-10-05', end: '2026-10-07', gestation: '孕14周–14周+2天',
        why: '玛利亚岛、霍巴特及布鲁尼岛多为户外或离岛行程，需保留天气和船班弹性。',
        materials: ['保暖防水外套', '防滑鞋', '饮水和加餐', '晕车/晕船处理方案'],
        actions: ['10月5日玛利亚岛', '10月6日霍巴特市区、MONA、Richmond及威灵顿山', '10月7日布鲁尼岛，21:00–22:20霍巴特飞墨尔本'],
        cautions: ['Salamanca Market只在周六，2026年10月6日无法安排', '岛上避免生蚝、生奶制品及靠近野生动物'], hardDeadline: true
      },
      {
        id: 'australia-melbourne', category: 'travel', title: '澳大利亚旅行 · 墨尔本与返程',
        start: '2026-10-08', end: '2026-10-11', gestation: '孕14周+3天–14周+6天',
        why: '大洋路、菲利普岛和返程夜航连续，需避免过度疲劳。',
        materials: ['靠过道座位', '保暖衣物', '加餐', '酒店/机场交通确认'],
        actions: ['10月8日大洋路与十二门徒石', '10月9日普芬比利与菲利普岛，动物园视体力取舍', '10月10日以墨尔本市区轻松步行为主', '10月11日00:45飞香港，09:20转飞上海，12:05抵达'],
        cautions: ['棕榈湾通常指凯恩斯附近Palm Cove，需核对地点', '大洋路每60–90分钟停车活动，返程后当天不安排工作'], hardDeadline: true
      },
      {
        id: 'anatomy-scan-booking', category: 'medical', title: '预约四维（大排畸）检查时间',
        start: '2026-10-12', end: '2026-11-15', gestation: '孕15周起 · 检查日期待预约',
        why: '四维检查时间尚未预约，先与接诊医院落实具体项目、日期和报到要求。',
        materials: ['NT报告', '既往超声及筛查资料', '就诊卡和可到院时间'],
        actions: ['联系接诊医院确认系统结构超声的预约方式及适合的检查日期', '预约成功后记录医院、院区、检查日期和准备要求', '预约完成后勾选本项，实际检查完成后再勾选四维/大排畸检查任务'],
        cautions: ['此处为提前预约的计划窗口，实际检查日期以接诊医院安排为准', '检查重点是系统结构评估，具体项目名称以医院为准']
      },
      {
        id: 'hk-booking-recheck', category: 'hong-kong', title: '确认东区医院建档日期及下次赴港安排',
        start: '2026-10-12', end: addDays(PROFILE.hkBookingDate, -1), gestation: '孕15周起 · 随预约调整',
        why: `已通过 HA Go 预约${formatChineseDate(PROFILE.hkBookingDate)}到东区医院建档，日期可能调整；下次赴港同步确定待产酒店。`,
        materials: ['HA Go 预约记录', '东区尤德夫人那打素医院联系方式（产科门诊 2595 7712）', '双方可赴港日期', '候选待产酒店清单'],
        actions: ['核对 HA Go 中的报到时间、地点和材料通知', '如需改期，按 HA Go 或医院指引办理并确认新日期', '确认预约后再安排交通，预留酒店考察和休息时间'],
        cautions: ['改期后以医院确认的新预约为准，并同步更新手册日期', '线上预约已完成，现场正式建档仍待办理']
      },
      {
        id: 'hangzhou-care-research', category: 'postpartum', title: '筛选可接站入住的杭州月子中心',
        start: '2026-10-12', end: '2026-11-15', gestation: '孕15周–19周+6天',
        why: '当前优先方案是香港出院办证后乘高铁商务座返杭，由杭州月子中心接站并直接入住。',
        materials: ['杭州候选月子中心清单', '预算范围', '高铁到站及接送需求', '家人支持安排'],
        actions: ['比较护理能力、费用、房型、夜间接收及接站服务', '确认是否接受香港出生宝宝、需要哪些入住所需证件和母婴出院资料', '询问母婴复查、就医转诊及入住日期变化时的安排'],
        cautions: ['具体中心尚待选定，居家月嫂可保留为备用方案', '中心接收需与母婴情况、有效入境证件及实际到站时间衔接']
      },
      {
        id: 'hk-sim-card', category: 'hong-kong', title: '核对香港手机号及医院联络方式',
        start: '2026-10-12', end: PROFILE.hkBookingDate, gestation: '孕15周起 · 随预约调整',
        why: 'HA Go 已预约成功，后续仍需接收预约通知并保持医院可联系。',
        materials: ['HA Go 注册手机号', '医院登记的紧急联系人', '手机及充电宝'],
        actions: ['确认香港手机号可接收短信和来电', '核对医院登记的本人及紧急联络号码', '保存预约截图和医院电话'],
        cautions: ['改期后留意 HA Go 及医院通知', '同时保留内地号码漫游作为备用']
      },
      {
        id: 'hk-address-declaration', category: 'hong-kong', title: '核对东区医院要求的香港住址材料',
        start: '2026-10-12', end: addDays(PROFILE.hkBookingDate, -1), gestation: '孕15周起 · 随预约调整',
        why: '现场建档的住址材料以本次医院通知为准，提前核对可减少补交往返。',
        materials: ['HA Go 预约通知', '现有香港住址资料', '孕妇香港身份证'],
        actions: ['向东区医院确认接受的住址证明及是否需要补交', '如需住址宣誓，先核对指定表格、真实住址和办理时段', '保存纸质原件与电子备份'],
        cautions: ['不要将待产酒店确认单自动视为医院认可的住址证明', '最终接受何种材料以医院答复为准']
      },
      {
        id: 'hk-pregnancy-certificate', category: 'hong-kong', title: '核对香港建档所需怀孕证明及产检资料',
        start: '2026-10-12', end: addDays(PROFILE.hkBookingDate, -1), gestation: '孕15周起 · 随预约调整',
        why: '已取得预约，下一步按东区医院通知核对怀孕证明、转介材料和杭州报告。',
        materials: ['已有怀孕证明或转介信（如有）', '杭州B超、筛查及化验报告', '母子健康手册', '预产期资料'],
        actions: ['确认已有证明和杭州报告是否符合医院要求', '如医院要求补开证明，再向家计会或认可医生确认办理方式', '整理报告原件和电子备份'],
        cautions: ['不因已预约就假定全部材料已通过审核', '是否需另做验孕或补交转介信，以医院通知为准']
      },
      {
        id: 'second-trimester-screen', category: 'medical', title: '跟进无创 Plus 检测与后续筛查安排',
        start: '2026-10-12', end: '2026-11-22', gestation: '孕15周–20周+6天',
        why: '无创 Plus 方案已确定，接下来核对实际采血进度、报告领取及后续产检安排。',
        materials: ['NT及既往筛查报告', '无创 Plus 项目说明及检测凭证（如有）', '家族史'],
        actions: ['向医院核对采血是否已安排、报告领取方式和预计出具时间', '取得报告后请医生解读，确认是否还需其他筛查或诊断', '高风险结果尽快遗传咨询'],
        cautions: ['不要自行把不同筛查结果当作确诊', '方案确定不代表检测或报告解读已完成']
      },
      {
        id: 'hk-waiting-hotel', category: 'hong-kong', title: '下次赴港建档时确定待产酒店',
        start: '2026-10-12', end: '2026-11-05', gestation: '孕15周–18周+3天 · 随赴港安排调整',
        why: `下次赴港正式建档时同步确定酒店，计划2027年3月5日前后入住待产；建档目前预约${formatChineseDate(PROFILE.hkBookingDate)}，可改期。`,
        materials: ['东区医院地址与预约记录', '候选酒店清单', '预算', '预计2027年3月5日至分娩及出院后的弹性住宿日期'],
        actions: ['赴港前初筛东区医院周边酒店或服务式公寓', '建档同次行程实地核对日夜交通、房间和洗衣条件', '优先选择可取消或改期的方案，确定酒店后记录房型、费用及条款'],
        cautions: ['11月5日为原计划比价参考，随实际赴港日期调整', '预留香港产后恢复和宝宝办证期间的续住弹性']
      },
      {
        id: 'hk-hago-booking', category: 'hong-kong', title: '通过 HA Go 预约东区医院建档',
        start: '2026-10-12', end: PROFILE.hkBookingDate, gestation: '孕15周起',
        why: '已通过 HA Go 成功预约东区尤德夫人那打素医院，线上预约这一步已完成。',
        materials: ['HA Go 预约确认记录'],
        actions: ['保存预约确认和通知', '后续如需改期，按医院指引更新预约'],
        cautions: [`当前预约为${formatChineseDate(PROFILE.hkBookingDate)}，日期可能调整`, '现场正式建档是另一项待办任务']
      },
      {
        id: 'hangzhou-care-visits', category: 'postpartum', title: '考察杭州月子中心及接站照护方案',
        start: '2026-10-15', end: '2026-11-30', gestation: '孕15周+3天–22周',
        why: '现场核对中心护理能力，并确认高铁抵杭后能直接接站入住。',
        materials: ['候选中心名单', '报价及合同样本', '人员健康、培训记录与真实客户评价', '接站服务说明'],
        actions: ['核对夜间护理比例、母乳支持、感染控制和儿科转诊', '询问发热、拒奶、窒息及黄疸加重时的就医安排', '确认接站覆盖的杭州车站、夜间到达、车辆与合适的婴儿安全座椅'],
        cautions: ['警惕暴力通乳、草药喂养、捂汗和不科学新生儿护理', '拒绝绑腿、挤乳头、给新生儿喂草药']
      },
      {
        id: 'hk-hospital-registration', category: 'hong-kong', title: '到东区医院正式建档（已预约，可改期）',
        start: PROFILE.hkBookingDate, end: PROFILE.hkBookingDate, gestation: `孕${hkBookingGestation.weeks}周+${hkBookingGestation.days}天（当前预约）`,
        why: 'HA Go 线上预约已完成，现场正式建档仍待办理；此次赴港同时确定待产酒店。',
        materials: ['HA Go 预约确认', '太太香港身份证及有效e-Visa', '医院要求的住址与怀孕证明', '母子健康手册及杭州产检报告', '预产期资料'],
        actions: ['按最终确认的预约时间和地点报到', '说明早中期在杭州产检、计划2027年3月初赴港待产', '记录后续香港产检安排及需补交项目', '同次行程考察候选待产酒店并确定住宿'],
        cautions: [`当前预约为${formatChineseDate(PROFILE.hkBookingDate)}，可能改期，以 HA Go 或医院最终确认为准`, '完成现场登记后再标记本项完成']
      },
      {
        id: 'hangzhou-care-contract', category: 'postpartum', title: '签约杭州月子中心并约定接站入住',
        start: '2026-11-15', end: '2026-12-31', gestation: '孕19周+6天–26周+3天',
        why: '为暂定的香港出院办证、高铁返杭、中心接站入住计划落实服务方，保留实际出生、出院及办证变化的弹性。',
        materials: ['中心合同', '房型及护理服务明细', '接站车辆和人员方案', '延期、退订及计费条款'],
        actions: ['约定按实际抵达安排入住及计费，写清房间保留、提前或延后入住规则', '写明接站范围、具体车站确认方式、婴儿安全座椅、夜间接收和等待费用', '约定列车改签、停运或办证延误时的接站变更和费用处理', '确认早产、NICU、母婴住院时暂停计费、保留或退款方式'],
        cautions: ['合同与接站不按预产期锁死，不将五证同日递交视为必然可以当天离港', '中心不是医院，异常情况按接诊医生要求就医']
      },
      {
        id: 'anatomy-scan', category: 'medical', title: '完成四维/系统结构超声（大排畸）',
        start: '2026-11-16', end: '2026-12-20', gestation: '孕20周–24周+6天',
        why: '系统评估胎儿主要器官结构和生长情况。',
        materials: ['既往超声和筛查报告'],
        actions: ['具体检查日期待预约确认，按医院安排完成系统结构超声', '保留报告和影像供香港医生审阅'],
        cautions: ['发现异常时按医生安排复查或转诊胎儿医学'], hardDeadline: true
      },
      {
        id: 'hk-anatomy-review', category: 'hong-kong', title: '让香港分娩医院审阅大排畸结果',
        start: '2026-11-20', end: '2026-12-31', gestation: '孕20周+4天–26周+3天',
        why: '提早确认香港医院是否接受杭州结果、是否需要重复检查。',
        materials: ['大排畸报告和影像', 'NT和染色体筛查结果'],
        actions: ['上传或带到香港预约', '记录医院要求补做的项目'],
        cautions: ['不要等到孕晚期才第一次提交完整病历']
      },
      {
        id: 'hk-address-hospital', category: 'hong-kong', title: '最终确认香港待产住址和分娩医院',
        start: '2026-12-01', end: '2027-01-10', gestation: '孕22周+1天–27周+6天',
        why: '公立产科按地址联网，待产酒店、分娩医院和急诊路线必须一致且明确。',
        materials: ['香港地址证明或酒店/服务式公寓确认单', '医院预约记录'],
        actions: ['确认分娩医院、急诊入口和酒店往返交通时间', '如选私立，取得完整费用及NICU报价'],
        cautions: ['变更住址后及时通知医院']
      },
      {
        id: 'ogtt', category: 'medical', title: '完成75g糖耐量检查',
        start: '2026-12-14', end: '2027-01-11', gestation: '孕24周–28周',
        why: '筛查妊娠期糖尿病。',
        materials: ['预约单', '医院要求的空腹准备'],
        actions: ['按医院要求空腹并完成规定时间点采血', '结果异常及时进入营养、血糖监测和产科管理'],
        cautions: ['不要自行改变检测流程或只测空腹血糖替代OGTT'], hardDeadline: true
      },
      {
        id: 'midpregnancy-labs', category: 'medical', title: '复查血常规和尿常规',
        start: '2026-12-14', end: '2027-01-11', gestation: '孕24周–28周',
        why: '评估贫血、尿蛋白和感染风险。',
        materials: ['既往化验结果'],
        actions: ['与糖耐量同阶段完成', '贫血时由医生决定铁剂和复查时间'],
        cautions: ['不要在未化验时自行长期大剂量补铁']
      },
      {
        id: 'maternity-photo-booking', category: 'hangzhou', title: '预约孕晚期孕妇照拍摄',
        start: '2026-12-21', end: '2027-01-03', gestation: '孕25周–26周+6天',
        why: '孕28–30周是孕肚形态最好、体力也跟得上的黄金拍摄期；靠谱摄影机构档期紧俏，且孕35周+4天就要赴港待产，必须提早锁定。',
        materials: ['预算与风格参考（棚拍/外景）', '杭州候选摄影机构清单'],
        actions: ['确认套系内容：服装套数、妆发、底片和精修数量', '优先室内棚拍并确认可随时改期', '预约时说明孕周，选择孕妇专用服装卫生达标的机构'],
        cautions: ['不要为拍照节食或穿着过度束缚腹部的款式', '避开需要长时间户外等待的外景套系']
      },
      {
        id: 'tdap', category: 'hong-kong', title: '按香港医院安排孕妇百日咳疫苗',
        start: '2026-12-28', end: '2027-02-22', gestation: '孕26周–34周',
        why: '通过母体抗体在出生早期保护宝宝，具体接种窗口遵循香港医院安排。',
        materials: ['孕妇身份证件', '疫苗和过敏史'],
        actions: ['向香港产科确认接种地点和日期'],
        cautions: ['发热或既往严重过敏时提前告知医生']
      },
      {
        id: 'maternity-photoshoot', category: 'hangzhou', title: '完成孕妇照拍摄',
        start: '2027-01-11', end: '2027-01-30', gestation: '孕28周–30周+5天',
        why: '孕28–30周孕肚圆润、浮肿较少、体力尚可，且离3月初赴港待产还有一个多月，是拍摄的黄金窗口。',
        materials: ['预约确认单', '舒服的平底鞋和保暖外套', '小食和饮水'],
        actions: ['拍摄控制在半天以内，中途充分休息', '以室内棚拍为主；如拍外景，1月严寒注意防滑保暖', '当天身体不适果断改期，不留遗憾也不硬撑'],
        cautions: ['避免高难度姿势和长时间站立', '化妆前告知化妆师孕周，避免使用刺激性产品']
      },
      {
        id: 'kick-counts', category: 'medical', title: '开始规律关注胎动',
        start: '2027-01-11', end: '2027-04-12', gestation: '孕28周起',
        why: '建立宝宝日常活动基线，便于识别明显变化。',
        materials: ['医生提供的胎动记录方法'],
        actions: ['按医院推荐方法观察和记录', '了解宝宝平时活跃时段'],
        cautions: ['胎动明显减少或与平时显著不同应立即联系产科，不等到第二天']
      },
      {
        id: 'growth-scan', category: 'medical', title: '孕晚期生长和胎盘评估',
        start: '2027-01-11', end: '2027-02-08', gestation: '孕28周–32周',
        why: '评估胎儿生长、羊水、胎盘及必要的血流情况。',
        materials: ['既往超声报告'],
        actions: ['按杭州或香港产科安排完成', '异常时按要求增加复查频率'],
        cautions: ['具体是否需要及检查次数由风险情况决定']
      },
      {
        id: 'hangzhou-hospital-record', category: 'hangzhou', title: '孕30周起办理省妇保正式建档',
        start: hangzhouBookingStart, end: addDays(PROFILE.hkWaitingStart, -1), gestation: '孕30周起 · 具体办理日期待定',
        why: '已确认省妇保正式建档需到孕30周办理；此前继续按医生安排产检，社区建册已完成。',
        materials: ['社区母子健康手册', '历次B超、NT、筛查和化验报告', '身份证及医保资料', '医院要求的预约或建档材料'],
        actions: ['孕30周从' + formatChineseDate(hangzhouBookingStart) + '开始，提前向省妇保核对办理日期、科室和材料', '按医院确认的时间完成正式建档，并整理后续赴港所需病历'],
        cautions: ['此处为孕30周起至赴港前的计划窗口，不代表已取得具体日期的预约', '正式建档时间不影响按医生安排完成此前的产检']
      },
      {
        id: 'records-handoff', category: 'hong-kong', title: '完成杭州到香港的病历交接',
        start: '2027-02-08', end: '2027-03-04', gestation: '孕32周–35周+3天',
        why: '让最终分娩团队掌握预产期、血型、感染筛查、遗传筛查和超声情况。',
        materials: ['孕期摘要', '血型/Rh和抗体', '传染病报告', 'NT/无创/大排畸', '糖耐量', '用药过敏史'],
        actions: ['赴港前准备纸质原件、电子版和超声影像', '需要时制作英文摘要', '提前发给香港医院审阅并确认到港首诊'],
        cautions: ['香港医院可能因时效或标准重复部分检查']
      },
      {
        id: 'birth-plan', category: 'hong-kong', title: '确认分娩、麻醉和陪产方案',
        start: '2027-02-08', end: '2027-03-08', gestation: '孕32周–36周',
        why: '明确自然分娩、剖宫产指征、镇痛、陪产和新生儿安排。',
        materials: ['医院分娩须知', '既往手术史', '保险和费用资料'],
        actions: ['参加医院产前课程或助产咨询', '了解何时入院和如何联系产房'],
        cautions: ['分娩方式以母婴安全和临床情况为准']
      },
      {
        id: 'baby-documents-preparation', category: 'documents', title: '准备港宝五证材料与办理路线',
        start: '2027-02-08', end: addDays(PROFILE.hkWaitingStart, -1), gestation: '孕32周起 · 赴港前准备',
        why: '先准备出世纸、香港永久性居民身份证、特区护照、回港证及回乡证的材料，出生后按实际身份和受理安排办理。',
        materials: ['父母香港身份证、有效旅行证件及签注/e-Visa', '结婚证及所需翻译件', '宝宝中英文姓名备选', '副署人联络方式及身份证明材料'],
        actions: ['向入境处核对宝宝的国籍、居留权及各证件申请条件，不将父母优才或受养人身份直接等同于宝宝证件资格', '准备最新表格：出生登记资料BDR93A、儿童护照ID842、儿童永久身份证ROP3、儿童回港证ID73A及副署事项ID641（按受理要求）', '提前了解新生儿照片规格及回乡证照片合格检测回执要求，出生后再拍摄', '核对出生登记处、入境处分区办事处和中旅网点的预约、营业时间及交通，预留喂养和休息时间'],
        cautions: ['父母其中一方为香港永久性居民等条件满足时，才可使用全程网上出生登记；网上预约亲身办理是另一项服务', '后续日期以预产期暂排，出生后按实际生日、预约和领证回执调整'],
        references: [BABY_DOCUMENT_SOURCES.birth, BABY_DOCUMENT_SOURCES.passport, BABY_DOCUMENT_SOURCES.mainland]
      },
      {
        id: 'visa-doc-check', category: 'documents', title: '复核全家身份和入院文件',
        start: '2027-02-08', end: '2027-03-01', gestation: '孕32周–35周',
        why: '确保优才e-Visa、香港身份证、地址证明和结婚证在入院及出生登记时可用。',
        materials: ['父母香港身份证', 'e-Visa', '旅行证件', '结婚证及翻译件（如需）'],
        actions: ['保存纸质及云端/本地电子备份', '核对e-Visa准确到期日'],
        cautions: ['香港身份证不显示逗留许可到期日，e-Visa要单独保存']
      },
      {
        id: 'hangzhou-care-reconfirm', category: 'postpartum', title: '赴港前复核杭州中心接站及弹性入住',
        start: '2027-02-08', end: '2027-03-01', gestation: '孕32周–35周',
        why: '把香港分娩、出院办证、高铁商务座与杭州中心接站入住的责任人和联络方式提前串好。',
        materials: ['月子中心合同', '接站负责人及24小时联络方式', '香港可续住住所与照护备选', '高铁路线候选'],
        actions: ['复核中心房型、接站覆盖范围、车辆和婴儿安全座椅', '确认母婴入住所需证件、检查与出院资料，以及夜间到达如何接收', '约定出院、办证或车票变化时通知中心的方式，保留香港续住和复查备选'],
        cautions: ['宝宝没有获认可的内地入境证件前不能进入内地', '实际出发前仍须再次确认母婴情况、有效证件、车票及中心接收']
      },
      {
        id: 'return-rail-plan', category: 'travel', title: '核对返杭商务座路线与宝宝证件要求',
        start: '2027-02-08', end: addDays(PROFILE.hkWaitingStart, -1), gestation: '赴港前 · 抢票准备',
        why: '先确认宝宝可能实际持有的证件能走哪条路线，再安排出院日办证与商务座购票。',
        materials: ['西九龙至杭州及内地车站始发的候选路线', '宝宝预计办证路径', '12306乘车人资料', '月子中心可接站范围'],
        actions: ['向12306或港铁核对宝宝的有效乘车证件及身份核验方式；向入境部门核对所选口岸可用的入境证件', '比较西九龙直达与经确认口岸入境后从内地车站始发的路线，核对商务座、运行时间、换乘和杭州具体到站', '把出院、办证、喂养休息、市区交通、通关和列车发车时刻放在同一份行程中倒排', '核对同行成人实名资料，查询起售时间、退改规则及无票时的后续候选日期'],
        cautions: ['不能默认临时通行证、回港证或出世纸可用于西九龙高铁乘车', '不提前写死2027年车次或杭州到站；所选车次需在实际放票时再次核对'],
        references: [RETURN_HOME_SOURCES.identity, RETURN_HOME_SOURCES.tickets, RETURN_HOME_SOURCES.departure]
      },
      {
        id: 'move-hk', category: 'hong-kong', title: '提前一个月赴香港待产',
        start: '2027-03-05', end: '2027-03-05', gestation: '孕35周+4天',
        why: '按2027年4月5日预产期倒推约一个月到香港，减少临产前跨境的不确定性。',
        materials: ['待产酒店确认单', '全部病历', '日常用药', '待产包', '紧急联系人'],
        actions: ['出发前完成产科评估并确认适合跨境', '到港入住后立即熟悉分娩医院和最近急诊路线', '按香港医院安排完成后续产检'],
        cautions: ['出现宫缩、出血、破水、胎动异常或医生不建议出行时，应就近就医并调整计划'], hardDeadline: true
      },
      {
        id: 'gbs', category: 'medical', title: '完成B族链球菌GBS筛查',
        start: '2027-03-08', end: '2027-03-22', gestation: '孕36周–37周+6天',
        why: '帮助分娩团队判断临产时是否需要抗生素预防新生儿感染。',
        materials: ['香港医院预约及病历'],
        actions: ['按最终分娩医院安排采样', '把结果放入待产文件袋'],
        cautions: ['阳性不等于患病，按产科方案处理'], hardDeadline: true
      },
      {
        id: 'position-final', category: 'medical', title: '确认胎位、生长和分娩准备',
        start: '2027-03-08', end: '2027-03-22', gestation: '孕36周–37周+6天',
        why: '为分娩方式和临产计划提供依据。',
        materials: ['既往超声和产检记录'],
        actions: ['确认胎位、羊水和必要的胎心监测', '准备待产包和交通方案'],
        cautions: ['不要自行尝试高风险胎位纠正方法']
      },
      {
        id: 'weekly-visits', category: 'medical', title: '进入足月期每周产检',
        start: '2027-03-15', end: '2027-04-12', gestation: '孕37周–41周',
        why: '监测血压、胎心、胎动、羊水和临产情况。',
        materials: ['完整待产文件袋', '胎动记录'],
        actions: ['按香港医院预约每周复诊', '手机保持可联系并准备随时入院'],
        cautions: ['实际频率按母婴风险和医院安排调整']
      },
      {
        id: 'labor-signs', category: 'medical', title: '识别临产和必须立即入院的信号',
        start: '2027-03-15', end: '2027-04-12', gestation: '孕37周–41周',
        why: '足月后随时可能发动，破水、出血或胎动异常不能等待下次预约。',
        materials: ['医院产房电话', '交通路线', '待产包'],
        actions: ['了解规律宫缩、破水和见红的区别', '按医院指引联系产房'],
        cautions: ['大量出血、持续剧痛、胎动明显减少、严重头痛视物异常时立即就医'], hardDeadline: true
      },
      {
        id: 'return-business-seat-booking', category: 'travel', title: '按放票时间购买返杭高铁商务座',
        start: addDays(PROFILE.dueDate, -14), end: addDays(PROFILE.dueDate, 42), gestation: '候选乘车日放票时 · 日期可调整',
        why: '提前争取商务座，同时为分娩、出院和办证时间变化保留退改余地。',
        materials: ['已核对证件要求的路线', '候选乘车日期和车次', '同行成人实名资料', '12306账号及支付方式', '退改规则记录'],
        actions: ['按候选乘车日在12306查询起售日并设置日历提醒；目前预售15天，西九龙始发新一日车票8:00起售，其他站按实际查询', '开售时购买商务座，无票时查询官方候补支持情况或调整候选日期', '先按可退改的候选安排购买成人票；宝宝证件资料齐备后按铁路确认要求完成核验及免费儿童申报，需独占席位时按规则购儿童票', '保存订单及退改费用、时限；实际出院、办证或中心入住变化时及时改签并通知接站人'],
        cautions: ['已买成人票不代表宝宝已具备乘车条件，不能填写虚构的宝宝证件信息', '未买到商务座时重新协调日期或路线，不默认更换席别', '预产期不是确定的出院或返杭日期，车次和预售规则出行前再次确认'],
        references: [RETURN_HOME_SOURCES.tickets, RETURN_HOME_SOURCES.children, RETURN_HOME_SOURCES.identity]
      },
      {
        id: 'due-date', category: 'medical', title: '暂定预产期',
        start: '2027-04-05', end: '2027-04-05', gestation: '孕40周',
        why: '预产期只是估算日期，多数宝宝不会恰好在当天出生。',
        materials: ['医院预约和待产资料'],
        actions: ['继续按医院安排监测'],
        cautions: ['不要因到了预产期仍未发动而自行使用催产方法'], hardDeadline: true
      },
      {
        id: 'newborn-screening', category: 'documents', title: '完成新生儿住院期项目',
        start: '2027-04-05', end: '2027-04-12', gestation: '预计出生后首周',
        why: '衔接疫苗、听力、代谢筛查、黄疸和喂养评估。',
        materials: ['父母证件', '医院新生儿记录'],
        actions: ['确认乙肝疫苗、卡介苗及各项筛查记录', '保存中英文出院摘要'],
        cautions: ['发热、拒奶、呼吸异常、嗜睡或黄疸快速加深应立即就医']
      },
      {
        id: 'birth-discharge-documents', category: 'documents', title: '出生后落实医院呈报及出院日办证预约',
        start: PROFILE.dueDate, end: addDays(PROFILE.dueDate, 42), gestation: '出生后尽早 · 预计出院日前复核',
        why: '争取出院当天衔接五证申请，先确认医院呈报、受理预约和所需材料是否已经就绪。',
        materials: ['宝宝实际出生资料和中英文姓名', '父母证件及结婚证', '五证表格、宝宝照片及检测回执', '预计出院时间、办证预约和候选列车时刻'],
        actions: ['出生后及时向医院确认出生呈报进度，无需等到出院当天才查询', '呈报后预约出生登记，并核对入境处新生儿特别安排和中旅婴儿预约绿色通道', '出院日前复核周末、公众假期、窗口营业及预约时段，确认每一步的材料和到场人员', '符合条件时由家长一人先办出生登记；需要宝宝到场的后续申请安排监护人陪同', '争取同日递交五证申请，逐项记录受理、补件和实际领证状态；办证或领证时间衔接不上列车时及时改期'],
        cautions: ['身份证、护照和正式回乡证通常有处理时间，不能把五证同日递交当作全部即日领证', '不能为了赶当天车次跳过身份核定、有效入境证件或医院安排的复查'],
        references: [BABY_DOCUMENT_SOURCES.birth, BABY_DOCUMENT_SOURCES.passport, BABY_DOCUMENT_SOURCES.mainland]
      },
      {
        id: 'hk-recovery', category: 'postpartum', title: '出院前确认母婴长途乘车及复查安排',
        start: PROFILE.dueDate, end: addDays(PROFILE.dueDate, 42), gestation: '预计出院前1天至当天 · 按实际住院进度',
        why: '暂定出院日办证并衔接高铁返杭，需分别确认妈妈和宝宝是否适合当次长途行程。',
        materials: ['母婴出院摘要', '用药与护理记录', '宝宝筛查、黄疸、体重及喂养记录', '候选路线和预计门到门耗时'],
        actions: ['分别向产科和儿科说明办证、通关及长途高铁安排，确认是否适合出行或需先留院、复诊', '确认预计出院时间，取得母婴出院文件、用药及需要继续观察的事项', '落实宝宝黄疸、体重和喂养复查及未完成筛查，核对可否在杭州衔接及最迟复查时间', '若当天不适合出发，按医院意见安排留院或启用香港备用住所和照护'],
        cautions: ['出院不等于适合长途旅行，不能因已出票而推迟医生要求的复查', '自然分娩或剖宫产均按医生确认适合后再跨境；实际返杭时间按母婴状态调整']
      },
      {
        id: 'birth-registration', category: 'documents', title: '港宝五证①：出生登记及出世纸',
        start: PROFILE.dueDate, end: addDays(PROFILE.dueDate, 42), gestation: '实际出生后42天内',
        why: '出世纸是香港出生证明书，也是后续宝宝身份及旅行证件办理的起点。',
        materials: ['父母香港身份证及有效旅行证件原件', '结婚证及核证翻译（如需）', '宝宝中英文姓名', '出生登记所需资料BDR93A或网上预填资料'],
        actions: ['先向出生医院确认已将出生呈报表送交登记处，再网上或电话预约', '按安排到出生区域登记处或将军澳出生登记处办理，并申领出生登记记项核证副本（出世纸）', '核对宝宝姓名、父母资料及第11项身份注明，保存纸质原件和电子备份', '拟同日递交新生儿旅行证件时，提前核对特别安排的资格、材料及到达时限'],
        cautions: ['婚生子女通常由父母一方到场即可，宝宝无需到场；其他情况按登记处要求', '42天从实际出生日期计算；全程网上登记需满足父母其中一方为香港永久性居民等条件', '同日递交旅行证件不等于五证同日全部领妥'], hardDeadline: true,
        references: [BABY_DOCUMENT_SOURCES.birth]
      },
      {
        id: 'baby-hk-identity-card', category: 'documents', title: '港宝五证②：香港永久性居民身份证',
        start: PROFILE.dueDate, end: addDays(PROFILE.dueDate, 42), gestation: '出生登记后 · 与首次护照申请衔接',
        why: '符合资格、未满11岁且尚无永久性居民身份证的宝宝，首次申请特区护照时须同时递交身份证申请。',
        materials: ['宝宝出世纸及身份核定资料', '父母或合法监护人的有效身份证明', 'ROP3申请表', '符合当前要求的宝宝近照及副署资料'],
        actions: ['核对宝宝的香港永久性居民资格', '由父母或合法监护人填写并签署ROP3，与儿童护照申请一并递交', '记录申请编号和领证安排，领到身份证后核对资料并标记本项完成'],
        cautions: ['父母的香港身份证不代替宝宝本人的身份核定', '此处是未满11岁首次护照关联的身份证申请安排，具体要求以入境处为准'],
        references: [BABY_DOCUMENT_SOURCES.passport]
      },
      {
        id: 'baby-hksar-passport', category: 'documents', title: '港宝五证③：香港特区护照',
        start: PROFILE.dueDate, end: addDays(PROFILE.dueDate, 42), gestation: '出生登记后 · 按领证通知办理',
        why: '特区护照需符合中国公民及香港永久性居民等申请条件，可与宝宝首次永久性居民身份证申请衔接。',
        materials: ['出世纸', '儿童护照ID842及身份证ROP3表格（如适用）', '同意申请的父母或监护人证件', '符合要求的白底彩色近照', 'ID641副署事项及副署人身份证明副本（如适用）'],
        actions: ['按入境处指引递交申请；符合新生儿同日特别安排时，可持当天签发且第11项符合要求的出世纸、带宝宝前往分区办事处', '核对照片数量和表格要求；新生儿特别安排目前列明护照白底彩照3张', '保存领证通知，按指定日期和到场要求领取护照，核对姓名与出生日期后标记完成'],
        cautions: ['目前未满11岁且尚无永久身份证的申请，材料齐全后处理时间为10个工作天内；领证、补件和邮寄另留时间', '如果不符合新生儿同日特别安排，按正常预约及递交方式办理'],
        references: [BABY_DOCUMENT_SOURCES.passport, BABY_DOCUMENT_SOURCES.birth]
      },
      {
        id: 'baby-hk-reentry-permit', category: 'documents', title: '港宝五证④：多次有效回港证',
        start: PROFILE.dueDate, end: addDays(PROFILE.dueDate, 42), gestation: '出生登记后 · 返内地前核对用途',
        why: '回港证用于香港出入境手续；宝宝身份证和护照尚未领妥时，可按资格申请，并衔接回乡证材料要求。',
        materials: ['宝宝出世纸', '儿童回港证ID73A申请表', '同意申请的父母或监护人证件', '宝宝近照及ID641副署资料'],
        actions: ['宝宝由父母或合法监护人陪同办理；符合新生儿特别安排时可与护照同日递交，否则先按指引预约', '拟用于回乡证申请时，核对申领具中文姓名的多次有效回港证；新生儿特别安排目前列明照片2张', '材料齐全的亲身申请一般可即日办妥，取得证件并核对有效期后标记完成'],
        cautions: ['回港证不能代替进入内地所需的回乡证或其他获认可证件', '未满11岁宝宝如已持有效本地签发永久身份证及特区护照，在香港管制站可按规定使用该组合，无需重复申领回港证'],
        references: [BABY_DOCUMENT_SOURCES.reentry, BABY_DOCUMENT_SOURCES.birth, BABY_DOCUMENT_SOURCES.mainland]
      },
      {
        id: 'baby-mainland-travel-permit', category: 'documents', title: '港宝五证⑤：回乡证',
        start: PROFILE.dueDate, end: addDays(PROFILE.dueDate, 42), gestation: '身份材料齐备后 · 按中旅回执领证',
        why: '回乡证是港澳居民来往内地通行证；本计划按在香港出生、具有中国国籍的香港永久性居民路径准备，实际资格由受理部门核定。',
        materials: ['宝宝出世纸', '具中文姓名的宝宝香港身份证；未满11岁尚未领取身份证时按规定提交多次有效回港证', '宝宝特区护照；尚未领取时按中旅要求提供父母中国国籍证明等材料', '父母或监护人身份证明、有效旅行证件及关系证明', '近半年白底照片及合格检测回执', '预约记录、全部材料原件和所需A4复印件'],
        actions: ['在香港中旅网上填写资料并预约，查询未满3个月婴儿的预约绿色通道', '由合法监护人陪同宝宝亲自递交，核对多次回港证等香港旅行证件有效期须在半年以上的要求', '保存回乡证申请及领证回执，记录预计取证日；目前普通件预定12个工作日，加急预定5个工作日', '按回执领取或确认寄递安排，证件到手并核对资料后标记完成'],
        cautions: ['宝宝首次申请须本人到场；材料以中旅对应身份类别的最新清单为准', '加急和实际取证时间受审批、补件及邮寄影响，不能凭申请回执直接进入内地'],
        references: [BABY_DOCUMENT_SOURCES.mainland]
      },
      {
        id: 'baby-travel-doc', category: 'documents', title: '返杭前核对宝宝通关、乘车及再次回港证件',
        start: PROFILE.dueDate, end: addDays(PROFILE.dueDate, 42), gestation: '启程前 · 按实际领证及所选路线',
        why: '内地入境、香港出入境和铁路实名各有证件要求，需与本次高铁路线一起核实。',
        materials: ['宝宝出世纸', '已签发的回乡证或获确认适用的有效入境证件', '香港出入境所需有效证件', '铁路确认可用的宝宝证件及儿童乘车申报', '父母证件及领证回执'],
        actions: ['分别确认所选口岸接受的出入境证件，以及12306或港铁接受的实名乘车证件', '如需临时通行证，先向12367及拟受理口岸核实资格、签发与使用范围，再向铁路核对能否用于所选行程', '正式证件签发并可用、宝宝资料核验与乘车申报落实后，再确认启程；尚未领取的其他证件另排领证任务'],
        cautions: ['回乡证申请回执不能代替有效入境证件，回港证也不是内地入境许可', '不将某陆路口岸可用的临时通行证自动视为西九龙可用的购票、通关和乘车证件', '正式回乡证已可用时无需另办临时通行证；条件未确认时保留续住及改签安排'],
        references: [BABY_DOCUMENT_SOURCES.mainland, BABY_DOCUMENT_SOURCES.reentry, BABY_DOCUMENT_SOURCES.temporary, RETURN_HOME_SOURCES.identity, RETURN_HOME_SOURCES.children]
      },
      {
        id: 'center-station-pickup-confirmation', category: 'postpartum', title: '出发前确认杭州中心接站及当天入住',
        start: PROFILE.dueDate, end: addDays(PROFILE.dueDate, 42), gestation: '实际启程前 · 列车变更后重确认',
        why: '把车票上的准确车站、抵达时间和中心接送排班落实到人，确保到站后可以直接入住。',
        materials: ['已确认的车次、日期、到站及抵达时间', '中心入住确认', '接站人电话、出口及车辆信息', '母婴入住资料清单'],
        actions: ['把车票上的杭州具体站名、车次和抵达时间通知中心，避免混淆杭州东、杭州西等车站', '确认接站人员、接人出口、行李协助、车辆及合适的婴儿安全座椅', '再次确认房间、夜间到达的接收人员、入住资料和费用起算', '约定列车晚点、改签或未能离港时如何通知、调整接站和保留房间'],
        cautions: ['临时换车次或到站后必须重新确认接站', '中心尚未确认房间和接收条件时，不把直接入住视为已落实']
      },
      {
        id: 'discharge-return-decision', category: 'postpartum', title: '出院当天确认启程或启用备用安排',
        start: PROFILE.dueDate, end: addDays(PROFILE.dueDate, 42), gestation: '出院当天 · 启程前最后核对',
        why: '暂定出院日办证后衔接返杭，把是否能执行交给当天已经确认的条件。',
        materials: ['产科和儿科的出院及长途出行意见', '宝宝有效出入境和乘车证件', '商务座订单及宝宝乘车申报', '月子中心接站入住确认', '香港备用住所与照护联系人'],
        actions: ['核对妈妈和宝宝均适合当次长途行程，医生要求的复查已安排', '核对宝宝有效证件已经签发，所选口岸与铁路均可使用，实名核验及儿童申报已落实', '核对办证结束、休息、交通和通关时间足够衔接已购商务座', '核对杭州中心的接站、房间和抵达时接收人员均已确认', '全部确认后再启程；任一未落实，按需要留院或续住香港，改签并通知中心延期'],
        cautions: ['车票和中心定金不作为勉强出行的理由', '出现明显出血、发热、伤口异常或宝宝状态不稳时按医院指引就医'],
        references: [RETURN_HOME_SOURCES.identity, RETURN_HOME_SOURCES.departure]
      },
      {
        id: 'return-train-journey', category: 'travel', title: '乘高铁商务座返杭并同步接站信息',
        start: PROFILE.dueDate, end: addDays(PROFILE.dueDate, 42), gestation: '实际返杭日 · 完成启程核对后',
        why: '将香港办证后的路程、车站手续和杭州接站连续衔接，减少临时找车和搬运行李。',
        materials: ['与购票及儿童申报一致的有效证件', '商务座订单', '宝宝喂养与更换用品', '母婴所需药物和病历', '接站人及医院联络方式'],
        actions: ['按已确认路线到出发站，为宝宝喂养、换洗和人工核验预留时间，由同行家人协助行李', '如从西九龙出发，核对当前流程：最早发车前90分钟可办理手续，实名验证和检票于发车前30分钟停止，登车闸机于前5分钟关闭，并按当天通知执行', '事先向铁路确认婴儿车、提篮、行李摆放及所需协助，不把商务座等同于婴儿照护设施', '旅途中按医嘱照护母婴，出现不适及时联系乘务人员；开车及列车晚点时同步杭州接站人'],
        cautions: ['铁路公布的最快办理时间不包含完整的市区接驳和全部排队缓冲', '宝宝免费乘车也需按规定出示证件并完成申报，不凭成人订单或证件照片替代所需原件'],
        references: [RETURN_HOME_SOURCES.departure, RETURN_HOME_SOURCES.children, RETURN_HOME_SOURCES.identity]
      },
      {
        id: 'hangzhou-return-care', category: 'postpartum', title: '杭州月子中心接站并直接入住',
        start: PROFILE.dueDate, end: addDays(PROFILE.dueDate, 42), gestation: '实际抵杭当天 · 随出院及返程调整',
        why: '暂定商务座抵杭后由已落实的月子中心接人，减少途中另行搬运行李和办理住宿。',
        materials: ['中心合同及入住确认', '接站人和车辆信息', '宝宝有效证件', '母婴出院资料、用药与复查记录'],
        actions: ['抵达确认的杭州车站后与接站人会合，核对车辆及适合宝宝的安全座椅', '由家人或接站人员协助行李及妈妈行动，直接前往中心办理入住', '交接喂养、体重、黄疸、妈妈伤口与用药记录，以及后续复查和疫苗时间', '核对入住计费起点、护理联系人和医生已要求的复查安排'],
        cautions: ['妈妈仍大量出血、发热、伤口异常或宝宝状态不稳时不要转运', '需要就医时按医院指引处理，不能用中心护理替代必要的产科或儿科复查']
      },
      {
        id: 'post-return-documents-followup', category: 'documents', title: '落实返杭后剩余领证及母婴复查',
        start: PROFILE.dueDate, end: addDays(PROFILE.dueDate, 42), gestation: '返杭后 · 按领证通知和医嘱日期',
        why: '如果先持已获确认的有效证件返杭，仍需把尚未领妥的五证和母婴复查逐项接续。',
        materials: ['各证件受理及领证回执', '已签发的出入境证件', '授权要求（如适用）', '母婴出院和复查安排', '杭州中心联络方式'],
        actions: ['逐项确认身份证、护照等剩余领证日期、地点及宝宝本人是否必须到场，不默认均可代领或邮寄', '若须回港领证，先核对宝宝往返所需有效证件、同行家长和照护安排', '每份证件实际领到后再勾选相应五证任务，核对姓名、有效期并备份', '按出院医嘱在杭州接续宝宝黄疸、体重、喂养与筛查随访，以及妈妈产后复查，不能统一等到月子结束'],
        cautions: ['回执、授权或寄递方式的要求以对应签发机关通知为准', '医生要求提前复查或出现异常时，优先就医，不等待领证行程'],
        references: [BABY_DOCUMENT_SOURCES.passport, BABY_DOCUMENT_SOURCES.reentry, BABY_DOCUMENT_SOURCES.mainland]
      },
      {
        id: 'induction-discussion', category: 'medical', title: '孕41周仍未分娩时讨论催产',
        start: '2027-04-12', end: '2027-04-12', gestation: '孕41周',
        why: '过期妊娠需要由产科结合宫颈、胎心、羊水等评估处理。',
        materials: ['近期产检和监测结果'],
        actions: ['遵循分娩医院安排'],
        cautions: ['不得在家自行催产'], hardDeadline: true
      },
      {
        id: 'postpartum-check', category: 'medical', title: '妈妈产后复查',
        start: '2027-05-10', end: '2027-05-24', gestation: '预计产后5–7周',
        why: '评估子宫恢复、伤口、血压、盆底、哺乳和心理状态。',
        materials: ['分娩和出院记录', '当前用药', '症状记录'],
        actions: ['按分娩医院建议安排约6周复查', '主动完成产后抑郁筛查'],
        cautions: ['大量出血、发热、胸痛气促、单侧腿肿或明显情绪危机无需等到复查日']
      },
    ];
