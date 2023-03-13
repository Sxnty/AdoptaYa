import React from "react";
import { TbDog, TbCat, TbGridDots } from "react-icons/tb";
import { GiHummingbird } from "react-icons/gi";
import "../styles/home.scss";
import ShelterCard from "./ShelterCard";
import { AnimalsContext } from "../context/Animals";
import AnimalList from "./AnimalList";
import { useState, useContext, useEffect } from "react";

function Home() {
  const { animals } = useContext(AnimalsContext);
  const [dataFiltered, setDataFiltered] = useState([]);
  const [fullData, setFullData] = useState([]);
  const [isChecked, setIsChecked] = useState({ name: "", checked: false });

  useEffect(() => {
    setDataFiltered(animals);
    setFullData(animals);
  }, [animals]);

  const nameFilter = (e) => {
    let animalName = e.target.value;

    if(!animalName.length && isChecked.checked) {
      // dame todo, filtrado por el tipo.
      console.log('Todo, filtrado por tipo');
      console.log(isChecked.name, 'type')
      typeFilter(isChecked.checked,isChecked.name);
    } else if (!animalName.length && !isChecked.checked) {
      console.log('Todo, sin filtado por tipo');
      setDataFiltered(fullData);
    } else {
      let dataFiltrada = dataFiltered.filter(data => data.name.toLowerCase().includes(animalName.toLowerCase()));
      console.log(dataFiltrada, 'data Filtrada');
      if(dataFiltrada.length) {
        setDataFiltered(dataFiltrada);
      }
    }
  };

  const typeFilter = (checked,animalType) => {
    if(checked) {
      let dataFiltrada = fullData.filter(
        (data) => data.animal.toLowerCase() === animalType.toLowerCase()
      );
      setIsChecked({ name: animalType, checked: true });
      setDataFiltered(dataFiltrada);
    } else {
      // quitar filtro
      setDataFiltered(fullData);
    }
   
  };

  return (
    <>
      <main className="hero">
        <h1>Buscar una mascota.</h1>
        <form className="hero__form">
          <input type="text" placeholder="Buscar" onChange={nameFilter} />
          <div className="form__filters">
            <label className="filter__checkbox">
              <input
                type="checkbox"
                className="checkbox__input"
                onClick={(e) => {
                  typeFilter(e.target.checked,"dog");
                }}
              />
              <span className="checkbox__icon">
                <TbDog />
                Perros
              </span>
            </label>
            <label className="filter__checkbox">
              <input type="checkbox" className="checkbox__input" onClick={(e) => {
                  typeFilter(e.target.checked,"cat");
                }}/>
              <span className="checkbox__icon">
                <TbCat />
                Gatos
              </span>
            </label>
            <label className="filter__checkbox">
              <input type="checkbox" className="checkbox__input" onClick={(e) => {
                  typeFilter(e.target.checked,"bird");
                }}/>
              <span className="checkbox__icon">
                <GiHummingbird />
                Aves
              </span>
            </label>
            <label className="filter__checkbox">
              <input type="checkbox" className="checkbox__input" />
              <span className="checkbox__icon">
                <TbGridDots />
                Otros
              </span>
            </label>
          </div>
        </form>
        {dataFiltered.length === 0 ? (
          <section className="shelters">
            <ShelterCard />
            <ShelterCard />
          </section>
        ) : (
          <AnimalList animals={dataFiltered} />
        )}
      </main>
    </>
  );
}
export default Home;
