import React, { useState, useContext } from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Typography from "@mui/material/Typography";

import addPlaylistSVG from "../images/playlist-add.svg";
import { ContextData } from "../context/DataContext";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "1px solid #ccc",
  outline: 0,
  boxShadow: 24,
  p: 4,
};

export const AddVideoToPlaylist = ({ videoID }) => {
  const { addPlaylist, playlist } = useContext(ContextData);

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  //   const [playlistDetails, setPlaylistDetails] = useState({
  //     id: +playlist.length + 1,
  //     name: "",
  //     description: "",
  //     videosList: [...playlistDetails.videosList, +videoID],
  //   });

  //   const handlePlaylist = (e) => {
  //     const { name, value } = e.target;
  //     setPlaylistDetails((prev) => ({
  //       ...prev,
  //       [name]: value,
  //       id: +playlist.length + 1,
  //       videosList: [...prev.videosList, +videoID],
  //     }));
  //   };

  return (
    <div>
      {/* <img src={editPlaylist} onClick={handleOpen} alt="edit-to-playlist" /> */}
      <img src={addPlaylistSVG} onClick={handleOpen} alt="add-to-playlist" />
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <Typography id="transition-modal-title" variant="h6" component="h2">
              Create New Playlist
            </Typography>
            <div className="note-description-wrapper">
              <input
                className="note-description-input-field"
                type="text"
                name="name"
                placeholder="Enter Playlist Name..."
                // value={playlistDetails.name}
                // onChange={handlePlaylist}
              />
              <input
                className="note-description-input-field"
                type="text"
                name="description"
                placeholder="Enter Playlist Description..."
                // value={playlistDetails.description}
                // onChange={handlePlaylist}
              />
              <div className="edit-note-call-to-action-buttons">
                <button onClick={handleClose} className="discard-btn">
                  Discard
                </button>
                <button
                  //   onClick={() => console.log(playlistDetails)}
                  className="update-note-btn"
                >
                  Create New Playlist
                </button>
              </div>
            </div>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
};
