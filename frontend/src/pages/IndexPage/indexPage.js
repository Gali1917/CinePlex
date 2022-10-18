import { Link } from "react-router-dom";
import { useState } from "react";
import("../../styles/index.css");
const IndexPage = () => {
  const [peliculas, setPeliculas] = useState([]);
  const listarPeliculas = () => {
    fetch("http://localhost:5005/api/peliculas")
      .then((res) => res.json())
      .then((data) => setPeliculas(data));
  };
  listarPeliculas();
  return (
    <main>
      <h1>Bienvenido</h1>
      <hr />
      {peliculas.map((eachPeliculas) => {
        return (
          <Link className="link" to="">
            <article className="peliculas-card">
              <h3>{eachPeliculas.nombre}</h3>
              <img src={eachPeliculas.imagen} />
              <h4>{eachPeliculas.hora_inicio}</h4>
            </article>
          </Link>
        );
      })}
    </main>
  );
};

export default IndexPage;
