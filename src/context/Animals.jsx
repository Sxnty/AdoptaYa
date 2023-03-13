import React, { createContext, useEffect, useState } from "react";

export const AnimalsContext = createContext();
export const AnimalProvider = ({ children }) => {
  const [animals, setAnimals] = useState([]);

  useEffect(() => {
    const data = [
      {
        name: "ted",
        animal: "dog",
        img: "https://cdn.discordapp.com/attachments/576208504226971648/1083411415781625947/english-dog-breeds-4788340-hero-14a64cf053ca40f78e5bd078b052d97f.png",
        shelter: "Nombre del refugio",
      },
      {
        name: "apolo",
        animal: "dog",
        img: "https://media.discordapp.net/attachments/576208504226971648/1083411416557559898/640px-YellowLabradorLooking.png",
        shelter: "Nombre del refugio",
      },
      {
        name: "lola",
        animal: "dog",
        img: "https://cdn.britannica.com/16/234216-050-C66F8665/beagle-hound-dog.jpg",
        shelter: "Nombre del refugio",
      },
      {
        name: "kitty",
        animal: "cat",
        img: "http://www.alleycat.org/wp-content/uploads/2019/03/FELV-cat.jpg",
        shelter: "Nombre del refugio",
      },
      {
        name: "botas",
        animal: "cat",
        img: "https://upload.wikimedia.org/wikipedia/commons/4/4d/Cat_November_2010-1a.jpg",
        shelter: "Nombre del refugio",
      },
      {
        name: "garfield",
        animal: "cat",
        img: "https://www.thesprucepets.com/thmb/XMb-I4hzef2SyFGabzAPi0WnUJ0=/3000x0/filters:no_upscale():strip_icc()/smartest-cat-breeds-4589754-hero-e192f849d9f1442481c47c932cd36aa8.jpg",
        shelter: "Nombre del refugio",
      },
    ];
    setAnimals(data);
  }, []);

  return (
    <AnimalsContext.Provider value={{ setAnimals, animals }}>
      {children}
    </AnimalsContext.Provider>
  );
};
