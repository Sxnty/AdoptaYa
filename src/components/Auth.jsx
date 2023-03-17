import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

function Auth() {
  const { userLoged } = useContext(AuthContext);

  if (!userLoged) {
    console.log('no logeado, redireccionando a login')
    return <Navigate to="/login" />;  }
  return <>{children}</>;
}

export default Auth;
