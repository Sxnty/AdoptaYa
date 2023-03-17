import React, { useContext } from "react";
import { AiOutlineGoogle } from "react-icons/ai";
import { useNavigate, Navigate } from "react-router-dom";

import { AuthContext } from "../context/AuthContext";
import '../styles/login.scss'

function Login() {
  const { loginWithGoogle, userLoged } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    await loginWithGoogle();
    navigate('/')
  };

  return (
    <>
      <main className="hero__login">
        <section className="login__top">
          <div className="top__text">
            <h1>
              Adopta <span>Ya!</span>
            </h1>
            <p>No compres, adopta.</p>
          </div>
          <img
            src="https://cdn.discordapp.com/attachments/642749336903614465/1086288255865069669/252-2527795_artculos-para-mascotas-dog-and-cat-happy.png"
            alt="dog"
          />
        </section>
        <section className="login__form">
          <form>
            <h1>Iniciar Sesion</h1>
            <button onClick={handleLogin}>
              <AiOutlineGoogle />
              Iniciar sesion con Google
            </button>
          </form>
        </section>
      </main>
    </>
  );
}

export default Login;
