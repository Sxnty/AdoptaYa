import React, { createContext, useEffect, useState } from "react";
import { getAnimals } from "../firestore_api";
export const AnimalsContext = createContext();
export const AnimalProvider = ({ children }) => {
  const [animals, setAnimals] = useState([]);
  useEffect(() => {
    const prueba = async () => {
      let result = await getAnimals()
      setAnimals(result)
    }
    prueba()
  }, []);

  return (
    <AnimalsContext.Provider value={{ setAnimals, animals }}>
      {children}
    </AnimalsContext.Provider>
  );
};
