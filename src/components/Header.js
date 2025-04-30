import "../styles/header.css";
import Nav from "./Nav";

function Header() {
  return (
    <>
      <section className="logo">
        <img src="/assets/Asset 16@4x.png" alt="Client Logo" />
        <Nav />
      </section>
    </>
  );
}

export default Header;