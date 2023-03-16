import React from "react";
import ShelterCard from "./ShelterCard";
function Shelters() {

  return (
    <>
      <section className="shelters">
        <div className="shelter__title">
            <h2>Refugios Verificados</h2>
            <p>Lista de refugios verificados por Adopta<span>YA!</span></p>
        </div>
        <ShelterCard />
        <ShelterCard />
      </section>
    </>
  );
}

export default Shelters;
