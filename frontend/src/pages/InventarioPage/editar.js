import { useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const Editar = () => {
  const { pelicula_id } = useParams();
  const [pelicula, setPelicula] = useState({});
  const idPeliculas = () => {
    fetch(`http://localhost:5005/api/peliculas/${pelicula_id}`)
      .then((res) => res.json())
      .then((pelicula) => setPelicula(pelicula));
  };
  idPeliculas();
  return (
    <main>
      <h1>{pelicula.nombre} </h1>
      <hr />
      <article className="login-card">
        <h3>Editar</h3>
        <div className="login">
          <div className="input-label">
            <label>Nombre:</label>
            <input
              id="nombre"
              type="text"
              placeholder={`${pelicula.nombre}`}
              required
            ></input>
          </div>
          <div className="input-label">
            <label>Tarifa:</label>
            <input
              id="tarifa"
              type="text"
              placeholder={`${pelicula.tarifa}`}
              required
            ></input>
          </div>
          <div className="input-label">
            <label>Hora de inicio:</label>
            <input
              id="hora_inicio"
              type="text"
              placeholder={`${pelicula.hora_inicio}`}
              required
            ></input>
          </div>
          <div className="input-label">
            <label>idioma:</label>
            <input
              id="idioma"
              type="text"
              placeholder={`${pelicula.idioma}`}
              required
            ></input>
          </div>
          <div className="input-label">
            <label>Tipo:</label>
            <input
              id="tipo"
              type="text"
              placeholder={`${pelicula.tipo}`}
              required
            ></input>
          </div>
          <div className="input-label">
            <label>Categoria:</label>
            <input
              id="categoria"
              type="text"
              placeholder={`${pelicula.categoria}`}
              required
            ></input>
          </div>
          <div className="input-label">
            <label>Restriccion:</label>
            <input
              id="restriccion"
              type="text"
              placeholder={`${pelicula.restriccion}`}
              required
            ></input>
          </div>
          <div className="input-label">
            <label>Imagen:</label>
            <input
              id="imagen"
              type="text"
              placeholder={`${pelicula.imagen}`}
              required
            ></input>
          </div>
          <div className="input-label">
            <label>Trailer:</label>
            <input
              id="trailer"
              type="text"
              placeholder={`${pelicula.trailer}`}
              required
            ></input>
          </div>
          <div className="input-label">
            <label>Sinopsis:</label>
            <input
              id="sinopsis"
              type="text"
              placeholder={`${pelicula.sinopsis}`}
              required
            ></input>
          </div>


          <button>
            <Link to="/inventario">Guardar</Link>
          </button>

        </div>
      </article>
    </main>
  );
};

export default Editar;
