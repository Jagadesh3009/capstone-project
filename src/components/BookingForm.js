import { useState, useEffect } from "react";
import "../styles/bookingform.css";

const BookingForm = ({ availableTimes = [], dispatch, submitForm }) => {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState("");
  const [isFormValid, setIsFormValid] = useState(false);

  useEffect(() => {
    if (date && time && guests >= 1 && guests <= 10 && occasion) {
      setIsFormValid(true);
    } else {
      setIsFormValid(false);
    }
  }, [date, time, guests, occasion]);

  const handleDateChange = (e) => {
    const newDate = e.target.value;
    setDate(newDate);
    dispatch({ type: "UPDATE_TIMES", payload: newDate });
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = { date, time, guests, occasion };
    submitForm(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <section className="booking-form">
        <label htmlFor="res-date">Choose date</label>
        <input
          type="date"
          id="res-date"
          value={date}
          onChange={handleDateChange}
          aria-labelledby="res-date"
          required
        />

        <label htmlFor="res-time">Choose time</label>
        <select
          id="res-time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
          aria-labelledby="res-time"
          required
        >
          <option value="">Select time</option>
          {availableTimes.length > 0 ? (
            availableTimes.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))
          ) : (
            <option value="">No available times</option>
          )}
        </select>
        <label htmlFor="guests">Number of guests</label>
        <input
          type="number"
          id="guests"
          value={guests}
          onChange={(e) => setGuests(e.target.value)}
          min="1"
          max="10"
          aria-labelledby="guests"
          required
        />

        <label htmlFor="occasion">Occasion</label>
        <select
          id="occasion"
          value={occasion}
          onChange={(e) => setOccasion(e.target.value)}
          aria-labelledby="occasion"
          required
        >
          <option value="">Select occasion</option>
          <option>Birthday</option>
          <option>Anniversary</option>
        </select>

        {/* Disable submit button if form is not valid */}
        <button
          aria-label="Booking table button"
          type="submit"
          disabled={!isFormValid}
        >
          Make Your Reservation
        </button>
      </section>
    </form>
  );
};

export default BookingForm;
