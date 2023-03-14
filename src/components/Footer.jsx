import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineHome, AiOutlineMessage } from "react-icons/ai";
import { IoPersonOutline } from "react-icons/io5";
import { MdOutlineVerified } from "react-icons/md";

import "../styles/footer.scss";

function Footer() {
  return (
    <footer className="footer">
      <Link to="/">
        <AiOutlineHome className="active" />
      </Link>
      <Link to="/shelters">
        <MdOutlineVerified />
      </Link>
      <Link>
        <AiOutlineMessage />
      </Link>
      <Link>
        <IoPersonOutline />
      </Link>
    </footer>
  );
}

export default Footer;
