import { Link } from "react-router-dom";
import "/src/css/styles.css"; // Estilos personalizados

function NotFound() {
  return (
    <div className="not-found-container">
      <h1>Parece que te has perdido...</h1>
      <div className="not-found-image">
          <img
              src="/images/error404.jpg"
              alt="404 Not Found"
          />
      </div>  

      <div className="back-home">
          <Link to="/">Volver al inicio</Link>
    </div>
    </div>
  );
}

export default NotFound;
