import { CharacterCard } from './CharacterCard'

export function PeopleGrid ({ people }) {
  const gridContainer = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(140px, 1fr))',
    width: '100%',
    rowGap: '2rem'
  }
  return (
    <div style={gridContainer} className=''>
      {people.map(character => (
        <CharacterCard
          key={character.id}
          name={character.name}
          character={character.character}
          picture={character.picture}
          role={character.role}
          id={character.id}
        />
      ))}
    </div>
  )
}
