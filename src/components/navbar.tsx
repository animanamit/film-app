const NavBar = () => {
  return (
    <header className='flex z-10 bg-teal-100 h-[55px] mx-[55px] sticky top-0 justify-center'>
      <div className='flex w-full mx-8 uppercase'>
        <nav className='flex'>
          <ul>
            <li className='mr-4 font-normla leading-[55px] text-xs cursor-pointer'>Search</li>
          </ul>
        </nav>
        <div className='block mx-auto leading-[55px] font-normal text-xl'>
          <h4>sserafilm</h4>
        </div>
        <nav>
          <ul className='flex'>
            <li className='mr-4 font-normal leading-[55px] text-xs cursor-pointer'>Sign Up</li>
            <li className='mr-4 font-normal leading-[55px] text-xs cursor-pointer'>Log In</li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default NavBar
