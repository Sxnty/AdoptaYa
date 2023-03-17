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
            <Navbar />
            <Routes>
              <Route
                path="/"
                element={
                  <Auth>
                    <Home />
                  </Auth>
                }
              />
              <Route
                path="/shelters"
                element={
                  <Auth>
                    <Shelters />
                  </Auth>
                }
              />
              <Route path="/login" element={<Login />} />
            </Routes>
            <Footer />
          </AnimalProvider>
        </AuthProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
