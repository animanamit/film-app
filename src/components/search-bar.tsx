import { useEffect, useRef, useState } from 'react'
import { SearchIcon } from '@heroicons/react/outline'
import { searchMovie } from '@/features/category-slice'
import { useDispatch } from 'react-redux'

interface SearchBarProps {
  close: () => void
}

function useOutsideAlerter(ref: any, close: any) {
  useEffect(() => {
    /**
     * Alert if clicked on outside of element
     */
    function handleClickOutside(event: any) {
      if (ref.current && !ref.current.contains(event.target)) {
        close()
      }
    }
    // Bind the event listener
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [ref])
}

const SearchBar = (props: SearchBarProps) => {
  const [search, setSearch] = useState('')
  const searchBoxRef = useRef(null)
  useOutsideAlerter(searchBoxRef, props.close)

  const dispatch = useDispatch()

  const handleSubmit = (e: any) => {
    e.preventDefault()
    console.log(search)
    dispatch(searchMovie(search))
    props.close()
  }

  return (
    <div
      ref={searchBoxRef}
      className='bg-white border-[1px] border-[#b6b6b6]  px-6 w-[450px] flex flex-col z-10 absolute justify-center items-center space-x-2'
    >
      <div className='flex w-full justify-center mt-6 items-center space-x-2'>
        <div className='flex-1'>
          <form
            onSubmit={(e) => handleSubmit(e)}
            className='w-full flex border-[1px] border-black p-2 items-center'
          >
            <input
              className=' outline-transparent text-small text-black placeholder-gray-500 w-full'
              placeholder='SEARCH MOVIES'
              onChange={(e) => setSearch(e.target.value)}
            />
            <SearchIcon className='h-3 w-3' />
          </form>
        </div>
        <div className=''>
          <span className='text-small cursor-pointer' onClick={props.close}>
            CLOSE
          </span>
        </div>
      </div>

      <div className='w-full h-[1px] px-6 bg-[#b6b6b6] mt-4'></div>
      <div className='w-full  mt-3 mb-4'>
        <span className='text-[11px] font-normal underline'>{`Searching for ${search}`}</span>
      </div>
    </div>
  )
}

export default SearchBar
