import React from 'react'

const RightSideBar = () => {
  return (
    <div className='bg-red-300 uppercase font-[11px] text-right'>
      <nav>
        <ul>
          <h5 className='font-bold leading-[55px] text-xs cursor-pointer'>Sort</h5>
          <li className='font-normal  text-xs cursor-pointer'>comedy</li>
          <li className='font-normal  text-xs cursor-pointer'>popular</li>
          <li className='font-normal text-xs cursor-pointer'>horror</li>
          <li className='font-normal  text-xs cursor-pointer'>romance</li>
          <li className='font-normal text-xs cursor-pointer'>upcoming</li>
        </ul>
      </nav>
    </div>
  )
}

export default RightSideBar
