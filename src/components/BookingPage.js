import React from 'react';
import BookingForm from './BookingForm';
import "../styles/bookingpage.css";

const BookingPage = () => {
  return (
    <section className="booking-page">
      <div className="booking-page-content">
        <h1>Book a Table Now</h1>
        <p>Reserve your table for a special occasion!</p>
        <BookingForm />
      </div>
    </section>
  );
};

export default BookingPage;