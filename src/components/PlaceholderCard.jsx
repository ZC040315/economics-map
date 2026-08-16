export default function PlaceholderCard({ slot }) {
  const typeLabel =
    slot.type === 'definition'
      ? '回忆卡'
      : slot.type === 'example'
        ? '生活例子'
        : '速测题'

  return (
    <div className="placeholder-card">
      <span className="placeholder-card__type">{typeLabel}</span>
      <h3 className="placeholder-card__title">{slot.title}</h3>
      <p className="placeholder-card__hint">{slot.hint}</p>
      <div className="placeholder-card__empty" aria-hidden="true" />
    </div>
  )
}
