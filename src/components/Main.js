import React, { useReducer } from "react";
import { useNavigate } from "react-router-dom";
import BookingForm from "./BookingForm";

const initializeTimes = (date) => {
  return window.fetchAPI(date);
};

const updateTimes = (state, action) => {
  switch (action.type) {
    case "UPDATE_TIMES":
      const selectedDate = new Date(action.payload);
      return window.fetchAPI(selectedDate);

    default:
      return state;
  }
};

const Main = () => {
  const navigate = useNavigate()
  const today = new Date();
  const [availableTimes, dispatch] = useReducer(updateTimes, today, initializeTimes);

  const submitForm = (formData) => {
    const response = window.submitAPI(formData);
    if (response) {
      navigate("/confirmed");
    } else {
      alert("Booking submission failed. Please try again.");
    }
  };

  return (
    <main>
      <BookingForm
        availableTimes={availableTimes}
        dispatch={dispatch}
        submitForm={submitForm}
      />
    </main>
  );
};

export default Main;
