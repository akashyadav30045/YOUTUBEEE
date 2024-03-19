import React, { useEffect } from 'react'
import {useDispatch} from "react-redux";
import { CloseMenu } from '../utils/store/navSlice';
// import { useSearchParams } from 'react-router-dom';

const WatchPage = ({info}) => {
  // const [searchParams] = useSearchParams();
  // console.log(searchParams.get("v"))
  console.log(info)
  const dispatch = useDispatch();
  useEffect(()=> {
    dispatch(CloseMenu());
  },[])
  return (
    <div>
    <div>WatchPage</div>
    <div className="px-5">
      <iframe 
        width="1100" height="500" 
        // src={"https://www.youtube.com/embed/" + searchParams.get("v3")}
        title="YouTube video player" 
        frameBorder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        allowfullscreen>
        </iframe>
    </div>
    </div>
  )
}

export default WatchPage;