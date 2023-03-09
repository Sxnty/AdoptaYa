import React from "react";
import { AiOutlineHome, AiOutlineMessage } from "react-icons/ai";
import { IoNotificationsOutline, IoPersonOutline } from "react-icons/io5";
import "../styles/footer.scss";

function Footer() {
  return (
    <footer className="footer">
      <AiOutlineHome className="active" />
      <AiOutlineMessage />
      <IoNotificationsOutline />
      <IoPersonOutline />
    </footer>
  );
}

export default Footer;
