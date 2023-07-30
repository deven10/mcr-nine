import React, { useContext } from "react";
import { useParams, Link } from "react-router-dom";
import { ContextData } from "../../context/DataContext";

import { ClockSVG } from "../../utils/ClockSVG";
import { FilledClockSVG } from "../../utils/FilledClockSVG";

export const WatchLater = () => {
  const { categories, videos } = useContext(ContextData);
  const onlyWatchLater = videos.filter(({ watchLater }) => watchLater);
  return (
    <div>
      <h2>Watch Later</h2>
      {onlyWatchLater.length > 0 ? (
        <div className="card-wrapper">
          {onlyWatchLater?.map((video) => (
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
              <Link
                to={`/video/${video._id}`}
                className="video-details-wrapper"
              >
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
      ) : (
        <p className="no-videos-in-watch-later">No Videos Found ¯\_(ツ)_/¯</p>
      )}
    </div>
  );
};
