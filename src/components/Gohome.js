import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/gohome.css";

const GoHomeButton = () => {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate("/");
  };

  return (
    <section className="go-home-button-container">
      <button onClick={handleGoHome} aria-label="Go to homepage button">
        Go to Home
      </button>
    </section>
  );
};

export default GoHomeButton;
