import React, { useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import Actors from '@/components/actors'
import MovieInformation from '@/components/movie-information'
import Movies from '@/components/movies'
import NavBar from '@/components/navbar'

function App() {
  return (
    <div>
      <NavBar />
      <main>
        <Routes>
          <Route path='/' element={<Movies />} />
          <Route path='/movie'>
            <Route path=':id' element={<MovieInformation />} />
          </Route>
          <Route path='/actors'>
            <Route path=':id' element={<Actors />} />
          </Route>
        </Routes>
      </main>
    </div>
  )
}

export default App
