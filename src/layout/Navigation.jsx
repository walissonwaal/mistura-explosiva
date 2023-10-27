import React, { useState, useEffect } from "react";
import { Link as ScrollLink } from "react-scroll";
import LogoAzul from "../assets/imgs/logo.png";
import LogoBranca from "../assets/imgs/logo-branca.png";

function Navigation() {
  const [navbarClass, setNavbarClass] = useState("");
  const [activeMenuItem, setActiveMenuItem] = useState(null);

  const handleMenuItemClick = (menuItemId) => {
    setActiveMenuItem(menuItemId);
  };

  const handleScroll = () => {
    if (window.scrollY > 100) {
      setNavbarClass("navbar scrolled shadow-md");
    } else {
      setNavbarClass("navbar");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <nav className={`${navbarClass} z-30 hidden md:block`}>
        <div className="h-full flex justify-between items-center px-24">
          <div className="w-40">
            <img
              src={!navbarClass ? LogoAzul : LogoBranca}
              alt="Mistura Explosivav"
            />
          </div>
          <ul className="flex md:gap-10 font-bold text-sm lg:text-md">
            <li className="cursor-pointer hover:text-mOrange duration-300 focus:text-mOrange">
              <ScrollLink to="inicio" smooth={true} offset={-50}>
                <h2>Início</h2>
              </ScrollLink>
            </li>
            <li className="cursor-pointer hover:text-mOrange duration-300 focus:text-mOrange">
              <ScrollLink to="jogo" smooth={true} offset={-50}>
                <h2>Jogo</h2>
              </ScrollLink>
            </li>
            <li className="cursor-pointer hover:text-mOrange duration-300 focus:text-mOrange">
              <ScrollLink to="personagens" smooth={true} offset={-50}>
                <h2>Personagens</h2>
              </ScrollLink>
            </li>
            <li className="cursor-pointer hover:text-mOrange duration-300 focus:text-mOrange">
              <ScrollLink to="regras" smooth={true} offset={-50}>
                <h2>Regras</h2>
              </ScrollLink>
            </li>
            <li className="cursor-pointer hover:text-mOrange duration-300 focus:text-mOrange">
              <ScrollLink to="vamos-jogar" smooth={true} offset={-50}>
                <h2>Vamos jogar?</h2>
              </ScrollLink>
            </li>
            <li className="cursor-pointer hover:text-mOrange duration-300 focus:text-mOrange">
              <ScrollLink to="campanha" smooth={true} offset={-50}>
                <h2>Campanha</h2>
              </ScrollLink>
            </li>
            <li className="cursor-pointer hover:text-mOrange duration-300 focus:text-mOrange">
              <ScrollLink to="na-midia" smooth={true} offset={-50}>
                <h2>Na mídia</h2>
              </ScrollLink>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navigation;
