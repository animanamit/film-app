import { selectGenreOrCategory, setSelection } from '@/features/category-slice'
import { useGetGenresQuery } from '@/services/api'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

const LeftSideBar = () => {
  const { data, isLoading } = useGetGenresQuery()

  const dispatch = useDispatch()

  const { name } = useSelector((state: any) => state.currentSelection)

  if (isLoading)
    return <h5 className='font-bold leading-[55px] text-small cursor-pointer'>Loading...</h5>
  if (data) {
    return (
      <div className=' uppercase font-[11px]'>
        <nav>
          <ul>
            <h5 className='font-bold leading-[55px] text-small cursor-pointer'>categories</h5>
            <li
              className={`font-normal w-fit text-small cursor-pointer ${
                name === 'upcoming' ? 'underline font-medium' : 'hover:underline'
              }`}
              onClick={() => {
                dispatch(selectGenreOrCategory('upcoming'))
                dispatch(setSelection('UPCOMING'))
              }}
            >
              upcoming
            </li>
            <li
              className={`font-normal w-fit text-small cursor-pointer ${
                name === 'popular' ? 'underline font-medium' : 'hover:underline'
              }`}
              onClick={() => {
                dispatch(selectGenreOrCategory('popular'))
                dispatch(setSelection('POPULAR'))
              }}
            >
              popular
            </li>
            <li
              className={`font-normal w-fit text-small cursor-pointer ${
                name === 'top_rated' ? 'underline font-medium' : 'hover:underline'
              }`}
              onClick={() => {
                dispatch(selectGenreOrCategory('top_rated'))
                dispatch(setSelection('TOP RATED'))
              }}
            >
              top rated
            </li>
          </ul>
          <ul>
            <h5 className='font-bold leading-[55px] text-small cursor-pointer'>genres</h5>
            {data.genres.map((item: { id: number; name: string }, index: number) => (
              <li
                key={index}
                onClick={() => {
                  dispatch(selectGenreOrCategory(item.id))
                  dispatch(setSelection(item.name.toUpperCase()))
                }}
                className={`font-normal w-fit text-small cursor-pointer ${
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
