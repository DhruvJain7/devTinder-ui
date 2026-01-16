import React from "react";

const LogoIcon = ({ width = 40, className = "" }) => (
  <svg
    width={width}
    // Maintain aspect ratio (viewBox width matches the icon's coordinate space)
    viewBox="0 0 40 80"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-label="devTinder Icon"
  >
    {/* 1. The Main Branch (Blue) */}
    <path
      d="M30 10V70"
      stroke="#58A6FF"
      strokeWidth="8"
      strokeLinecap="round"
    />

    {/* 2. The Merge Branch (Green) */}
    <path
      d="M10 55C10 55 30 55 30 40"
      stroke="#7EE787"
      strokeWidth="8"
      strokeLinecap="round"
    />
    <circle cx="10" cy="55" r="5" fill="#7EE787" />
  </svg>
);

export default LogoIcon;
