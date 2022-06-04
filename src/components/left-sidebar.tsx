import { selectGenreOrCategory } from '@/features/category-slice'
import { useGetGenresQuery } from '@/services/api'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

const LeftSideBar = () => {
  const { data, isLoading } = useGetGenresQuery()

  const dispatch = useDispatch()

  const { name } = useSelector((state: any) => state.currentSelection)

  if (isLoading)
    return <h5 className='font-bold leading-[55px] text-xs cursor-pointer'>Loading...</h5>
  if (data) {
    return (
      <div className=' uppercase font-[11px]'>
        <nav>
          <ul>
            <h5 className='font-bold leading-[55px] text-xs cursor-pointer'>categories</h5>
            <li
              className={`font-normal w-fit text-xs cursor-pointer ${
                name === 'upcoming' ? 'underline font-medium' : 'hover:underline'
              }`}
              onClick={() => {
                dispatch(selectGenreOrCategory('upcoming'))
              }}
            >
              upcoming
            </li>
            <li
              className={`font-normal w-fit text-xs cursor-pointer ${
                name === 'popular' ? 'underline font-medium' : 'hover:underline'
              }`}
              onClick={() => {
                dispatch(selectGenreOrCategory('popular'))
              }}
            >
              popular
            </li>
            <li
              className={`font-normal w-fit text-xs cursor-pointer ${
                name === 'top_rated' ? 'underline font-medium' : 'hover:underline'
              }`}
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
                className={`font-normal w-fit text-xs cursor-pointer ${
                  name === item.id ? 'underline font-medium' : 'hover:underline'
                }`}
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
