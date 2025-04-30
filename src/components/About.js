import React from "react";
import "../styles/about.css";
import GoHomeButton from "./Gohome";

const AboutUs = () => {
  return (
    <section className="about-container">
      <h1>About Little Lemon</h1>
      <p>
        Welcome to <strong>Little Lemon</strong>, a cozy neighborhood bistro
        located in the heart of Chicago. We specialize in Mediterranean-inspired
        cuisine made with fresh, locally sourced ingredients.
      </p>
      <p>
        At Little Lemon, our mission is to deliver vibrant, flavorful dishes in
        a warm and inviting atmosphere. Whether you're joining us for a casual
        lunch, a family dinner, or a special occasion, we promise a memorable
        dining experience.
      </p>
      <p>
        Visit us in Chicago or make a reservation today — we can’t wait to serve you!
      </p>
      <GoHomeButton />
    </section>
  );
};

export default AboutUs;