import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Actors from '@/components/actors'
import MovieInformation from '@/components/movie-information'
import Movies from '@/components/movies'
import NavBar from '@/components/navbar'
import LeftSideBar from '@/components/left-sidebar'
import RightSideBar from '@/components/right-sidebar'
import Home from '@/components/home'

function App() {
  return (
    <div>
      <NavBar />

      <main className='px-[55px] grid grid-cols-main mb-20'>
        {/* <LeftSideBar /> */}
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/movie'>
            <Route path=':id' element={<MovieInformation />} />
          </Route>
          <Route path='/actors'>
            <Route path=':id' element={<Actors />} />
          </Route>
        </Routes>
        {/* <RightSideBar /> */}
      </main>
    </div>
  )
}

export default App
