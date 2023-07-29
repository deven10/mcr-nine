import React from "react";
import { NavLink } from "react-router-dom";

import home from "../images/home.png";
import playlist from "../images/add-to-playlist.png";
import watchLater from "../images/clock.png";
import explore from "../images/compass.png";

import "../styles/Aside.css";

export const Aside = () => {
  const styling = ({ isActive }) => {
    return {
      fontWeight: isActive ? "700" : "400",
      color: "#000",
    };
  };

  return (
    <nav className="aside-nav">
      <NavLink to={"/"} style={styling} className={"navlink"}>
        <span>
          <img className="nav-img" src={home} alt="home" />
        </span>{" "}
        Home
      </NavLink>
      <NavLink to={"/explore"} style={styling} className={"navlink"}>
        {" "}
        <span>
          <img className="nav-img" src={explore} alt="Explore" />
        </span>{" "}
        Explore
      </NavLink>
      <NavLink to={"/playlists"} style={styling} className={"navlink"}>
        {" "}
        <span>
          <img className="nav-img" src={playlist} alt="Playlist" />
        </span>{" "}
        Playlists
      </NavLink>
      <NavLink to={"/watch-later"} style={styling} className={"navlink"}>
        {" "}
        <span>
          <img className="nav-img" src={watchLater} alt="Watch Later" />
        </span>{" "}
        Watch Later
      </NavLink>
    </nav>
  );
};
