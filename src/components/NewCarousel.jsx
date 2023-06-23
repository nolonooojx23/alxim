import React from "react";
import "./Carousels.css";
import { useTranslation } from "react-i18next";
// import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination, Scrollbar } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { NavLink } from "react-router-dom";

function Carousels({ carousel }) {
  const { t, i18n } = useTranslation();

  return (
    <>
      <div className="container">
        <Swiper
          modules={[Pagination, Scrollbar, Autoplay, Navigation]}
          spaceBetween={100}
          slidesPerView={1}
          pagination={{ clickable: true }}
          onSwiper={(swiper) => swiper}
          allowSlideNext={true}
          allowSlidePrev={true}
          onSlideChange={() => "slide change"}
          className="swiper swiper__button_none"
          navigation={true}
          autoplay={true}
          // onAutoplayPause={{ Carousels: true }}
          speed={1200}
        >
          {carousel?.map((item) => (
            <SwiperSlide className="slide">
              <div className="custom_card">
                <div className="custom_card__title">
                  <h1 className="custom_h1">{item.name}</h1>
                  <div className="card__image_sect media_show">
                    <img
                      src={`https://alximik.pythonanywhere.com/${item.photo}`}
                      alt=""
                      className="custom_card_img"
                    />
                  </div>
                  <p className="custom_p">
                    {i18n.language === "uz"
                      ? item.about_uz.slice(0, 150)
                      : i18n.language === "ru"
                      ? item.about_ru.slice(0, 150)
                      : item.about_eng.slice(0, 150)}
                    ...
                  </p>
                  <NavLink to={`/tavsiya/${item.id}`}>
                    <button className="btn_slide btn_asosiy">{t("btn")}</button>
                  </NavLink>
                </div>
                <div className="desktop_show">
                  <img
                    src={`https://alximik.pythonanywhere.com/${item.photo}`}
                    alt=""
                    className="desktop_show"
                  />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
}

export default Carousels;
