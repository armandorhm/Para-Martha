// src/musica.jsx
import { useRef } from "react";

function Musica() {
  const audioRef = useRef(new Audio("/audio.mp3"));

  const playMusic = () => {
    audioRef.current.loop = true;
    audioRef.current.volume = 0.5;
    audioRef.current.play().catch((err) => console.error("play error", err));
  };

  const pauseMusic = () => {
    audioRef.current.pause();
  };

  return (
    <div className="musica-controls">
      <button className="btn-music" onClick={playMusic}>
        <span className="btn-icon">▶</span>
        <span className="btn-text">Reproducir</span>
      </button>

      <button className="btn-music btn-pause" onClick={pauseMusic}>
        <span className="btn-icon">⏸</span>
        <span className="btn-text">Pausar</span>
      </button>
    </div>
  );
}

export default Musica;
