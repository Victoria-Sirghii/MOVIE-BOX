import React from 'react';
import Nav from '../components/Nav';
import Title from './Title'

const MainPageLayout = ({ children }) => {
  return (
    <div>
      <Title title="Movie Box" subtitle="Are you looking for a movie or actor?"/>
      <Nav />
      { children }
    </div>
  )
}

export default MainPageLayout
