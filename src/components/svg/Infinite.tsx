"use client";
export default function Infinite() {
  return (
    <div className="flex justify-center ">
      <svg
        width="300"
        height="24"
        viewBox="0 0 300 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="separator"
      >
        {/* Left line */}
        <path
          d="M20,12 L-200,12"
          stroke="rgba(210, 184, 159, 0.5)"
          strokeWidth="2.5"
          strokeLinecap="round"
          className="draw-line left-line"
        />

        {/* Left circle */}
        <circle cx="30" cy="12" r="3" fill="#d2b89f" className="pulse" />

        {/* Center decorative elements */}
        <path
          d="M150,12 C150,12 140,2 130,2 C120,2 120,22 130,22 C140,22 150,12 150,12Z"
          stroke="#d2b89f"
          strokeWidth="1.5"
          fill="none"
          className="draw-path center-path-1"
        />
        <path
          d="M150,12 C150,12 160,2 170,2 C180,2 180,22 170,22 C160,22 150,12 150,12Z"
          stroke="#d2b89f"
          strokeWidth="1.5"
          fill="none"
          className="draw-path center-path-2"
        />

        {/* Right circle */}
        <circle cx="280" cy="12" r="3" fill="#d2b89f" className="pulse" />

        {/* Right line */}
        <path
          d="M400,12 L280,12"
          stroke="rgba(210, 184, 159, 0.5)"
          strokeWidth="2.5"
          strokeLinecap="round"
          className="draw-line right-line"
        />
      </svg>
    </div>
  );
}
