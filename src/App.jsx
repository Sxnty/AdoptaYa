import React from "react";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import Home from "./components/Home";
import Footer from "./components/Footer";
import { AnimalProvider } from "./context/Animals";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Shelters from "./components/Shelters";
import { addPet } from "./firestore_api";
function App() {
  let url =
    "https://cdn.discordapp.com/attachments/576208504226971648/1083411415781625947/english-dog-breeds-4788340-hero-14a64cf053ca40f78e5bd078b052d97f.png";
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
