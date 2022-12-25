import React from "react";

function HomeIconOutlined({color}) {
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
        d="M12 9a4 4 0 100 8 4 4 0 000-8zm0 6a2 2 0 11-.001-3.999A2 2 0 0112 15zm0-13.304L.622 8.807l1.06 1.696L3 9.679V19.5A2.5 2.5 0 005.5 22h13a2.5 2.5 0 002.5-2.5V9.679l1.318.824 1.06-1.696L12 1.696zM19 19.5a.5.5 0 01-.5.5h-13a.5.5 0 01-.5-.5V8.429l7-4.375 7 4.375V19.5z"
      ></path>
    </svg>
  );
}

export default HomeIconOutlined;
