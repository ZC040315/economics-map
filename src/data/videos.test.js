import { describe, expect, it } from 'vitest'
import { videos, videoForChapter } from './videos'

describe('视频库', () => {
  it('每个已填内容的章节都有主视频和备用视频', () => {
    const chapterIds = ['micro-01', 'micro-03', 'micro-04', 'micro-06', 'macro-01', 'macro-03', 'macro-04']
    for (const id of chapterIds) {
      const video = videoForChapter(id)
      expect(video, `缺少视频：${id}`).not.toBeNull()
      expect(video.primary.bvid).toMatch(/^BV/)
      expect(video.primary.page).toBeGreaterThan(0)
      expect(video.primary.embed).toContain('player.bilibili.com')
      expect(video.fallback.bvid).toMatch(/^BV/)
      expect(video.fallback.embed).toContain('player.bilibili.com')
      expect(video.fallback2.bvid).toMatch(/^BV/)
      expect(video.fallback2.embed).toContain('player.bilibili.com')
    }
  })

  it('主视频分P与页面一致', () => {
    for (const video of videos) {
      expect(video.primary.url).toContain(`p=${video.primary.page}`)
      expect(video.primary.embed).toContain(`page=${video.primary.page}`)
    }
  })
})
