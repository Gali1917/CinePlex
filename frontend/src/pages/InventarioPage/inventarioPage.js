import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../../styles/inventario.css";
import axios from "axios";

const InventarioPage = () => {
  const [peliculas, setPeliculas] = useState([]);

  useEffect(() => {
    fetch(
      'http://localhost:5005/api/peliculas'
    )
      .then((res) => res.json())
      .then((movies) => {
        showMovies(movies);
      })
      .catch((err) => console.log(err));
  },[]);

  function showMovies(movies) {
    setPeliculas(movies)
    console.log("movies: ",movies)
  }

  const HandleClick = (event, param) => {
    console.log("id a eliminar", param)

    axios.delete(`http://localhost:5005/api/peliculas/${param}`)
    .then(res => {
      console.log(res.data)
    })
    .then(err => {console.log(err)})
  }

  return (
    <main>
      <h1>Listado de Peliculas</h1>
      <hr />
      <article className="inventario-tabla">
        <table className="inventario-table">
          <tr>
            <th>nombre</th>
            <th>Tarifa</th>
            <th>Hora de Inicio</th>
            <th>Idioma</th>
            <th>Tipo</th>
            <th>Categoria</th>
            <th>Restricciones</th>
            <th>Imagen</th>
            <th>Accion</th>
          </tr>
          {peliculas.map((eachPeliculas) => {
            return (
              <tr>
                <td>{eachPeliculas.nombre}</td>
                <td>{eachPeliculas.tarifa}</td>
                <td>{eachPeliculas.hora_inicio}</td>
                <td>{eachPeliculas.idioma}</td>
                <td>{eachPeliculas.tipo}</td>
                <td>{eachPeliculas.categoria}</td>
                <td>{eachPeliculas.restriccion}</td>
                <td>
                  <img className="imagen-pelicula" src={eachPeliculas.imagen} />
                </td>
                <td className="inventario-accion">
                  <figure className="iconos">
                    <Link to={`/editar/${eachPeliculas._id}`}>
                      <img src="https://i.postimg.cc/8PtnSYzF/editar.png" />
                    </Link>
                    <Link to="/inventario">
                    <img onClick={event => HandleClick(event, eachPeliculas._id)}
                     src="https://i.postimg.cc/RVMb2m45/delete.png" />
                  </Link>
                  </figure>
                </td>
              </tr>
            );
          })}
        </table>
      </article>
      <Link className="link" to="/nueva_pelicula">
        <button>Nuevo</button>
      </Link>
      <Link className="link" to="/">
        <button>Volver</button>
      </Link>
    </main>
  );
};

export default InventarioPage;
