import { useState } from "react";
import "./css/Navbar.css";
import { Outlet } from "react-router-dom";

const Navbar = () => {
    const [menu, setMenu] = useState(false);

    const toggleMenu = () => {
        setMenu(!menu);
    };

    return (
        <header className="Cabecera">
            <button onClick={toggleMenu} className="Cabecera-button">
                <svg
                    className="Cabecera-svg"
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                >
                    <path
                        fillRule="evenodd"
                        d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
                    />
                </svg>
            </button>

            <nav className={`Cabecera-nav ${menu ? "isActive" : ""}`}>
                <ul className="Cabecera-ul">
                    <li className="Cabecera-li">
                        <div className="Inicio-container">
                            <img
                                src="https://imgs.search.brave.com/kJhmzih3gh5vrbjg5Pzo-md828qcS9xdPf4bMFgZT_Y/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jZG4z/Lmljb25maW5kZXIu/Y29tL2RhdGEvaWNv/bnMvdHJhdmVsLWZs/YXQtY29sb3JmdWwv/MjA0OC81NDYwXy1f/Q29mZmVlX0N1cC01/MTIucG5n"
                                alt="imagen"
                                className="Inicio-image"
                            />
                            <a href="/" className="Cabecera-a">
                                Inicio
                            </a>
                        </div>
                    </li>
                    <li className="Cabecera-li">
                        <div className="Inicio-container">
                            <img
                                src="https://imgs.search.brave.com/kJhmzih3gh5vrbjg5Pzo-md828qcS9xdPf4bMFgZT_Y/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jZG4z/Lmljb25maW5kZXIu/Y29tL2RhdGEvaWNv/bnMvdHJhdmVsLWZs/YXQtY29sb3JmdWwv/MjA0OC81NDYwXy1f/Q29mZmVlX0N1cC01/MTIucG5n"
                                alt="imagen"
                                className="Inicio-image"
                            />
                            <a href="/contacto" className="Cabecera-a">
                                Contacto
                            </a>
                        </div>
                    </li>
                    <li className="Cabecera-li">
                        <div className="Inicio-container">
                            <img
                                src="https://imgs.search.brave.com/kJhmzih3gh5vrbjg5Pzo-md828qcS9xdPf4bMFgZT_Y/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jZG4z/Lmljb25maW5kZXIu/Y29tL2RhdGEvaWNv/bnMvdHJhdmVsLWZs/YXQtY29sb3JmdWwv/MjA0OC81NDYwXy1f/Q29mZmVlX0N1cC01/MTIucG5n"
                                alt="imagen"
                                className="Inicio-image"
                            />
                            <a href="/productos" className="Cabecera-a">
                                Productos
                            </a>
                        </div>
                    </li>
                    <li className="Cabecera-li">
                        <div className="Inicio-container">
                            <img
                                src="https://imgs.search.brave.com/kJhmzih3gh5vrbjg5Pzo-md828qcS9xdPf4bMFgZT_Y/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jZG4z/Lmljb25maW5kZXIu/Y29tL2RhdGEvaWNv/bnMvdHJhdmVsLWZs/YXQtY29sb3JmdWwv/MjA0OC81NDYwXy1f/Q29mZmVlX0N1cC01/MTIucG5n"
                                alt="imagen"
                                className="Inicio-image"
                            />
                            <a href="/empleo" className="Cabecera-a">
                                Empleo
                            </a>
                        </div>
                    </li>
                </ul>
                <br></br>
            </nav>
            <br></br>
            <div className="Logo-container">
                <div className="Corazon-container">
                    <img
                        src="https://i.postimg.cc/6ptKQW0j/minimalist-white-heart-and-line-2ak4zid6yhet7gt1-removebg-preview.png"
                        alt="imagen"
                        className="corazon-imagen"
                    />
                </div>
                <div className="Image-container">
                    <img
                        src="https://i.postimg.cc/05h291FF/Cat-ff-e-1.png"
                        alt="imagen"
                        className="image"
                    />
                </div>
                <div className="Corazon-container">
                    <img
                        src="https://i.postimg.cc/fTW5W1d7/minimalist-white-heart-and-line-2ak4zid6yhet7gt1-removebg-preview-removebg-preview.png"
                        alt="imagen"
                        className="corazon-imagen"
                    />
                </div>
            </div>
            <Outlet />
        </header>
    );
};

export default Navbar;

