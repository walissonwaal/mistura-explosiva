import React from "react";

const ButtonCampanha = ({ children, href, target}) => {
  return (
    <a href={href} target={target} className="shadow-md px-20 2xl:px-28 py-2 rounded-xl bg-mOrange text-white text-xl font-black hover:bg-[#ccc] duration-300">
      {children}
    </a>
  );
};

export default ButtonCampanha;
