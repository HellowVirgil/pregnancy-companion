import { scrollBehavior } from '../lib/date'

const REGIONS = [
  { id: 'trip-hk', label: '香港中转' },
  { id: 'trip-sydney', label: '悉尼' },
  { id: 'trip-tasmania', label: '塔斯马尼亚' },
  { id: 'trip-melbourne', label: '墨尔本' },
  { id: 'trip-return', label: '返程' },
]

export default function TripPanel() {
  const jump = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: scrollBehavior(), block: 'start' })
  }

  return (
    <section id="panel-trip" className="panel" role="tabpanel" aria-labelledby="tab-trip">
      <div className="panel-head">
        <div>
          <p className="kicker">澳洲旅行 · 逐日安排</p>
          <h2>10月2日香港出发，10月11日返回上海</h2>
          <p>出发孕13周+4天，返程孕14周+6天。标★的为重点/候选景点；每天以体力、天气和产科意见为准精简，不追求全部打卡。</p>
        </div>
        <span className="pill pill-info">孕中期前段 · 10天9晚</span>
      </div>

      <div className="trip-principle">
        <strong>全程共同原则</strong>
        <p>出发前完成NT及产科复诊；旅行险书面确认覆盖妊娠突发情况；随身携带中英文孕期摘要、报告电子版和处方药原包装。避免生食、酒精、过热温泉、水肺潜水、高风险徒步及动物抓咬。澳大利亚急救电话为000。</p>
      </div>

      <div className="trip-jump print-hide" role="group" aria-label="行程分区快速跳转">
        {REGIONS.map((region) => (
          <button key={region.id} type="button" onClick={() => jump(region.id)}>{region.label}</button>
        ))}
      </div>

      <div className="region-head" id="trip-hk"><h3>香港中转</h3><span>10.2 · 孕13周+4天</span></div>
      <div className="trip-days">
        <article className="day-card">
          <div className="day-head"><span className="day-date">10.2</span><span className="day-week">孕13周+4天</span><span className="day-hotel">机上过夜</span></div>
          <ul className="day-plan">
            <li className="flight">08:00 杭州出发</li>
            <li className="flight">10:40 抵达香港</li>
            <li>香港医院建档及相关手续</li>
            <li className="flight">19:05 香港出发，飞往悉尼</li>
          </ul>
          <figure className="day-photo"><img src="https://cdn.nlark.com/yuque/0/2026/jpeg/29183418/1783157818857-bd5d00f0-774a-456b-9e42-83a9e7c52b6a.jpeg" alt="10月2日航班资料" loading="lazy" /></figure>
          <div className="day-tip"><strong>全程最紧张的一天</strong><p>建档手续必须提前预约并设“最晚离开市区”时间；长途飞行每1–2小时活动小腿和起身，补水，安全带低置于髋骨/腹部下方。</p></div>
        </article>
      </div>

      <div className="region-head" id="trip-sydney"><h3>悉尼</h3><span>10.3–10.4 · 孕13周+5天 至 13周+6天</span></div>
      <div className="trip-days">
        <article className="day-card">
          <div className="day-head"><span className="day-date">10.3</span><span className="day-week">孕13周+5天</span><span className="day-hotel">馨乐庭沃克北悉尼酒店</span></div>
          <ul className="day-plan">
            <li className="flight">06:10 抵达悉尼</li>
            <li className="star">La Perouse（《碟中谍2》取景地）</li>
            <li className="star">悉尼鱼市场</li>
            <li className="star">岩石区</li>
            <li className="star">塔龙加动物园</li>
            <li className="star">联邦广场（通常指墨尔本 Federation Square，需核对）</li>
            <li className="star">悉尼塔</li>
            <li className="star">悉尼大学</li>
            <li className="star">蓝山国家公园、鲁拉小镇</li>
            <li>歌剧院、海港大桥、邦迪海滩</li>
            <li className="star">麦考利夫人座椅</li>
            <li>圣玛丽大教堂</li>
          </ul>
          <div className="day-tip"><strong>建议只选3–4处</strong><p>红眼航班落地后不安排蓝山与市区全覆盖；鱼市场避免生食、未熟海鲜和高汞鱼，动物园接触动物后及时洗手，步行中随时休息。</p></div>
        </article>
        <article className="day-card">
          <div className="day-head"><span className="day-date">10.4</span><span className="day-week">孕13周+6天</span><span className="day-hotel">最佳西方霍巴特酒店</span></div>
          <ul className="day-plan">
            <li>包车：Kiama、Gerringong小镇、Leura、Bowral、Taralga</li>
            <li className="flight">19:50–21:50 悉尼 → 霍巴特</li>
          </ul>
          <div className="day-tip"><strong>路线跨度很大，务必精简</strong><p>Kiama/Gerringong向南，Leura向西，Taralga又较远，不建议一天全部串联；每60–90分钟下车活动，海岸观景远离湿滑边缘并留足去机场时间。</p></div>
        </article>
      </div>

      <div className="region-head" id="trip-tasmania"><h3>塔斯马尼亚</h3><span>10.5–10.7 · 孕14周 至 14周+2天</span></div>
      <div className="trip-days">
        <article className="day-card">
          <div className="day-head"><span className="day-date">10.5</span><span className="day-week">孕14周</span><span className="day-hotel">最佳西方霍巴特酒店</span></div>
          <ul className="day-plan"><li>玛利亚岛</li></ul>
          <div className="day-tip"><strong>岛上医疗资源有限</strong><p>选短距离平缓路线，确认返程船班；携带饮水、加餐、防晒和雨具，不靠近或投喂野生动物。</p></div>
        </article>
        <article className="day-card">
          <div className="day-head"><span className="day-date">10.6</span><span className="day-week">孕14周+1天</span><span className="day-hotel">最佳西方霍巴特酒店</span></div>
          <ul className="day-plan">
            <li>霍巴特市区、MONA博物馆、Richmond小镇、威灵顿山</li>
            <li>Salamanca Market（仅周六；2026年10月6日为周二，无法安排）</li>
          </ul>
          <div className="day-tip"><strong>注意温差与轮渡晕动</strong><p>威灵顿山风大温度低，准备保暖防滑鞋；MONA若乘船，备孕期可用的晕车方案并先问医生/药师。</p></div>
        </article>
        <article className="day-card">
          <div className="day-head"><span className="day-date">10.7</span><span className="day-week">孕14周+2天</span><span className="day-hotel">57F MelbCbd Skyview</span></div>
          <ul className="day-plan">
            <li>布鲁尼岛</li>
            <li className="flight">21:00–22:20 霍巴特 → 墨尔本</li>
          </ul>
          <div className="day-tip"><strong>避免生蚝和赶夜航</strong><p>不吃生蚝、生奶奶酪及未熟食物；岛上行程给轮渡排队和返机场留足余量，晚间抵达后直接休息。</p></div>
        </article>
      </div>

      <div className="region-head" id="trip-melbourne"><h3>墨尔本</h3><span>10.8–10.10 · 孕14周+3天 至 14周+5天</span></div>
      <div className="trip-days">
        <article className="day-card">
          <div className="day-head"><span className="day-date">10.8</span><span className="day-week">孕14周+3天</span><span className="day-hotel">57F MelbCbd Skyview</span></div>
          <ul className="day-plan"><li>大洋路、十二门徒石</li></ul>
          <div className="day-tip"><strong>长途车程是主要负担</strong><p>每60–90分钟停车活动，避免连续坐车和赶多个观景点；海边风大，走有护栏的步道，不站悬崖边。</p></div>
        </article>
        <article className="day-card">
          <div className="day-head"><span className="day-date">10.9</span><span className="day-week">孕14周+4天</span><span className="day-hotel">57F MelbCbd Skyview</span></div>
          <ul className="day-plan"><li>普芬比利蒸汽小火车、菲利普岛（企鹅岛）、动物园</li></ul>
          <div className="day-tip"><strong>当天很长，动物园可二选一</strong><p>避免把身体探出火车窗；企鹅归巢等待时间长且夜间寒冷，准备保暖、坐垫/座位和加餐。</p></div>
        </article>
        <article className="day-card">
          <div className="day-head"><span className="day-date">10.10</span><span className="day-week">孕14周+5天</span><span className="day-hotel">无（当晚前往机场）</span></div>
          <ul className="day-plan">
            <li>墨尔本市区</li>
            <li className="star">丹德农山脉</li>
            <li className="star">棕榈湾（通常指凯恩斯附近 Palm Cove，需核对）</li>
            <li className="star">墨尔本大学、涂鸦街、弗林德斯大街车站、维多利亚州立图书馆、维多利亚国家美术馆、维多利亚女皇市场、尤里卡88层观景台、布莱顿彩色屋</li>
          </ul>
          <div className="day-tip"><strong>以市中心轻松步行为主</strong><p>出发前安排午休/酒店延迟退房或钟点休息；最后一天不要再去远郊，避免拖着行李长时间步行。</p></div>
        </article>
      </div>

      <div className="region-head" id="trip-return"><h3>返程</h3><span>10.11 · 孕14周+6天</span></div>
      <div className="trip-days">
        <article className="day-card">
          <div className="day-head"><span className="day-date">10.11</span><span className="day-week">孕14周+6天</span><span className="day-hotel">机上休息</span></div>
          <ul className="day-plan">
            <li className="flight">00:45–06:55 墨尔本 → 香港</li>
            <li className="flight">09:20–12:05 香港 → 上海</li>
          </ul>
          <figure className="day-photo"><img src="https://cdn.nlark.com/yuque/0/2026/jpeg/29183418/1783157897604-c79e0c07-c1c6-4206-a327-411a24c8bd5d.jpeg" alt="10月11日返程航班资料" loading="lazy" /></figure>
          <div className="day-tip"><strong>两段夜航</strong><p>提前选靠过道座位，转机时活动和补水；抵达后当天不再安排工作，若出现出血、腹痛、气促或单侧腿肿立即就医。</p></div>
        </article>
      </div>
    </section>
  )
}
