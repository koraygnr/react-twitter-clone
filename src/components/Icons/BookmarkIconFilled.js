import React from "react";

function BookmarkIconFilled({color}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        fill={color}
        d="M4 4.5A2.5 2.5 0 016.5 2h11A2.5 2.5 0 0120 4.5v18.44l-8-5.71-8 5.71V4.5z"
      ></path>
    </svg>
  );
}

export default BookmarkIconFilled;
