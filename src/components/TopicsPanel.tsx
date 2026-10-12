import { PROFILE, formatChineseDate, gestationOn } from '../lib/date'
import { BABY_DOCUMENT_SOURCES } from '../data/babyDocuments'
import { RETURN_HOME_SOURCES, RETURN_HOME_STEPS } from '../data/returnHome'
import { IconActivity, IconCamera, IconDoc, IconHeart, IconHome, IconSprout } from './icons'

export default function TopicsPanel({ active, onOpenTask }: { active: boolean; onOpenTask: (taskId: string) => void }) {
  const bookingGestation = gestationOn(PROFILE.hkBookingDate)
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
          <h3>社区建册已完成，继续衔接产检资料</h3>
          <ul>
            <li>杭州社区小卡（母子健康手册）已办妥，按后续产检安排携带。</li>
            <li>NT 超声已完成，保存报告及影像；染色体筛查方案已确定为无创 Plus，采血及报告进度按实际情况记录。</li>
            <li>四维（大排畸）检查时间待预约，具体检查项目和日期以接诊医院安排为准。</li>
            <li>{`省妇保正式建档到孕${PROFILE.hangzhouBookingWeek}周办理，具体日期待医院确认；此前继续按医生安排产检，保存全部报告。`}</li>
            <li>为香港建档准备已有产检资料原件及电子备份。</li>
          </ul>
        </article>
        <article className="topic-card topic-warm">
          <div className="topic-icon ti-honey" aria-hidden="true"><IconHome size={20} /></div>
          <p className="kicker">香港待产住宿</p>
          <h3>约2027年3月5日赴港，酒店暂未确定</h3>
          <ul>
            <li>按预产期4月5日倒推，提前约1个月到香港待产，届时约孕35周+4天。</li>
            <li>下次赴港正式建档的同时确定待产酒店；赴港前先整理候选、预算和可改期条款。</li>
            <li>优先选择距分娩医院30–45分钟内、可取消/改期、有电梯和简易厨房/洗衣条件的房型。</li>
            <li>以已预约的东区尤德夫人那打素医院（港岛东柴湾）为中心比较区域，实地核对日间和夜间路线。</li>
            <li>住宿需涵盖分娩后的恢复与宝宝办证缓冲，允许续住和日期调整。</li>
          </ul>
        </article>
        <article id="hong-kong" className="topic-card topic-mission" data-testid="hk-transit-mission">
          <div className="topic-icon ti-blush" aria-hidden="true"><IconCamera size={20} /></div>
          <div className="mission-head">
            <div>
              <p className="kicker">香港建档 · 下次赴港安排</p>
              <h3>{`HA Go 已预约${formatChineseDate(PROFILE.hkBookingDate)}，日期可能调整`}</h3>
              <p className="mission-sub">东区尤德夫人那打素医院（港岛东 · 柴湾）线上预约已完成，现场正式建档仍待办理。下次赴港同步确定待产酒店，交通及考察安排随最终预约调整。</p>
            </div>
            <span className="pill pill-brand">{`孕${bookingGestation.weeks}周+${bookingGestation.days}天 · 当前预约`}</span>
          </div>
          <ol className="mission-steps" aria-label="下次赴港建档及酒店安排">
            <li data-mission-step="1"><strong>线上预约已完成</strong><span>保存 HA Go 预约确认，核对医院、日期、报到时间和地点。</span></li>
            <li data-mission-step="2"><strong>赴港日期待最终确认</strong><span>如需改期，按 HA Go 或医院指引办理，确认新日期后安排交通；提前整理建档材料和酒店候选。</span></li>
            <li data-mission-step="3"><strong>到东区医院正式建档</strong><span>按最终预约通知报到，说明在杭州产检、计划2027年3月初赴港待产，记录后续产检和需补交资料。</span></li>
            <li data-mission-step="4"><strong>同次行程确定待产酒店</strong><span>围绕东区医院考察候选酒店或服务式公寓，核对日夜交通、房间、洗衣及取消改期规则。</span></li>
            <li data-mission-step="5"><strong>整理结果与后续安排</strong><span>保存建档记录、医院联络方式和酒店条款，更新下一次产检及预计2027年3月5日入住安排。</span></li>
          </ol>
          <div className="mission-detail">
            <div className="mission-block">
              <h4>东区医院 · 报到与改期</h4>
              <ul>
                <li>东区尤德夫人那打素医院：香港柴湾乐民道3号；产科门诊电话 2595 7712，联络方式以医院最新通知为准。</li>
                <li>具体报到地点、时间和材料以本次 HA Go 预约通知为准；需要改期时先核对操作方式及可选日期。</li>
                <li>建档时确认杭州已有检查如何衔接、后续香港复诊日期、分娩安排及急诊入口。</li>
              </ul>
            </div>
            <div className="mission-block">
              <h4>怀孕证明与住址材料</h4>
              <ul>
                <li>先核对已有怀孕证明、转介信和杭州报告是否符合东区医院要求；需要补开时再联系家计会或医院认可的医生。</li>
                <li>住址证明的种类、有效期及是否接受宣誓，以医院答复为准；如需宣誓，先确认真实住址、指定表格和办理时段。</li>
                <li>待产酒店确认单不能自动视为医院认可的住址证明。</li>
              </ul>
            </div>
            <div className="mission-block">
              <h4>建档随身材料</h4>
              <ul>
                <li>HA Go 预约确认、香港身份证、有效 e-Visa、旅行证件及入境记录。</li>
                <li>医院要求的怀孕证明、转介信和住址材料。</li>
                <li>母子健康手册、已有超声与筛查/化验报告、预产期资料、用药及过敏记录；原件和电子备份各一份。</li>
                <li>可接收通知的香港手机号，以及医院登记的紧急联系人。</li>
              </ul>
            </div>
            <div className="mission-block">
              <h4>待产酒店 · 同次赴港确定</h4>
              <ul>
                <li>计划2027年3月5日前后入住，围绕东区医院比较酒店和服务式公寓。</li>
                <li>核对到医院的日夜交通、房型、电梯、洗衣及简易厨房条件。</li>
                <li>确认取消、改期、提前分娩和产后续住条款，预留宝宝办证与返杭前的住宿弹性。</li>
              </ul>
            </div>
          </div>
          <div className="mission-risk"><strong>当前预约日期可能调整。</strong>以 HA Go 或医院确认后的日期为准；同步调整赴港交通和酒店考察安排，现场建档完成后再勾选对应任务。</div>
        </article>
        <article id="postpartum" className="topic-card topic-warm topic-mission" data-testid="return-home-plan">
          <div className="topic-icon ti-lilac" aria-hidden="true"><IconHeart size={20} /></div>
          <p className="kicker">暂定计划 · 出院办证与高铁返杭</p>
          <h3>争取出院日办证，商务座返杭后由月子中心接站入住</h3>
          <p className="mission-sub">杭州月子中心为当前优先方案，具体机构、车次及返杭日期待落实。把出院当天作为办证及衔接返程的目标；五证同日递交与全部领证分开安排，实际启程以母婴情况、证件、列车时刻和中心接收条件均已确认为准。</p>
          <ol className="mission-steps" aria-label="出院办证及返杭关键节点">
            {RETURN_HOME_STEPS.map((step) => (
              <li key={step.taskId} data-return-step={step.taskId}>
                <strong>{step.phase} · {step.title}</strong>
                <span>{step.summary}</span>
                <button className="button print-hide" type="button" aria-label={`查看任务：${step.title}`} onClick={() => onOpenTask(step.taskId)}>查看任务</button>
              </li>
            ))}
          </ol>
          <div className="mission-detail">
            <div className="mission-block">
              <h4>证件、路线和时刻一起确认</h4>
              <ul>
                <li>口岸临时通行证的受理及使用范围，需与西九龙铁路实名、通关要求分别核实。出世纸、回港证或办证回执不能直接当作已确认的高铁乘车凭证。</li>
                <li>先查实际可售商务座的车次及杭州到站，再倒排出院、办证、喂养休息、交通和通关时间；若赶不上可行车次，调整返杭日期。</li>
                <li>出院前分别询问产科和儿科是否适合当次长途出行。出院手续完成后仍需核对宝宝黄疸、喂养及复查安排。</li>
              </ul>
            </div>
            <div className="mission-block">
              <h4>放票、婴儿申报与接站</h4>
              <ul>
                <li>目前高铁预售期为15天，西九龙始发的新一日车票8:00起售；其他出发站按12306查询。临近出行重新核对车次、席别及退改规则。</li>
                <li>目前每名年满18岁的旅客可免费携同一名不占座的6岁以下儿童；宝宝仍需有效证件、身份核验和免费儿童申报，需独占席位时按规则购儿童票。</li>
                <li>出发前将车次、准确到站、抵达时间发给中心，确认接站人、出口、婴儿安全座椅、夜间入住和延误联络。</li>
              </ul>
            </div>
            <div className="mission-block">
              <h4>无法当天衔接时</h4>
              <ul>
                <li>预留可延住的香港住所、照护支持和复查地点；医生要求留院或复诊时按医院安排执行。</li>
                <li>办证未受理、有效证件未签发、商务座无票或时间衔接不上时，同步改签、延后中心入住及接站。</li>
                <li>未领妥的身份证、护照等，逐项核对宝宝本人到场、代领或寄递条件，不默认都能代办。</li>
              </ul>
            </div>
            <div className="mission-block">
              <h4>铁路参考 · 核对于2026.10.12</h4>
              <ul>{Object.values(RETURN_HOME_SOURCES).map((reference) => (
                <li key={reference.url}><a href={reference.url} target="_blank" rel="noreferrer">{reference.label}</a></li>
              ))}</ul>
            </div>
          </div>
        </article>
        <article id="documents" className="topic-card topic-mission" data-testid="baby-documents-guide">
          <div className="topic-icon ti-sky" aria-hidden="true"><IconDoc size={20} /></div>
          <p className="kicker">港宝五证 · 证件与产后</p>
          <h3>先办出世纸，再衔接旅行证件与返杭安排</h3>
          <p className="mission-sub">任务清单已拆为五项，可分别记录受理、领证和补交材料；另有产前准备及返杭前核对。证件资格以宝宝的国籍、居留权和受理部门核定为准。</p>
          <ol className="mission-steps" aria-label="港宝五证办理顺序">
            <li data-document-step="1"><strong>出世纸</strong><span>医院呈报出生资料后预约登记，实际出生后42天内办理并申领出生证明书；宝宝无需到场。</span></li>
            <li data-document-step="2"><strong>香港永久性居民身份证</strong><span>符合资格、尚无身份证的11岁以下宝宝，首次申请特区护照时一并递交ROP3。</span></li>
            <li data-document-step="3"><strong>香港特区护照</strong><span>核对中国国籍及永久居民资格，准备ID842、宝宝照片及所需副署资料，按通知领证。</span></li>
            <li data-document-step="4"><strong>多次有效回港证</strong><span>由家长陪同宝宝办理，用于香港出入境；尚无身份证时，可按中旅要求用于回乡证申请。</span></li>
            <li data-document-step="5"><strong>回乡证</strong><span>提前向香港中旅预约，由监护人陪同宝宝递交材料；照片需合格检测回执，按领证回执取证。</span></li>
          </ol>
          <div className="mission-detail">
            <div className="mission-block">
              <h4>同日递交 · 先核对特别安排</h4>
              <ul>
                <li>新生儿持当天签发的出世纸，且第11项注明符合《入境条例》附表1第2(a)项等要求时，可由父母或监护人带同宝宝在同日到入境处分区办事处递交旅行证件申请。</li>
                <li>目前到达时限为周一至周五15:30前、周六11:00前，公众假期除外；不符合特别安排时按正常预约办理。</li>
                <li>备好ID73A、ID842、ROP3及所需ID641副署资料；新生儿特别安排列明回港证照片2张、护照白底彩照3张。具体表格、照片及副署要求办理前再次核对。</li>
              </ul>
            </div>
            <div className="mission-block">
              <h4>受理与领证分开记录</h4>
              <ul>
                <li>出世纸亲身办理时可申领核证副本；回港证材料齐全的亲身申请一般可即日办妥。</li>
                <li>未满11岁、尚无永久身份证的特区护照申请，材料齐全后处理时间目前为10个工作天内，另留领证或补件时间。</li>
                <li>回乡证目前普通件预定12个工作日，加急预定5个工作日；未满3个月婴儿可查询预约绿色通道。实际取证以审批及回执为准。</li>
                <li>任务日期暂按预产期安排，出生后按实际生日、预约与领证通知调整。</li>
              </ul>
            </div>
            <div className="mission-block">
              <h4>证件与母婴情况允许后再返杭</h4>
              <ul>
                <li>回港证用于香港出入境，回乡证用于来往内地；回乡证申请回执不能代替有效入境证件。</li>
                <li>宝宝如已持有效本地签发永久身份证及特区护照，可按香港管制站要求使用该组合，无需重复申领回港证。</li>
                <li>临时通行证仅作条件性备选，先向12367及拟受理口岸核实条件和时效；中旅另有临通受理要求。原攻略的当天返内地、1–2小时出证不作为交通安排的保证。</li>
                <li>暂定争取出院日办证并衔接高铁返杭；实际出发需确认母婴适合长途、有效证件和铁路要求、中心接站入住，同时衔接妈妈及宝宝后续复查。</li>
              </ul>
            </div>
            <div className="mission-block">
              <h4>办理参考 · 核对于2026.10.12</h4>
              <ul>{Object.values(BABY_DOCUMENT_SOURCES).map((reference) => (
                <li key={reference.url}><a href={reference.url} target="_blank" rel="noreferrer">{reference.label}</a></li>
              ))}</ul>
              <p>经验笔记用于整理流程，实际资格、表格和办理时限以受理部门最新指引为准。</p>
            </div>
          </div>
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
