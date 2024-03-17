import React, { useState } from "react";
import {
  HAMBURGER_MENU,
  USER_ICON,
  YOUTUBE_LOGO,
  SEARCH_ICON,
} from "./Constants";
import Login from "./Login/Login";
import { useDispatch } from "react-redux";
import { toggleMenu } from "./utils/store/navSlice";

const Head = () => {
  const dispatch = useDispatch();
  const CollapseSideBar = () => {
    dispatch(toggleMenu());
  };

  return (
    <div className="grid grid-flow-col p-2 m-4 shadow-lg">
      <div className="flex  col-span-1 ">
        <img
          className="h-6 cursor-pointer"
          src={HAMBURGER_MENU}
          alt="menu"
          onClick={CollapseSideBar}
        />
        <a href="/">
          <img
            className="h-16 mt-[-20px] mx-6 cursor-pointer"
            src={YOUTUBE_LOGO}
            alt="yt-logo"
          />
        </a>
      </div>

      <div className=" col-span-10">
        <div className=" flex items-center justify-center ">
          <input
            className="rounded-l-full p-2 pl-4 w-1/2 border border-sky-300 focus:outline-none focus:shadow-outline focus:border-blue-400 shadow-sm text-gray-600 placeholder-gray-500"
            type="text"
            placeholder="Search"
          />
          <div className="rounded-r-full p-2 px-5 py-[7px] border border-gray-500 cursor-pointer bg-gray-50">
            <img className="h-6" src={SEARCH_ICON} alt="search-logo" />
          </div>
        </div>
      </div>

      <div className="col-span-1">
        <img className="h-8" src={USER_ICON} alt="user" />
      </div>
    </div>
  );
};

export default Head;
