import React, { useState, useEffect } from 'react';
import '../css/Inicio.css';
import "./categorias.css";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function ProdEstetica() {
    const [estetica, setEstetica] = useState([]);
    const navigate = useNavigate();

    const prodRuta = () => {
        navigate("/productos");
    }

    const getEstetica = () => {
        axios.get(`https://api.mercadolibre.com/sites/MLA/search?category=MLA1086&limit=21`)
            .then((response) => setEstetica(response.data.results))
            .catch((error) => console.log('error'));
    };

    useEffect(() => {
        getEstetica();
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
                            src="https://cdn-icons-png.flaticon.com/512/40/40831.png"
                            alt="imagenProd"
                        ></img>
                    </div>

                    <h1> Catálogo de estética</h1>

                    <div class="images-prod">
                        <img
                            src="https://cdn-icons-png.flaticon.com/512/40/40831.png"
                            alt="imagenProd"
                        ></img>
                    </div>
                </div>

                <br></br>

                <div className="tarjetasContainer">
                    {estetica.map((est) => (
                        <div key={est.id} className="tarjetaProd">
                            <div className="tarjetasContainer fondo-tarjetas">
                                <img className="foto" src={est.thumbnail} alt={est.title} />
                                <div className="textoContainer">
                                    <h4 className='titulo'>{est.title}</h4>
                                    <p className="vendedor">por {est.seller.nickname} </p>
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

export default ProdEstetica;