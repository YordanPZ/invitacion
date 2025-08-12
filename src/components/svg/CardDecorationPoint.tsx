interface CardDecorationProps {
  className?: string;
}

export const CardDecorationPoint = ({ className }: CardDecorationProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 37 37"
      fill="none"
      data-inject-url="https://fixdate.io/modelo-invitacion/126/img/esquina-box.svg"
      className={`injectable  adorno-esquina2  ${className}`}
    >
      <g>
        {/* <!-- Punto --> */}
        <path
          className="punto-adorno"
          d="M0.75 37V33.79H3.38C20.18 33.79 33.79 20.17 33.79 3.38V0.75H36.99"
        ></path>

        {/* <!-- Circulo --> */}
        <path
          fill="var(--color-pallete-3)"
          className="circulo-adorno"
          d="M5.80002 11.56C8.99223 11.56 11.58 8.97221 11.58 5.78C11.58 2.58779 8.99223 0 5.80002 0C2.60781 0 0.0200195 2.58779 0.0200195 5.78C0.0200195 8.97221 2.60781 11.56 5.80002 11.56Z"
        ></path>
      </g>
    </svg>
  );
};
