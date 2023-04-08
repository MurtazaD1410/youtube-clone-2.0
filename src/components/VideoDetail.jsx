import { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import ReactPlayer from 'react-player'
import { CheckCircle } from '@mui/icons-material'

import { Videos } from './'
import { fetchFromAPI } from '../utils/fetchFromAPI'

const VideoDetail = () => {
  const [videoDetail, setVideoDetail] = useState(null)
  const [videos, setVideos] = useState(null)
  const { id } = useParams();

  useEffect(() => {
    fetchFromAPI(`videos?part=snippet,statistics&id=${id}`)
      .then(data =>
        setVideoDetail(data.items[0])
      )

    fetchFromAPI(`search?part=snippet&relatedToVideoId=${id}&type=video`)
      .then(data => setVideos(data.items))
  }, [id])




  if (!videoDetail?.snippet) return 'Loading...'

  console.log(videoDetail);
  const { snippet: { title, channelId, channelTitle }, statistics: { viewCount, likeCount } } = videoDetail;


  return (
    <>

      <div className='min-h-[calc(100vh-85px)]'>
        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-[75%] !sticky top-[85px] h-[calc(100vh-85px)]">
            <div className=" w-full">
              <ReactPlayer url={`https://www.youtube.com/watch?v=${id}`} controls className="react-player" />
              <h1 className='text-white p-1 text-2xl'>{title}</h1>
              <div className='flex justify-between items-center text-white py-2 p-1 w-full'>
                <Link to={`/channel/${channelId}`}>
                  <h2 className='text-xl text-white'>{channelTitle}
                    <CheckCircle style={{ color: 'gray', fontSize: '12px', marginLeft: '5px' }} />
                  </h2>
                </Link>
                <div className='flex items-center gap-5'>
                  <p className='opacity-70'>{parseInt(viewCount).toLocaleString()} views</p>
                  <p className='opacity-70'>{parseInt(likeCount).toLocaleString()} likes</p>
                </div>
              </div>
            </div>
          </div>
          <div className="p-2 py-5 flex justify-center items-center overflow-scroll">

            <div className=' '>
              <Videos videos={videos} direction={true} />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default VideoDetail