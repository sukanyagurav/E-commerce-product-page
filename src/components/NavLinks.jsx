import React from "react";

const NavLinks = () => {
  return (
    <ul className="flex font-bold  flex-col gap-8 mt-10 px-4 md:items-center md:flex-row md:mt-0 md:px-0 md:font-normal">
      <li>
        <a href="#none" className="link relative">
          Collections
        </a>
      </li>
      <li>
        <a href="#none" className="link relative">
          Men
        </a>
      </li>
      <li>
        <a href="#none" className="link relative">
          Women
        </a>
      </li>
      <li>
        <a href="#none" className="link relative">
          About
        </a>
      </li>
      <li>
        <a href="#none" className="link relative">
          Contact
        </a>
      </li>
    </ul>
  );
};

export default NavLinks;
