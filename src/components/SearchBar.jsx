import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { IconButton } from '@mui/material'
import Search from '@mui/icons-material/Search'

const SearchBar = () => {
  const navigate = useNavigate()
  const [searchTerm, setSearchTerm] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (searchTerm) {
      navigate(`/search/${searchTerm}`)

      setSearchTerm('')
    }
  }


  return (
    <form onSubmit={handleSubmit} className='rounded-xl border border-[#e3e3e3] pl-2 sm:mr-5 flex items-center ' >
      <input
        className='search-bar rounded-md p-1 px-2'
        placeholder='Search...'
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <IconButton type='submit' sx={{ p: '8px', color: 'red' }}>
        <Search onClick={handleSubmit} />
      </IconButton>
    </form>
  )
}

export default SearchBar