import React, { useState } from "react";
import "./Navbar.css"; // Importing the CSS for the navbar
import { RiHome9Fill } from "react-icons/ri";
import { GiCoffeeBeans } from "react-icons/gi";
import { IoReorderThree } from "react-icons/io5";
import { NavLink } from "react-router"; // Correct import for routing

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false); // State for toggling menu visibility

  // Function to toggle the menu
  const toggleMenu = () => {
    setMenuOpen(prevState => !prevState);
  };

  return (
    <nav>
      <h1>
        <GiCoffeeBeans />
        COFFEE
      </h1>
      {/* The <ul> list has a conditional class based on menuOpen */}
      <ul className={menuOpen ? "menu-open" : ""}>
        <li><NavLink className="nvai" to="/">Home</NavLink></li>
        <li><NavLink className="nvai" to="/Coffee">Coffee</NavLink></li>
        <li><NavLink className="nvai" to="/Blogs">Blogs</NavLink></li>
        <li><NavLink className="nvai" to="/Contact">Contact</NavLink></li>
      </ul>
      {/* Home Icon */}
      <div className="font">
        <RiHome9Fill />
      </div>
      {/* Hamburger Icon - Triggers the toggleMenu function */}
      <div className="fonts" onClick={toggleMenu}>
        <IoReorderThree />
      </div>
    </nav>
  );
};
