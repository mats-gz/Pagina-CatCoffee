import React, { useState, useEffect } from 'react';
import '../css/Inicio.css';
import "./categorias.css";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function ProdJuguetes() {
    const [juguetes, setJuguetes] = useState([]);
    const navigate = useNavigate();

    const prodRuta = () => {
        navigate("/productos");
    }

    const getJuguetes = () => {
        axios.get(`https://api.mercadolibre.com/sites/MLA/search?category=MLA1084&limit=21`)
            .then((response) => setJuguetes(response.data.results))
            .catch((error) => console.log('error'));
    };

    useEffect(() => {
        getJuguetes();
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
                            src="https://cdn-icons-png.flaticon.com/512/5105/5105311.png"
                            alt="imagenProd"
                        ></img>
                    </div>

                    <h1> Catálogo de juguetes</h1>

                    <div class="images-prod">
                        <img
                            src="https://cdn-icons-png.flaticon.com/512/5105/5105311.png"
                            alt="imagenProd"
                        ></img>
                    </div>
                </div>

                <br></br>

                <div className="tarjetasContainer">
                    {juguetes.map((juguete) => (
                        <div key={juguete.id} className="tarjetaProd">
                            <div className="tarjetasContainer fondo-tarjetas">
                                <img className="foto" src={juguete.thumbnail} alt={juguete.title} />
                                <div className="textoContainer">
                                    <h4 className='titulo'>{juguete.title}</h4>
                                    <p className="vendedor">por {juguete.seller.nickname} </p>
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

export default ProdJuguetes;