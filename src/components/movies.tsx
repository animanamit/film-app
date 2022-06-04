import React from 'react'
import { useGetPopularMoviesQuery } from '@/services/api'
import SmallMovieCard from './small-movie-card'

const Movies = () => {
  // const { data, error, isLoading } = useGetPokemonByNameQuery('bulbasaur')
  const { data, error, isLoading } = useGetPopularMoviesQuery(1)

  if (isLoading) return <h1>Loading...</h1>

  if (error) return <h1>Error! Please reload this page!</h1>

  if (data)
    return (
      <div className='bg-white'>
        {/* <div className='flex overflow-scroll space-x-2'> */}
        <div className='grid grid-cols-m4 gap-y-3 gap-x-2 justify-items-center '>
          {data.results.map((item, index) => (
            <SmallMovieCard posterPath={item.poster_path} title={item.title} key={index} />
          ))}
          {/* {new Array(100).fill(1).map((_, index) => (
            <h1 key={index}>AHHHHHHHH</h1>
          ))} */}
        </div>
      </div>
    )
}

export default Movies
