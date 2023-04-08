import React from 'react'
import { Link } from 'react-router-dom'
import { Typography } from '@mui/material'
import { demoThumbnailUrl, demoVideoUrl, demoVideoTitle, demoChannelTitle, demoChannelUrl } from '../utils/constants'
import { CheckCircle } from '@mui/icons-material'



const VideoCard = ({ video: { id: { videoId }, snippet } }) => {

  return (
    <div className='w-[97vw] md:w-full mb-5 sm:mb-0 flex flex-col rounded-xl'>
      <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
        <img src={snippet?.thumbnails?.high?.url || demoThumbnailUrl}
          alt={snippet?.title}
          className='rounded-t-xl  w-full'
        />
      </Link>
      <div className=' h-[100px] bg-gray-700 rounded-b-xl'>
        <div className=" mx-1 mb-4">
          <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
            <Typography noWrap className="text-white" >{snippet?.title || demoVideoTitle}</Typography>
          </Link>
          <Link to={snippet?.channelId ? `/channel/${snippet?.channelId}` : demoChannelUrl}>
            <p className="text-gray-400  ">{snippet?.channelTitle || demoChannelTitle}
              <CheckCircle sx={{ color: 'gray', fontSize: 'small', ml: '5px' }} />
            </p>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default VideoCard