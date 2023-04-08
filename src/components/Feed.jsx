import React from 'react'
import { useEffect, useState } from 'react';
import { Sidebar, Videos } from '../components';
import { fetchFromAPI } from '../utils/fetchFromAPI';

const Feed = () => {
  const [selectedCategory, setSelectedCategory] = useState('New');
  const [videos, setVideos] = useState([])

  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${selectedCategory}`)
      .then((data) => setVideos(data.items))
  }, [selectedCategory])


  return (
    
    <div className='min-h-[calc(100vh-85px)] '>
    <div className='flex flex-col md:flex-row '>
      <div className="h-auto md:w-96 md:h-[calc(100vh-85px)] border-r border-[#3d3d3d] px:0 md:px-2">
        <Sidebar
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
        <p className="text-white copyright hidden md:block text-sm">
          Copyright 2023 Webnique
        </p>
      </div>
      <div className="p-2 scroller overflow-y-auto h-[calc(100vh-85px)] flex-2">
        <h4 className="text-white font-bold mb-2 text-4xl">
          {selectedCategory} <span className="text-red-500">Videos</span>
        </h4>
        <Videos videos={videos} />
      </div>
      </div>
      </div>
  )
}

export default Feed