import { IconActivity, IconCamera, IconDoc, IconHeart, IconHome, IconSprout } from './icons'

export default function TopicsPanel() {
  return (
    <section id="panel-topics" className="panel" role="tabpanel" aria-labelledby="tab-topics">
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
            <li>8月24日至9月27日完成社区建册、首次正式产检和医院建档衔接。</li>
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
          </ul>
        </article>
        <article id="hong-kong" className="topic-card topic-mission" data-testid="hk-transit-mission">
          <div className="topic-icon ti-blush" aria-hidden="true"><IconCamera size={20} /></div>
          <div className="mission-head">
            <div>
              <p className="kicker">香港建档 · 中转任务链</p>
              <h3>10月2日：抵港后按顺序办理，晚间飞悉尼</h3>
              <p className="mission-sub">医院名称和航班时刻尚未提供，因此这里只锁定先后关系；具体钟点需在确认各机构服务时间后填写到个人备注。</p>
            </div>
            <span className="pill pill-brand">孕13周+4天</span>
          </div>
          <ol className="mission-steps" aria-label="香港中转办事顺序">
            <li data-mission-step="1"><strong>买香港电话卡</strong><span>优先提前购买可用eSIM，或抵港后立即办理。</span></li>
            <li data-mission-step="2"><strong>办理住址宣誓</strong><span>先向拟建档医院确认是否接受及所需指定表格。</span></li>
            <li data-mission-step="3"><strong>家计会怀孕证明</strong><span>按诊所服务时间办理尿液验孕和证明。</span></li>
            <li data-mission-step="4"><strong>拟建档香港医院</strong><span>医院名称待补充；新症接收方式必须提前确认。</span></li>
            <li data-mission-step="5"><strong>返回机场飞悉尼</strong><span>晚间航班；必须保留交通、安检和登机缓冲。</span></li>
          </ol>
          <div className="mission-risk"><strong>这不是“到港后现场排队即可”的普通中转。</strong>请在9月15日前逐项提前预约/确认时段，并预留回机场及安检时间。若公立医院支持HA Go / BookHA，应优先提前申请；任一环节未确认，不应以错过晚间悉尼航班为代价。</div>
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
