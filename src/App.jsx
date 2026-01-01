// App.jsx
import Card from "./Card";
import "./estilos.css";
import collage from "./collage.png"; 

const App = () => {
  return (
    <div className="pantalla-dividida">

      {/* IZQUIERDA - CARD */}
      <div className="lado-izquierdo">
        <Card />
      </div>

      {/* DERECHA - IMAGEN */}
      <div className="lado-derecho">
  <div className="polaroid">
  <img src={collage} alt="Foto" />
</div>

        </div>

    </div>
  );
};

export default App;



