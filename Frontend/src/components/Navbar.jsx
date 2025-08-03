import React from "react";
import { Link } from "react-router";
const Navbar = () => {
  return (
    <div className="">
      <Link to={"/"}>Home</Link>

      <Link to={"/about"}>About</Link>

      <Link to={"/contact"}>Contact</Link>

      <Link to={"/subject/createSubject"}>Create Subject</Link>

      <Link to={"/admin/register"}>Admin register</Link>
    </div>
  );
};

export default Navbar;
