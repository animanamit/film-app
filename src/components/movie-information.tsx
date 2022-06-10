import { useGetMovieInformationQuery } from '@/services/api'
import React from 'react'
import { useParams } from 'react-router-dom'

const MovieInformation = () => {
  const { id } = useParams()

  const { data, isFetching, error } = useGetMovieInformationQuery(id!)

  if (data) {
    console.log(data)
    const trailer = data.videos.results.filter((item: any) => item.name === 'Official Trailer')

    return (
      <>
        <div className='mt-4 text-left'>
          <h5 className='text-small uppercase font-medium'>{data.title}</h5>
          <h5 className='font-weight-[400] text-small w-3/4'>{data.overview}</h5>
        </div>
        <div>
          <img
            className='mt-4'
            src={`https://image.tmdb.org/t/p/original${data.backdrop_path}`}
            alt='...'
          />
          {trailer ? (
            <>
              <iframe
                frameBorder='0'
                className='w-full mt-4 h-96'
                title='Official Trailer'
                src={`https://www.youtube.com/embed/${trailer.key}`}
              ></iframe>
            </>
          ) : (
            <></>
          )}
        </div>
        <div className='text-right mt-4'>
          <h5 className='uppercase text-small font-medium'>Genres</h5>
          <ul>
            {data.genres.map((item: { id: number; name: string }, index: number) => (
              <li key={index} className='text-small'>
                {item.name}
              </li>
            ))}
          </ul>
          <button className='w-[140px] h-[35px] mt-4 bg-black text-white text-small font-medium uppercase'>
            Add to watchlist
          </button>
        </div>
      </>
    )
  }
  return (
    <div className='mt-4'>
      <h5 className='text-small uppercase'>Loading...</h5>
    </div>
  )
}

export default MovieInformation
