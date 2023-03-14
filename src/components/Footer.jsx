import React from "react";
import { Link, useLocation } from "react-router-dom";
import { AiOutlineHome, AiOutlineMessage } from "react-icons/ai";
import { IoPersonOutline } from "react-icons/io5";
import { MdOutlineVerified } from "react-icons/md";

import "../styles/footer.scss";

function Footer() {
  const { pathname } = useLocation();

  return (
    <footer className="footer">
      <Link to="/">
        <AiOutlineHome className={pathname === "/" ? "active" : null} />
      </Link>
      <Link to="/shelters">
        <MdOutlineVerified
          className={pathname === "/shelters" ? "active" : null}
        />
      </Link>
      <Link>
        <AiOutlineMessage
          className={pathname === "/messages" ? "active" : null}
        />
      </Link>
      <Link>
        <IoPersonOutline
          className={pathname === "/profile" ? "active" : null}
        />
      </Link>
    </footer>
  );
}

export default Footer;
