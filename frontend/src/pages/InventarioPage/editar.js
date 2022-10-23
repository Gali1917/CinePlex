import { useParams } from "react-router";
import { useState, useEffect } from "react";
import axios from "axios";
import {Link} from "react-router-dom";

function Editar() {
  const {pelicula_id} = useParams();
  //Hooks
  const [nombre, setNombre] = useState("");
  const [tarifa, setTarifa] = useState("");
  const [hora_inicio, setHora_inicio] = useState("");
  const [idioma, setIdioma] = useState("");
  const [tipo, setTipo] = useState("");
  const [categoria, setCategoria] = useState("");
  const [restriccion, setRestriccion] = useState("");
  const [imagen, setImagen] = useState("");
  const [trailer, setTrailer] = useState("");
  const [sinopsis, setSinopsis] = useState("");

  useEffect(() => {
    axios
    .put(`/api/peliculas/${pelicula_id}`, {
      })
      .then((res) => {
        console.log(res.data);
        const dataPelicula = res.data;
        setNombre(dataPelicula.nombre)
        setTarifa(dataPelicula.tarifa)
        setHora_inicio(dataPelicula.hora_inicio)
        setIdioma(dataPelicula.idioma)
        setTipo(dataPelicula.tipo)
        setCategoria(dataPelicula.categoria)
        setRestriccion(dataPelicula.restriccion)
        setImagen(dataPelicula.imagen)
        setTrailer(dataPelicula.trailer)
        setSinopsis(dataPelicula.sinopsis)
      });
  }, []);


  //Actualizar pelicula
  function editarPelicula(){

  }

  return (
    <main>
      <h1>{pelicula_id.id} </h1>
      <h1>{pelicula_id.nombre} </h1>

      <hr />
      <article className="login-card">
        <h3>Editar</h3>
        <div className="login">
          <div className="input-label">
            <label>Nombre:</label>
            <input
              id="nombre"
              type="text"
              value={`${nombre}`}
              onChange={(e) =>{setNombre(e.target.value)}}
              required
            ></input>
          </div>
          <div className="input-label">
            <label>Tarifa:</label>
            <input
              id="tarifa"
              type="text"
              value={`${tarifa}`}
              onChange={(e) =>{setTarifa(e.target.value)}}
              required
            ></input>
          </div>
          <div className="input-label">
            <label>Hora de inicio:</label>
            <input
              id="hora_inicio"
              type="text"
              value={`${hora_inicio}`}              
              onChange={(e) =>{setHora_inicio(e.target.value)}}
              required
            ></input>
          </div>
          <div className="input-label">
            <label>idioma:</label>
            <input
              id="idioma"
              type="text"
              value={`${idioma}`}
              onChange={(e) =>{setIdioma(e.target.value)}}
              required
            ></input>
          </div>
          <div className="input-label">
            <label>Tipo:</label>
            <input
              id="tipo"
              type="text"
              value={`${tipo}`}
              onChange={(e) =>{setTipo(e.target.value)}}
              required
            ></input>
          </div>
          <div className="input-label">
            <label>Categoria:</label>
            <input
              id="categoria"
              type="text"
              value={`${categoria}`}
              onChange={(e) =>{setCategoria(e.target.value)}}
              required
            ></input>
          </div>
          <div className="input-label">
            <label>Restriccion:</label>
            <input
              id="restriccion"
              type="text"
              value={`${restriccion}`}
              onChange={(e) =>{setRestriccion(e.target.value)}}
              required
            ></input>
          </div>
          <div className="input-label">
            <label>Imagen:</label>
            <input
              id="imagen"
              type="text"
              value={`${imagen}`}
              onChange={(e) =>{setImagen(e.target.value)}}
              required
            ></input>
          </div>
          <div className="input-label">
            <label>Trailer:</label>
            <input
              id="trailer"
              type="text"
              value={`${trailer}`}
              onChange={(e) =>{setTrailer(e.target.value)}}
              required
            ></input>
          </div>
          <div className="input-label">
            <label>Sinopsis:</label>
            <input
              id="sinopsis"
              type="text"
              value={`${sinopsis}`}
              onChange={(e) =>{setSinopsis(e.target.value)}}
              required
            ></input>
          </div>

          <button onClick={editarPelicula}>
            <Link to="/inventario">Guardar</Link>
          </button>

        </div>
      </article>
    </main>
  );
};

export default Editar;

// import { useState } from "react";
// import { useParams } from "react-router-dom";
// import { Link } from "react-router-dom";

// const Editar = () => {

//   const { pelicula_id } = useParams();
//   const [pelicula, setPelicula] = useState({});
//   const idPeliculas = () => {
//     fetch(`http://localhost:5005/api/peliculas/${pelicula_id}`)
//       .then((res) => res.json())
//       .then((pelicula) => setPelicula(pelicula));
//   };
//   idPeliculas();
 

// export default Editar;
