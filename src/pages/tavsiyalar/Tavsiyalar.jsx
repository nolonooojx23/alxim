import React, { useState } from "react";
import "./Tavsiyalar.css";
import Videos from "../../components/Video";
import { useFetch } from "../../useFetch";
import { useTranslation } from "react-i18next";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination, Scrollbar } from "swiper";
import { useEffect } from "react";

function Tavsiyalar() {
  const [sid, setId] = useState(0);
  useEffect(() => {
    document.documentElement.scrollTop = 0;
  }, []);
  const { data } = useFetch(
    "https://alximik.pythonanywhere.com/main/all_info/"
  );
  const { t, i18n } = useTranslation();
  return (
    <div className="container">
      <div className="carousel">
        <Swiper
          modules={[Pagination, Scrollbar, Autoplay]}
          spaceBetween={50}
          slidesPerView={1}
          pagination={{ clickable: true }}
          onSwiper={(swiper) => swiper}
          onSlideChange={() => "slide change"}
          className="swiper"
          autoplay={{
            delay: 21000,
            disableOnInteraction: false,
          }}
        >
          {data?.advices?.map((item) => (
            <SwiperSlide className="slide">
              <div className="custom_card">
                <div className="custom_card__title">
                  <h1 className="custom_h1">{item.title_uz}</h1>
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
                  {/* <NavLink to='/#tavsiyalar_content'>
                  </NavLink> */}
                  <a href="#tavsiyalar_content">
                    <button
                      className="btn_slide btn_asosiy"
                      onClick={() => {
                        setId(item.id);
                      }}
                    >
                      {t("btn")}
                    </button>
                  </a>
                </div>
                <div className="card__image_sect desktop_show">
                  <img
                    src={`https://alximik.pythonanywhere.com/${item.photo}`}
                    alt=""
                    className="desktop_image "
                  />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div id="tavsiyalar_content"></div>
        <div></div>
        <div></div>
      </div>
      <div className="container">
        {data?.advices?.map((item) => {
          if (item.id === sid) {
            return (
              <>
                <h2 className="tav_h2">{item.title_uz}</h2>
                <p className="tav_p">
                  {i18n.language === "uz"
                    ? item.about_uz
                    : i18n.language === "ru"
                    ? item.about_ru
                    : item.about_eng}
                </p>
              </>
            );
          }
        })}
        <div className="youtube">
          {/* <h1 className="tav_h1">{t("recom.3")}</h1> */}
          <Videos video={"https://www.youtube.com/watch?v=BK_ls9hWoFU"} />
        </div>
      </div>
    </div>
  );
}

export default Tavsiyalar;
