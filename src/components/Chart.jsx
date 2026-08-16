// 图片分析题用的内嵌 SVG 图表（矢量绘制，精确清晰）

const AXIS_COLOR = '#8a8d94'
const LINE_COLOR = '#b7791f'
const LINE2_COLOR = '#2563eb'
const FILL_COLOR = 'rgba(183, 121, 31, 0.15)'
const FILL2_COLOR = 'rgba(37, 99, 235, 0.12)'
const TEXT_COLOR = '#23262d'
const GRID_COLOR = '#e6e1d6'

function AxisLines({ w = 360, h = 240, x0 = 36, y0 = 200 }) {
  return (
    <g>
      <line x1={x0} y1={y0} x2={x0} y2={24} stroke={AXIS_COLOR} strokeWidth={1.5} />
      <line x1={x0} y1={y0} x2={w - 16} y2={y0} stroke={AXIS_COLOR} strokeWidth={1.5} />
      <text x={x0 - 10} y={30} fontSize={14} fill={TEXT_COLOR}>P</text>
      <text x={w - 22} y={y0 + 18} fontSize={14} fill={TEXT_COLOR}>Q</text>
      <text x={x0 - 24} y={y0 + 4} fontSize={11} fill={TEXT_COLOR}>0</text>
    </g>
  )
}

function SupplyDemandChart() {
  return (
    <svg viewBox="0 0 380 240" role="img" aria-label="供需曲线图">
      <AxisLines />
      {/* 供给曲线 */}
      <line x1={60} y1={190} x2={330} y2={50} stroke={LINE_COLOR} strokeWidth={2.5} />
      <text x={320} y={44} fontSize={13} fill={LINE_COLOR} fontWeight={700}>S（供给）</text>
      {/* 需求曲线 */}
      <line x1={60} y1={50} x2={330} y2={190} stroke={LINE2_COLOR} strokeWidth={2.5} />
      <text x={30} y={44} fontSize={13} fill={LINE2_COLOR} fontWeight={700}>D（需求）</text>
      {/* 均衡点 */}
      <circle cx={195} cy={120} r={4.5} fill={TEXT_COLOR} />
      <text x={205} y={112} fontSize={13} fill={TEXT_COLOR} fontWeight={700}>E（均衡）</text>
      {/* 虚线 */}
      <line x1={195} y1={120} x2={195} y2={200} stroke={GRID_COLOR} strokeWidth={1} strokeDasharray="4 3" />
      <line x1={36} y1={120} x2={195} y2={120} stroke={GRID_COLOR} strokeWidth={1} strokeDasharray="4 3" />
      <text x={196} y={200} fontSize={12} fill={TEXT_COLOR}>Q*</text>
      <text x={42} y={114} fontSize={12} fill={TEXT_COLOR}>P*</text>
    </svg>
  )
}

function ElasticityChart() {
  return (
    <svg viewBox="0 0 380 240" role="img" aria-label="弹性对比图">
      <AxisLines />
      {/* 陡峭需求曲线（缺乏弹性） */}
      <line x1={60} y1={70} x2={230} y2={175} stroke={LINE2_COLOR} strokeWidth={2.5} />
      <text x={40} y={60} fontSize={13} fill={LINE2_COLOR} fontWeight={700}>缺乏弹性（陡）</text>
      {/* 平缓需求曲线（富有弹性） */}
      <line x1={90} y1={200} x2={330} y2={120} stroke={LINE_COLOR} strokeWidth={2.5} />
      <text x={240} y={108} fontSize={13} fill={LINE_COLOR} fontWeight={700}>富有弹性（平）</text>
    </svg>
  )
}

function SurplusChart() {
  return (
    <svg viewBox="0 0 380 240" role="img" aria-label="消费者与生产者剩余图">
      <AxisLines />
      <line x1={60} y1={190} x2={330} y2={50} stroke={LINE_COLOR} strokeWidth={2.5} />
      <text x={320} y={44} fontSize={13} fill={LINE_COLOR} fontWeight={700}>S</text>
      <line x1={60} y1={50} x2={330} y2={190} stroke={LINE2_COLOR} strokeWidth={2.5} />
      <text x={28} y={44} fontSize={13} fill={LINE2_COLOR} fontWeight={700}>D</text>
      <circle cx={195} cy={120} r={4} fill={TEXT_COLOR} />
      {/* 消费者剩余：需求线下方、价格线上方 */}
      <polygon points="60,50 195,120 60,120" fill={FILL2_COLOR} stroke="none" />
      {/* 生产者剩余：价格线下方、供给线上方 */}
      <polygon points="195,120 60,190 60,120" fill={FILL_COLOR} stroke="none" />
      <text x={92} y={76} fontSize={12} fill={LINE2_COLOR} fontWeight={700}>消费者剩余</text>
      <text x={92} y={176} fontSize={12} fill={LINE_COLOR} fontWeight={700}>生产者剩余</text>
      <line x1={36} y1={120} x2={195} y2={120} stroke={GRID_COLOR} strokeWidth={1} strokeDasharray="4 3" />
      <text x={40} y={114} fontSize={12} fill={TEXT_COLOR}>P*</text>
    </svg>
  )
}

