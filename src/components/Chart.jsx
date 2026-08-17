// 图片分析题用的标准教材风格 SVG 图表
// 坐标轴带箭头、曲线平滑、均衡点规范标注（P* / Q* 虚线）
// 颜色通过 style 使用 Design Token，保证 Dark Mode 下也正确

const S = { stroke: 'var(--color-review)' }
const D = { stroke: 'var(--color-learning)' }
const E = { fill: 'var(--color-text)' }
const AXIS = { stroke: 'var(--color-text-2)' }
const DASH = { stroke: 'var(--color-text-3)' }
const LABEL = { fill: 'var(--color-text)' }
const SUB = { fill: 'var(--color-text-3)' }
const CS = { fill: 'rgba(37, 99, 235, 0.14)' }
const PS = { fill: 'rgba(217, 119, 6, 0.16)' }
const WHITE = { fill: '#ffffff' }

const D_PATH = 'M 72 66 Q 150 90 215 145 Q 290 195 380 232'
const S_PATH = 'M 88 232 Q 155 200 215 145 Q 285 110 368 78'
const EX = 215
const EY = 145
const OX = 56
const OY = 258

function ArrowAxis({ pLabel = 'P', qLabel = 'Q' }) {
  return (
    <g>
      <line x1={OX} y1={OY} x2={OX} y2={34} strokeWidth={1.5} style={AXIS} />
      <polygon points={`${OX},26 ${OX - 5},38 ${OX + 5},38`} style={AXIS} />
      <line x1={OX} y1={OY} x2={394} y2={OY} strokeWidth={1.5} style={AXIS} />
      <polygon points={`402,${OY} 388,${OY - 5} 388,${OY + 5}`} style={AXIS} />
      <text x={OX - 14} y={38} fontSize={15} fontWeight={700} fontStyle="italic" style={LABEL}>
        {pLabel}
      </text>
      <text x={402} y={OY + 5} fontSize={15} fontWeight={700} fontStyle="italic" style={LABEL}>
        {qLabel}
      </text>
      <text x={OX - 16} y={OY + 5} fontSize={12} style={SUB}>
        0
      </text>
    </g>
  )
}

function SupplyDemandChart() {
  return (
    <svg viewBox="0 0 420 300" role="img" aria-label="供需曲线图">
      <ArrowAxis />
      <line x1={EX} y1={EY} x2={EX} y2={OY} strokeWidth={1.2} strokeDasharray="5 4" style={DASH} />
      <line x1={OX} y1={EY} x2={EX} y2={EY} strokeWidth={1.2} strokeDasharray="5 4" style={DASH} />
      <path d={D_PATH} fill="none" strokeWidth={2.6} strokeLinecap="round" style={D} />
      <path d={S_PATH} fill="none" strokeWidth={2.6} strokeLinecap="round" style={S} />
      <circle cx={EX} cy={EY} r={5} style={E} />
      <text x={EX + 9} y={EY - 8} fontSize={15} fontWeight={700} style={E}>
        E
      </text>
      <text x={EX - 6} y={OY + 20} fontSize={13} fontWeight={600} fontStyle="italic" style={LABEL}>
        Q*
      </text>
      <text x={OX - 16} y={EY + 4} fontSize={13} fontWeight={600} fontStyle="italic" style={LABEL}>
        P*
      </text>
      <text x={368} y={68} fontSize={14} fontWeight={700} style={S}>
        S
      </text>
      <text x={384} y={238} fontSize={14} fontWeight={700} style={D}>
        D
      </text>
    </svg>
  )
}

function ElasticityChart() {
  return (
    <svg viewBox="0 0 420 300" role="img" aria-label="需求弹性对比图">
      <ArrowAxis />
      <path d="M 92 92 Q 190 150 268 240" fill="none" strokeWidth={2.6} strokeLinecap="round" style={D} />
      <path d="M 92 92 Q 240 150 392 205" fill="none" strokeWidth={2.6} strokeLinecap="round" style={S} />
      <line x1={OX} y1={150} x2={330} y2={150} strokeWidth={1.1} strokeDasharray="5 4" style={DASH} />
      <text x={OX - 18} y={155} fontSize={12} fontStyle="italic" style={SUB}>
        P₁
      </text>
      <text x={100} y={78} fontSize={13} fontWeight={700} style={D}>
        缺乏弹性（陡峭）
      </text>
      <text x={250} y={200} fontSize={13} fontWeight={700} style={S}>
        富有弹性（平缓）
      </text>
      <text x={60} y={284} fontSize={12} style={SUB}>
        同一价格变化下：陡线数量变化小，平线数量变化大
      </text>
    </svg>
  )
}

function SurplusChart() {
  return (
    <svg viewBox="0 0 420 300" role="img" aria-label="消费者与生产者剩余图">
      <ArrowAxis />
      <path d={`M 72 66 Q 150 90 ${EX} ${EY} L ${OX} ${EY} Z`} style={CS} />
      <path d={`M 88 232 Q 155 200 ${EX} ${EY} L ${OX} ${EY} Z`} style={PS} />
      <line x1={OX} y1={EY} x2={EX} y2={EY} strokeWidth={1.2} strokeDasharray="5 4" style={DASH} />
      <line x1={EX} y1={EY} x2={EX} y2={OY} strokeWidth={1.2} strokeDasharray="5 4" style={DASH} />
      <path d={D_PATH} fill="none" strokeWidth={2.6} strokeLinecap="round" style={D} />
      <path d={S_PATH} fill="none" strokeWidth={2.6} strokeLinecap="round" style={S} />
      <circle cx={EX} cy={EY} r={5} style={E} />
      <text x={EX + 9} y={EY - 8} fontSize={15} fontWeight={700} style={E}>
        E
      </text>
      <text x={OX - 16} y={EY + 4} fontSize={13} fontWeight={600} fontStyle="italic" style={LABEL}>
        P*
      </text>
      <text x={100} y={92} fontSize={13} fontWeight={700} style={D}>
        消费者剩余
      </text>
      <text x={100} y={215} fontSize={13} fontWeight={700} style={S}>
        生产者剩余
      </text>
      <text x={368} y={68} fontSize={14} fontWeight={700} style={S}>
        S
      </text>
      <text x={384} y={238} fontSize={14} fontWeight={700} style={D}>
        D
      </text>
    </svg>
  )
}

