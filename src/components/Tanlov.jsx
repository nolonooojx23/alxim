import React from "react";
import { useTranslation } from "react-i18next";

function Tanlov() {
  const { t, i18n } = useTranslation();
  const arrChoise = [
    {
      name: t("tanlov.1"),
      img: "/assets/icons/missiya.png",
      description: t("tanlov.2"),
    },
    {
      name: t("tanlov.3"),
      img: "/assets/icons/sifat.png",
      description: t("tanlov.4"),
    },
    {
      name: t("tanlov.5"),
      img: "/assets/icons/zamonaviylik.png",
      description: t("tanlov.6"),
    },
    {
      name: t("tanlov.7"),
      img: "/assets/icons/ishonch.png",      
      description: t("tanlov.8"),
    },
  ];

  return (
    <div className="tanlov__container">
      {arrChoise.map((item, idx) => {
        return (
          <div key={idx} class="card">
            <div className="card__image">
              <img src={item.img} alt="missiya__img" />
            </div>
            <div class="first-content">
              <span>{item.name}</span>
            </div>
            <div class="second-content">
              <span>{item.description.substr(0, 469)}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Tanlov;
