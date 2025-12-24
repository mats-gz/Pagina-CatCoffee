import React, { useState, useEffect } from 'react';
import '../css/Inicio.css';
import "./categorias.css";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function ProdAccesorios() {
    const [accesorios, setAccesorios] = useState([]);
    const navigate = useNavigate();

    const prodRuta = () => {
        navigate("/productos");
    }

    const getAccesorios = () => {
        axios.get(`https://api.mercadolibre.com/sites/MLA/search?category=MLA1088&limit=21`)
            .then((response) => setAccesorios(response.data.results))
            .catch((error) => console.log('error'));
    };

    useEffect(() => {
        getAccesorios();
    }, []);

    const botClick = () => {
        window.alert(
            "Todavía se encuentra programando..."
        );
};

    return (
        <div className="App">
            <header className="App-header">

                <br></br>

                <div className="box-titulo">
                    <div class="images-prod">
                        <img
                            src="https://cdn-icons-png.flaticon.com/512/3205/3205414.png"
                            alt="imagenProd"
                        ></img>
                    </div>

                    <h1> Catálogo de accesorios</h1>

                    <div class="images-prod">
                        <img
                            src="https://cdn-icons-png.flaticon.com/512/3205/3205414.png"
                            alt="imagenProd"
                        ></img>
                    </div>
                </div>

                <br></br>

                <div className="tarjetasContainer">
                    {accesorios.map((accesorio) => (
                        <div key={accesorio.id} className="tarjetaProd">
                            <div className="tarjetasContainer fondo-tarjetas">
                                <img className="foto" src={accesorio.thumbnail} alt={accesorio.title} />
                                <div className="textoContainer">
                                    <h4 className='titulo'>{accesorio.title}</h4>
                                    <p className="vendedor">por {accesorio.seller.nickname} </p>
                                    <button className="boton-info" onClick={botClick}>Más info</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <br></br>

                <div className="boton-prod">
                    <button onClick={prodRuta}>Volver al catalogo inicial</button>
                </div>

                <br></br>

            </header>
        </div>
    );
}

export default ProdAccesorios;
