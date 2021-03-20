import React from 'react';
import {SeasonsWrapper, SeasonsList } from './Seasons.styled'

const Seasons = ({ seasons }) => {
  return (
    <SeasonsWrapper>
      <p>
        Seasons in total: <span>{seasons.length}</span>
      </p>
      <p>
        Episodes in total: {''}
        <span>
          {seasons.reduce((acc, season) => acc + season.episodeOrder, 0)}
        </span>
      </p>
      <SeasonsList>
        {seasons.map(season => (
          <div key={season.id} className="seasons-item">
            <div className="left">
              <p>Season {season.id}</p>
              <p>
                Episodes: <span>{season.episodeOrder}</span>
              </p>
            </div>
            <div className="right">
              Aired: {' '}
              <span>
                {season.episodeOrder} - {season.endDate}
              </span>
            </div>
          </div>
        ))}
      </SeasonsList>
    </SeasonsWrapper>
  )
}

export default Seasons
