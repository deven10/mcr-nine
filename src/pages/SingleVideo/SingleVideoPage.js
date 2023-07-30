import React, { useContext } from "react";
import { useParams } from "react-router-dom";

import { ContextData } from "../../context/DataContext";

import { EditNoteModal } from "../../components/EditNoteModal";
import { AddNewNoteModal } from "../../components/AddNewNoteModal";
import { AddVideoToPlaylist } from "../../components/AddVideoToPlaylist";

export const SingleVideoPage = () => {
  const { videoId } = useParams();
  const { videos, RemoveFromWatchLater, AddToWatchLater, deleteNote } =
    useContext(ContextData);

  const video = videos.find(({ _id }) => _id === Number(videoId));
  return (
    <div className="single-video-wrapper">
      <div className="video-content-wrapper">
        <iframe src={video.src}></iframe>
        <div className="video-details-wrapper">
          <div className="video-content-details">
            <img
              className="video-thumbnail"
              src={`https://fastly.picsum.photos/id/379/40/40.jpg?hmac=lwSn1UyxHXRH5kA1301wSCaTS5P8tU7Ojq5cLsnAKis`}
              alt="dummy img"
            />
            <p className="video-title">{video.title}</p>
          </div>
          <div className="video-call-to-actions">
            {video.watchLater ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                viewBox="0 0 24 24"
                className="filled-clock-svg-singleVideoPage"
                onClick={() => RemoveFromWatchLater(video._id)}
              >
                <path
                  fill="currentColor"
                  d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm3.3 14.71L11 12.41V7h2v4.59l3.71 3.71l-1.42 1.41z"
                ></path>
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                viewBox="0 0 24 24"
                className="clock-svg-singleVideoPage"
                onClick={() => AddToWatchLater(video._id)}
              >
                <path
                  fill="currentColor"
                  d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8s8 3.58 8 8s-3.58 8-8 8zm-.22-13h-.06c-.4 0-.72.32-.72.72v4.72c0 .35.18.68.49.86l4.15 2.49c.34.2.78.1.98-.24a.71.71 0 0 0-.25-.99l-3.87-2.3V7.72c0-.4-.32-.72-.72-.72z"
                ></path>
              </svg>
            )}

            <AddVideoToPlaylist videoID={video._id} />
            <AddNewNoteModal videoID={video._id} />
          </div>
        </div>
        <hr />
        <div className="video-notes">
          <h2>My Notes</h2>
          <div className="notes-wrapper">
            {video?.notes?.map((note, index) => {
              return (
                <div className="note" key={index}>
                  <p className="note-content">{note}</p>
                  <div className="notes-call-to-action-buttons">
                    <EditNoteModal video={video} index={index} note={note} />
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="1em"
                      height="1em"
                      viewBox="0 0 24 24"
                      className="delete-note"
                      onClick={() => deleteNote(video._id, note)}
                    >
                      <path
                        fill="currentColor"
                        d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"
                      ></path>
                    </svg>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="more-videos">
        <h2>More Videos: </h2>
        <div className="more-videos-wrapper">
          {videos
            .filter((video) => video._id !== Number(videoId))
            .map((video) => {
              return (
                <div className="video-card" key={video._id}>
                  <img
                    className="video-card-thumbnail"
                    src={video.thumbnail}
                    alt={video.title}
                  />
                  <div className="video-card-details">
                    <p className="video-card-title">{video.title}</p>
                    <p className="video-card-creator">{video.creator}</p>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};
