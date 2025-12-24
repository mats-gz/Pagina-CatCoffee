import React, { useState, useEffect } from 'react';
import '../css/Inicio.css';
import { useNavigate } from 'react-router-dom';
import "./categorias.css";
import axios from 'axios';

function ProdCamas() {
    const [camas, setCamas] = useState([]);
    const navigate = useNavigate();

    const prodRuta = () => {
        navigate("/productos");
    }

    const getCamas = () => {
        axios.get(`https://api.mercadolibre.com/sites/MLA/search?category=MLA434788&limit=21`)
            .then((response) => setCamas(response.data.results))
            .catch((error) => console.log('error'));
    };

    useEffect(() => {
        getCamas();
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
                            src="https://cdn-icons-png.flaticon.com/512/4786/4786884.png"
                            alt="imagenProd"
                        ></img>
                    </div>

                    <h1> Catálogo de cucha</h1>

                    <div class="images-prod">
                        <img
                            src="https://cdn-icons-png.flaticon.com/512/4786/4786884.png"
                            alt="imagenProd"
                        ></img>
                    </div>
                </div>

                <br></br>

                <div className="tarjetasContainer">
                    {camas.map((cama) => (
                        <div key={cama.id} className="tarjetaProd">
                            <div className="tarjetasContainer fondo-tarjetas">
                                <img className="foto" src={cama.thumbnail} alt={cama.title} />
                                <div className="textoContainer">
                                    <h4 className='titulo'>{cama.title}</h4>
                                    <p className="vendedor">por {cama.seller.nickname} </p>
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

export default ProdCamas;