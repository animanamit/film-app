import { selectGenreOrCategory } from '@/features/category-slice'
import { useGetGenresQuery } from '@/services/api'
import React from 'react'
import { useDispatch } from 'react-redux'

const LeftSideBar = () => {
  const { data, isLoading } = useGetGenresQuery()

  const dispatch = useDispatch()

  if (isLoading)
    return <h5 className='font-bold leading-[55px] text-xs cursor-pointer'>Loading...</h5>
  if (data) {
    return (
      <div className=' uppercase font-[11px]'>
        <nav>
          <ul>
            <h5 className='font-bold leading-[55px] text-xs cursor-pointer'>categories</h5>
            <li
              className='font-normal  text-xs cursor-pointer hover:underline'
              onClick={() => {
                dispatch(selectGenreOrCategory('upcoming'))
              }}
            >
              upcoming
            </li>
            <li
              className='font-normal  text-xs cursor-pointer hover:underline'
              onClick={() => {
                dispatch(selectGenreOrCategory('popular'))
              }}
            >
              popular
            </li>
            <li
              className='font-normal  text-xs cursor-pointer hover:underline'
              onClick={() => {
                dispatch(selectGenreOrCategory('top_rated'))
              }}
            >
              top rated
            </li>
          </ul>
          <ul>
            <h5 className='font-bold leading-[55px] text-xs cursor-pointer'>genres</h5>
            {data.genres.map((item: { id: number; name: string }, index: number) => (
              <li
                key={index}
                onClick={() => {
                  dispatch(selectGenreOrCategory(item.id))
                }}
                className='font-normal  text-xs cursor-pointer hover:underline'
              >
                {item.name}
              </li>
            ))}
          </ul>
        </nav>
      </div>
    )
  }
}

export default LeftSideBar
