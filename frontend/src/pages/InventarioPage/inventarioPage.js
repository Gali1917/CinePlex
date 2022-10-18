import { useState } from "react";
import { Link } from "react-router-dom";
import "./styles/inventario.css";

const InventarioPage = () => {
  const [peliculas, setPeliculas] = useState([]);
  const listarPeliculas = () => {
    fetch("http://localhost:5005/api/peliculas")
      .then((res) => res.json())
      .then((data) => setPeliculas(data));
  };
  listarPeliculas();
  return (
    <main>
      <h1>Listado de Peliculas</h1>
      <hr />
      <article className="inventario-tabla">
        <table>
          <tr>
            <th>ID</th>
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
                <td>{eachPeliculas._id}</td>
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
                <td>
                  <figure className="iconos">
                    <Link to="/editar/:id">
                      <img src="https://i.postimg.cc/8PtnSYzF/editar.png" />
                    </Link>
                    <Link to="/eliminar/:id">
                      <img src="https://i.postimg.cc/RVMb2m45/delete.png" />
                    </Link>
                  </figure>
                </td>
              </tr>
            );
          })}
        </table>
      </article>
      <Link to="/">Volver</Link>
    </main>
  );
};

export default InventarioPage;
