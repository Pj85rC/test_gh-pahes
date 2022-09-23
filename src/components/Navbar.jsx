import { Link } from "react-router-dom";
import "./navbar.css";

const Navbar = (props) => {
  return(
  <nav className="navbar">
    <ul className="views">
      <li>
        <Link to={`${props.basePath}/`} >🏠 Home</Link>
      </li>
      <li>
        <Link to={`${props.basePath}/contacto`}>📒 Contacto</Link>
      </li>
    </ul>
    <Link to="/" className="navLogo">
      Happy Cake
      <img
        src="https://i.imgur.com/s7GAPJS.png"
        alt="HappyCake"
        referrerPolicy="no-referrer"
      />
    </Link>
  </nav>
  );
};

export default Navbar;
