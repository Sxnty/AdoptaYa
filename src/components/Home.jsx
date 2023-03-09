import React from "react";
import { TbDog, TbCat, TbGridDots } from "react-icons/tb";
import { GiHummingbird } from "react-icons/gi";
import "../styles/home.scss";
import ShelterCard from "./ShelterCard";
import { AnimalsContext } from "../context/Animals";
import { useState, useContext } from "react";

function Home() {
  const [dataFiltered, setDataFiltered] = useState(null);

  const {animals} = useContext(AnimalsContext)
  console.log(animals)


  return (
    <>
      {dataFiltered === null ? (
        <main className="hero">
          <h1>Buscar una mascota.</h1>
          <form className="hero__form">
            <input type="text" placeholder="Buscar" />
            <div className="form__filters">
              <div className="filter__dog">
                <TbDog />
                <p>Perros</p>
              </div>
              <div className="filter__cats">
                <TbCat />
                <p>Gatos</p>
              </div>
              <div className="filter__birds">
                <GiHummingbird />
                <p>Aves</p>
              </div>
              <div className="filter__others">
                <TbGridDots />
                <p>Otros</p>
              </div>
            </div>
          </form>
          <section className="shelters">
            <ShelterCard />
            <ShelterCard />
          </section>
        </main>
      ) : null}
    </>
  );
}
export default Home;
