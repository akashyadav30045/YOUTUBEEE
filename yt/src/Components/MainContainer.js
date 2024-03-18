import React from 'react'
import VideoContainer from './VideoContainer/VideoContainer'
import ButtonList from './TopButtons/ButtonList'

const MainContainer = () => {
  return (
    <div className="bg-[#0F0E0E] w-full h-full">
      <ButtonList/>
      <VideoContainer/>
    </div>
  )
}

export default MainContainer