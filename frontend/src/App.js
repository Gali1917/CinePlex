import "./App.css";
import IndexPage from "./pages/IndexPage/indexPage";
import InventarioPage from "./pages/InventarioPage/inventarioPage";
import PeliculaDetalle from "./pages/PeliculaDetalle/peliculaDetalle";
import {Routes, Route} from 'react-router-dom';


function App() {
  return (
    <div className="container">
      <Routes>
        <Route path="/" element={<IndexPage />}/>
        <Route path="/inventario" element={<InventarioPage />}/>
        <Route path="/detalles" element={<PeliculaDetalle />}/>
      </Routes>
    </div>
  );
}

export default App;
