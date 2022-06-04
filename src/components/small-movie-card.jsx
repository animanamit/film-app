/* eslint-disable react/prop-types */
import React from 'react'

const SmallMovieCard = ({ data }) => {
  return (
    <div className='group'>
      <img
        src={`https://image.tmdb.org/t/p/w500${data.poster_path}`}
        alt='movie poster'
        className='w-52 h-62 duration-200 group-hover:scale-120'
      />
    </div>
  )
}

export default SmallMovieCard
