import ChapterRow from './ChapterRow'

export default function MapTree({ track, selectedId, progress, onSelect }) {
  return (
    <section className="map-tree" aria-label={track.title}>
      <header className="map-tree__head">
        <h2 className="map-tree__title">{track.title}</h2>
        <span className="map-tree__count">{track.chapters.length} 章</span>
      </header>
      <p className="map-tree__desc">{track.description}</p>
      <ol className="map-tree__list">
        {track.chapters.map((chapter, index) => (
          <ChapterRow
            key={chapter.id}
            index={index + 1}
            chapter={chapter}
            selected={chapter.id === selectedId}
            progress={progress}
            onSelect={() => onSelect(chapter.id)}
          />
        ))}
      </ol>
    </section>
  )
}
