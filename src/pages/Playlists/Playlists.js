import React, {useContext} from "react";
import { Link } from "react-router-dom";

import { ContextData } from "../../context/DataContext";

export const Playlists = () => {
  const { addPlaylist, playlist } = useContext(ContextData);
  return <div>
  <h2>Playlist</h2>
  <div className="card-wrapper">
    {playlist?.map((singlePlaylist) => (
      <Link to={`/playlist/${singlePlaylist?.playlistID}`}  key={singlePlaylist?.playlistID} className="card">
        <div className="card-img-wrapper">
          <img
            className="category-img"
            src={`https://picsum.photos/300/174`}
            alt={singlePlaylist?.playlistName}
          />
        </div>
        <div className="video-details-wrapper">
          <img
            className="dummy-img"
            src={`https://fastly.picsum.photos/id/379/40/40.jpg?hmac=lwSn1UyxHXRH5kA1301wSCaTS5P8tU7Ojq5cLsnAKis`}
            alt="dummy img"
          />
          <div className="video-details">
            <p className="video-title">{singlePlaylist?.playlistName} | {singlePlaylist?.playlistDescription}</p>
          </div>
        </div>
      </Link>
    ))}
  </div>
</div>;
};