function GdpChart() {
  const parts = [
    { label: '消费 C', value: 55, color: '#b7791f' },
    { label: '投资 I', value: 20, color: '#2563eb' },
    { label: '政府购买 G', value: 15, color: '#16803c' },
    { label: '净出口 NX', value: 10, color: '#d97706' },
  ]
  let x = 40
  return (
    <svg viewBox="0 0 380 240" role="img" aria-label="GDP 支出构成图">
      <text x={40} y={40} fontSize={15} fontWeight={700} fill={TEXT_COLOR}>GDP = C + I + G + NX</text>
      {parts.map((part) => {
        const width = (part.value / 100) * 300
        const el = (
          <g key={part.label}>
            <rect x={x} y={80} width={width} height={44} fill={part.color} rx={4} />
            <text x={x + width / 2} y={107} fontSize={12} fill="#fff" textAnchor="middle" fontWeight={700}>
              {part.label} {part.value}%
            </text>
          </g>
        )
        x += width
        return el
      })}
      <line x1={40} y1={150} x2={340} y2={150} stroke={AXIS_COLOR} strokeWidth={1.5} />
      <text x={40} y={172} fontSize={12} fill={TEXT_COLOR}>各部分占 GDP 比重（示意）</text>
    </svg>
  )
}

function InflationChart() {
  return (
    <svg viewBox="0 0 380 240" role="img" aria-label="货币量与物价图">
      <AxisLines />
      <line x1={60} y1={185} x2={330} y2={185} stroke={LINE2_COLOR} strokeWidth={2.5} />
      <text x={250} y={178} fontSize={13} fill={LINE2_COLOR} fontWeight={700}>商品量（不变）</text>
      <line x1={60} y1={195} x2={330} y2={60} stroke={LINE_COLOR} strokeWidth={2.5} />
      <text x={250} y={54} fontSize={13} fill={LINE_COLOR} fontWeight={700}>货币量（变多）</text>
      <text x={46} y={230} fontSize={12} fill={TEXT_COLOR}>时间 →</text>
      <text x={52} y={220} fontSize={12} fill={TEXT_COLOR}>钱多了 → 物价涨</text>
    </svg>
  )
}

function UnemploymentChart() {
  const blocks = [
    { label: '摩擦性失业', desc: '换工作过渡', color: '#2563eb', width: 110 },
    { label: '结构性失业', desc: '技能不匹配', color: '#16803c', width: 120 },
    { label: '周期性失业', desc: '经济衰退', color: '#d97706', width: 100 },
  ]
  let x = 36
  return (
    <svg viewBox="0 0 380 240" role="img" aria-label="失业类型构成图">
      <text x={36} y={42} fontSize={15} fontWeight={700} fill={TEXT_COLOR}>失业的三种类型</text>
      {blocks.map((block) => {
        const el = (
          <g key={block.label}>
            <rect x={x} y={80} width={block.width} height={52} rx={6} fill={block.color} />
            <text x={x + block.width / 2} y={102} fontSize={13} fill="#fff" textAnchor="middle" fontWeight={700}>
              {block.label}
            </text>
            <text x={x + block.width / 2} y={120} fontSize={11} fill="#fff" textAnchor="middle">
              {block.desc}
            </text>
          </g>
        )
        x += block.width + 10
        return el
      })}
      <text x={36} y={168} fontSize={12} fill={TEXT_COLOR}>
        前两类 = 自然失业率；周期性随经济起伏
      </text>
    </svg>
  )
}

function TradeoffChart() {
  return (
    <svg viewBox="0 0 380 240" role="img" aria-label="生产可能性边界图">
      <AxisLines />
      {/* PPF 曲线 */}
      <path
        d="M 60 185 Q 200 60 330 60 L 330 60 L 60 185 Z"
        fill={FILL_COLOR}
        stroke="none"
      />
      <path
        d="M 60 185 Q 200 60 330 60"
        fill="none"
        stroke={LINE_COLOR}
        strokeWidth={2.5}
      />
      <text x={250} y={52} fontSize={13} fill={LINE_COLOR} fontWeight={700}>生产可能性边界</text>
      <circle cx={170} cy={112} r={4} fill={TEXT_COLOR} />
      <text x={176} y={104} fontSize={12} fill={TEXT_COLOR}>A 点：多生产 A 就少生产 B</text>
      <text x={70} y={210} fontSize={12} fill={TEXT_COLOR}>一种商品 →</text>
      <text x={300} y={210} fontSize={12} fill={TEXT_COLOR}>另一种商品 →</text>
    </svg>
  )
}

const CHARTS = {
  'supply-demand': SupplyDemandChart,
  elasticity: ElasticityChart,
  surplus: SurplusChart,
  gdp: GdpChart,
  inflation: InflationChart,
  unemployment: UnemploymentChart,
  tradeoff: TradeoffChart,
}

export default function Chart({ image, caption }) {
  const ChartComponent = CHARTS[image]
  if (!ChartComponent) return null
  return (
    <figure className="chart">
      <ChartComponent />
      {caption && <figcaption className="chart__caption">{caption}</figcaption>}
    </figure>
  )
}
