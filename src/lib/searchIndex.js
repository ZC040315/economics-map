// 搜索索引：章节 / 知识点 / 题目 / 公式
import { curriculum, flattenChapters } from '../data/chapters'
import { questionBanks } from '../data/questions'
import { lifeSkills } from '../data/life-skills'

let cache = null

export function buildSearchIndex() {
  if (cache) return cache
  const items = []

  for (const chapter of flattenChapters(curriculum)) {
    items.push({
      id: chapter.id,
      type: 'chapter',
      title: chapter.title,
      subtitle: chapter.trackId === 'micro' ? '微观经济学' : '宏观经济学',
      keywords: `${chapter.title} ${chapter.trackId === 'micro' ? '微观' : '宏观'}`,
      href: `#/chapter/${chapter.id}`,
    })
    for (const card of chapter.cards) {
      const formula = card.formula ? ` ${card.formula}` : ''
      items.push({
        id: card.id,
        type: 'knowledge',
        title: card.title,
        subtitle: chapter.title,
        keywords: `${card.title} ${card.definition} ${card.recall}${formula}`,
        href: `#/knowledge/${card.id}`,
      })
    }
  }

  for (const bank of questionBanks) {
    for (const q of bank.questions) {
      items.push({
        id: q.id,
        type: 'question',
        title: q.prompt,
        subtitle: `${bank.chapterId} 练习题`,
        keywords: q.prompt,
        href: `#/chapter/${bank.chapterId}?q=${q.id}`,
      })
    }
  }

  for (const skill of lifeSkills) {
    items.push({
      id: skill.id,
      type: 'scenario',
      title: skill.situation,
      subtitle: `${skill.skill} · 现实场景`,
      keywords: `${skill.situation} ${skill.question} ${skill.principle}`,
      href: `#/skills?s=${skill.id}`,
    })
  }

  cache = items
  return items
}

export function searchIndex(query, limit = 10) {
  const q = query.trim().toLowerCase()
  if (!q) return []
  const items = buildSearchIndex()
  const scored = []
  for (const item of items) {
    const haystack = item.keywords.toLowerCase()
    const title = item.title.toLowerCase()
    if (title.includes(q)) {
      scored.push({ ...item, score: 0 })
    } else if (haystack.includes(q)) {
      scored.push({ ...item, score: 1 })
    }
  }
  scored.sort((a, b) => a.score - b.score)
  return scored.slice(0, limit)
}
