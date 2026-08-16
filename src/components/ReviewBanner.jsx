export default function ReviewBanner({ dueCount, onStart }) {
  if (dueCount === 0) {
    return (
      <div className="review-banner review-banner--empty">
        <span className="review-banner__text">今日待复习：0 张 · 全部完成</span>
      </div>
    )
  }

  return (
    <div className="review-banner">
      <span className="review-banner__text">
        今日待复习 <strong>{dueCount}</strong> 张
      </span>
      <button
        type="button"
        className="review-banner__start"
        onClick={onStart}
      >
        开始复习
      </button>
    </div>
  )
}
