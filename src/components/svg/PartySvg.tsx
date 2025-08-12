interface CardDecorationProps {
  className?: string;
}

export const PartySvg = ({ className }: CardDecorationProps) => {
  return (
    <svg
      width="100%"
      height="60"
      viewBox="0 0 350 60"
      xmlns="http://www.w3.org/2000/svg"
      className="max-w-[350px]"
    >
      <defs>
        <clipPath id="divider-shape" clipPathUnits="objectBoundingBox">
          <path d="M0,0.5 H0.38 C0.39,0.5 0.40,0.48 0.41,0.48 C0.42,0.48 0.43,0.5 0.44,0.5 H0.48 L0.5,0.55 L0.52,0.5 H0.56 C0.57,0.5 0.58,0.48 0.59,0.48 C0.60,0.48 0.61,0.5 0.62,0.5 H1 V0.52 H0 Z" />
        </clipPath>
      </defs>

      {/* Line connecting the diamonds */}
      <path
        d="M 25 20 
              Q 75 20, 100 20
              M 100 20
              Q 150 20, 200 20
              M 200 20
              Q 250 20, 325 20"
        fill="none"
        stroke="#5A4635"
        strokeWidth="0.5"
        strokeLinecap="round"
      />

      {/* Left half-diamond (triangle) */}
      <path
        d="M 25 20 L 35 15 L 35 25 Z"
        fill="#8c755e"
        stroke="#B8906F"
        strokeWidth="1"
      />

      {/* Middle full diamond */}
      <path
        d="M 100 15 L 105 20 L 100 25 L 95 20 Z"
        fill="#8c755e"
        stroke="#B8906F"
        strokeWidth="1"
      />

      <path
        d="M 200 15 L 205 20 L 200 25 L 195 20 Z"
        fill="#8c755e"
        stroke="#B8906F"
        strokeWidth="1"
      />

      {/* Right half-diamond (triangle) */}
      <path
        d="M 315 15 L 325 20 L 315 25 Z"
        fill="#8c755e"
        stroke="#B8906F"
        strokeWidth="1"
      />
    </svg>
  );
};
