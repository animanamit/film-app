import React from 'react'

interface PageTraversalProps {
  currentPage: number
  lastPage: number
}
const PageTraversal = ({ currentPage, lastPage }: PageTraversalProps) => {
  if (currentPage === 1 || currentPage < 8) {
    return (
      <nav className='mx-auto w-full'>
        <ul className='flex justify-center'>
          {currentPage > 1 ? (
            <li className='font-normal w-fit mr-4 text-small hover:underline tracking-tight cursor-pointer'>
              ← PREVIOUS
            </li>
          ) : (
            <></>
          )}
          {new Array(7).fill(1).map((_, index) => (
            <li
              className={`font-normal w-fit  mx-3 text-small cursor-pointer ${
                currentPage === index + 1 ? 'underline font-medium' : 'hover:underline'
              }`}
              key={index}
            >
              {index + 1}
            </li>
          ))}
          <li className='font-normal w-fit mx-3  text-small cursor-pointer'>...</li>
          <li className='font-normal w-fit mx-3 text-small hover:underline cursor-pointer'>
            {lastPage}
          </li>
          <li className='font-normal w-fit ml-4 text-small hover:underline tracking-tight cursor-pointer'>
            NEXT →
          </li>
        </ul>
      </nav>
    )
  }

  if (currentPage >= lastPage - 7) {
    return (
      <nav className='mx-auto w-full'>
        <ul className='flex justify-center'>
          {currentPage > 1 ? (
            <li className='font-normal w-fit mr-4 text-small hover:underline tracking-tight cursor-pointer'>
              ← PREVIOUS
            </li>
          ) : (
            <></>
          )}
          <li className='font-normal w-fit mx-3  text-small cursor-pointer'>1</li>
          <li className='font-normal w-fit mx-3  text-small cursor-pointer'>...</li>
          {new Array(7).fill(1).map((_, index) => (
            <li
              className={`font-normal w-fit  mx-3 text-small cursor-pointer ${
                currentPage === index + currentPage ? 'underline font-medium' : 'hover:underline'
              }`}
              key={index}
            >
              {index + currentPage}
            </li>
          ))}
        </ul>
      </nav>
    )
  }

  return (
    <nav className='mx-auto w-full'>
      <ul className='flex justify-center'>
        <li className='font-normal w-fit mr-4 text-small hover:underline tracking-tight cursor-pointer'>
          ← PREVIOUS
        </li>
        <li className='font-normal w-fit mx-3 text-small hover:underline tracking-tight cursor-pointer'>
          1
        </li>
        <li className='font-normal w-fit mx-3  text-small cursor-pointer'>...</li>

        {new Array(7).fill(1).map((_, index) => (
          <li
            className={`font-normal w-fit  mx-3 text-small cursor-pointer ${
              currentPage === currentPage + index - 3 ? 'underline font-medium' : 'hover:underline'
            }`}
            key={index}
          >
            {currentPage + index - 3}
          </li>
        ))}
        <li className='font-normal w-fit mx-3  text-small cursor-pointer'>...</li>
        <li className='font-normal w-fit mx-3 text-small hover:underline cursor-pointer'>
          {lastPage}
        </li>
        <li className='font-normal w-fit ml-4 text-small hover:underline tracking-tight cursor-pointer'>
          NEXT →
        </li>
      </ul>
    </nav>
  )
}

export default PageTraversal
