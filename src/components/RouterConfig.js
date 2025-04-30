import React from "react";
import { Routes, Route } from "react-router-dom";
import About from "./About";
import Homepage from "./Homepage";
import BookingPage from "./BookingPage";
import Specials from "./Specials";
import Services from "./Services";
import ConfirmedBooking from "./ConfirmedBooking";
import AboutUs from "./About";


const RoutesConfig = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/about" element={<About />} />
      <Route path="/services" element={<Services />} />
      <Route path="/bookingpage" element={<BookingPage />} />
      <Route path="/specials" element={<Specials />} />
      <Route path="/aboutus" element={<AboutUs />} />
      <Route path="/confirmed" element={<ConfirmedBooking />} />
    </Routes>
  );
};

export default RoutesConfig;
