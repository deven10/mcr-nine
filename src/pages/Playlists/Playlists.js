import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";

import { ContextData } from "../../context/DataContext";

export const Playlists = () => {
  const navigate = useNavigate();
  const { addPlaylist, playlist, deletePlaylist } = useContext(ContextData);
  return (
    <div>
      <h2>Playlist</h2>
      <div className="card-wrapper">
        {playlist
          .filter((singlePlaylist) => singlePlaylist.playListVideos.length > 0)
          ?.map((singlePlaylist) => (
            <div key={singlePlaylist?.playlistID} className="card">
              <div className="card-img-wrapper">
                <span
                  className="delete-playlist"
                  onClick={() => deletePlaylist(singlePlaylist?.playlistID)}
                >
                  x
                </span>
                <img
                  onClick={() =>
                    navigate(`/playlist/${singlePlaylist?.playlistID}`)
                  }
                  className="category-img"
                  src={`https://picsum.photos/300/174`}
                  alt={singlePlaylist?.playlistName}
                />
              </div>
              <Link
                to={`/playlist/${singlePlaylist?.playlistID}`}
                className="video-details-wrapper"
              >
                <img
                  className="dummy-img"
                  src={`https://fastly.picsum.photos/id/379/40/40.jpg?hmac=lwSn1UyxHXRH5kA1301wSCaTS5P8tU7Ojq5cLsnAKis`}
                  alt="dummy img"
                />
                <div className="video-details">
                  <p className="video-title">
                    {singlePlaylist?.playlistName} |{" "}
                    {singlePlaylist?.playlistDescription}
                  </p>
                </div>
              </Link>
            </div>
          ))}
      </div>
    </div>
  );
};
