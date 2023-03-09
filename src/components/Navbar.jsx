import React from "react";
import '../styles/navbar.css'
import { HiBars3BottomLeft } from "react-icons/hi2";

function Navbar() {
  return (
    <header className="header">
      <HiBars3BottomLeft />
      <img
        src="https://cdn.discordapp.com/attachments/576208504226971648/1083281685057122365/186313.png"
        alt=""
      />
    </header>
  );
}

export default Navbar;
