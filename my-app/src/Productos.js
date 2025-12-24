import React from 'react';
import './css/Productos.css';
import "./css/Inicio.css"
import { useNavigate } from 'react-router-dom';

function Productos() {

    const navigate = useNavigate();

    const accRuta = () => {
        navigate("/productos/accesorios");
    }
    const alRuta = () => {
        navigate("/productos/alimentos");
    }
    const camRuta = () => {
        navigate("/productos/camas");
    }
    const comRuta = () => {
        navigate("/productos/comederos");
    }
    const estRuta = () => {
        navigate("/productos/estetica");
    }
    const jugRuta = () => {
        navigate("/productos/juguetes");
    }


    return (
        <div className="App">
            <header className="App-header">

                <br></br>

                <div className='titulo-imagen'>
                    <div className='para-fondo'>
                        <img src="https://i.postimg.cc/QdKR7Nvh/cartoon-cat-online-store-1-transparent-png-removebg-preview.png" alt="tienda cat"></img>
                        <h1>Catálogo para tus felinos</h1>
                    </div>
                </div>

                <br></br>

                <div class="descripcion-catalogo">
                    <h3>¡Bienvenido a nuestra tienda para gatos!</h3>
                    <br></br>
                    <p>En nuestro catálogo encontrarás una amplia selección de productos pensados especialmente para el bienestar y la diversión de tus felinos. Desde juguetes interactivos hasta camas acogedoras, tenemos todo lo que necesitas para mantener a tus gatos felices y saludables.</p>
                    <p>Además de ofrecer productos de alta calidad, nos dedicamos a proporcionar a cada cliente una experiencia de compra única. Nuestro equipo de expertos está disponible para asesorarte y responder a todas tus preguntas.</p>
                </div>

                <br></br>

                <div className="container-botones">
                    <div className="productos-box">
                        <button onClick={accRuta}>Accesorios</button>
                    </div>

                    <div className="productos-box">
                        <button onClick={alRuta}>Alimentos</button>
                    </div>

                    <div className="productos-box">
                        <button onClick={camRuta}>Camas</button>
                    </div>

                    <div className="productos-box">
                        <button onClick={comRuta}>Comederos</button>
                    </div>

                    <div className="productos-box">
                        <button onClick={estRuta}>Estética</button>
                    </div>

                    <div className="productos-box">
                        <button onClick={jugRuta}>Juguetes</button>
                    </div>
                </div>

                <br></br>


            </header>
        </div>
    );
}

export default Productos;
