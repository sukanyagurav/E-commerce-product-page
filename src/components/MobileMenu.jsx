import React, { useState } from "react";
import hamburger from "/images/icon-menu.svg";
import closeMenu from "/images/icon-close.svg";
import NavLinks from "./NavLinks";
const MobileMenu = () => {
  const [open, setIsOpen] = useState(false);

  return (
    <div className="relative mr-4 md:hidden">
      <button
        className="flex items-center"
        onClick={() => setIsOpen((open) => !open)}
      >
        <img src={hamburger} alt="hamburger menu" className="h-[20px]" />
      </button>
      {open && (
        <>
          <div
            className=" md:hidden w-full h-full bg-[rgba(0,0,0,0.7)] fixed top-0 left-0 z-20"
            onClick={() => setIsOpen(false)}
          ></div>
          <nav className={`fixed  pt-10 p-4  bg-white h-screen top-0 left-0 bottom-0 z-50 w-[300px] ${open && 'animate-[show_0.3s_ease-in]' }`}>
            <button
              className="flex items-center"
              onClick={() => setIsOpen(false)}
            >
              <img src={closeMenu} alt="close menu" className="h-[20px]" />
            </button>

           <NavLinks/>
          </nav>
        </>
      )}
    </div>
  );
};

export default MobileMenu;
