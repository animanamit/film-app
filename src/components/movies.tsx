import React from 'react'
import { useGetMoviesQuery } from '@/services/api'
import SmallMovieCard from './small-movie-card'
import { useSelector } from 'react-redux'
import PageTraversal from './page-traversal'

const Movies = () => {
  const { name, page, selection } = useSelector((state: any) => state.currentSelection)

  const { data, error, isLoading } = useGetMoviesQuery({ name, page })

  if (isLoading) return <h1 className='text-small uppercase mt-8 font-normal'>Loading...</h1>

  if (error) return <h1>Error! Please reload this page!</h1>

  if (data) {
    console.log(data)
    return (
      <div className='bg-white mt-[20px] mb-[55px]'>
        {selection ? (
          <h5 className='font-semibold text-small uppercase mb-6'>{selection}</h5>
        ) : (
          <></>
        )}
        <div className='grid grid-cols-m4 gap-y-3 gap-x-2 justify-items-center '>
          {data.results.map((item, index) => (
            <SmallMovieCard posterPath={item.poster_path} title={item.title} key={index} />
          ))}
        </div>
        <div className='mt-12 flex justify-center'>
          <PageTraversal currentPage={page} lastPage={data.total_pages} />
        </div>
      </div>
    )
  }
}

export default Movies
