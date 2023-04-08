import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';


import { CheckCircle } from '@mui/icons-material'

import { demoProfilePicture } from '../utils/constants'

import { Videos } from './';
import { fetchFromAPI } from '../utils/fetchFromAPI';

const ChannelDetail = () => {
  const [channelDetail, setChannelDetail] = useState(null);
  const [videos, setVideos] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    fetchFromAPI(`channels?part=snippet&id=${id}`)
      .then((data) => setChannelDetail(data?.items[0]));

    fetchFromAPI(`search?channelId=${id}&part=snippet&order=date`)
      .then((data) => setVideos(data?.items));
  }, [id])

  return (
    <div className='min-h-[calc(100vh-85px)]'>
      <div className="">
        <div style={{
          background: 'linear-gradient(90deg, rgba(58, 72, 180, 1) 0%, rgba(253, 29, 29, 1) 100%) ',
          height: '300px',
          zIndex: 10
        }} />
      <div className=' h-full rounded-xl md:w-[380px] w-[380px] flex justify-center items-center m-auto -mt-[110px] mb-10'>
        
          <div className=" flex flex-col justify-center items-center text-white">
            <img src={channelDetail?.snippet?.thumbnails?.high?.url || demoProfilePicture} alt={channelDetail?.snippet?.title}
              className='rounded-full w-[200px] h-[200px] border-2 border-white' />
            <p className="text-3xl mt-4">{channelDetail?.snippet?.title}
              <CheckCircle sx={{ color: 'gray', fontSize: 14, ml: '5px' }} />
            </p>

            {channelDetail?.statistics?.subscriberCount && (
              <p className='text-sm text-gray-400'>
                {parseInt(channelDetail?.statistics?.subscriberCount).toLocaleString()} subscribers
              </p>
            )}
          </div>
        </div>
        <div className="flex p-2">
          <div className=""/>
          <Videos videos={videos} />
          
        </div>
      </div>
    </div>
  )
}

export default ChannelDetail