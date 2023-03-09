import React from "react";
import { TbDog, TbCat, TbGridDots } from "react-icons/tb";
import { GiHummingbird } from "react-icons/gi";
import "../styles/home.scss";
import ShelterCard from "./ShelterCard";
import { AnimalsContext } from "../context/Animals";
import AnimalList from "./AnimalList";
import { useState, useContext } from "react";

function Home() {
  const [dataFiltered, setDataFiltered] = useState([]);
  const { animals } = useContext(AnimalsContext);
  const filterAnimals = (animalType) => {
    const newData = animals.filter((e) => e.animal === animalType);
    setDataFiltered([...dataFiltered, ...newData]);
  };

  return (
    <>
      <main className="hero">
        <h1>Buscar una mascota.</h1>
        <form className="hero__form">
          <input type="text" placeholder="Buscar" />
          <div className="form__filters">
            <div className="filter__dog">
              <TbDog
                onClick={() => {
                  filterAnimals("dog");
                }}
              />
              <p>Perros</p>
            </div>
            <div className="filter__cats">
              <TbCat
                onClick={() => {
                  filterAnimals("cat");
                }}
              />
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
        {dataFiltered.length === 0 ? (
          <section className="shelters">
            <ShelterCard />
            <ShelterCard />
          </section>
        ) : (
          <AnimalList animals={dataFiltered}/>
        )}
      </main>
    </>
  );
}
export default Home;
