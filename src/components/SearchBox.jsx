import { useEffect, useRef, useState } from 'react'
import { searchIndex } from '../lib/searchIndex'

const TYPE_LABELS = {
  chapter: '章节',
  knowledge: '知识点',
  question: '题目',
  scenario: '场景',
}

export default function SearchBox() {
  const [query, setQuery] = useState('')
  const [open, setOpen] = useState(false)
  const boxRef = useRef(null)
  const results = query.trim() ? searchIndex(query) : []

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === '/' && document.activeElement?.tagName !== 'INPUT') {
        e.preventDefault()
        boxRef.current?.querySelector('input')?.focus()
      }
      if (e.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  useEffect(() => {
    const onDown = (e) => {
      if (boxRef.current && !boxRef.current.contains(e.target)) setOpen(false)
    }
    document.addEventListener('mousedown', onDown)
    return () => document.removeEventListener('mousedown', onDown)
  }, [])

  const grouped = {}
  for (const item of results) {
    ;(grouped[item.type] ??= []).push(item)
  }

  return (
    <div className="search-box" ref={boxRef}>
      <svg
        className="search-box__icon"
        viewBox="0 0 24 24"
        width="16"
        height="16"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <circle cx="11" cy="11" r="7" />
        <path d="m20 20-3.5-3.5" />
      </svg>
      <input
        type="search"
        placeholder="搜索章节、知识点、公式…（/）"
        value={query}
        onChange={(e) => {
          setQuery(e.target.value)
          setOpen(true)
        }}
        onFocus={() => setOpen(true)}
      />
      {open && query.trim() && (
        <div className="search-box__dropdown">
          {results.length === 0 ? (
            <p className="search-box__empty">没有找到匹配内容</p>
          ) : (
            Object.entries(grouped).map(([type, items]) => (
              <div key={type} className="search-box__group">
                <span className="search-box__group-label">
                  {TYPE_LABELS[type]}
                </span>
                {items.map((item) => (
                  <a
                    key={item.id}
                    className="search-box__result"
                    href={item.href}
                    onClick={() => setOpen(false)}
                  >
                    <span className="search-box__result-title">{item.title}</span>
                    <span className="search-box__result-sub">{item.subtitle}</span>
                  </a>
                ))}
              </div>
            ))
          )}
        </div>
      )}
    </div>
  )
}
