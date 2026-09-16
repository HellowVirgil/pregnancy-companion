import { IconActivity, IconCamera, IconDoc, IconHeart, IconHome, IconSprout } from './icons'

export default function TopicsPanel({ active }: { active: boolean }) {
  return (
    <section id="panel-topics" className={`panel${active ? ' is-active' : ''}`} role="tabpanel" aria-labelledby="tab-topics">
      <div className="panel-head">
        <div>
          <h2>专题指引</h2>
          <p>按地点和生活安排快速查阅，不必在时间线里逐项寻找。</p>
        </div>
      </div>
      <div className="topic-grid">
        <article id="hangzhou" className="topic-card">
          <div className="topic-icon ti-brand" aria-hidden="true"><IconSprout size={20} /></div>
          <p className="kicker">杭州产检</p>
          <h3>社区建册与医院建档分开办理</h3>
          <ul>
            <li>9月28日NT检查（省妇保湖滨院区），9月30日建社区小卡，随后完成医院建档衔接。</li>
            <li>社区常见材料：身份证、居住证明、医保、结婚证、B超报告。</li>
            <li>选择能导出报告和超声影像、具备24小时产科急诊的医院。</li>
          </ul>
        </article>
        <article className="topic-card topic-warm">
          <div className="topic-icon ti-honey" aria-hidden="true"><IconHome size={20} /></div>
          <p className="kicker">香港待产住宿</p>
          <h3>约2027年3月5日赴港，酒店暂未确定</h3>
          <ul>
            <li>按预产期4月5日倒推，提前约1个月到香港待产，届时约孕35周+4天。</li>
            <li>待产酒店通常提前4个月预订更容易获得优惠，建议在2026年11月5日前完成比价和下订。</li>
            <li>优先选择距分娩医院30–45分钟内、可取消/改期、有电梯和简易厨房/洗衣条件的房型。</li>
            <li>分娩医院倾向东区那打素（港岛东柴湾）或广华（油麻地）：订房前先电话锁定医院，再按上述车程选区域。</li>
          </ul>
        </article>
        <article id="hong-kong" className="topic-card topic-mission" data-testid="hk-transit-mission">
          <div className="topic-icon ti-blush" aria-hidden="true"><IconCamera size={20} /></div>
          <div className="mission-head">
            <div>
              <p className="kicker">香港建档 · 中转任务链</p>
              <h3>10月2日：抵港按时间线办理，16:00 前离开柴湾</h3>
              <p className="mission-sub">目标医院：优选东区尤德夫人那打素医院（港岛东 · 柴湾，地址证明要求较灵活），备选广华医院（九龙中 · 油麻地）。当天没有补办机会：10月1日是香港公众假期，机构不办公，下次回港要等2027年3月。</p>
            </div>
            <span className="pill pill-brand">孕13周+4天</span>
          </div>
          <ol className="mission-steps" aria-label="香港中转办事顺序">
            <li data-mission-step="1"><strong>10:40 落地入境</strong><span>保留入境小白条；激活电话卡，两个香港号码：一个注册 HA Go，一个作医院紧急联络。</span></li>
            <li data-mission-step="2"><strong>12:00 家计会怀孕证明</strong><span>湾仔修顿中心诊所（湾仔站B1直达，港岛线可直达柴湾）；150港币现金（只收现金），约30–60分钟；热线 2572 2222。</span></li>
            <li data-mission-step="3"><strong>13:30 东区那打素建档</strong><span>主楼对面G层中央登记处登记，再到LG2层东翼产科护士站；注册 HA Go，说明10月至3月初不在港、首次产检约3月。</span></li>
            <li data-mission-step="4"><strong>15:30 缓冲整理</strong><span>吃饭休息，材料原件归位；若前面延误超过1小时，从这里压缩，保航班优先。</span></li>
            <li data-mission-step="5"><strong>16:00 最晚离开柴湾</strong><span>港岛线+机场快线约70分钟、出租约50–60分钟；19:05 国际航班，任一环节延误即压缩后续、保航班优先。</span></li>
          </ol>
          <div className="mission-detail">
            <div className="mission-block">
              <h4>目标医院 · 建档地点与要求</h4>
              <ul>
                <li>东区尤德夫人那打素医院（优选 · 港岛东 · 柴湾乐民道3号）：先到主楼对面G层中央登记处登记，再到LG2层东翼产科护士站。地址证明要求较灵活、有时甚至不看——对没有香港住址的我们最友好，电话确认时优先锁定这点。产科门诊 2595 7712，周一至五 9:00–17:00；可经 HA Go「预约通」递交产科新症或亲身提交。有自费特别病房（不一定有），探视早8晚9、宝宝晚上可托管，据说较容易排到无痛。柴湾离机场最远，当天时间最紧。</li>
                <li>广华医院（备选 · 九龙中 · 油麻地）：徐展堂门诊大楼4楼产科门诊1号窗口；须地址证明（6个月内银行月结单/水电煤账单或民政署宣誓），原则上要求住址在九龙城、油尖等服务辖区内（实操中其他区域地址也多有成功）。产科门诊 2242 6624，周一至五 9:00–17:00、周六 9:00–13:00。离机场与家计会最近，当天最稳；新大楼环境好，顺产有概率住单人间。</li>
                <li>常规建议孕20–24周完成建档、最晚不超28周；你们10月2日（孕13周+4）属提前办理。公立无痛分娩普遍紧张、探视时间较短，如有需要建档时一并询问。</li>
              </ul>
            </div>
            <div className="mission-block">
              <h4>家计会 · 分行与流程</h4>
              <ul>
                <li>湾仔修顿中心诊所（当前优先）：轩尼诗道130号修顿中心地下，湾仔站B1直达——港岛线可直达柴湾，与东区那打素同线最顺；26岁以下需改往8楼青少年保健中心并提前电话预约。</li>
                <li>马头涌诊所：九龙码头涌道105号1楼，宋皇台站B1出口——若最终改选广华则这条更顺。</li>
                <li>另有黄大仙、元朗（朗壹广场一座3楼305-306，地图导航可能未更新）、荃湾（南丰中心16楼1621-1622）分行；热线 2572 2222。</li>
                <li>流程：填表→验尿→缴费，约30–60分钟拿证明；150港币现金（只收现金），带香港身份证、eVisa或入境小白条、香港手机号。</li>
              </ul>
            </div>
            <div className="mission-block">
              <h4>住址宣誓 · 无账单时的免费方案</h4>
              <ul>
                <li>就近到各区民政咨询中心办理（湾仔、沙田政府合署等），免费，宣誓签字盖章后当场取件。</li>
                <li>材料：孕妇香港身份证 + 一个正确的香港地址；酒店地址不可用，可借用亲友地址。</li>
                <li>提前15分钟到场填表，在指定宣誓时段进入宣誓室完成宣誓；办妥后纸质原件与电子照片各存一份。东区那打素对地址证明较灵活，电话确认后再决定是否需要办。</li>
              </ul>
            </div>
            <div className="mission-block">
              <h4>当天随身材料（全部正本）</h4>
              <ul>
                <li>身份证明：香港身份证（或办理回执）、港澳通行证+有效签注、入境小白条。</li>
                <li>怀孕证明：家计会开具的怀孕证明（转介信）；先向医院确认能否用内地 B 超/hCG 报告代替。</li>
                <li>住址证明：6个月内银行月结单/水电煤账单，或民政署宣誓证明。</li>
                <li>联系方式与现金：两个香港手机号（本人 HA Go 一个、紧急联络一个），港币现金约500–1000。</li>
                <li>产检资料：母子健康手册、NT 与全部超声/血检报告（附英文或翻译更佳）、中英文孕期摘要、电子备份。</li>
              </ul>
            </div>
          </div>
          <div className="mission-risk"><strong>这不是“到港后现场排队即可”的普通中转。</strong>请在9月15日前逐项确认：东区那打素产科新症接收方式（HA Go 预约通还是现场提交）、地址证明是否可放宽、备选广华所需的辖区与住址材料、家计会分行10月2日（周五）的营业时间与午休空档，并预留回机场及安检时间。任一环节未确认，不应以错过晚间悉尼航班为代价。</div>
        </article>
        <article id="postpartum" className="topic-card topic-warm">
          <div className="topic-icon ti-lilac" aria-hidden="true"><IconHeart size={20} /></div>
          <p className="kicker">月子与月嫂</p>
          <h3>9月底前订中心，12月底前订月嫂</h3>
          <ul>
            <li>合同允许实际分娩、NICU和证件延误导致的弹性入住。</li>
            <li>香港产后预留约7–14天恢复和办证。</li>
            <li>月嫂预计2027年5月中下旬接手，日期前后浮动至少14天。</li>
          </ul>
        </article>
        <article id="documents" className="topic-card">
          <div className="topic-icon ti-sky" aria-hidden="true"><IconDoc size={20} /></div>
          <p className="kicker">证件与产后</p>
          <h3>宝宝能进入内地后再去深圳</h3>
          <ul>
            <li>香港出生登记应在出生后42天内完成。</li>
            <li>入境内地证件类型以香港入境处、内地出入境部门及香港中旅核定为准。</li>
            <li>妈妈产后约6周复查，同时完成宝宝黄疸、体重和疫苗衔接。</li>
          </ul>
        </article>
        <article id="emergency-detail" className="topic-card topic-danger">
          <div className="topic-icon ti-blush" aria-hidden="true"><IconActivity size={20} /></div>
          <p className="kicker">立即就医</p>
          <h3>出现这些信号不要等下一次预约</h3>
          <ul>
            <li>单侧剧烈腹痛、肩痛、晕厥或大量出血。</li>
            <li>发热38℃以上、胸痛、呼吸困难或单侧小腿肿痛。</li>
            <li>孕中晚期破水、37周前规律宫缩、严重头痛视物异常或胎动明显减少。</li>
          </ul>
        </article>
      </div>
    </section>
  )
}
