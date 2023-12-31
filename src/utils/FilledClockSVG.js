import React, { useContext } from "react";

import { ContextData } from "../context/DataContext";

export const FilledClockSVG = ({ id }) => {
  const { RemoveFromWatchLater } = useContext(ContextData);
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      className="filled-clock-svg"
      onClick={() => RemoveFromWatchLater(id)}
    >
      <path
        fill="currentColor"
        d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm3.3 14.71L11 12.41V7h2v4.59l3.71 3.71l-1.42 1.41z"
      ></path>
    </svg>
  );
};
