import { useState } from 'react'
import { videoForChapter } from '../data/videos'

export default function VideoSection({ chapterId }) {
  const video = videoForChapter(chapterId)
  const [activeKey, setActiveKey] = useState('primary')

  if (!video) return null

  const active = video[activeKey]
  const fallbacks = [
    { key: 'fallback', item: video.fallback },
    { key: 'fallback2', item: video.fallback2 },
  ].filter((entry) => entry.item)

  return (
    <section className="video-section" aria-label="视频讲解">
      <div className="video-section__head">
        <h2 className="video-section__title">视频讲解</h2>
        <span className="video-section__badge">B站公开课</span>
      </div>
      <div className="video-section__frame">
        <iframe
          key={active.embed}
          src={active.embed}
          title={active.title}
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
          loading="lazy"
        />
      </div>
      <div className="video-section__meta">
        <p className="video-section__name">{active.title}</p>
        <a
          className="video-section__link"
          href={active.url}
          target="_blank"
          rel="noreferrer"
        >
          去 B站 打开原视频
        </a>
      </div>
      <div className="video-section__fallbacks">
        <span className="video-section__fallback-label">备用视频：</span>
        {fallbacks.map(({ key, item }, index) => (
          <span key={key} className="video-section__fallback-item">
            <button
              type="button"
              className={`video-section__fallback-btn${
                activeKey === key ? ' video-section__fallback-btn--active' : ''
              }`}
              onClick={() => setActiveKey(key)}
            >
              {item.title}
            </button>
            <a
              className="video-section__link video-section__link--small"
              href={item.url}
              target="_blank"
              rel="noreferrer"
            >
              备用{index + 1}原链接
            </a>
          </span>
        ))}
      </div>
    </section>
  )
}
