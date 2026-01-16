import React from "react";

const Logo = ({ width = 160 }) => (
  <svg
    width={width}
    viewBox="0 0 300 80"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-label="devTinder Logo"
  >
    {/* FONT STYLE: Using system monospace to mimic JetBrains Mono if not loaded */}
    <style>
      {`
        .logo-text { font-family: 'JetBrains Mono', monospace; font-weight: 700; font-size: 42px; }
      `}
    </style>

    {/* ICON: The "Merge Commit" */}
    {/* 1. The Main Branch (Blue) */}
    <path
      d="M30 10V70"
      stroke="#58A6FF"
      strokeWidth="8"
      strokeLinecap="round"
    />

    {/* 2. The Merge Branch (Green) - Curved line joining the main branch */}
    <path
      d="M10 55C10 55 30 55 30 40"
      stroke="#7EE787"
      strokeWidth="8"
      strokeLinecap="round"
    />
    <circle cx="10" cy="55" r="5" fill="#7EE787" />

    {/* TEXT: devTinder */}
    <text x="55" y="52" className="logo-text" fill="#C9D1D9">
      dev<tspan fill="#58A6FF">Tinder</tspan>
    </text>
  </svg>
);

export default Logo;
