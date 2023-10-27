import React from "react";

const CardVamosJogar = (pathImage, title, paragraph) => {
  return (
    <div className="max-w-lg flex flex-col gap-5">
      <div className="flex gap-5">
        <div>
          <img src={pathImage} alt="Vamos Jogar?" />
        </div>
        <span className="text-2xl font-extrabold text-mOrange">
          {title}
        </span>
      </div>
      <p className="text-2xl font-medium text-mPurple">
        {paragraph}
      </p>
    </div>
  );
};

export default CardVamosJogar;
