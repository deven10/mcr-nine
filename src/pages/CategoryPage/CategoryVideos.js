import React, { useContext } from "react";
import { useParams, Link } from "react-router-dom";
import { ContextData } from "../../context/DataContext";

export const CategoryVideos = () => {
  const { category } = useParams();
  const { categories, videos } = useContext(ContextData);

  const categoryVideos = videos.filter((video) => video.category === category);
  return (
    <div>
      <h2>{category}</h2>
      <div className="card-wrapper">
        {categoryVideos?.map((video) => (
          <Link
            // to={`/category/${meeting.category}`}
            key={video._id}
            className="card"
          >
            <img
              className="category-img"
              src={video.thumbnail}
              alt={video.title}
            />
            <div className="video-details-wrapper">
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
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};
