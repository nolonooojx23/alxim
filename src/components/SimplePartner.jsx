import React from "react";
import { useParams } from "react-router-dom";
import { useFetch } from "../useFetch";
import "./SimplePartner.css";
import { useTranslation } from "react-i18next";
import Rasm from '../assets/Rasm.png'


function SimplePartner() {
  const { id } = useParams();
  const { data } = useFetch("https://alximik.pythonanywhere.com/partner/type/");
  const { t, i18n } = useTranslation();

  return (
    <div className="container">
      {data?.map((item) => {
        if (item.id == id) {
          return (
            <div className="partner_content">
              <div className="partner_title">
                <h1>Qanday qilib Al-ximik hamkor bo’lish mumkin?</h1>
                <p className="media_none">
                  {/* {i18n.language === "uz"
                    ? item.about_uz
                    : i18n.language === "ru"
                    ? item.about_ru
                    : item.about_eng} */}
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo aliquid maiores animi ut, ipsam velit quae laudantium suscipit expedita, perspiciatis reiciendis iusto, reprehenderit ipsum a cupiditate dicta accusantium? Laborum doloribus et modi, id sapiente explicabo necessitatibus veritatis incidunt quidem dolorum?
                </p>
              </div>
              <div className="partner_image">
                <img src={Rasm} alt="" />
              </div>
            </div>
          );
        }
      })}
    </div>
  );
}

export default SimplePartner;
