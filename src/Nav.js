import './App.css';

function Nav() {
  return (
    <>
      <div className="navbar">
        <ul>
          <li className="navlist">
            <a href="index.html">Home</a>
          </li>
          <li className="navlist">
            <a href="menu.html">Menu</a>
          </li>
          <li className="navlist">
            <a href="services.html">Services</a>
          </li>
          <li className="navlist">
            <a href="about.html">About Us</a>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Nav;
