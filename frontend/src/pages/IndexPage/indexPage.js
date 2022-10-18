import {Link} from 'react-router-dom';
import {useState} from 'react';
const IndexPage = () =>{
    const [peliculas, setPeliculas] = useState([]);
    const listarPeliculas = () =>{
        fetch('http://localhost:5005/api/peliculas')
        .then(res => res.json())
        .then(data => setPeliculas(data));
    }
    listarPeliculas();
    return(
        <main>
            <h1>CinePlex Cinema</h1>
            <hr/>
            {peliculas.map(eachPeliculas =>{
                return(
                    <article className='peliculas-card'>
                        <h3>{eachPeliculas.nombre}</h3>
                        <img src={eachPeliculas.imagen}></img>
                    </article>
                )
            })}
            <Link to="/inventario">Inventario</Link>
        </main>
    );
}

export default IndexPage;