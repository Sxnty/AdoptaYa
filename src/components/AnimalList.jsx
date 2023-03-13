import React from "react";
import "../styles/animalCards.scss";
function AnimalList(dataFiltered) {

  return (
    <>
      <section className="animal__list">
        {dataFiltered.animals.map((e) => {
          return (
            <div className="animal__card" key={e.name}>
              <img src={e.img} alt="dog" />
              <div className="card__info">
                <h2>{e.name}</h2>
                <p>{e.shelter}</p>
              </div>
            </div>
          );
        })}
      </section>
    </>
  );
}

export default AnimalList;
