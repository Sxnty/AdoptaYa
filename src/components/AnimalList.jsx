import React from "react";
import "../styles/animalCards.scss";
function AnimalList(dataFiltered) {
  console.log(dataFiltered);

  return (
    <>
      <section className="animal__list">
        {dataFiltered.animals.map((e) => {
          console.log(e.img);
          return (
            <div className="animal__card">
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
