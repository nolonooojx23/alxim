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
import { useFetch } from "../useFetch";

function Carousels({ carousel }) {
  const { t, i18n } = useTranslation();
  const {data} = useFetch('https://alximik.pythonanywhere.com/admin/partners/partner')

  console.log(data);
  return (
    <>
      <div className="container">
        <Swiper
          modules={[Autoplay, Pagination, Scrollbar]}
          spaceBetween={50}
          slidesPerView={1}
          pagination={{ clickable: true }}
          onSwiper={(swiper) => swiper}
          onSlideChange={() => "slide change"}
          className="swiper"
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          speed={1000}
        >
          {carousel?.map((item) => (
            <SwiperSlide className="slide" key={item.id}>
              <div className="custom_card">
                <div className="custom_card__title">
                  <h1 className="custom_h1">{item.name}</h1>
                  <div className="card__image_sect media_show cover_rasm">
                    <img
                      src={`https://alximik.pythonanywhere.com/${item.photo}`}
                      alt="rasm"
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
                  <div className="btn-home-carousel">
                    <NavLink to={`/tavsiya/${item.id}`}>
                      <button className="btn_slide btn_asosiy">{t("btn")}</button>
                    </NavLink>
                  </div>
                </div>
                <div className="desktop_show">
                  <img src={`https://alximik.pythonanywhere.com/${item.photo}`} alt="" className="desktop_image " />
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
