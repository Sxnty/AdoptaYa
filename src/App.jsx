import React from "react";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import Home from "./components/Home";
import Footer from "./components/Footer";
import { AnimalProvider } from "./context/Animals";
function App() {
  return (
    <>
      <AnimalProvider>
        <Navbar />
        <Home />
        <Footer />
      </AnimalProvider>
    </>
  );
}

export default App;
