import CartWidget from "../CartWidget/index.jsx";
import Logo from "../../../assets/logo.svg";
import "./styles.css";

function NavBar() {
  return (
    <header className="navbar">
      <nav className="nav-inner">
        <a href="#" className="brand">
          <img src={Logo} 
          alt="-" 
          className="logo"
          width={40}
          height={40}
          />
        </a>

        <ul className="nav-links">
          <li><a href="#" className="nav-link">Inicio</a></li>
          <li><a href="#" className="nav-link">Productos</a></li>
          <li><a href="#" className="nav-link">Ofertas</a></li>
          <li><a href="#" className="nav-link">Contacto</a></li>
        </ul>

        <CartWidget />
      </nav>
    </header>
  );
}

export default NavBar;