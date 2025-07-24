import React from "react";
import { Link } from "react-router";
const Navbar = () => {
  let cssStyle = {
    marginRight: "10px",
  };
  return (
    <>
      <Link to={"/"} style={cssStyle}>
        Home
      </Link>
      <Link to={"/about"} style={cssStyle}>
        About
      </Link>
      <Link to={"/contact"} style={cssStyle}>
        Contact
      </Link>

      <Link to={"/user/create"} style={cssStyle}>
        Creat User
      </Link>
    </>
  );
};

export default Navbar;
