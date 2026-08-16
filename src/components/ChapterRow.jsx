import { masteryColor, statusLabel } from '../lib/mastery'
import { chapterMastery, chapterStatus } from '../lib/progress'

export default function ChapterRow({
  index,
  chapter,
  selected,
  progress,
  onSelect,
}) {
  const mastery = chapterMastery(chapter.cards, progress)
  const status = chapterStatus(mastery)

  return (
    <li>
      <button
        type="button"
        className={`chapter-row${selected ? ' chapter-row--selected' : ''}`}
        onClick={onSelect}
        aria-current={selected ? 'true' : undefined}
      >
        <span className="chapter-row__index">
          {String(index).padStart(2, '0')}
        </span>
        <span className="chapter-row__body">
          <span className="chapter-row__title">{chapter.title}</span>
          <span className="chapter-row__meta">
            <span
              className={`status-dot status-dot--${status}`}
              aria-hidden="true"
            />
            <span className="chapter-row__status">
              {statusLabel(status)}
            </span>
            <span
              className="mastery-bar"
              role="img"
              aria-label={`掌握度 ${mastery}%`}
            >
              <span
                className="mastery-bar__fill"
                style={{
                  width: `${mastery}%`,
                  background: masteryColor(mastery),
                }}
              />
            </span>
          </span>
        </span>
      </button>
    </li>
  )
}
