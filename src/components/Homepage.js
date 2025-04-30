import "../styles/homepage.css";

import { useNavigate } from "react-router-dom";

function Homepage() {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate("/bookingpage");
  };

  return (
    <>
      <section className="banner">
        <article className="banner-content">
          <div>
            <h1>30% off this weekend</h1>
            <button
              className="reserve-button"
              type="button"
              onClick={handleButtonClick}
            >
              Reserve a table now . . .
            </button>
          </div>
          <div>
            <p>Reserve your table today for the best Mediterranean flavors</p>
          </div>
        </article>
      </section>
      <section className="columns">
        <article className="column-content">
          <img src="/assets/menu 1.jpeg" alt="Menu 1" />
          <p>Menu 1</p>
        </article>
        <article className="column-content">
          <img src="/assets/menu 2.jpeg" alt="Menu 2" />
          <p>Menu 2</p>
        </article>
        <article className="column-content">
          <img src="/assets/menu 3.jpeg" alt="Menu 3" />
          <p>Menu 3</p>
        </article>
      </section>
    </>
  );
}

export default Homepage;
