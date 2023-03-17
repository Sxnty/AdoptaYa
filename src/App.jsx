import React from "react";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import Home from "./components/Home";
import Footer from "./components/Footer";
import { AnimalProvider } from "./context/Animals";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Shelters from "./components/Shelters";
import { AuthProvider } from "./context/AuthContext";
import Auth from "./components/Auth";

function App() {
  return (
    <>
      <BrowserRouter>
        <AuthProvider>
          <AnimalProvider>
            <Routes>
              <Route path="/login" element={<Login />} />
            </Routes>
            <Routes>
              <Route
                path="/"
                element={
                  <Auth>
                    <Navbar />
                    <Home />
                    <Footer />
                  </Auth>
                }
              />
              <Route
                path="/shelters"
                element={
                  <Auth>
                    <Navbar />
                    <Shelters />
                    <Footer />
                  </Auth>
                }
              />
            </Routes>
          </AnimalProvider>
        </AuthProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
