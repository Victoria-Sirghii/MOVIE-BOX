import React from 'react'
import NotFound from '../unnamed.jpg';
import { Star } from '../styled.js'

const ShowMainData = ({ name, rating, summary, tags, image}) => {
  return (
    <div>
      <img src={image ? image.original : NotFound} alt="show-cover"/>
      <div>
        <div>
          <h1>{name}</h1>
          <div>
            <Star />
            <span>{rating.average || "N/A"}</span>
          </div>
        </div>
        <div dangerouslySetInnerHTML={{ __html: summary}}/>

        <div>
          Tags:{' '}
          <div>
            {tags.map((tag, i) => {
              <span key={i}>{tag}</span>
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ShowMainData
