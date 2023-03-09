import React from "react";
import "../styles/sheltercard.scss";
import { TbDog, TbCat } from "react-icons/tb";
function ShelterCard() {
  return (
    <section className="shelter__card">
      <div className="card__info">
        <h2>Nombre del refugio</h2>
        <p>Lorem ipsum dolor sit amet.</p>
        <div className="card__animals">
          <TbDog />
          <TbCat />
        </div>
      </div>
      <img
        src="https://cdn.discordapp.com/attachments/576208504226971648/1083295245728481350/20220521_112004.png"
        alt=""
      />
    </section>
  );
}

export default ShelterCard;
