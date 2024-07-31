import React from "react";
import { Link, NavLink } from "react-router-dom";
import Portfolio from "./../Portfolio/Portfolio";
import Contact from "./../Contact/Contact";
import logo from "../../../public/s.png";

export default function Navbar() {
  return (
    <>
      <div className="top-0 left-0 right-0 navBg bg-opacity-80 flex fixed">
        <div className="p-2 flex items-center">
          <img src={logo} className="w-14 p-3" alt="" />
          <h1 className="text-white font-extrabold text-3xl">
            <NavLink> Start Framework</NavLink>
          </h1>
        </div>
        <ul className="ms-auto flex pe-10 items-center ">
          <li className="text-white text-lg font-bold">
            <NavLink className="p-2 capitalize" to="about">
              About
            </NavLink>
          </li>
          <li className="text-white text-lg font-bold">
            <NavLink className="p-2 capitalize" to="portfolio">
              Portfolio
            </NavLink>
          </li>
          <li className="text-white text-lg font-bold">
            <NavLink className="p-2 capitalize " to="contact">
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
    </>
  );
}
