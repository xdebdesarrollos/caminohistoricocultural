import { Link } from "react-router-dom";
export default function Pie(){
    return (
        <footer>
            <div class="imagen-doble">
            <div>
                <img 
                src="./images/muni.png" 
                alt="muni" 
                width="200" 
                height="auto"
                />
            </div>
            <div>
                <img 
                src="./images/ptzc.png" 
                alt="parque" 
                width="100" 
                height="auto"
                />
            </div>
                        <div>
                <img 
                src="./images/logo2026.png" 
                alt="parque" 
                width="100" 
                height="auto"
                />
            </div>
            </div>
        
        
        <Link to="/creditos" className="creditos-link">
                <span className="creditos-link-line" />
                Créditos y Agradecimientos
        </Link>
        <p>Contacto: <a style={{ color: "blue" }} href="mailto:caminohistoricoculturalja@gmail.com">caminohistoricoculturalja@gmail.com</a></p>
        <p>&copy; 2026 Camino Histórico/Cultural Jardín América Mnes. Argentina</p>
        </footer>
    )

}
