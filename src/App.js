import "./App.css";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Homepage from "./components/Homepage";
import Footer from "./components/Footer";
import RoutesConfig from "./components/RouterConfig";
import React from "react";

function App() {
  return (
    <>
      <div className="App">
        <Header />
        <RoutesConfig />
        <Footer />

      </div>
    </>
  );
}

export default App;
