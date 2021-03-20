import React from 'react';
import NotFound from '../unnamed.jpg';

const Cast = ({ cast }) => {
  return (
    <div>
      {cast.map(({ person, character, voice}, key) => (
        <div key={key}>
          <div>
            <img 
              src={person.img ? person.image.medium : NotFound}
              alt="cast-person"
            />
          </div>
          <div>
            <span>
              {person.name} | {character.name} {voice ? ' | Voice' : ""}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Cast
