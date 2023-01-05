import React from "react";

function ActivityIcon({color}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        fill={color}
        d="M6 3V2h2v1h6V2h2v1h1.5A2.5 2.5 0 0120 5.5v2h-2v-2c0-.276-.22-.5-.5-.5H16v1h-2V5H8v1H6V5H4.5c-.28 0-.5.224-.5.5v12c0 .276.22.5.5.5h3v2h-3A2.5 2.5 0 012 17.5v-12A2.5 2.5 0 014.5 3H6zm9.5 8c-2.49 0-4.5 2.015-4.5 4.5s2.01 4.5 4.5 4.5 4.5-2.015 4.5-4.5-2.01-4.5-4.5-4.5zM9 15.5a6.5 6.5 0 1113 0 6.5 6.5 0 01-13 0zm5.5-2.5h2v2.086l1.71 1.707-1.42 1.414-2.29-2.293V13z"
      ></path>
    </svg>
  );
}

export default ActivityIcon;

