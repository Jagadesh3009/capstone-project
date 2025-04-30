import { Link } from 'react-router-dom';
import "../styles/nav.css";

function Nav() {
  return (
    <>
      <nav className="navbar">
        <ul>
          <li className="navlist">
            <Link to="/">Home</Link>
          </li>
          <li className="navlist">
            <Link to="/specials">Specials</Link>
          </li>
          <li className="navlist">
            <Link to="/services">Services</Link>
          </li>
          <li className="navlist">
            <Link to="/aboutus">About Us</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Nav;
