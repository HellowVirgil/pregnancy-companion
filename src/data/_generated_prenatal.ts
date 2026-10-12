import type { PrenatalMilestone } from '../types'

    export const PRENATAL_MEDICAL: PrenatalMilestone[] = [
      {
        id: 'early-confirmation', title: '孕早期确认与生活管理', railLabel: '现在', railRow: 0, gestation: '孕4–5周',
        start: '2026-07-27', end: '2026-08-09', place: '杭州', summary: '叶酸、用药审查和异常症状观察',
        actions: ['每天补充医生建议剂量的叶酸', '整理处方药、非处方药、中药和保健品清单，请医生或药师确认', '如有基础疾病，联系原专科和产科确认方案'],
        why: ['降低神经管缺陷风险', '尽早排除孕期不适用药物'],
        preparation: ['记录末次月经和验孕日期', '准备既往病史、过敏史和用药清单'],
        questions: ['是否需要因症状或病史检查HCG、孕酮或提前超声', '现有药物哪些需要继续、调整或停用'],
        warnings: ['明显出血', '持续、剧烈或单侧腹痛', '晕厥、肩痛、发热或严重呕吐脱水']
      },
      {
        id: 'first-ultrasound', title: '首次早孕超声', railLabel: '首次超声', railRow: 1, gestation: '孕6–8周',
        start: '2026-08-10', end: '2026-08-30', place: '杭州 · 已完成', summary: '已完成多次早孕复诊，已见胎心胎芽',
        actions: ['继续保存历次B超报告和电子影像', '按接诊医生安排后续复诊'],
        why: ['确认孕囊位置并排除宫外孕', '核对胚胎数量和孕周'],
        preparation: ['询问是否需要憋尿', '携带验孕结果和症状记录'],
        questions: ['孕周与末次月经是否一致', '何时安排下一次正式产检'],
        warnings: ['疼痛或出血加重时不要等待预约']
      },
      {
        id: 'baseline-booking', title: '首次正式产检与社区建册', railLabel: '初检建册', railRow: 0, gestation: '孕8–13周+1天',
        start: '2026-08-24', end: '2026-09-30', place: '杭州', summary: '社区建册已完成；基础检查按实际记录，省妇保正式建档另待孕30周',
        actions: ['社区小卡（母子健康手册）已办妥，保存并随产检携带', '省妇保正式建档待孕30周，具体办理日按医院通知（见任务清单）', '按实际检查结果记录基础血液、尿液和感染筛查进度'],
        why: ['建立孕期基线并保证杭州到香港病历连续'],
        preparation: ['身份证、居住和医保材料按社区要求准备', '确认哪些抽血项目需要空腹'],
        questions: ['报告和超声影像如何导出', '转香港时需要哪些原件或英文资料'],
        warnings: ['建档项目和空腹要求以医院通知为准']
      },
      {
        id: 'aneuploidy-choice', title: '染色体筛查方案：无创 Plus', railLabel: '无创 Plus', railRow: 1, gestation: '约孕10周起',
        start: '2026-09-07', end: '2026-12-06', place: '杭州', summary: '已确定无创 Plus；采血和报告进度按实际情况另行记录',
        actions: ['保存无创 Plus 项目说明并向医生确认检测范围与局限', '跟进采血及报告领取安排，报告出具后请接诊医生解读'],
        why: ['不同方案的筛查范围、准确性、费用和侵入性不同'],
        preparation: ['准备夫妻双方家族史和既往妊娠史'],
        questions: ['无创 Plus 采血安排与报告周期', '什么结果需要遗传咨询或进一步诊断'],
        warnings: ['筛查不是确诊，高风险结果需要专业评估']
      },
      {
        id: 'nt-scan', title: 'NT检查', railLabel: 'NT · 已完成', railRow: 0, railPriority: true, gestation: '孕13周整（原预约）',
        start: '2026-09-14', end: '2026-10-04', appointment: '2026-09-28', place: '杭州 · 省妇保湖滨院区', summary: 'NT超声已完成，保存报告及影像供后续产检衔接',
        actions: ['归档正式报告和影像资料并保存电子版', '后续产检和香港建档时携带NT资料'],
        why: ['保存早期超声结果，便于后续筛查及系统结构超声衔接'],
        preparation: ['整理NT及历次B超、化验报告'],
        questions: ['NT结果是否需要进一步筛查或遗传咨询', '如何衔接已确定的无创 Plus 和待预约的四维检查'],
        warnings: ['如检查异常或医生认为不宜飞行，应先完成评估再决定是否出行']
      },
      {
        id: 'mid-pregnancy-review', title: '中期常规复诊', railLabel: '中期复诊', railRow: 1, gestation: '孕16–20周',
        start: '2026-10-19', end: '2026-11-15', place: '杭州', summary: '复查母体状态并衔接系统结构超声',
        actions: ['按医生安排测血压、体重、尿检和胎心', '根据此前筛查方案判断是否还需中期血清筛查'],
        why: ['持续追踪母体情况并避免重复或漏做筛查'],
        preparation: ['携带澳洲旅行期间的就医资料，如有'],
        questions: ['大排畸预约时间和医院要求'],
        warnings: ['头痛、视物异常、明显水肿或持续不适需提前就诊']
      },
      {
        id: 'anatomy-scan', title: '四维/系统结构超声（大排畸）', railLabel: '四维/大排畸', railRow: 0, railPriority: true, gestation: '孕20–24周+6天',
        start: '2026-11-16', end: '2026-12-20', place: '杭州 · 检查日期待预约', summary: '待预约四维检查时间；具体项目和日期以接诊医院安排为准',
        actions: ['先落实四维/系统结构超声的预约（见任务清单）', '按医院确认的日期完成检查，留出复查或进一步评估时间'],
        why: ['评估胎儿主要器官结构和胎盘、羊水等情况'],
        preparation: ['通常不需空腹，按医院要求准备', '携带既往超声和筛查报告'],
        questions: ['是否需要胎儿心脏专项评估', '异常或显示不清时如何复查'],
        warnings: ['不要用非医学需要的性别鉴定替代结构评估']
      },
      {
        id: 'ogtt', title: 'OGTT糖耐量与复查化验', railLabel: '糖耐', railRow: 1, railPriority: true, gestation: '孕24–28周',
        start: '2026-12-14', end: '2027-01-11', place: '杭州', summary: '筛查妊娠期糖尿病并复查常规指标',
        actions: ['按医院要求完成空腹和服糖后抽血', '同步完成医生安排的血常规、尿检等'],
        why: ['妊娠期糖代谢异常常无明显症状'],
        preparation: ['确认禁食时长和允许饮水规则', '检查当天预留约三小时并携带检查后食物'],
        questions: ['异常结果如何复诊和进行营养管理'],
        warnings: ['服糖过程不进食；明显呕吐及时告知医护人员']
      },
      {
        id: 'growth-transfer-hk', title: '生长评估与赴港待产准备', railLabel: '赴港准备', railRow: 0, railPriority: true, gestation: '孕28–32周',
        start: '2027-01-11', end: '2027-02-08', place: '杭州', summary: '评估生长、学习胎动并完成赴港前病历整理',
        actions: ['按医院和风险安排生长超声', '整理全部化验、超声、用药和疫苗资料', '确认3月初香港首次晚孕期复诊及待产酒店入住安排'],
        why: ['为预产期前约一个月赴港待产做好医疗和住宿衔接'],
        preparation: ['准备纸质原件、电子备份和必要翻译', '向香港医院确认是否重复检查', '确认酒店可改期及到医院交通'],
        questions: ['何时开始胎动观察', '香港医院的急诊和入院流程'],
        warnings: ['胎动明显减少应立即联系医院，不等待转诊日期']
      },
      {
        id: 'late-pregnancy-review', title: '晚孕期复诊与分娩计划', railLabel: '晚孕复诊', railRow: 1, gestation: '孕32–35周',
        start: '2027-02-08', end: '2027-03-04', place: '杭州／香港远程确认', summary: '完成赴港前最后阶段评估并确认分娩安排',
        actions: ['在杭州完成医生安排的常规复诊', '向香港医院确认到港后的首次预约', '准备分娩包、交通和陪产方案'],
        why: ['确保赴港时病情稳定且能直接衔接既定医院流程'],
        preparation: ['携带杭州完整病历、香港身份证明和待产酒店确认单'],
        questions: ['何种情况直接去产房或急症室', '麻醉和陪产有哪些要求'],
        warnings: ['出发前出现宫缩、出血、破水、胎动异常或医生不建议跨境时，应立即调整计划']
      },
      {
        id: 'move-hk-waiting', title: '赴香港入住待产酒店', railLabel: '赴港待产', railRow: 0, railPriority: true, gestation: '孕35周+4天',
        start: '2027-03-05', end: '2027-03-05', place: '杭州→香港', summary: '按预产期提前约一个月到香港待产',
        actions: ['按医生意见选择稳妥交通方式前往香港', '入住后确认到分娩医院的日间与夜间路线', '在香港完成后续产检和待产'],
        why: ['减少临近足月时跨境的不确定性，并确保随时可进入分娩医院流程'],
        preparation: ['待产酒店确认单', '全套产检病历和药物', '待产包、证件及医院电话'],
        questions: ['到港后首次产检日期', '酒店到产房/急症室的最快路线'],
        warnings: ['孕晚期出行须先获产科医生同意；如有异常信号，不按原计划赶路而应就近就医']
      },
      {
        id: 'gbs-screen', title: 'B族链球菌筛查（GBS）', railLabel: 'GBS', railRow: 0, railPriority: true, gestation: '孕36–37周',
        start: '2027-03-08', end: '2027-03-22', place: '香港', summary: '到港后评估分娩时是否需要抗生素预防',
        actions: ['按香港医院安排完成阴道和直肠拭子'],
        why: ['阳性通常影响分娩时用药，而不等于母体患严重感染'],
        preparation: ['按医院要求避免检查前使用阴道药物或冲洗'],
        questions: ['阳性后何时需要抗生素', '破水或临产时需要如何告知医院'],
        warnings: ['具体采样方式和时间以香港医院为准']
      },
      {
        id: 'presentation-readiness', title: '胎位与分娩准备评估', railLabel: '胎位评估', railRow: 0, gestation: '孕36–37周',
        start: '2027-03-08', end: '2027-03-22', place: '香港', summary: '评估胎位、胎盘、羊水和分娩准备',
        actions: ['由医生评估胎位和分娩条件', '确认到院路线、证件和紧急联系人'],
        why: ['为足月期可能随时临产做好准备'],
        preparation: ['整理最新检查结果和分娩意愿'],
        questions: ['胎位异常有哪些由医生执行的处理选择', '哪些因素会影响分娩方式'],
        warnings: ['不根据单一胎儿估重自行决定顺产或剖宫产', '外倒转术必须由合适的医疗团队评估和执行']
      },
      {
        id: 'term-visits', title: '足月期每周复诊', railLabel: '足月复诊', railRow: 1, railPriority: true, gestation: '孕37周以后',
        start: '2027-03-15', end: '2027-04-05', displayEnd: '起', place: '香港', summary: '通常每周评估并随时响应临产信号',
        actions: ['按香港医院安排每周复诊', '每天留意胎动和临产信号', '保持电话、交通和入院物品随时可用'],
        why: ['足月后分娩可能随时开始'],
        preparation: ['随身携带香港身份证明、产检记录和入院用品'],
        questions: ['超过预产期的监测和引产计划'],
        warnings: ['破水、明显出血、规律宫缩或胎动明显减少时立即联系医院']
      }
    ];
