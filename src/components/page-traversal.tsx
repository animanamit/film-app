import React from 'react'
import { useDispatch } from 'react-redux'
import { selectPage } from '@/features/category-slice'

interface PageTraversalProps {
  currentPage: number
  lastPage: number
}
const PageTraversal = ({ currentPage, lastPage }: PageTraversalProps) => {
  const dispatch = useDispatch()

  if (currentPage === 1 || currentPage < 8) {
    return (
      <nav className='mx-auto w-full'>
        <ul className='flex justify-center'>
          {currentPage > 1 ? (
            <li
              onClick={() => {
                dispatch(selectPage(currentPage - 1))
              }}
              className='font-normal w-fit mr-4 text-small hover:underline tracking-tight cursor-pointer'
            >
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
              onClick={() => {
                dispatch(selectPage(index + 1))
              }}
            >
              {index + 1}
            </li>
          ))}
          <li className='font-normal w-fit mx-3  text-small cursor-pointer'>...</li>
          <li
            onClick={() => {
              dispatch(selectPage(lastPage))
            }}
            className='font-normal w-fit mx-3 text-small hover:underline cursor-pointer'
          >
            {lastPage}
          </li>
          <li
            onClick={() => {
              dispatch(selectPage(currentPage + 1))
            }}
            className='font-normal w-fit ml-4 text-small hover:underline tracking-tight cursor-pointer'
          >
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
            <li
              onClick={() => {
                dispatch(selectPage(currentPage - 1))
              }}
              className='font-normal w-fit mr-4 text-small hover:underline tracking-tight cursor-pointer'
            >
              ← PREVIOUS
            </li>
          ) : (
            <></>
          )}
          <li
            onClick={() => {
              dispatch(selectPage(1))
            }}
            className='font-normal w-fit mx-3  text-small cursor-pointer'
          >
            1
          </li>
          <li className='font-normal w-fit mx-3  text-small cursor-pointer'>...</li>
          {new Array(7).fill(1).map((_, index) => (
            <li
              className={`font-normal w-fit  mx-3 text-small cursor-pointer ${
                currentPage === index + currentPage ? 'underline font-medium' : 'hover:underline'
              }`}
              key={index}
              onClick={() => {
                dispatch(selectPage(currentPage + index))
              }}
            >
              {/* {index + currentPage} */}
              {currentPage - index}
            </li>
          ))}
        </ul>
      </nav>
    )
  }

  return (
    <nav className='mx-auto w-full'>
      <ul className='flex justify-center'>
        <li
          onClick={() => {
            dispatch(selectPage(currentPage - 1))
          }}
          className='font-normal w-fit mr-4 text-small hover:underline tracking-tight cursor-pointer'
        >
          ← PREVIOUS
        </li>
        <li
          onClick={() => {
            dispatch(selectPage(1))
          }}
          className='font-normal w-fit mx-3 text-small hover:underline tracking-tight cursor-pointer'
        >
          1
        </li>
        <li className='font-normal w-fit mx-3  text-small cursor-pointer'>...</li>

        {new Array(7).fill(1).map((_, index) => (
          <li
            className={`font-normal w-fit  mx-3 text-small cursor-pointer ${
              currentPage === currentPage + index - 3 ? 'underline font-medium' : 'hover:underline'
            }`}
            key={index}
            onClick={() => {
              dispatch(selectPage(currentPage + index - 3))
            }}
          >
            {currentPage + index - 3}
          </li>
        ))}
        <li className='font-normal w-fit mx-3  text-small cursor-pointer'>...</li>
        <li
          onClick={() => {
            dispatch(selectPage(lastPage))
          }}
          className='font-normal w-fit mx-3 text-small hover:underline cursor-pointer'
        >
          {lastPage}
        </li>
        <li
          onClick={() => {
            dispatch(selectPage(currentPage + 1))
          }}
          className='font-normal w-fit ml-4 text-small hover:underline tracking-tight cursor-pointer'
        >
          NEXT →
        </li>
      </ul>
    </nav>
  )
}

export default PageTraversal
