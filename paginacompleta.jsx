import Card from "./card";
import "./layout.css";

const PaginaCompleta = () => {
  return (
    <div className="layout">

      {/* MITAD IZQUIERDA — EL CARD */}
      <div className="left-panel">
        <Card />
      </div>

      {/* MITAD DERECHA — COLLAGE */}
      <div className="right-panel">
        <div className="collage">
          <img src="/foto1.jpg" alt="Foto 1" />
          <img src="/foto2.jpg" alt="Foto 2" />
          <img src="/foto3.jpg" alt="Foto 3" />
          <img src="/foto4.jpg" alt="Foto 4" />
        </div>
      </div>

    </div>
  );
};

export default PaginaCompleta;
