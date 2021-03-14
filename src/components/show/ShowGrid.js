import React from 'react';
import NotFound from '../unnamed.jpg';
import ShowCard from '../show/ShowCard';

const ShowGrid = ({data}) => {
  return <div>
      {
        data.map( ({ show }) => 
          <ShowCard 
            key={show.id} 
            id={show.id} 
            name={show.name} 
            image={show.image ? show.image.medium : NotFound}
            summary={show.summary}
          />)
      }
    </div>
  
}

export default ShowGrid
