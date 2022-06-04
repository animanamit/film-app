import React from 'react'

const LeftSideBar = () => {
  return (
    <div className='bg-red-300 uppercase font-[11px]'>
      <nav>
        <ul>
          <h5 className='font-bold leading-[55px] text-xs cursor-pointer'>categories</h5>
          <li className='font-normal  text-xs cursor-pointer hover:underline'>upcoming</li>
          <li className='font-normal  text-xs cursor-pointer hover:underline'>popular</li>
          <li className='font-normal  text-xs cursor-pointer hover:underline'>top rated</li>
        </ul>
        <ul>
          <h5 className='font-bold leading-[55px] text-xs cursor-pointer'>genres</h5>
          <li className='font-normal  text-xs cursor-pointer hover:underline'>comedy</li>
          <li className='font-normal text-xs cursor-pointer hover:underline'>horror</li>
          <li className='font-normal  text-xs cursor-pointer hover:underline'>romance</li>
        </ul>
      </nav>
    </div>
  )
}

export default LeftSideBar
