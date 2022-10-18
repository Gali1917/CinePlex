import { Link } from "react-router-dom";
import ("../../styles/login.css");
const LoginPage = () => {
  return (
    <main>
      <h1>Login</h1>
      <article className="login-card">
        <h3>Ingresar como Administrador</h3>
        <div className="login">
          <div className="input-label">
            <label>Usuario:</label>
            <input
              id="usuario"
              type="name"
              placeholder="Usuario..."
              required
            ></input>
          </div>
          <div className="input-label">
            <label>Password:</label>
            <input
              id="password"
              type="password"
              placeholder="Password..."
              required
            ></input>
          </div>
          <button>
            <Link to="/inventario">Entrar</Link>
          </button>
        </div>
      </article>
    </main>
  );
};

export default LoginPage;
