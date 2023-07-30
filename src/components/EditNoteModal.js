import React, { useState, useContext } from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Typography from "@mui/material/Typography";

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

export const EditNoteModal = ({ video, index, note }) => {
  const { updateNote } = useContext(ContextData);

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [noteDescription, setNoteDescription] = useState(note);

  const handleUpdateNote = () => {
    if (noteDescription) {
      updateNote(video, index, noteDescription);
      handleClose();
    } else {
      alert("Please Enter Note Description!");
    }
  };

  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1em"
        height="1em"
        viewBox="0 0 24 24"
        className="edit-note"
        onClick={handleOpen}
      >
        <path
          fill="currentColor"
          d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04a.996.996 0 0 0 0-1.41l-2.34-2.34a.996.996 0 0 0-1.41 0l-1.83 1.83l3.75 3.75l1.83-1.83z"
        ></path>
      </svg>
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
              Edit Note
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
                <button onClick={handleUpdateNote} className="update-note-btn">
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
