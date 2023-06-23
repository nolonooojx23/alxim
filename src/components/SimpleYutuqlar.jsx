import React from "react";
import { useParams } from "react-router-dom";
import { useFetch } from "../useFetch";
import { useTranslation } from "react-i18next";
import './SimpleYutuqlar.css';

function SimpleYutuqlar() {
  const { id } = useParams();
  const { data } = useFetch("https://alximik.pythonanywhere.com/company/achievement/");
  const { t, i18n } = useTranslation();

  return (
    <div className="container">
      <div className="custom_content">
      {data?.map((item) => {
        if (item.id == id) {
          return (
            <div className="custom_new_card">
              <div className="custom_card_img">
                <img src={item.photo} alt="" />
              </div>
              <div className="custom_card_title">
              <h4>
                {i18n.language === "en"
                  ? item.title_eng
                  : i18n.language === "uz"
                  ? item.title_uz
                  : item.title_ru}
              </h4>
              <p>
              {i18n.language === "en"
                  ? item.about_eng
                  : i18n.language === "uz"
                  ? item.about_uz
                  : item.about_ru}
              </p>
              </div>
            </div>
          );
        }
      })}
      </div>
    </div>
  );
}

export default SimpleYutuqlar;
