import React, { useContext, useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { ContextData } from "../../context/DataContext";

import { ClockSVG } from "../../utils/ClockSVG";
import { FilledClockSVG } from "../../utils/FilledClockSVG";

export const SinglePlaylist = () => {
  const { addPlaylist, playlist, videos } = useContext(ContextData);
  const [playListVideos, setPlaylistVideos] = useState([]);
  const { playlistId } = useParams();
  const singlePlaylist = playlist.find(
    ({ playlistID }) => playlistID === +playlistId
  );

  console.log(videos);
  console.log("singlePlaylist: ", singlePlaylist);

  useEffect(() => {
    const temp = videos.filter(({ _id }) =>
      singlePlaylist?.playListVideos.includes(_id)
    );
    setPlaylistVideos(temp);
  }, [videos, playlist]);

  return (
    <div>
      <h2>{singlePlaylist?.playlistName} Playlist</h2>
      <h3>{singlePlaylist?.playlistDescription}</h3>
      <div className="card-wrapper">
        {playListVideos?.map((video) => (
          <div key={video._id} className="card">
            <div className="card-img-wrapper">
              <img
                className="category-img"
                src={video.thumbnail}
                alt={video.title}
              />
              {video.watchLater ? (
                <FilledClockSVG id={video._id} />
              ) : (
                <ClockSVG id={video._id} />
              )}
            </div>
            <Link to={`/video/${video._id}`} className="video-details-wrapper">
              <img
                className="dummy-img"
                src={`https://fastly.picsum.photos/id/379/40/40.jpg?hmac=lwSn1UyxHXRH5kA1301wSCaTS5P8tU7Ojq5cLsnAKis`}
                alt="dummy img"
              />
              <div className="video-details">
                <p className="video-title">{video.title}</p>
                <p className="video-category">{video.category}</p>
                <p className="video-views-and-creator">
                  {video.views} | {video.creator}
                </p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};