import React from 'react';
import '../styles/services.css';
import GoHomeButton from "./Gohome";

const Services = () => {
  return (
    <section className="services-container">
      <h2>Our Services</h2>
      <div className="service-card">
        <h3>Dine-in Experience</h3>
        <p>Enjoy a luxurious dining experience with our curated menu in a cozy ambiance.</p>
      </div>
      <div className="service-card">
        <h3>Takeout & Delivery</h3>
        <p>Order your favorite dishes online and get them delivered to your doorstep.</p>
      </div>
      <div className="service-card">
        <h3>Catering</h3>
        <p>We offer catering services for all types of events, from corporate to personal gatherings.</p>
      </div>
      <div className="service-card">
        <h3>Special Events</h3>
        <p>Celebrate special occasions at our restaurant with tailored menus and event services.</p>
      </div>
      <GoHomeButton />
    </section>
  );
};

export default Services;