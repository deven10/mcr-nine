import React, { createContext, useState } from "react";
import {
  categories as CateogiesData,
  videos as AllVideosData,
} from "../data/Data";

export const ContextData = createContext();

export const DataContext = ({ children }) => {
  const [categories, setCategories] = useState(CateogiesData); // All Categories State
  const [videos, setVideos] = useState(AllVideosData); // All Videos State

  const [playlist, setPlaylist] = useState([]); // Playlist State

  // function => Add To Watch Later
  const AddToWatchLater = (videoID) => {
    setVideos((prev) =>
      prev.map((video) =>
        video._id === +videoID ? { ...video, watchLater: true } : video
      )
    );
  };

  // function => Remove from Watch Later
  const RemoveFromWatchLater = (videoID) => {
    setVideos((prev) =>
      prev.map((video) =>
        video._id === +videoID ? { ...video, watchLater: false } : video
      )
    );
  };

  // function => Add New Note
  const addNote = (videoID, noteDescription) => {
    const updatedVideos = videos?.map((video) =>
      video._id === +videoID
        ? { ...video, notes: [...video.notes, noteDescription] }
        : video
    );
    setVideos(updatedVideos);
  };

  // function => Update Existing Note
  const updateNote = (video, noteIndex, updatedNote) => {
    const updatedNotes = video?.notes?.map((note, index) =>
      index === noteIndex ? (note = updatedNote) : note
    );
    const updatedVideos = videos?.map((singleVideo) =>
      singleVideo._id === +video._id
        ? { ...singleVideo, notes: [...updatedNotes] }
        : singleVideo
    );
    setVideos(updatedVideos);
  };

  // function => Delete Existing Note
  const deleteNote = (videoID, note) => {
    const video = videos.find(({ _id }) => _id === +videoID);
    const newVideoNotes = video.notes.filter(
      (singleNote) => singleNote !== note
    );
    const updatedVideos = videos.map((singleVideo) =>
      singleVideo._id === +video._id
        ? { ...singleVideo, notes: [...newVideoNotes] }
        : singleVideo
    );
    setVideos(updatedVideos);
  };

  // function => Create New Playlist
  const addPlaylist = () => {};

  return (
    <ContextData.Provider
      value={{
        categories,
        videos,
        AddToWatchLater,
        RemoveFromWatchLater,
        deleteNote,
        updateNote,
        addNote,
        addPlaylist,
        playlist,
      }}
    >
      {children}
    </ContextData.Provider>
  );
};
