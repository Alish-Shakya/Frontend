import React from "react";
import { Link } from "react-router";
const Navbar = () => {
  return (
    <div className="">
      <Link to={"/"}>Home</Link>

      <Link to={"/about"}>About</Link>

      <Link to={"/contact"}>Contact</Link>

      <Link to={"/admin/register"}>Admin register</Link>

      <Link to={"/admin/login"}> Admin login</Link>

      <Link to={"/admin/my-profile"}>My Profile</Link>

      <Link to={"/admin/logout"}>Logout</Link>
    </div>
  );
};

export default Navbar;
