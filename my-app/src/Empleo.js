import React from "react";
import "./css/Empleo.css"
import "./css/Inicio.css"
import { useState } from "react";
import axios from "axios";

function Empleo() {

  const [userData, setUserData] = useState({
    name: "",
    surname: "",
    ID: "",
    mail: "",
    telNumber: "",
    curriculum: ""
  })
  const [mostrarInfo, setMostrarInfo] = useState(false);


  const handleChange = (event) => {
    setUserData({ ...userData, [event.target.name]: event.target.value });
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    axios.post(`https://my-json-server.typicode.com/fedevirgolini-itr/api_practico5/users`, userData)
      .then(response => {
        if (response.status === 201) {
          window.alert("Su curriculum fue enviado de manera exitosa, pronto nos comunicaremos con usted !!");
        }
      })
      .catch(error => window.alert("Error al mandar el curriculum ..."))
  }

  const toggleInfo = () => {
    setMostrarInfo(!mostrarInfo);
  };


  return <>
    <div className="App-header">
      <br></br>

      <div class="job-posting">

        <div className="center-empleo">
          <div class="images-container">
            <img src="https://imgs.search.brave.com/1mVlQMZhFO7ljUhLaW9P3-I0k57aKPtDBGU0pshJ4bc/rs:fit:500:0:0/g:ce/aHR0cHM6Ly93d3cu/aWNvbnNkYi5jb20v/aWNvbnMvcHJldmll/dy93aGl0ZS9jYXQt/eHhsLnBuZw" alt="Gato Negro 1" ></img>
          </div>

          <h1>Búsqueda de Personal</h1>

          <div class="images-container">
            <img src="https://imgs.search.brave.com/1mVlQMZhFO7ljUhLaW9P3-I0k57aKPtDBGU0pshJ4bc/rs:fit:500:0:0/g:ce/aHR0cHM6Ly93d3cu/aWNvbnNkYi5jb20v/aWNvbnMvcHJldmll/dy93aGl0ZS9jYXQt/eHhsLnBuZw" alt="Gato Negro 2" ></img>
          </div>
        </div>

        <h5>Nos enorgullecemos de crear una comunidad amorosa y de apoyar a nuestro equipo con un ambiente laboral positivo y amigable. Valoramos la pasión por los gatos, la creatividad en la preparación de café y el servicio excepcional al cliente. Al unirte a nuestro equipo, te convertirás en parte de una familia que ama tanto a los felinos como a un buen café.</h5>
      </div>

      <br></br>

      <button onClick={toggleInfo} className="boton">¿Qué buscamos?</button>
      <div>
        <br></br>
        {mostrarInfo && (
          <div className="info-extra">
            <ul>
              <li><strong>Amor por los Animales:</strong> Profundo amor y respeto por los gatos, así como habilidad para trabajar con ellos y cuidar de su bienestar.</li>
              <li><strong>Experiencia en Servicio al Cliente:</strong> Habilidades sólidas en atención al cliente, incluyendo interacción amistosa, respuesta a preguntas y recomendaciones.</li>
              <li><strong>Conocimientos sobre Café:</strong> Conocimientos básicos sobre café, té y otras bebidas, así como habilidades para preparar y servir diferentes tipos de bebidas de calidad.</li>
              <li><strong>Habilidades en Barismo:</strong> Familiaridad con técnicas de barismo, incluyendo preparación de espresso, espuma de leche y diseños en bebidas.</li>
              <li><strong>Higiene y Seguridad:</strong> Conocimientos sobre prácticas seguras de manipulación de alimentos y bebidas, y capacidad para mantener un espacio limpio.</li>
              <li><strong>Flexibilidad y Adaptabilidad:</strong> Capacidad para trabajar en un entorno dinámico, asumir diversas responsabilidades y adaptarse a las necesidades cambiantes.</li>
              <li><strong>Trabajo en Equipo:</strong> Habilidad para trabajar colaborativamente con otros miembros del equipo, incluyendo cuidado de los gatos y colaboración con voluntarios.</li>
              <li><strong>Comunicación:</strong> Buena comunicación verbal y habilidades básicas de escritura para interactuar con clientes y colegas y mantener registros precisos.</li>
              <li><strong>Responsabilidad y Ética:</strong> Integridad y responsabilidad en el cuidado de los gatos, así como ética en el trabajo y respeto por las políticas de la empresa.</li>
              <li><strong>Flexibilidad de Horario:</strong> Disponibilidad para trabajar en horarios flexibles, incluyendo fines de semana y días festivos.</li>
            </ul>
          </div>
        )}
      </div>



      <br></br>

      <div className="formulario">
        <h1>Información del postulante</h1>
        <form onSubmit={handleSubmit}>
          <label>Nombre</label>
          <input name="name" type="text" onChange={handleChange} required />
          <br />

          <label>Apellido</label>
          <input name="surname" type="text" onChange={handleChange} required />
          <br />

          <label>DNI</label>
          <input name="ID" type="number" onChange={handleChange} required />
          <br />

          <label>Mail</label>
          <input name="mail" type="email" onChange={handleChange} required />
          <br />

          <label>Número de Tel</label>
          <input name="telNumber" type="number" onChange={handleChange} required />
          <br />

          <label>Curriculum (PDF o imagen)</label>
          <input name="curriculum" type="file" onChange={handleChange} accept=".pdf, .jpg, .jpeg, .png" required />
          <br />

          <button type="submit">Confirmar</button>
          <br />

        </form>
      </div>
    </div>
  </>

}
export default Empleo;