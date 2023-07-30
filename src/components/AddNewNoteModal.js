import React, { useState, useContext } from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Typography from "@mui/material/Typography";

import { ContextData } from "../context/DataContext";

import editPlaylist from "../images/edit-playlist.svg";

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

export const AddNewNoteModal = ({ videoID }) => {
  const { addNote } = useContext(ContextData);

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [noteDescription, setNoteDescription] = useState("");

  const handleAddNote = () => {
    if (noteDescription) {
      addNote(videoID, noteDescription);
      handleClose();
      setNoteDescription("");
    } else {
      alert("Please Enter Note Description!");
    }
  };

  return (
    <div>
      <img src={editPlaylist} onClick={handleOpen} alt="edit-to-playlist" />
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
              Add New Note
            </Typography>
            <div className="note-description-wrapper">
              <input
                className="note-description-input-field"
                type="text"
                placeholder="Enter Note Description..."
                value={noteDescription}
                onChange={(e) => setNoteDescription(e.target.value)}
              />
              <div className="edit-note-call-to-action-buttons">
                <button onClick={handleClose} className="discard-btn">
                  Discard
                </button>
                <button onClick={handleAddNote} className="update-note-btn">
                  Update Note
                </button>
              </div>
            </div>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
};
