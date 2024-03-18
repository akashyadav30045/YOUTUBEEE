import React, { useEffect, useState } from 'react'
import {  YOUTUBE_VIDEOS_API } from '../Constants'
import VideoBox from './VideoBox'

const VideoContainer = () => {
  const[data,setData] =useState([])

  const getVideos  = async() => {
    const data = await fetch (YOUTUBE_VIDEOS_API)
    const json = await data.json()
    setData(json.items)
  }

  useEffect(()=>{
    getVideos();
  },[])
  return (
    <div className="flex flex-wrap">
      {data.map(
        video=><VideoBox key={video.id} info={video}/>
      )}
      
    </div>
  )
}

export default VideoContainer