import { useGetGenresQuery } from '@/services/api'
import React from 'react'

const LeftSideBar = () => {
  const { data, isLoading } = useGetGenresQuery()
  if (isLoading)
    return <h5 className='font-bold leading-[55px] text-xs cursor-pointer'>Loading...</h5>
  if (data) {
    console.log(data)
    return (
      <div className=' uppercase font-[11px]'>
        <nav>
          <ul>
            <h5 className='font-bold leading-[55px] text-xs cursor-pointer'>categories</h5>
            <li className='font-normal  text-xs cursor-pointer hover:underline'>upcoming</li>
            <li className='font-normal  text-xs cursor-pointer hover:underline'>popular</li>
            <li className='font-normal  text-xs cursor-pointer hover:underline'>top rated</li>
          </ul>
          <ul>
            <h5 className='font-bold leading-[55px] text-xs cursor-pointer'>genres</h5>
            {data.genres.map((item: { id: number; name: string }, index: number) => (
              <li key={index} className='font-normal  text-xs cursor-pointer hover:underline'>
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
