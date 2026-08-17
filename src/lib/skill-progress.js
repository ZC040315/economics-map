// 能力地图：按现实决策场景卡的掌握情况计算五个能力维度的进度
import { SKILLS, lifeSkillsFor } from '../data/life-skills'

const BADGE_KEY = 'economics-map:v1:skill-badges'

export function skillProgress(progress) {
  return SKILLS.map((skill) => {
    const cards = lifeSkillsFor(skill.id)
    const total = cards.length
    const mastered = cards.filter((c) => progress[c.id]?.correct).length
    const percent = total ? Math.round((mastered / total) * 100) : 0
    return {
      skillId: skill.id,
      title: skill.title,
      icon: skill.icon,
      desc: skill.desc,
      total,
      mastered,
      percent,
      unlocked: percent === 100 && total > 0,
    }
  })
}

export function overallSkillPercent(progress) {
  const entries = skillProgress(progress)
  const total = entries.reduce((sum, e) => sum + e.total, 0)
  const mastered = entries.reduce((sum, e) => sum + e.mastered, 0)
  return total ? Math.round((mastered / total) * 100) : 0
}

export function loadSkillBadges() {
  try {
    const raw = localStorage.getItem(BADGE_KEY)
    return raw ? JSON.parse(raw) : []
  } catch {
    return []
  }
}

export function saveSkillBadges(badges) {
  try {
    localStorage.setItem(BADGE_KEY, JSON.stringify(badges))
  } catch {
    // 忽略存储不可用
  }
}

// 返回本次新解锁的徽章 id（并持久化）
export function syncSkillBadges(progress) {
  const saved = loadSkillBadges()
  const newly = skillProgress(progress)
    .filter((s) => s.unlocked && !saved.includes(s.skillId))
    .map((s) => s.skillId)
  if (newly.length) {
    saveSkillBadges([...saved, ...newly])
  }
  return newly
}
