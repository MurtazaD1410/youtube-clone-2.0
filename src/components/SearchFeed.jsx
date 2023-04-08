import { useEffect, useState } from 'react';
import { Videos } from '../components';
import { fetchFromAPI } from '../utils/fetchFromAPI';
import { useParams } from 'react-router-dom';

const SearchFeed = () => {
  const [videos, setVideos] = useState([])
  const {searchTerm} = useParams()

  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${searchTerm}`)
      .then((data) => setVideos(data.items))
  }, [searchTerm])



  return (
    <div className='p-2 scroller overflow-y-auto h-[calc(100vh-85px)] '>
      <p className="text-3xl text-white font-bold mb-2">Search Results for: <span className='text-[#f31503]'>{searchTerm}</span> Videos</p>
      <Videos videos={videos} />
    </div>
  )
}

export default SearchFeed