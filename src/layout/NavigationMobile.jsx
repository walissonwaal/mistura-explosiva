import React, { useState } from "react";
import LogoBranca from "../assets/imgs/logo.png";
import { Link as ScrollLink } from "react-scroll";

const NavigationMobile = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <div className="md:hidden mobile-menu">
      <div className="flex justify-between px-10 py-3" onClick={toggleMenu}>
        <img className="w-20" src={LogoBranca} alt="" />
        <i className="text-2xl fa-solid fa-bars"></i>
      </div>

      {isOpen && (
        <div className="dropdown-mobile py-3">
          <ul className="select-none bg-white flex flex-col items-center gap-3 font-bold md:text-sm lg:text-lg">
            <li className="cursor-pointer hover:text-mOrange duration-300 focus:text-mOrange">
              <ScrollLink to="inicio" smooth={true} offset={-50} onClick={closeMenu}>
                <h2>Início</h2>
              </ScrollLink>
            </li>
            <li className="cursor-pointer hover:text-mOrange duration-300 focus:text-mOrange">
              <ScrollLink to="jogo" smooth={true} offset={-50} onClick={closeMenu}>
                <h2>Jogo</h2>
              </ScrollLink>
            </li>
            <li className="cursor-pointer hover:text-mOrange duration-300 focus:text-mOrange">
              <ScrollLink to="personagens" smooth={true} offset={-50} onClick={closeMenu}>
                <h2>Personagens</h2>
              </ScrollLink>
            </li>
            <li className="cursor-pointer hover:text-mOrange duration-300 focus:text-mOrange">
              <ScrollLink to="regras" smooth={true} offset={-50} onClick={closeMenu}>
                <h2>Regras</h2>
              </ScrollLink>
            </li>
            <li className="cursor-pointer hover:text-mOrange duration-300 focus:text-mOrange">
              <ScrollLink to="vamos-jogar" smooth={true} offset={-50} onClick={closeMenu}>
                <h2>Vamos jogar?</h2>
              </ScrollLink>
            </li>
            <li className="cursor-pointer hover:text-mOrange duration-300 focus:text-mOrange">
              <ScrollLink to="campanha" smooth={true} offset={-50} onClick={closeMenu}>
                <h2>Campanha</h2>
              </ScrollLink>
            </li>
            <li className="cursor-pointer hover:text-mOrange duration-300 focus:text-mOrange">
              <ScrollLink to="na-midia" smooth={true} offset={-50} onClick={closeMenu}>
                <h2>Na mídia</h2>
              </ScrollLink>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default NavigationMobile;
