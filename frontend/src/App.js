import "./App.css";
import IndexPage from "./pages/IndexPage/indexPage";
import InventarioPage from "./pages/InventarioPage/inventarioPage";
import PeliculaDetalle from "./pages/PeliculaDetalle/peliculaDetalle";
import { Routes, Route, Link } from "react-router-dom";
import LoginPage from "./pages/LoginPage/loginPage";

function App() {
  return (
    <body className="container">
      <header>
        <img src="https://i.postimg.cc/mrqPbkfc/logon.png" />
      </header>
      <nav>
        <form>
          <input type="text" id="buscar" placeholder="Buscar..."></input>
          <button>
            <img src="https://i.postimg.cc/Hxb3XVgK/search.png" />
          </button>
        </form>
      </nav>
      <main>
        <Routes>
          <Route path="/" element={<IndexPage />} />
          <Route path="/inventario" element={<InventarioPage />} />
          <Route path="/detalles" element={<PeliculaDetalle />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </main>
      <footer>
        <div className="footer-titulo">
          <h3>CinePlex Cinema</h3>
          <p>Calle Falsa # 123 esquina</p>
        </div>
        <div className="footer-body">
          <div className="footer-texto">
            <ul>
              <li>
                <Link className="link" to="/">Inicio</Link>
              </li>
              <li>
                <Link className="link" to="/">Nosotros</Link>
              </li>
              <li>
                <Link className="link" to="/">Contactanos</Link>
              </li>
              <li>
                <Link className="link" to="/login">
                  Administrar
                </Link>
              </li>
            </ul>
          </div>
          <div className="mapa">
            <iframe
              id="gmap_canvas"
              src="https://maps.google.com/maps?q=central%20village&t=&z=11&ie=UTF8&iwloc=&output=embed"
              frameborder="0"
              scrolling="no"
              marginheight="0"
              marginwidth="0"
            ></iframe>
          </div>
        </div>
      </footer>
    </body>
  );
}

export default App;
