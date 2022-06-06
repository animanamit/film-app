import React from 'react'
import { useGetMoviesQuery } from '@/services/api'
import SmallMovieCard from './small-movie-card'
import { useSelector } from 'react-redux'
import PageTraversal from './page-traversal'
import { Link } from 'react-router-dom'

const Movies = () => {
  const { selectedCategory, page, selectedCategoryLabel, searchQuery } = useSelector(
    (state: any) => state.currentSelection,
  )

  const { data, error, isLoading } = useGetMoviesQuery({ selectedCategory, page, searchQuery })

  if (isLoading) return <h1 className='text-small uppercase mt-8 font-normal'>Loading...</h1>

  if (error) return <h1>Error! Please reload this page!</h1>

  if (data) {
    console.log(data)
    return (
      <div className='bg-white mt-[20px] mb-[55px]'>
        {selectedCategoryLabel ? (
          <h5 className='font-semibold text-small uppercase mb-6'>{selectedCategoryLabel}</h5>
        ) : (
          <></>
        )}
        {searchQuery ? (
          <h5 className=' text-small uppercase mb-6'>
            Showing results for &apos;{searchQuery}&apos;
          </h5>
        ) : (
          <></>
        )}
        <div className='grid grid-cols-m4 gap-y-3 gap-x-2 justify-items-center '>
          {data.results.map((item, index) => (
            <Link key={index} to={`/movie/${item.id}`}>
              <SmallMovieCard posterPath={item.poster_path} title={item.title} />
            </Link>
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
