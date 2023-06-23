import React from "react";
import { Carousel } from "3d-react-carousal";
import pics from "/assets/imgs/Desktop-White-People-Based-Marketing.jpg";
import "./Marketing.css";
import { useFetch } from "../useFetch";

import { useTranslation } from "react-i18next";
function Marketing({ work }) {
  const { data } = useFetch("https://alximik.pythonanywhere.com/company/progress/");
  const { t, i18n } = useTranslation();
  let slides = data?.map((item) => (
    <>
      <div className="custom_slide">
        <img src={item.photo} alt="" style={{ objectFit: "cover", width: "1000vw" }} className="custom_slide_img" />
      </div>
      <div className="carousel_title" style={{ display: "block", position: "absolute", bottom: "-221px" }}>
        <h1>{i18n.language == "uz" ? item.title_uz : i18n.language == "ru" ? item.title_ru : item.title_eng}</h1>
        <p>
          {i18n.language == "uz" ? item.about_uz : i18n.language == "ru" ? item.about_ru : item.about_eng}
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia placeat voluptate, consequuntur iure non
          sed quas neque vel delectus! Dignissimos maxime cupiditate nobis sed expedita deleniti nihil odit soluta aut.
        </p>
      </div>
    </>
  ));

  return (
    <>
      <div className="catalogs ">
        {data?.slice(0, 1).map((item) => (
          <div className="ccc">
            <h1 className="catalog_h1">
              {i18n.language == "uz" ? item.title_uz : i18n.language == "ru" ? item.title_ru : item.title_eng}
            </h1>
            <div className="Carousel">
              <Carousel slides={slides} autoplay={true} interval={4000} arrows={false} />
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Marketing;
