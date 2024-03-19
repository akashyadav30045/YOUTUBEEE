import React, { useEffect, useState } from 'react'
import {  YOUTUBE_VIDEOS_API } from '../Constants'
import VideoBox from './VideoBox'
import { Link } from 'react-router-dom'

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
      {/* console.log(data[0]) */}
      {data.map((video)=>
        <Link to={"/watch?v"+video.id} >
        <VideoBox key={video.id} info={video}/>
        </Link>
      )}
      
    </div>
  )
}

export default VideoContainer