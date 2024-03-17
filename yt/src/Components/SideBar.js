import React from "react";
import { useSelector } from "react-redux";

const SideBar = () => {
  const isMenuOpen = useSelector((store) => store.navigation.isMenuOpen);

  // Early Return Patern

  if (!isMenuOpen) return null;

  return (
    <div className="m-1 shadow-lg w-50">
      {/* <h1 className="font-bold">Subscriptions</h1> */}
      <ul className="text-xl ">
        <li className="cursor-pointer hover:bg-slate-400 flex rounded-lg p-2 space-x-4">
          <i class="ri-home-fill " style={{ marginRight: "0.5rem" }}></i>Home
        </li>
        <li className="cursor-pointer hover:bg-slate-400 flex rounded-lg p-2 space-x-4">
          {" "}
          <i
            class="ri-file-video-fill"
            style={{ marginRight: "0.5rem" }}
          ></i>{" "}
          Shorts
        </li>
        <li className="cursor-pointer hover:bg-slate-400 flex rounded-lg p-2 space-x-4">
          {" "}
          <i class="ri-film-fill" style={{ marginRight: "0.5rem" }}></i>
          Subscriptions
        </li>
      </ul>
      <hr />
      <h1 className="font-bold text-xl ">You - </h1>
      <ul className="text-xl ">
        <li className="cursor-pointer hover:bg-slate-400 flex rounded-lg p-2 space-x-4">
          <i class="ri-music-line" style={{ marginRight: "0.5rem" }}></i>Music
        </li>
        <li className="cursor-pointer hover:bg-slate-400 flex rounded-lg p-2 space-x-4">
          <i class="ri-football-line" style={{ marginRight: "0.5rem" }}></i>
          Sports
        </li>
        <li className="cursor-pointer hover:bg-slate-400 flex rounded-lg p-2 space-x-4">
          <i class="ri-gamepad-fill" style={{ marginRight: "0.5rem" }}></i>
          Gaming
        </li>
        <li className="cursor-pointer hover:bg-slate-400 flex rounded-lg p-2 space-x-4">
          <i class="ri-movie-2-line" style={{ marginRight: "0.5rem" }}></i>
          Movies
        </li>
      </ul>
      <hr />
      <h1 className="font-bold text-xl">Explore</h1>
      <ul className="text-xl m-2">
        <li className="cursor-pointer hover:bg-slate-400 flex rounded-lg p-2 space-x-4">
          <i class="ri-fire-line" style={{ marginRight: "0.5rem" }}></i>Trending
        </li>
        <li className="cursor-pointer hover:bg-slate-400 flex rounded-lg p-2 space-x-4">
          <i
            class="ri-shopping-cart-fill"
            style={{ marginRight: "0.5rem" }}
          ></i>
          Shopping
        </li>
        <li className="cursor-pointer hover:bg-slate-400 flex rounded-lg p-2 space-x-4">
          <i class="ri-headphone-fill" style={{ marginRight: "0.5rem" }}></i>
          Music
        </li>
        <li className="cursor-pointer hover:bg-slate-400 flex rounded-lg p-2 space-x-4">
          <i class="ri-movie-2-fill" style={{ marginRight: "0.5rem" }}></i>
          Movies
        </li>
        <li className="cursor-pointer hover:bg-slate-400 flex rounded-lg p-2 space-x-4">
          <i class="ri-live-fill" style={{ marginRight: "0.5rem" }}></i>Live
        </li>
        <li className="cursor-pointer hover:bg-slate-400 flex rounded-lg p-2 space-x-4">
          <i class="ri-game-fill" style={{ marginRight: "0.5rem" }}></i>Gaming
        </li>
        <li className="cursor-pointer hover:bg-slate-400 flex rounded-lg p-2 space-x-4">
          <i class="ri-news-fill" style={{ marginRight: "0.5rem" }}></i>News
        </li>
        <li className="cursor-pointer hover:bg-slate-400 flex rounded-lg p-2 space-x-4">
          <i class="ri-football-line" style={{ marginRight: "0.5rem" }}></i>
          Sports
        </li>
        <li className="cursor-pointer hover:bg-slate-400 flex rounded-lg p-2 space-x-4">
          <i class="ri-book-2-line" style={{ marginRight: "0.5rem" }}></i>
          Courses
        </li>
        <li className="cursor-pointer hover:bg-slate-400 flex rounded-lg p-2 space-x-4">
          <i class="ri-book-2-line" style={{ marginRight: "0.5rem" }}></i>
          Fashion & Beauty
        </li>
        <li className="cursor-pointer hover:bg-slate-400 flex rounded-lg p-2 space-x-4">
          <i class="ri-chat-smile-fill" style={{ marginRight: "0.5rem" }}></i>
          Podcasts
        </li>
      </ul>
      <hr />
      <h1 className="font-bold text-xl">More From Youtube</h1>
      <ul className="text-xl m-2">
        <li className="cursor-pointer hover:bg-slate-400 flex rounded-lg p-2 space-x-4">
          <i class="ri-youtube-fill" style={{ marginRight: "0.5rem" }}></i>
          Youtube Premium
        </li>
        <li className="cursor-pointer hover:bg-slate-400 flex rounded-lg p-2 space-x-4">
          <i class="ri-youtube-fill" style={{ marginRight: "0.5rem" }}></i>
          Youtube Studio
        </li>
      </ul>
    </div>
  );
};

export default SideBar;
