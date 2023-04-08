import React from 'react'
import { VideoCard, ChannelCard } from './'


const Videos = ({ videos, direction }) => {

  if (!videos?.length) return 'Loading...'

  return (
    <div className={!direction ?'sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 3xl:grid-cols-5 w-fit justify-start gap-4': 'grid grid-cols-1 md:w-[80%] w-[100%] mx-auto'}>
      {videos.map((item, idx) => (
        <div key={idx}>
          {item.id.videoId && <VideoCard video={item} />}
          {item.id.channelId && <ChannelCard channelDetail={item} />}
        </div>

      ))}
      
    </div>
  )
}

export default Videos