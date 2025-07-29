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
      <Link to={"/user"} style={cssStyle}>
        Users
      </Link>

      <Link to={"/teacher/createTeacher"} style={cssStyle}>
        Create Teacher
      </Link>

      <Link to={"/subject/createSubject"} style={cssStyle}>
        Create Subject
      </Link>
    </>
  );
};

export default Navbar;
