import type { Task } from '../types'

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
        id: 'hk-transit-precheck', category: 'hong-kong', title: '确认10月2日香港建档链路',
        start: '2026-08-24', end: '2026-09-15', gestation: '孕8周–11周+1天',
        why: '香港中转当天同时涉及民政署、家计会、医院和晚间航班，必须提前把接收方式与服务时段逐项锁定。',
        materials: ['拟建档医院名称及联系方式', '香港抵达和离港航班时刻', '太太香港身份证及有效e-Visa', '拟使用香港住址资料'],
        actions: ['向拟建档医院确认是否支持HA Go / BookHA或必须现场提交', '确认医院是否接受住址宣誓及指定表格', '选定家计会诊所并核对10月2日服务时间', '规划行李寄存、跨区交通和返机场路线'],
        cautions: ['拟建档医院名称目前待补充', '没有逐项确认前，不要假设当天现场排队一定能完成'], hardDeadline: true
      },
      {
        id: 'center-research', category: 'postpartum', title: '开始筛选深圳月子中心',
        start: '2026-08-01', end: '2026-08-24', gestation: '孕4周+5天–8周',
        why: '需要寻找真正有香港出生宝宝接待经验、允许办证延迟入住的机构。',
        materials: ['候选中心清单', '预算范围', '香港产后转运设想'],
        actions: ['初筛5–8家并安排探店', '询问早产、NICU、证件延误和退订条款'],
        cautions: ['不接受口头承诺“特殊过关”', '优先选择靠近有新生儿科的三级医院']
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
        id: 'hangzhou-booklet', category: 'hangzhou', title: '办理杭州社区孕产妇建册',
        start: '2026-08-24', end: '2026-09-27', gestation: '孕8周–12周+6天',
        why: '进入社区孕产妇公共卫生管理，与医院建档并不是同一件事。',
        materials: ['夫妻身份证', '杭州居住证明/居住证', '医保凭证', '结婚证', 'B超或验孕结果'],
        actions: ['联系实际居住地所属社区卫生服务中心', '最好在孕10周前后完成'],
        cautions: ['各区材料可能不同，出发前电话确认', '最迟不应超过孕13周+6天']
      },
      {
        id: 'hangzhou-hospital-record', category: 'hangzhou', title: '建立杭州医院产科档案',
        start: '2026-08-24', end: '2026-09-27', gestation: '孕8周–12周+6天',
        why: '保证早中期产检连续，并方便后期完整转交香港。',
        materials: ['社区手册（如已办理）', 'B超和化验报告', '医保资料'],
        actions: ['选择有24小时产科急诊且便于导出影像的医院', '高风险妊娠优先三级医院'],
        cautions: ['热门医院建档规则和容量不同，应提前咨询']
      },
      {
        id: 'travel-insurance', category: 'travel', title: '核对澳洲旅行保险的孕期保障',
        start: '2026-08-15', end: '2026-09-15', gestation: '孕6周+5天–11周+1天',
        why: '普通旅游险可能排除已存在妊娠或只承保突发并发症。',
        materials: ['保险条款', '旅行日期', '孕周和预产期'],
        actions: ['书面确认阴道出血、腹痛、住院和医疗转运是否覆盖', '记录澳大利亚当地理赔电话'],
        cautions: ['澳大利亚游客通常不能依靠Medicare免费就医']
      },
      {
        id: 'center-visits', category: 'postpartum', title: '实地考察深圳月子中心',
        start: '2026-08-24', end: '2026-09-20', gestation: '孕8周–11周+6天',
        why: '通过现场确认护理能力、感染控制、应急转院及合同弹性。',
        materials: ['问题清单', '报价单', '合同样本'],
        actions: ['比较2–3家终选机构', '确认夜间护理比例、黄疸监测、母乳支持和儿科转诊'],
        cautions: ['警惕暴力通乳、草药喂养、捂汗和不科学新生儿护理']
      },
      {
        id: 'nipt', category: 'medical', title: '确定无创DNA或其他染色体筛查方案',
        start: '2026-09-07', end: '2026-09-25', gestation: '孕10周–12周+4天',
        why: '尽量让筛查结果在澳洲旅行前明确，异常时留出遗传咨询时间。',
        materials: ['身份证件', 'B超报告', '家族史资料'],
        actions: ['检测起始孕周按执行医院或实验室要求', '预产时年龄≥35岁或超声异常时尽早遗传咨询'],
        cautions: ['无创DNA是筛查，不是确诊', '不能替代NT和系统超声'], hardDeadline: true
      },
      {
        id: 'nt-scan', category: 'medical', title: '完成NT超声',
        start: '2026-09-24', end: '2026-09-24', gestation: '孕12周+3天',
        why: '评估胎儿早期结构并参与染色体异常风险筛查。',
        materials: ['身份证件', '既往B超和化验报告', '预约凭证'],
        actions: ['前往浙江省妇保湖滨院区完成已预约NT', '取得正式报告和影像并同步给后续香港产科'],
        cautions: ['提前确认报到地点及是否需要憋尿', '异常时优先咨询医生，必要时调整旅行'], hardDeadline: true
      },
      {
        id: 'center-contract', category: 'postpartum', title: '签约深圳月子中心',
        start: '2026-09-21', end: '2026-09-30', gestation: '孕12周–13周+1天',
        why: '锁定2027年4月预产期档，同时保留实际分娩和宝宝办证导致的弹性。',
        materials: ['完整合同', '价格明细', '退订及延期条款'],
        actions: ['写明按实际出生日期安排，不锁死固定入住日', '至少允许证件或医疗原因延迟7–14天'],
        cautions: ['确认早产、NICU、妈妈住院时暂停计费或退款方式'], hardDeadline: true
      },
      {
        id: 'pretrip-check', category: 'travel', title: '澳洲出发前产科复诊',
        start: '2026-09-28', end: '2026-10-01', gestation: '孕13周–13周+3天',
        why: '确认NT及筛查情况、无出血腹痛且适合长途飞行。',
        materials: ['B超、NT和筛查报告', '中英文孕期摘要', '保险单'],
        actions: ['核对航空公司孕妇政策', '准备常用药和叶酸原包装'],
        cautions: ['出血、明显腹痛、严重呕吐或医生不建议时取消旅行'], hardDeadline: true
      },
      {
        id: 'hk-sim-card', category: 'hong-kong', title: '抵港后启用香港电话卡',
        start: '2026-10-02', end: '2026-10-02', gestation: '孕13周+4天',
        why: '当天需要接收机构来电、验证码并保持医院可联系。',
        materials: ['支持香港网络的手机', 'eSIM或实体电话卡方案', '充电宝'],
        actions: ['优先在出发前购买并测试可在香港启用的eSIM', '如用实体卡，抵港后第一时间办理'],
        cautions: ['不要让买卡占用后续机构营业时间', '同时保留内地号码漫游作为备用']
      },
      {
        id: 'hk-address-declaration', category: 'hong-kong', title: '办理医院认可的香港住址宣誓',
        start: '2026-10-02', end: '2026-10-02', gestation: '孕13周+4天',
        why: '拟建档医院可能要求近6个月住址证明；宣誓是否可替代及使用何种表格必须由医院确认。',
        materials: ['香港身份证', '医院认可的指定声明表格', '可支持住址内容的材料'],
        actions: ['按预先确认的民政咨询中心和宣誓时段到场', '办妥后立即保存纸质原件和电子照片'],
        cautions: ['民政咨询中心宣誓时段因中心而异', '未经医院确认，不应假设私人用途声明一定被产科接受'], hardDeadline: true
      },
      {
        id: 'hk-pregnancy-certificate', category: 'hong-kong', title: '到家计会取得怀孕证明',
        start: '2026-10-02', end: '2026-10-02', gestation: '孕13周+4天',
        why: '香港产科新症登记通常需要怀孕测试结果或医生证明。',
        materials: ['香港身份证', '费用支付方式', '杭州B超和孕期资料备份'],
        actions: ['按选定家计会诊所服务时间办理尿液验孕', '确认怀孕后领取怀孕测试结果证明或报告'],
        cautions: ['尿液验孕通常无需预约，但仍受诊所服务时间限制', '费用和签发方式以当天家计会公布为准'], hardDeadline: true
      },
      {
        id: 'hk-hospital-booking-day', category: 'hong-kong', title: '到拟建档香港医院办理产科新症',
        start: '2026-10-02', end: '2026-10-02', gestation: '孕13周+4天',
        why: '为后期香港复诊和分娩建立接收关系，并确认杭州检查如何衔接。',
        materials: ['太太香港身份证', '有效e-Visa', '医院认可的住址材料', '家计会怀孕证明', '杭州B超、NT及化验报告', '预产期资料', '医院预约确认'],
        actions: ['按医院预先确认的接收方式办理', '说明早中期在杭州产检、孕晚期回港分娩', '记录首次香港产科日期和需补交项目'],
        cautions: ['拟建档医院名称待补充', '公立产科新症应预约或预先确认，不要只依赖当天现场受理'], hardDeadline: true
      },
      {
        id: 'hk-to-sydney-flight', category: 'travel', title: '返回香港机场，晚间飞悉尼',
        start: '2026-10-02', end: '2026-10-02', gestation: '孕13周+4天',
        why: '当天所有办事必须服从国际航班的最晚返机场、安检和登机时间。',
        materials: ['护照及签证', '登机资料', '孕期英文摘要', '所有新办文件电子备份'],
        actions: ['08:00杭州出发，10:40抵达香港', '按19:05香港起飞倒推最晚离开市区时间', '预留交通延误、安检和登机缓冲，途中每1–2小时活动并规律补水'],
        cautions: ['建档任一环节延误时应及时止损，不以误机为代价', '当天不再额外安排观光'], hardDeadline: true
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
        id: 'second-trimester-screen', category: 'medical', title: '确认中孕期筛查是否仍需进行',
        start: '2026-10-12', end: '2026-11-22', gestation: '孕15周–20周+6天',
        why: '根据已完成的早孕筛查、无创和个人风险，医生可能安排中唐或进一步诊断。',
        materials: ['NT、无创/早唐结果', '家族史'],
        actions: ['旅行返程后向产科确认', '高风险结果尽快遗传咨询'],
        cautions: ['不要自行把不同筛查结果当作确诊']
      },
      {
        id: 'hk-waiting-hotel', category: 'hong-kong', title: '预订香港待产酒店（酒店待定）',
        start: '2026-10-12', end: '2026-11-05', gestation: '孕15周–18周+3天',
        why: '计划在2027年3月5日前后入住香港待产，通常提前约4个月预订更容易获得优惠和可选房型。',
        materials: ['分娩医院地址', '候选酒店清单', '预算', '预计入住2027年3月5日至分娩/出院后的弹性日期'],
        actions: ['比较距医院30–45分钟内的酒店或服务式公寓', '优先选择可取消/改期、有电梯、洗衣和简易厨房的房型', '在11月5日前完成优惠价比价和下订'],
        cautions: ['不要只选不可退最低价', '合同需允许分娩提前或延后、住院导致的日期调整'], hardDeadline: true
      },
      {
        id: 'yuesao-shortlist', category: 'postpartum', title: '建立居家月嫂候选名单',
        start: '2026-10-12', end: '2026-11-15', gestation: '孕15周–19周+6天',
        why: '优质月嫂档期通常需要提前锁定，并需与月子中心退住日期衔接。',
        materials: ['预计上岗窗口', '服务地点', '预算和工作范围'],
        actions: ['筛选3–5位并联系真实雇主核验经历', '重点了解母乳支持、婴儿睡眠安全和急症识别'],
        cautions: ['若居家地点在香港，必须使用具有合法香港工作资格的人员']
      },
      {
        id: 'yuesao-interviews', category: 'postpartum', title: '面试居家月嫂',
        start: '2026-10-15', end: '2026-11-30', gestation: '孕15周+3天–22周',
        why: '验证身份、健康、急救能力和科学育儿观念。',
        materials: ['身份证明', '健康检查', '培训记录', '客户评价'],
        actions: ['询问发热、拒奶、窒息和黄疸加重时如何处理', '明确夜间工作、休息和替补机制'],
        cautions: ['拒绝绑腿、挤乳头、给新生儿喂草药和暴力通乳']
      },
      {
        id: 'anatomy-scan', category: 'medical', title: '完成大排畸/系统超声',
        start: '2026-11-16', end: '2026-12-20', gestation: '孕20周–24周+6天',
        why: '系统评估胎儿主要器官结构和生长情况。',
        materials: ['既往超声和筛查报告'],
        actions: ['提前预约有资质的系统超声', '保留报告和影像供香港医生审阅'],
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
        id: 'yuesao-contract', category: 'postpartum', title: '签约居家月嫂',
        start: '2026-11-15', end: '2026-12-31', gestation: '孕19周+6天–26周+3天',
        why: '锁定2027年5月中下旬附近档期，同时应对实际出生日期浮动。',
        materials: ['服务合同', '身份证和健康资料', '定金凭证'],
        actions: ['约定上岗日期可前后浮动至少14天', '写明不能上岗时的替补、退订和试用条款'],
        cautions: ['月嫂应在月子中心退住当天或前一天完成交接'], hardDeadline: true
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
        id: 'hk-address-hospital', category: 'hong-kong', title: '最终确认香港待产住址和分娩医院',
        start: '2026-12-01', end: '2027-01-10', gestation: '孕22周+1天–27周+6天',
        why: '公立产科按地址联网，待产酒店、分娩医院和急诊路线必须一致且明确。',
        materials: ['香港地址证明或酒店/服务式公寓确认单', '医院预约记录'],
        actions: ['确认分娩医院、急诊入口和酒店往返交通时间', '如选私立，取得完整费用及NICU报价'],
        cautions: ['变更住址后及时通知医院']
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
        id: 'maternity-photo-booking', category: 'hangzhou', title: '预约孕晚期孕妇照拍摄',
        start: '2026-12-21', end: '2027-01-03', gestation: '孕25周–26周+6天',
        why: '孕28–30周是孕肚形态最好、体力也跟得上的黄金拍摄期；靠谱摄影机构档期紧俏，且孕35周+4天就要赴港待产，必须提早锁定。',
        materials: ['预算与风格参考（棚拍/外景）', '杭州候选摄影机构清单'],
        actions: ['确认套系内容：服装套数、妆发、底片和精修数量', '优先室内棚拍并确认可随时改期', '预约时说明孕周，选择孕妇专用服装卫生达标的机构'],
        cautions: ['不要为拍照节食或穿着过度束缚腹部的款式', '避开需要长时间户外等待的外景套系']
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
        id: 'move-hk', category: 'hong-kong', title: '提前一个月赴香港待产',
        start: '2027-03-05', end: '2027-03-05', gestation: '孕35周+4天',
        why: '按2027年4月5日预产期倒推约一个月到香港，减少临产前跨境的不确定性。',
        materials: ['待产酒店确认单', '全部病历', '日常用药', '待产包', '紧急联系人'],
        actions: ['出发前完成产科评估并确认适合跨境', '到港入住后立即熟悉分娩医院和最近急诊路线', '按香港医院安排完成后续产检'],
        cautions: ['出现宫缩、出血、破水、胎动异常或医生不建议出行时，应就近就医并调整计划'], hardDeadline: true
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
        id: 'birth-plan', category: 'hong-kong', title: '确认分娩、麻醉和陪产方案',
        start: '2027-02-08', end: '2027-03-08', gestation: '孕32周–36周',
        why: '明确自然分娩、剖宫产指征、镇痛、陪产和新生儿安排。',
        materials: ['医院分娩须知', '既往手术史', '保险和费用资料'],
        actions: ['参加医院产前课程或助产咨询', '了解何时入院和如何联系产房'],
        cautions: ['分娩方式以母婴安全和临床情况为准']
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
        id: 'center-reconfirm', category: 'postpartum', title: '与深圳月子中心确认弹性入住方案',
        start: '2027-02-08', end: '2027-03-01', gestation: '孕32周–35周',
        why: '把香港出院、出生登记、宝宝证件和妈妈恢复串成可执行流程。',
        materials: ['合同', '预计分娩窗口', '跨境接送方案'],
        actions: ['确认实际出生后如何通知和保留房间', '确认延迟7–14天是否收费'],
        cautions: ['宝宝没有获认可的内地入境证件前不能前往深圳']
      },
      {
        id: 'yuesao-reconfirm', category: 'postpartum', title: '与居家月嫂确认上岗窗口',
        start: '2027-02-08', end: '2027-03-01', gestation: '孕32周–35周',
        why: '将实际出生日期、香港缓冲和月子中心天数折算为月嫂上岗窗口。',
        materials: ['月嫂合同', '月子中心入住天数'],
        actions: ['暂定2027年5月中下旬，允许前后浮动至少14天', '确认不能上岗时的替补人员'],
        cautions: ['若最终居家地点改变，应重新核对合法工作资格']
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
        id: 'due-date', category: 'medical', title: '暂定预产期',
        start: '2027-04-05', end: '2027-04-05', gestation: '孕40周',
        why: '预产期只是估算日期，多数宝宝不会恰好在当天出生。',
        materials: ['医院预约和待产资料'],
        actions: ['继续按医院安排监测'],
        cautions: ['不要因到了预产期仍未发动而自行使用催产方法'], hardDeadline: true
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
        id: 'newborn-screening', category: 'documents', title: '完成新生儿住院期项目',
        start: '2027-04-05', end: '2027-04-12', gestation: '预计出生后首周',
        why: '衔接疫苗、听力、代谢筛查、黄疸和喂养评估。',
        materials: ['父母证件', '医院新生儿记录'],
        actions: ['确认乙肝疫苗、卡介苗及各项筛查记录', '保存中英文出院摘要'],
        cautions: ['发热、拒奶、呼吸异常、嗜睡或黄疸快速加深应立即就医']
      },
      {
        id: 'hk-recovery', category: 'postpartum', title: '在香港恢复并观察母婴情况',
        start: '2027-04-05', end: '2027-04-19', gestation: '预计产后0–14天',
        why: '为伤口、母乳建立、新生儿黄疸复查和办证预留缓冲。',
        materials: ['香港产后住所', '儿科和产科复查安排'],
        actions: ['自然分娩或剖宫产均按医生确认适合后再跨境', '优先完成宝宝黄疸和体重复查'],
        cautions: ['不预设出院当天直接去深圳']
      },
      {
        id: 'birth-registration', category: 'documents', title: '办理香港出生登记',
        start: '2027-04-05', end: '2027-05-17', gestation: '出生后42天内',
        why: '香港规定应在出生后42天内登记，之后才能顺利衔接其他证件。',
        materials: ['父母香港身份证/旅行证件', '结婚证及认证翻译（如需）'],
        actions: ['医院提交出生资料后尽快预约', '按宝宝身份核定结果申请后续证件'],
        cautions: ['线上登记资格与父母永久居民身份等条件有关，不符合时现场办理'], hardDeadline: true
      },
      {
        id: 'baby-travel-doc', category: 'documents', title: '办理宝宝进入内地所需证件',
        start: '2027-04-05', end: '2027-04-26', gestation: '预计出生后0–3周',
        why: '没有内地认可的入境证件，宝宝不能前往深圳月子中心。',
        materials: ['出生证明', '父母证件', '入境处要求的照片和表格'],
        actions: ['向香港入境处、内地出入境部门及香港中旅确认适用证件', '取得书面办理清单'],
        cautions: ['证件类型取决于宝宝身份核定，不依据销售机构口头说法']
      },
      {
        id: 'shenzhen-center', category: 'postpartum', title: '母婴情况及证件齐全后入住深圳月子中心',
        start: '2027-04-12', end: '2027-05-24', gestation: '预计产后1–7周',
        why: '实际入住取决于分娩日期、妈妈恢复、宝宝黄疸和入境证件。',
        materials: ['母婴出院资料', '宝宝有效证件', '月子中心合同'],
        actions: ['跨境车辆配备合适的婴儿安全座椅', '入住时交接喂养、黄疸、用药和复查安排'],
        cautions: ['妈妈仍大量出血、发热、伤口异常或宝宝状态不稳时不要转运']
      },
      {
        id: 'postpartum-check', category: 'medical', title: '妈妈产后复查',
        start: '2027-05-10', end: '2027-05-24', gestation: '预计产后5–7周',
        why: '评估子宫恢复、伤口、血压、盆底、哺乳和心理状态。',
        materials: ['分娩和出院记录', '当前用药', '症状记录'],
        actions: ['按分娩医院建议安排约6周复查', '主动完成产后抑郁筛查'],
        cautions: ['大量出血、发热、胸痛气促、单侧腿肿或明显情绪危机无需等到复查日']
      },
      {
        id: 'home-yuesao', category: 'postpartum', title: '居家月嫂接手并完成交接',
        start: '2027-05-10', end: '2027-06-07', gestation: '预计产后5–9周',
        why: '在月子中心退住当天无缝衔接，避免喂养和护理方式突然中断。',
        materials: ['宝宝喂养、体重、黄疸和睡眠记录', '妈妈伤口和用药记录', '月嫂合同'],
        actions: ['提前一天或退住当天交接', '确认下一次儿科、产科和疫苗时间'],
        cautions: ['服务地点若在香港，月嫂必须具有合法香港工作资格']
      }
    ];
