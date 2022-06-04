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
        <div className='flex   space-x-2'>
          {/* {data.results.map((item, index) => (
            <SmallMovieCard data={item} key={index} />
          ))} */}
          {/* {new Array(5).fill(1).map((_, index) => (
            <SmallMovieCard data={data.results[index]} key={index} />
          ))} */}
        </div>

        <div className='group'>
          <img
            src='https://g.foolcdn.com/image/?url=https%3A%2F%2Fg.foolcdn.com%2Feditorial%2Fimages%2F650245%2Fshiba-inu-shib-doge-dogecoin-token-coin-cryptocurrency-digital-blockchain-technology-invest-getty.jpg&w=700'
            alt='dog'
            className='w-40 group-hover:scale-120  duration-200'
          />
        </div>
      </div>
    )
}

export default Movies
