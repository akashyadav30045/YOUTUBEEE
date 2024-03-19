import React from 'react'

const VideoBox = ({info}) => {
  if (!info) {
    return <div>Loading...</div>
  }
  // console.log(info)

  const{snippet,statistics,contentDetails} = info;
  const{channelTitle,title,thumbnails}=snippet;
  const{id} =contentDetails;

  return (
    <div className={`m-2 ml-8 w-72 shadow-lg cursor-pointer  border-white border-2 rounded-lg`}>

       <img  className="rounded-lg" src={thumbnails.high.url}  alt="" /> 
       <ul className="text-[#F0F0F1]">
            <li className="font-bold">{title}</li>
            <li className="text-[rgb(173,173,172)]">{channelTitle}</li>
            <li>{statistics.viewCount} Views</li>
            <li>{id}</li>
        </ul>
            {/* console.log("hii") */}
    </div>
  )
}

export default VideoBox