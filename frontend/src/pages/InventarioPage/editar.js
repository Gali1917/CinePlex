import { useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "axios";


const Editar = () => {

  const [nombre, setNombre] = useState('');
  const [tarifa, setTarifa] = useState('');
  const [hora_inicio, setHora_inicio] = useState('');
  const [idioma, setIdioma] = useState('');
  const [tipo, setTipo] = useState('');
  const [categoria, setCategoria] = useState('');
  const [restriccion, setRestriccion] = useState('');
  const [imagen, setImagen] = useState('');
  const [trailer, setTrailer] = useState('');
  const [sinopsis, setSinopsis] = useState('');


  const { pelicula_id } = useParams();
  const [pelicula, setPelicula] = useState({});
  
  const idPeliculas = () => {
    fetch(`http://localhost:5005/api/peliculas/${pelicula_id}`)
      .then((res) => res.json())
      .then((pelicula) => setPelicula(pelicula));
  };
  idPeliculas();

  async function saveMovie() {
    var peliculaObtenida = {
      nombre: nombre,
      tarifa: tarifa,
      hora_inicio: hora_inicio,
      idioma: idioma,
      tipo: tipo,
      categoria: categoria,
      restriccion: restriccion,
      imagen: imagen,
      trailer: trailer,
      sinopsis: sinopsis
    }

    await axios.put(`http://localhost:5005/api/peliculas/${pelicula_id}`, peliculaObtenida).then(res => {
    console.log(" response: ", res)
    }).catch((error) => {
      console.log("error : ", error)
    });
  }


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
              value={pelicula.nombre} onChange={(e) => {setNombre(e.target.value)}}
              required
            ></input>
          </div>
          <div className="input-label">
            <label>Tarifa:</label>
            <input
              id="tarifa"
              type="text"
              placeholder={`${pelicula.tarifa}`}
              value={pelicula.tarifa} onChange={(e) => {setTarifa(e.target.value)}}
              required
            ></input>
          </div>
          <div className="input-label">
            <label>Hora de inicio:</label>
            <input
              id="hora_inicio"
              type="text"
              placeholder={`${pelicula.hora_inicio}`}
              value={pelicula.hora_inicio} onChange={(e) => {setHora_inicio(e.target.value)}}
              required
            ></input>
          </div>
          <div className="input-label">
            <label>idioma:</label>
            <input
              id="idioma"
              type="text"
              placeholder={`${pelicula.idioma}`}
              value={pelicula.idioma} onChange={(e) => {setIdioma(e.target.value)}}
              required
            ></input>
          </div>
          <div className="input-label">
            <label>Tipo:</label>
            <input
              id="tipo"
              type="text"
              placeholder={`${pelicula.tipo}`}
              value={pelicula.tipo} onChange={(e) => {setTipo(e.target.value)}}
              required
            ></input>
          </div>
          <div className="input-label">
            <label>Categoria:</label>
            <input
              id="categoria"
              type="text"
              placeholder={`${pelicula.categoria}`}
              value={pelicula.categoria} onChange={(e) => {setCategoria(e.target.value)}}
              required
            ></input>
          </div>
          <div className="input-label">
            <label>Restriccion:</label>
            <input
              id="restriccion"
              type="text"
              placeholder={`${pelicula.restriccion}`}
              value={pelicula.restriccion} onChange={(e) => {setRestriccion(e.target.value)}}
              required
            ></input>
          </div>
          <div className="input-label">
            <label>Imagen:</label>
            <input
              id="imagen"
              type="text"
              placeholder={`${pelicula.imagen}`}
              value={pelicula.imagen} onChange={(e) => {setImagen(e.target.value)}}
              required
            ></input>
          </div>
          <div className="input-label">
            <label>Trailer:</label>
            <input
              id="trailer"
              type="text"
              placeholder={`${pelicula.trailer}`}
              value={pelicula.trailer} onChange={(e) => {setTrailer(e.target.value)}}
              required
            ></input>
          </div>
          <div className="input-label">
            <label>Sinopsis:</label>
            <input
              id="sinopsis"
              type="text"
              placeholder={`${pelicula.sinopsis}`}
              value={pelicula.sinopsis} onChange={(e) => {setSinopsis(e.target.value)}}
              required
            ></input>
          </div>


          <button onClick={saveMovie} >
            <Link to="/inventario">Guardar</Link>
          </button>

        </div>
      </article>
    </main>
  );
};

export default Editar;
