import React from "react";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import Home from "./components/Home";
import Footer from "./components/Footer";
import { AnimalProvider } from "./context/Animals";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Shelters from "./components/Shelters";



function App() {
  return (
    <>
      <BrowserRouter>
        <AnimalProvider>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shelters" element={<Shelters />} />
          </Routes>
          <Footer />
        </AnimalProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
