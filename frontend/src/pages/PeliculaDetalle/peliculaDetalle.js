import { useState } from "react";
import { useParams } from "react-router-dom";

const PeliculaDetalle = () =>{
    const { pelicula_id } = useParams();
    const [pelicula, setPelicula] = useState({});
    const mostrarDetalles = () =>{
        fetch(`http://localhost:5005/api/peliculas/${pelicula_id}`)

        .then(response => response.json())
        .then(pelicula => setPelicula(pelicula));
    }
    mostrarDetalles();
    return(
        <main>
            <h1>Detalles {pelicula_id}</h1>
            <h1>Detalles {pelicula.tipo}</h1>

            <hr/>
        </main>
    );
}

export default PeliculaDetalle;