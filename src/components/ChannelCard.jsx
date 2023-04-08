import React from 'react'

import { CheckCircle } from '@mui/icons-material'
import { Link } from 'react-router-dom'
import { demoProfilePicture } from '../utils/constants'


const ChannelCard = ({ channelDetail }) => {
  return (
    <div className=' h-full rounded-xl md:w-[320px] w-[356px] flex justify-center items-center m-auto'>
      <Link to={`/channel/${channelDetail?.id?.channelId}`}>
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
      </Link>
    </div>
  )
}

export default ChannelCard