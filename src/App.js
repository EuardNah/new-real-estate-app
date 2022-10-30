import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero"
import Best from "./components/Best/Best";
import Featured from "./components/Featured/Featured";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
        <Navbar/>
        <Hero/>
        <Best/>
        <Featured/>
        <Footer/>
    </>
  );
}

export default App;
