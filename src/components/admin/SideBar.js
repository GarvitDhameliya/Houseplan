import React, { useState } from "react";
import { NavLink } from "react-router-dom";

export const allRoute = [
  { route: "/", navlink: "home" },
  { route: "/category", navlink: "category" },
  { route: "/subcategory", navlink: "sub category" },
];
const SideBar = () => {
  const [toggle, setToggle] = useState(true);

  return (
    <nav className={toggle ? "sidebar" : "sidebar close"}>
      <header>
        <div className="image-text">
          <span className="image">
            <img src="logo.png" />
          </span>
          <div className="text logo-text">
            <span className="name">House Plan</span>
            <span className="profession">solution </span>
          </div>
        </div>
        <i
          className="bx bx-chevron-right toggle"
          onClick={() => (toggle ? setToggle(false) : setToggle(true))}
        />
      </header>
      <div className="menu-bar">
        <div className="menu">
        <ul>
          <li className="search-box">
            <i className="bx bx-search icon" />
            <input type="text" placeholder="Search Ganes..." />
          </li>
        </ul>
          <ul className="menu-links">
            {allRoute.map((val,ind) => (
              <li key={`navlink${ind}`}>
                <NavLink to={val.route} className='nav-link ps-2' >{val.navlink} </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default SideBar;
