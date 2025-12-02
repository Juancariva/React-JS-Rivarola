import CartWidget from "../CartWidget/index.jsx";
import Logo from "../../../assets/logo.svg";
import "./styles.css";
import { NavLink } from "react-router";

function NavBar() {
  return (
    <header className="navbar">
      <nav className="nav-inner">
        <NavLink to="/" className="brand">
          <img 
            src={Logo}
            alt="Logo de la tienda"
            className="logo"
            width={40}
            height={40}
          />         
        </NavLink>

        <ul className="nav-links">
          <li>
            <NavLink to="/" className="nav-link">
              Inicio
            </NavLink>
          </li>
          <li>
            <NavLink to="/category/hombre" className="nav-link">
              Hombre
            </NavLink>
          </li>
          <li>
            <NavLink to="/category/mujer" className="nav-link">
              Mujer
            </NavLink>
          </li>
          <li>
            <NavLink to="/category/electronica" className="nav-link">
              Electrónica
            </NavLink>
          </li>
          <li>
            <NavLink to="/category/joyeria" className="nav-link">
              Joyería
            </NavLink>
          </li>
        </ul>

        <CartWidget />
      </nav>
    </header>
  );
}

export default NavBar;