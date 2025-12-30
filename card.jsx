// src/Card.jsx
import "./estilos.css";
import Musica from "./musica";

const Card = () => {
  return (
    <div className="card">
      <div className="card-header">
        <div className="header-left">
          {/* icono nota musical */}
          <svg
            className="icon-yellow"
            fill="none"
            height={24}
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            viewBox="0 0 24 24"
            width={24}
          >
            <path d="M9 18V5l12-2v13" />
            <circle cx={6} cy={18} r={3} />
            <circle cx={18} cy={16} r={3} />
          </svg>
        </div>

        {/* CENTRO: subtítulo + título (centrados) */}
        <div className="header-center">
          <p className="subtitle">Martha & Armando</p>
          <p className="TituloCard">Make you feel my love</p>
        </div>

        <div className="header-right">
          {/* icono corazón */}
          <svg
            className="icon-red"
            fill="none"
            height={24}
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            viewBox="0 0 24 24"
            width={24}
          >
            <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
          </svg>
        </div>
      </div>

      <div className="progress-section">
        <div className="progress-row">
          <svg
            className="icon-gray"
            fill="none"
            height={24}
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            viewBox="0 0 24 24"
            width={24}
          >
            <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
          </svg>

          <div className="progress-bar">
            <div className="progress-fill" style={{ width: "50%" }}></div>
          </div>

          <p className="percent">50%</p>
        </div>

        <div className="time-row">
          {/* Musica muestra los botones — ahora con clases para estilizar */}
          <Musica />
        </div>
      </div>
    </div>
  );
};

export default Card;





