import { useEffect, useMemo, useRef, useState } from 'react'
import { curriculum } from '../data/chapters'
import { chapterMastery, chapterStatus } from '../lib/progress'

const NODE_COLORS = {
  'not-started': 'var(--color-muted)',
  learning: 'var(--color-learning)',
  mastered: 'var(--color-mastered)',
  review: 'var(--color-review)',
}

function buildLayout(progress) {
  const nodes = []
  const links = []
  curriculum.forEach((track, tIdx) => {
    const clusterX = tIdx === 0 ? 260 : 900
    track.chapters.forEach((chapter, cIdx) => {
      const y = 110 + cIdx * 165
      const mastery = chapterMastery(chapter.cards, progress)
      nodes.push({
        type: 'chapter',
        id: chapter.id,
        title: chapter.title,
        x: clusterX,
        y,
        mastery,
        status: chapterStatus(mastery),
        href: `#/chapter/${chapter.id}`,
      })
      chapter.cards.forEach((card, kIdx) => {
        const span = chapter.cards.length
        const cardX = clusterX + (kIdx - (span - 1) / 2) * 150
        const cardY = y + 78
        const record = progress[card.id]
        const status = record?.correct
          ? 'mastered'
          : record?.attempts > 0
            ? 'review'
            : 'not-started'
        nodes.push({
          type: 'knowledge',
          id: card.id,
          title: card.title,
          x: cardX,
          y: cardY,
          status,
          href: `#/knowledge/${card.id}`,
        })
        links.push({ from: chapter.id, to: card.id })
      })
    })
  })
  return { nodes, links }
}

export default function KnowledgeMap({ progress }) {
  const { nodes } = useMemo(() => buildLayout(progress), [progress])
  const containerRef = useRef(null)
  const [scale, setScale] = useState(1)
  const [offset, setOffset] = useState({ x: 0, y: 0 })
  const dragRef = useRef(null)

  useEffect(() => {
    const el = containerRef.current
    if (!el) return undefined
    const onWheel = (e) => {
      e.preventDefault()
      setScale((s) => Math.min(2.5, Math.max(0.45, s * (e.deltaY < 0 ? 1.1 : 0.9))))
    }
    el.addEventListener('wheel', onWheel, { passive: false })
    return () => el.removeEventListener('wheel', onWheel)
  }, [])

  const onMouseDown = (e) => {
    dragRef.current = { x: e.clientX, y: e.clientY, ox: offset.x, oy: offset.y }
    e.preventDefault()
  }
  const onMouseMove = (e) => {
    if (!dragRef.current) return
    setOffset({
      x: dragRef.current.ox + (e.clientX - dragRef.current.x),
      y: dragRef.current.oy + (e.clientY - dragRef.current.y),
    })
  }
  const onMouseUp = () => {
    dragRef.current = null
  }

  const reset = () => {
    setScale(1)
    setOffset({ x: 0, y: 0 })
  }

  return (
    <div className="knowledge-map">
      <div className="knowledge-map__toolbar">
        <span className="knowledge-map__legend">
          <span className="legend-dot legend-dot--muted" /> 未学习
          <span className="legend-dot legend-dot--learning" /> 学习中
          <span className="legend-dot legend-dot--mastered" /> 已掌握
          <span className="legend-dot legend-dot--review" /> 待复习
        </span>
        <button type="button" className="btn btn--ghost btn--sm" onClick={reset}>
          复位视图
        </button>
      </div>
      <div
        ref={containerRef}
        className="knowledge-map__canvas"
        onMouseDown={onMouseDown}
        onMouseMove={onMouseMove}
        onMouseUp={onMouseUp}
        onMouseLeave={onMouseUp}
      >
        <svg
          viewBox="0 0 1560 1950"
          width="100%"
          height="100%"
          style={{ touchAction: 'none' }}
        >
          <g
            transform={`translate(${offset.x} ${offset.y}) scale(${scale})`}
            style={{ transformOrigin: '0 0' }}
          >
            {/* 集群标签 */}
            <text x={260} y={40} textAnchor="middle" className="km-cluster-label">
              微观经济学
            </text>
            <text x={900} y={40} textAnchor="middle" className="km-cluster-label">
              宏观经济学
            </text>
            {/* 章节节点 */}
            {nodes
              .filter((n) => n.type === 'chapter')
              .map((node) => (
                <a key={node.id} href={node.href} className="km-link">
                  <g className="km-chapter">
                    <rect
                      x={node.x - 95}
                      y={node.y - 24}
                      width={190}
                      height={48}
                      rx={12}
                      fill="var(--color-surface)"
                      stroke={NODE_COLORS[node.status]}
                      strokeWidth={2}
                    />
                    <text
                      x={node.x}
                      y={node.y - 3}
                      textAnchor="middle"
                      className="km-chapter-title"
                    >
                      {node.title}
                    </text>
                    <text
                      x={node.x}
                      y={node.y + 15}
                      textAnchor="middle"
                      className="km-chapter-mastery"
                    >
                      掌握 {node.mastery}%
                    </text>
                  </g>
                </a>
              ))}
            {/* 知识点节点 */}
            {nodes
              .filter((n) => n.type === 'knowledge')
              .map((node) => (
                <a key={node.id} href={node.href} className="km-link">
                  <g className="km-knowledge">
                    <circle
                      cx={node.x}
                      cy={node.y}
                      r={16}
                      fill="var(--color-surface)"
                      stroke={NODE_COLORS[node.status]}
                      strokeWidth={2.5}
                    />
                    <text
                      x={node.x}
                      y={node.y + 4.5}
                      textAnchor="middle"
                      className="km-dot"
                    >
                      •
                    </text>
                    <title>{node.title}</title>
                  </g>
                </a>
              ))}
          </g>
        </svg>
      </div>
      <p className="knowledge-map__hint">
        滚轮缩放 · 拖拽平移 · 点击节点跳转 · 圆点=知识点，方框=章节
      </p>
    </div>
  )
}
