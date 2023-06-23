import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";
import "./Job.css";
// import required modules
import { EffectCards } from "swiper";
import { useTranslation } from "react-i18next";

export default function MediaJob({ data }) {
  const { i18n } = useTranslation();
  return (
    <>
      <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper"
      >
        {data?.map((item) => (
          <SwiperSlide>
            <div className="Media_Swiper">
              <img src={item.photo} alt="" className="Media_Swiper_img" />
              <h1>{item.full_name}</h1>
              <h3>
                {i18n.language === "uz"
                  ? item.job_uz.toUpperCase()
                  : i18n.language === "ru"
                  ? item.job_ru.toUpperCase()
                  : item.job_eng.toUpperCase()}
              </h3>
              <p>
                {i18n.language === "uz"
                  ? item.about_uz
                  : i18n.language === "ru"
                  ? item.about_ru
                  : item.about_eng}
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
