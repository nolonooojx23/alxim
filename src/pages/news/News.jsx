import React from "react";
import "./News.css";
import { useFetch } from "../../useFetch";
// picture
import logo from "/assets/logo/aboutlogo.png";
import fcbook from "/assets/icons/facebook.png";
import insta from "/assets/icons/instagram.png";
import telegram from "/assets/icons/telegram.png";
import Marketing from "../../components/Marketing";
import { useTranslation } from "react-i18next";
import { Link, NavLink } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Scrollbar } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { useEffect } from "react";

function News() {
  useEffect(() => {
    document.documentElement.scrollTop = 0;
  }, []);
  const { t, i18n } = useTranslation();
  const { data1 } = useFetch(
    "https://alximik.pythonanywhere.com/main/all_info/"
  );
  const { data } = useFetch(
    "https://alximik.pythonanywhere.com/company/achievement/"
  );
  const { data: news } = useFetch("https://alximik.pythonanywhere.com/news/");
  const { data: advice } = useFetch(
    "https://alximik.pythonanywhere.com/advice/"
  );
  return (
    <>
      <div className="container news" id="news">
        <img src={logo} alt="" className="pic" />
        {/* <h1>{t("new.1")}</h1> */}
        <div className="d-flexex">
          {data?.map((item) => {
            return (
              <div className="news_card">
                <Link to={`/news/${item.id}`} className="card_img">
                  <img src={item.photo} alt="" />
                </Link>
                <h4>
                  {i18n.language === "en"
                    ? item.title_eng
                    : i18n.language === "uz"
                    ? item.title_uz
                    : item.title_ru}
                </h4>
                <NavLink to={`/news/${item.id}`}>
                  {i18n.language === "en"
                    ? item.about_eng.slice(0, 20)+"..."
                    : i18n.language === "uz"
                    ? item.about_uz.slice(0, 20)+"..."
                    : item.about_ru.slice(0, 20)+"..."}
                </NavLink>
              </div>
            );
          })}
        </div>
        <h1 className="new_h1" id="useful_content">{t("new.2")}</h1>
        {news?.map((item) => (
          <div className="news_new">
            <img src={item.photo} alt="" />
            <h2 className="new_h2">
              {i18n.language === "uz"
                ? item.title_uz
                : i18n.language === "ru"
                ? item.title_ru
                : item.title_eng}
            </h2>
            <p className="new_h3">
              {i18n.language === "uz"
                ? item.about_uz
                : i18n.language === "ru"
                ? item.about_ru
                : item.about_eng}
            </p>
          </div>
        ))}
      </div>
      {/* <Marketing /> */}
      <div className="container" >
        {/* <div className="carousel">
          <Swiper
            modules={[Pagination, Scrollbar, Autoplay]}
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
            {advice?.map((item) => (
              <SwiperSlide className="slide">
                <div className="custom_card">
                  <div className="custom_card__title">
                    <h1 className="custom_h1">{item.title_uz}</h1>
                    <div className="card__image_sect media_show cover_rasm">
                      <img src={`${item.photo}`} alt="rasm" className="custom_card_img" />
                    </div>
                    <p className="custom_p">
                      {i18n.language === "uz"
                        ? item.about_uz.slice(0, 150)
                        : i18n.language === "ru"
                        ? item.about_ru.slice(0, 150)
                        : item.about_eng.slice(0, 150)}
                      ...
                    </p>
                    <NavLink to={`/tavsiyalar#tavsiya_content/${item.id}`}>
                      <button className="btn_slide btn_asosiy">{t("btn")}</button>
                    </NavLink>
                  </div>
                  <div className="desktop_show ">
                    <img src={`${item.photo}`} alt="" className="desktop_image" />
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div> */}
        <div className="messenger">
          <h1 className="mes_h1">{t("new.3")}</h1>
          <div className="footerRasm">
            <Link
              to={"https://www.facebook.com/search/top/?q=alkimyogar%20pharm"}
            >
              <img src={fcbook} alt="" />
            </Link>
            <Link to={"https://www.instagram.com/alkimyogaruz/"}>
              <img src={insta} alt="" />
            </Link>
            <Link to={"https://t.me/s/alkimyogar_info"}>
              <img src={telegram} alt="" />
            </Link>
          </div>
        </div>
      </div>
      {/* <div
        className="container explanation_container"
        style={{ display: "none" }}
      >
        <div className="title">{t("home.12")}</div>
        <div className="explanation">
          {data1?.advices.map((item) => (
            <div>
              <div className="user_img">
                <img
                  src={`https://alximik.pythonanywhere.com/${item.photo}`}
                  alt=""
                />
              </div>
              <div className="user_info">
                <h3>{item.title_uz}</h3>
              </div>
            </div>
          ))}
        </div>
        <NavLink to={"/tavsiyalar"}>
          <div className="btn">{t("home.btn")}</div>
        </NavLink>
      </div> */}
    </>
  );
}

export default News;
