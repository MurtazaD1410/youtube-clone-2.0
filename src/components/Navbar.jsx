import React from 'react'
import { Link } from 'react-router-dom'
import { logo } from '../utils/constants'
import SearchBar from './SearchBar'

const Navbar = () => {
  return (
    <div className='top-0 sticky flex items-center p-3 justify-between bg-black h-[85px]'>
      <Link to='/' className='flex items-center'>
        <img src={logo} alt="logo" className='h-14'/>
      </Link>
      <SearchBar />
    </div>
  )
}

export default Navbar