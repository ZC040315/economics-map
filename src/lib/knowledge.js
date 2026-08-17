import { curriculum, flattenChapters } from '../data/chapters'

export function knowledgeById(cardId) {
  for (const chapter of flattenChapters(curriculum)) {
    const card = chapter.cards.find((c) => c.id === cardId)
    if (card) return { card, chapter }
  }
  return null
}

export function relatedKnowledge(relatedIds) {
  if (!Array.isArray(relatedIds)) return []
  return relatedIds
    .map((id) => knowledgeById(id))
    .filter(Boolean)
    .map(({ card, chapter }) => ({ card, chapter }))
}
