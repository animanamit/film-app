const NavBar = () => {
  return (
    <header className='flex z-10  h-[55px] mx-[55px] sticky top-0 justify-center'>
      <div className='flex w-full  uppercase'>
        <nav className='flex text-left'>
          <ul>
            <li className='mr-4 font-normal leading-[55px] text-xs cursor-pointer'>Search</li>
          </ul>
        </nav>
        <div className='block mx-auto leading-[55px] font-normal text-2xl'>
          <h4>sserafilm</h4>
        </div>
        <nav>
          <ul className='flex text-right'>
            <li className='ml-4 font-normal leading-[55px] text-xs cursor-pointer'>Sign Up</li>
            <li className='ml-4 font-normal leading-[55px] text-xs cursor-pointer'>Log In</li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default NavBar
