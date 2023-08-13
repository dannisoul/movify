import { CharacterCard } from './CharacterCard'
export function Cast ({ cast }) {
  const characterContainer = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(120px, 1fr))',
    gap: '1rem',
    placeItems: 'center'
  }
  return (
    <div className='w-10/12 my-4 max-w-[1200px] mx-auto'>
      <h3 className='text-2xl font-bold mb-8'>Cast</h3>
      <section className='w-full' style={characterContainer}>
        {cast.map(character => (
          <CharacterCard
            key={character.id}
            name={character.name}
            character={character.character}
            picture={character.picture}
            id={character.id}
          />
        ))}
      </section>
    </div>
  )
}
