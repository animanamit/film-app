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
      <div className='bg-cyan-200 h-screen'>
        <h1>Movies Page</h1>
        <div className='flex space-x-2'>
          {/* {data.results.map((item, index) => (
            <SmallMovieCard data={item} key={index} />
          ))} */}
          {new Array(5).fill(1).map((_, index) => (
            <SmallMovieCard data={data.results[index]} key={index} />
          ))}
        </div>
      </div>
    )
}

export default Movies
