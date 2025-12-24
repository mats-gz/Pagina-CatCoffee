import React, { useState, useEffect } from 'react';
import '../css/Inicio.css';
import "./categorias.css";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function ProdComederos() {
    const [comederos, setComederos] = useState([]);
    const navigate = useNavigate();

    const prodRuta = () => {
        navigate("/productos");
    }

    const getComederos = () => {
        axios.get(`https://api.mercadolibre.com/sites/MLA/search?category=MLA81636&limit=21`)
            .then((response) => setComederos(response.data.results))
            .catch((error) => console.log('error'));
    };

    useEffect(() => {
        getComederos();
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
                            src="https://cdn-icons-png.flaticon.com/512/4889/4889344.png"
                            alt="imagenProd"
                        ></img>
                    </div>

                    <h1> Catálogo de comederos</h1>

                    <div class="images-prod">
                        <img
                            src="https://cdn-icons-png.flaticon.com/512/4889/4889344.png"
                            alt="imagenProd"
                        ></img>
                    </div>
                </div>

                <br></br>

                <div className="tarjetasContainer">
                    {comederos.map((comedero) => (
                        <div key={comedero.id} className="tarjetaProd">
                            <div className="tarjetasContainer fondo-tarjetas">
                                <img className="foto" src={comedero.thumbnail} alt={comedero.title} />
                                <div className="textoContainer">
                                    <h4 className='titulo'>{comedero.title}</h4>
                                    <p className="vendedor">por {comedero.seller.nickname} </p>
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

export default ProdComederos;