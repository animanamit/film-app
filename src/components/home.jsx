import React from 'react'
import LeftSideBar from './left-sidebar'
import Movies from './movies'
import RightSideBar from './right-sidebar'

const Home = () => {
  return (
    <>
      <LeftSideBar />
      <Movies />
      <RightSideBar />
    </>
  )
}

export default Home
