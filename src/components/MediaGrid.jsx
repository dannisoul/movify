import { MovieCard } from './MovieCard'

export function MediaGrid ({ mediaList }) {
  const gridContainer = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
    flexGrow: 1,
    gap: '1rem'
  }
  return (
    <div style={gridContainer}>
      {mediaList.map(media => (
        <MovieCard
          key={media.id}
          id={media.id}
          title={media.title}
          poster={media.poster}
          date={media.date}
          score={media.score}
          type={media.type}
        />
      ))}
    </div>
  )
}
