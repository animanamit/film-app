import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import SearchBar from './search-bar'
import { resetReduxState } from '@/features/category-slice'
import { supabase } from '@/services/supabase-client'
import { Session } from '@supabase/supabase-js'

const NavBar = () => {
  const [showSearchBar, setShowSearchBar] = useState(false)
  const [session, setSession] = useState<Session | null>(null)
  const dispatch = useDispatch()

  useEffect(() => {
    setSession(supabase.auth.session())

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session)
    })
  }, [])
  const logout = () => {
    supabase.auth.signOut()
  }

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
          <Link to='/' onClick={() => dispatch(resetReduxState())}>
            <h4>sserafilm</h4>
          </Link>
        </div>
        <nav>
          <ul className='flex text-right'>
            {!session ? (
              <Link to='/login'>
                <li className='ml-4 font-normal leading-[55px] text-xs cursor-pointer uppercase'>
                  Log In
                </li>
              </Link>
            ) : (
              <>
                <Link to='/watchlist'>
                  <li className='ml-4 font-normal leading-[55px] text-xs cursor-pointer uppercase'>
                    Watchlist
                  </li>
                </Link>
                <Link to='/'>
                  <li className='ml-4 font-normal leading-[55px] text-xs cursor-pointer uppercase'>
                    Account
                  </li>
                </Link>

                <li
                  onClick={logout}
                  className='ml-4 font-normal leading-[55px] text-xs cursor-pointer uppercase'
                >
                  Log Out
                </li>
              </>
            )}
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default NavBar
