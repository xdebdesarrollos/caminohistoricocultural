import { animate, scroll } from "motion"
import '../css/styles.css';
import Pie from "../components/Pie.jsx";
export default function Home(){

    return  (
            <>
            <header className="hero">
                        <video autoPlay loop muted playsInline src="video\jardin.mp4" type="video/mp4">
                        Tu navegador no soporta videos en HTML5.
                        </video>
                <div className="overlay">
                    <h1>Camino Histórico/Cultural</h1>
                    <p>Descubrí la historia y cultura de Jardín América, Misiones</p>
                </div>
            </header>
            
            <div className="content">
                <h2>¿Qué es el Camino Histórico/Cultural?</h2>
                <p style={{ color: 'white' }}>Es un recorrido interactivo a través de diferentes puntos históricos y culturales de Jardín América, conectados mediante tótems con códigos QR.
                Esta red digital, estará distribuida en distintos puntos geográficos de la localidad. Para poder acceder a la información se utilizarán códigos QR. Actualmente usado en todos los ámbitos sociales. <br/> Estos estarán grabados o impresos, fijos en totems
                </p>
            </div>

            <div class="content">
                <h2>¿Por qué se desarrolla este proyecto?</h2>
                <p style={{ color: 'white' }}>Para preservar la identidad cultural, fomentar el turismo y proporcionar una experiencia enriquecedora a residentes y visitantes.
                Promover el desarrollo turístico, cultural e histórico de nuestra localidad, mediante el uso de diferentes tecnologías.
                </p>
            </div>


            <section id="objectives" className="objectives">
                <h2>Conocé Jardín América.</h2>
                <div className="cards-container">
                    <div className = "card">
                        <img  src="images\icons\historia.png" alt="Imagen 1" />
                        <div className="card-content">
                            <h3>  Historia </h3>
                            <p> Explora el pasado de Jardín América y su evolución a lo largo del tiempo. </p>
                        </div>
                    </div>
                    <div className = "card">
                        <img src="images\icons\arte.png" alt="Imagen 1" />
                        <div className="card-content">
                            <h3>Arte y Cultura </h3>
                            <p>Descubre la riqueza cultural y artística de la región.</p>
                        </div>
                    </div>
                    <div className = "card">
                        <img src="images\icons\geografia.png" alt="Imagen 1" />
                        <div className="card-content">
                            <h3>Geografía</h3>
                            <p>Aprende sobre la geografía y biodiversidad local.</p>
                        </div>
                    </div>
                    <div className = "card">
                        <img src="images\icons\comunidad.png" alt="Imagen 1" />
                        <div className="card-content">
                            <h3>Comunidad</h3>
                            <p>Conectate con las tradiciones y costumbres de la comunidad.</p>
                        </div>
                    </div>
            </div>
            </section>

            <section id="gallery" className="gallery">
                <h2>Viví Jardín América!!!</h2>
                <div className="image-container">
                    <img src="images\JardinAmerica\01.jpg" alt="Imagen 1" />
                    <img src="images\JardinAmerica\municipalidad.jpg" alt="Imagen 2" />
                    <img src="images\JardinAmerica\Jardin-america.jpg" alt="Imagen 3" />
                    <img src="images\JardinAmerica\fuenteagua.jpg" alt="Imagen 2" />
                    <img src="images\JardinAmerica\plazaiglesia.jpg" alt="Imagen 3" />
                </div>
            </section>
            <Pie/>


         </>         
      );
};