function GdpChart() {
  const parts = [
    { label: 'C 消费', value: 55, style: { fill: 'var(--color-learning)' } },
    { label: 'I 投资', value: 20, style: { fill: 'var(--color-mastered)' } },
    { label: 'G 政府购买', value: 15, style: { fill: 'var(--color-accent)' } },
    { label: 'NX 净出口', value: 10, style: { fill: 'var(--color-review)' } },
  ]
  const barX = 56
  const barY = 96
  const barH = 56
  const totalW = 330
  let x = barX
  return (
    <svg viewBox="0 0 420 300" role="img" aria-label="GDP 支出构成图">
      <text x={barX} y={48} fontSize={16} fontWeight={700} style={LABEL}>
        GDP = C + I + G + NX
      </text>
      <line x1={barX} y1={barY + barH} x2={barX + totalW} y2={barY + barH} strokeWidth={1.5} style={AXIS} />
      {parts.map((part) => {
        const width = (part.value / 100) * totalW
        const el = (
          <g key={part.label}>
            <rect x={x} y={barY} width={width} height={barH} rx={3} style={part.style} />
            <text
              x={x + width / 2}
              y={barY + barH / 2 + 5}
              fontSize={13}
              fontWeight={700}
              textAnchor="middle"
              style={WHITE}
            >
              {part.value}%
            </text>
          </g>
        )
        x += width
        return el
      })}
      {parts.map((part, i) => (
        <text
          key={`l-${part.label}`}
          x={barX + (i / 4) * totalW + 40}
          y={barY + barH + 26}
          fontSize={13}
          fontWeight={700}
          style={LABEL}
        >
          {part.label}
        </text>
      ))}
      <text x={barX} y={228} fontSize={12} style={SUB}>
        各部分占 GDP 比重（示意）：消费通常占比最大
      </text>
    </svg>
  )
}

function InflationChart() {
  return (
    <svg viewBox="0 0 420 300" role="img" aria-label="货币量与物价图">
      <ArrowAxis pLabel="水平" qLabel="时间" />
      <line x1={80} y1={150} x2={392} y2={150} strokeWidth={2.6} strokeLinecap="round" style={D} />
      <path d="M 80 215 Q 230 180 392 70" fill="none" strokeWidth={2.6} strokeLinecap="round" style={S} />
      <text x={300} y={140} fontSize={13} fontWeight={700} style={D}>
        商品量（不变）
      </text>
      <text x={300} y={78} fontSize={13} fontWeight={700} style={S}>
        货币量（增加）
      </text>
      <text x={80} y={272} fontSize={12} style={SUB}>
        钱多了而商品没变多 → 购买力下降 → 物价上涨
      </text>
    </svg>
  )
}

function UnemploymentChart() {
  return (
    <svg viewBox="0 0 420 300" role="img" aria-label="失业与自然失业率图">
      <ArrowAxis pLabel="失业率" qLabel="时间" />
      <line x1={80} y1={140} x2={392} y2={140} strokeWidth={1.6} strokeDasharray="6 5" style={DASH} />
      <path
        d="M 80 105 Q 120 170 160 125 Q 200 80 240 155 Q 280 205 320 130 Q 360 90 392 120"
        fill="none"
        strokeWidth={2.6}
        strokeLinecap="round"
        style={S}
      />
      <path
        d="M 122 168 Q 160 126 240 156 Q 278 204 316 132 L 316 140 Q 278 140 240 140 Q 160 140 122 140 Z"
        style={PS}
      />
      <text x={252} y={126} fontSize={13} fontWeight={700} style={LABEL}>
        自然失业率
      </text>
      <text x={318} y={112} fontSize={13} fontWeight={700} style={S}>
        实际失业率
      </text>
      <text x={226} y={205} fontSize={12} fontWeight={600} style={SUB}>
        阴影 = 周期性失业（经济波动）
      </text>
      <text x={80} y={272} fontSize={12} style={SUB}>
        摩擦 + 结构 = 自然失业率；实际失业率围绕它波动
      </text>
    </svg>
  )
}

function TradeoffChart() {
  return (
    <svg viewBox="0 0 420 300" role="img" aria-label="生产可能性边界图">
      <ArrowAxis pLabel="商品 B" qLabel="商品 A" />
      <path d="M 72 236 C 130 200 220 130 380 70 L 380 236 Z" style={CS} />
      <path d="M 72 236 C 130 200 220 130 380 70" fill="none" strokeWidth={2.6} strokeLinecap="round" style={S} />
      <circle cx={196} cy={160} r={5} style={E} />
      <text x={204} y={152} fontSize={14} fontWeight={700} style={E}>
        A
      </text>
      <text x={270} y={82} fontSize={13} fontWeight={700} style={S}>
        生产可能性边界
      </text>
      <text x={120} y={225} fontSize={12} style={SUB}>
        阴影：可达到的产出组合
      </text>
      <text x={70} y={272} fontSize={12} style={SUB}>
        沿曲线移动 = 放弃一种商品换取另一种（机会成本）
      </text>
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
