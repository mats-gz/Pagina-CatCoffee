import React, { useState, useEffect } from "react";
import "../css/Inicio.css";
import "./categorias.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function ProdAlimentos() {
    const [alimentos, setAlimentos] = useState([]);
    const navigate = useNavigate();

    const prodRuta = () => {
        navigate("/productos");
    };

    const getAlimentos = () => {
        axios
            .get(
                `https://api.mercadolibre.com/sites/MLA/search?category=MLA434779&limit=21`
            )
            .then((response) => setAlimentos(response.data.results))
            .catch((error) => console.log("error"));
    };

    useEffect(() => {
        getAlimentos();
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
                            src="https://www.svgrepo.com/show/295870/dog-food-pet.svg"
                            alt="imagenProd"
                        ></img>
                    </div>

                    <h1> Catálogo de alimentos</h1>

                    <div class="images-prod">
                        <img
                            src="https://www.svgrepo.com/show/295870/dog-food-pet.svg"
                            alt="imagenProd"
                        ></img>
                    </div>
                </div>

                <br></br>

                <div className="tarjetasContainer">
                    {alimentos.map((alimento) => (
                        <div key={alimento.id} className="tarjetaProd">
                            <div className="tarjetasContainer fondo-tarjetas">
                                <img
                                    className="foto"
                                    src={alimento.thumbnail}
                                    alt={alimento.title}
                                />
                                <div className="textoContainer">
                                    <h4 className="titulo">{alimento.title}</h4>
                                    <p className="vendedor">por {alimento.seller.nickname} </p>
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

export default ProdAlimentos;
