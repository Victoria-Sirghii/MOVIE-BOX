import React from 'react'
import ActorCard from '../actors/ActorCard';
import NotFound from '../unnamed.jpg';

const ActorGrid = ({ data }) => {
  return (
    <div>
      {data.map(({ person }) => (
        <ActorCard 
          key={person.id}
          name={person.name}
          country={person.country ? person.country.name : null}
          birthday={person.birthday}
          deathday={person.deathday}
          gender={person.gender}
          image={person.image ? person.image.medium : NotFound}
        />
      ))}
    </div>
  )
}

export default ActorGrid
