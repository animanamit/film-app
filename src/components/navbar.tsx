import { useState } from 'react'
import SearchBar from './search-bar'

const NavBar = () => {
  const [showSearchBar, setShowSearchBar] = useState(false)
  return (
    <header className='flex z-10  h-[55px] mx-[55px] sticky top-0 justify-center'>
      <div className='flex w-full  '>
        <nav className='flex text-left '>
          <ul>
            <li
              className='mr-4 font-normal uppercase leading-[55px] text-xs cursor-pointer'
              onClick={() => setShowSearchBar(true)}
            >
              Search
            </li>
            {showSearchBar ? <SearchBar close={() => setShowSearchBar(false)} /> : <></>}
          </ul>
        </nav>
        <div className='block mx-auto leading-[55px] font-normal uppercase text-2xl'>
          <h4>sserafilm</h4>
        </div>
        <nav>
          <ul className='flex text-right'>
            <li className='ml-4 font-normal leading-[55px] text-xs cursor-pointer uppercase'>
              Sign Up
            </li>
            <li className='ml-4 font-normal leading-[55px] text-xs cursor-pointer uppercase'>
              Log In
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default NavBar
