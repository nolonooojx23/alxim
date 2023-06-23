import React, { useEffect, useState, useRef } from "react";
import "./Home.css";
// icons
import Rater from "react-rater";
import "react-rater/lib/react-rater.css";
import { SlBasket } from "react-icons/sl";
import { AiOutlineHeart } from "react-icons/ai";
import { IoMdExit, IoMdReturnLeft } from "react-icons/io";

import Discount from "../../components/discount/Discount";
import Carousels from "../../components/Carousels";
import { useFetch } from "../../useFetch";
import Product from "../../components/Product";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";
import Filter from "../../components/Filter";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Sale from "../../components/Sale";
import canada from "../../assets/canada.png";
import Map from "../../components/Map";
import Image from "./back/logo.png";

function Home() {
  const [stat, setStat] = useState(false);
  const [cl, setCl] = useState(false);
  const { t, i18n } = useTranslation();
  const [pro, setPro] = useState(0);
  const [active, setActive] = useState(true);
  const { data } = useFetch(
    "https://alximik.pythonanywhere.com/main/all_info/"
  );

  const sortedProducts = data?.new_products.sort((a, b) => b.id - a.id);

  const partnersArray = [
    "/assets/imgs/Institute_of_Ion-Plasma.png",
    "/assets/imgs/NANOCOMPOSIX.png",
    "/assets/imgs/NANOSHEL.jpg",
    "/assets/imgs/ozbekiston-xalq-tabobati-assotsiatsiyasi-.png",
    "/assets/imgs/Toshkent Farmatsevtika Insituti.png",
    "/assets/imgs/Toshkent Tibbiyot Akademiyasi.png",
    "/assets/imgs/YADRO FIZIKA INSITUTI.png",
  ];
  const partnersTwo = [
    "/assets/imgs/partner1.png",
    "/assets/imgs/partner2.png",
    "/assets/imgs/partner3.png",
    "/assets/imgs/partner4.png",
    "/assets/imgs/partner5.png",
    "/assets/imgs/partner6.png",
    "/assets/imgs/partner7.png",
    "/assets/imgs/partner8.png",
    "/assets/imgs/partner9.png",
    "/assets/imgs/partner10.png",
  ];

  useEffect(() => {
    sessionStorage.setItem("product", JSON.stringify(data?.products));
    return () => {
      document.documentElement.scrollTop = 0;
    };
  }, [data]);

  const [state, setState] = useState(false);

  const breakpoints = {
    400: {
      slidesPerView: 1,
      spaceBetween: 30,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 35,
    },
    992: {
      slidesPerView: 3,
      spaceBetween: 45,
    },
    1200: {
      slidesPerView: 4,
      spaceBetween: 45,
    },
    1400: {
      slidesPerView: 5,
      spaceBetween: 45,
    },
  };
  const smBreakpoints = {
    350: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    500: {
      slidesPerView: 2,
      spaceBetween: 15,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 25,
    },
    992: {
      slidesPerView: 4,
      spaceBetween: 35,
    },
    1200: {
      slidesPerView: 5,
      spaceBetween: 45,
    },
    1400: {
      slidesPerView: 6,
      spaceBetween: 45,
    },
  };

  return (
    <div className="home_page">
      {stat ? <Sale id={pro} /> : null}
      <div className="container-blur">
        <img src={Image} alt="blur" />
      </div>
      {/* <PartnersOne/> */}
      <div className="container__new">
        {sortedProducts?.map((item) => {
          return (
            <div key={item.id} className="card__new">
              <NavLink to={`/tavsiya/${item.id}`}>
                <img
                  src={`https://alximik.pythonanywhere.com/${item.photo}`}
                  alt="new__image"
                />
                <div className="card_body">
                  <h1>{item.name}</h1>
                  <p>
                    {item.price}
                    {i18n.language === "uz"
                      ? " so'm"
                      : i18n.language === "ru"
                        ? " сум"
                        : " summ"}
                  </p>
                  <p>
                    {i18n.language === "uz"
                      ? item.about_uz.slice(0, 60)
                      : i18n.language === "ru"
                        ? item.about_ru.slice(0, 60)
                        : item.about_eng.slice(0, 60)}
                    <NavLink to={`/tavsiya/${item.id}`} key={item.id}>
                      <p style={{ color: "white" }} className="block__btn">
                        {" "}
                        ...
                      </p>
                    </NavLink>
                  </p>
                </div>
              </NavLink>
            </div>
          );
        })}
      </div>
      {/* <Carousels carousel={data?.new_products} /> */}
      <div className="container productse" style={{ display: "none" }}>
        <div className="title">{t("home.1")}</div>
        <h3 className="title_h3">{t("home.2")}</h3>
        <div className="cards_one cards_item">
          <Swiper
            breakpoints={breakpoints}
            modules={[Autoplay, Pagination]}
            pagination={{ clickable: true }}
            // spaceBetween={50}
            // slidesPerView={5}
            onSwiper={(swiper) => swiper}
            onSlideChange={() => "slide change"}
            className="desktop_swiper sniper"
            autoplay={{
              delay: 21000,
              disableOnInteraction: false,
            }}
            speed={1000}
          >
            {data?.products.map((item) => {
              return (
                <SwiperSlide key={item.id}>
                  <div className="card">
                    <img
                      className="card_img"
                      src={`https://alximik.pythonanywhere.com/${item.photo}`}
                      alt=""
                    />
                    <h4>{item.name}</h4>
                    <p>{item.price}</p>
                    <NavLink to={`/tavsiya/${item.id}`}>
                      <button className="btn_data">{t("home.btn")}</button>
                    </NavLink>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
          {data?.products.map((item) => {
            return (
              <NavLink to={`/tavsiya/${item.id}`} key={item.id}>
                <div className="card media_height media_swiper ">
                  <img
                    className="card_img"
                    src={`https://alximik.pythonanywhere.com/${item.photo}`}
                    alt=""
                  />
                  <h4>{item.name}</h4>
                  <p>{item.price}</p>
                  <NavLink to={`/tavsiya/${item.id}`} key={item.id}>
                    <button className="btn_data">{t("home.btn")}</button>
                  </NavLink>
                </div>
              </NavLink>
            );
          })}
        </div>
      </div>
      <div className="container news">
        <div className="title">{t("home.3")}</div>

        <img
          src={`https://alximik.pythonanywhere.com/${data?.news[0].photo}`}
          alt=""
        />
        <h3>
          {i18n.language === "uz"
            ? data?.news[0].title_uz
            : i18n.language === "ru"
              ? data?.news[0].title_ru
              : data?.news[0].title_eng}
        </h3>
        <p>
          {i18n.language === "uz"
            ? data?.news[0].about_uz
            : i18n.language === "ru"
              ? data?.news[0].about_ru
              : data?.news[0].about_eng}
        </p>

        <NavLink to={"/news"}>
          <button className="btn">{t("home.btn")}</button>
        </NavLink>
      </div>
      <div className="container products">
        <div className="title">{t("home.6")}</div>
        <h3 className="title_h3">{t("home.2")}</h3>
        <div className="cards_two">
          <div className="filter">
            <div
              className={state ? "" : "show"}
              onClick={() => setState(false)}
            >
              {t("home.7")}
            </div>
            <div className={state ? "show" : ""} onClick={() => setState(true)}>
              {t("home.8")}
            </div>
          </div>
          <div className="cards_items vw-yoq">
            {state ? <Filter /> : <Product />}
          </div>
          <NavLink to="/products">
            <button className="btn">{t("home.btn")}</button>
          </NavLink>
        </div>
      </div>
      <div className="container ">
        {/* <Discount dic={data?.discounts} /> */}
      </div>
      <div className="container products" style={{ display: "none" }}>
        <div className="title">{t("home.9")}</div>
        <h3>{t("home.2")}</h3>
        <div className="news_item cards_items">
          <Swiper
            modules={[Autoplay, Pagination, Navigation]}
            pagination={{ clickable: true }}
            breakpoints={smBreakpoints}
            navigation={true}
            onSwiper={(swiper) => swiper}
            onSlideChange={() => "slide change"}
            className="sniper desktop_swiper"
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            speed={1000}
          // style={{ display: "none" }}
          >
            {data?.new_products.map((item) => (
              <SwiperSlide>
                <div className="item new_item_media" key={item.id}>
                  <div>
                    <img
                      src={`https://alximik.pythonanywhere.com/${item.photo}`}
                      alt=""
                      className="picture_pro"
                    />
                    <div className="item__logo">
                      <NavLink to={`/tavsiya/${item.id}`} key={item.id}>
                        <button className="block__btns">{t("btn")}</button>
                      </NavLink>
                      <div className="item__block">
                        <div className="block__icons">
                          <button
                            onClick={() => setStat(!stat)}
                            className="my-div"
                          >
                            <SlBasket onClick={() => setPro(item.id)} />
                          </button>
                          <button onClick={() => setCl(!cl)}>
                            {cl ? (
                              <AiFillHeart className="red" />
                            ) : (
                              <AiOutlineHeart />
                            )}
                          </button>
                          <button>
                            <NavLink
                              to={`/tavsiya/${item.id}`}
                              className="btn__a"
                              key={item.id}
                            >
                              <IoMdExit />
                            </NavLink>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="star">
                      <Rater
                        className="stat_app"
                        rating={item.rate}
                        total={5}
                        interactive={true}
                      />
                    </div>
                    <div className="text">
                      <h3 key={item.productType.id}>{item.name}</h3>
                      <p>{item.price}sum</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="cards_items media_swiper">
            {data?.new_products.map((item) => (
              <div className="item" key={item.id}>
                <div>
                  <img
                    src={`https://alximik.pythonanywhere.com/${item.photo}`}
                    alt=""
                    className="picture_pro"
                  />
                  {/* nano immun, artincum, argenta nano silver narmosten */}

                  {(item.id === 1 ||
                    item.id === 5 ||
                    item.id === 2 ||
                    item.id === 3 ||
                    item.id === 12 ||
                    item.id === 11) && (
                      <div key={item.id}>
                        <img src={canada} alt="" className="canada_image" />
                        <p className="canada_title">
                          Kanada texnologiyasi asosida tayyorlangan
                        </p>
                      </div>
                    )}
                  <div className="item__logo">
                    <NavLink to={`/tavsiya/${item.id}`}>
                      <button className="block__btns">{t("btn")}</button>
                    </NavLink>
                    <div className="item__block">
                      <div className="block__icons">
                        <button
                          onClick={() => setState(!stat)}
                          className="my-div"
                        >
                          <SlBasket onClick={() => setPro(item.id)} />
                        </button>
                        <button onClick={() => setCl(!cl)}>
                          {cl ? (
                            <AiFillHeart className="red" />
                          ) : (
                            <AiOutlineHeart />
                          )}
                        </button>
                        <button>
                          <NavLink
                            to={`/tavsiya/${item.id}`}
                            className="btn__a"
                          >
                            <IoMdExit />
                          </NavLink>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="star">
                    <Rater
                      className="stat_app"
                      rating={item.rate}
                      total={5}
                      interactive={true}
                    />
                  </div>
                  <div className="text">
                    <h3 key={item.productType.id}>
                      {i18n.language === "uz"
                        ? item.productType.name_uz
                        : i18n.language === "ru"
                          ? item.productType.name_ru
                          : item.productType.name_eng}
                    </h3>
                    <p>{item.price}sum</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/*  */}
      <div className="container" style={{ margin: "40px auto" }} id="partners">
        <h1 className="title">{t("home.11_1")}</h1>
        <Swiper
          breakpoints={smBreakpoints}
          modules={[Autoplay, Pagination]}
          pagination={{ clickable: true }}
          // spaceBetween={50}
          // breakpoints={smBreakpoints}
          // slidesPerView={5}
          onSwiper={(swiper) => swiper}
          onSlideChange={() => "slide change"}
          className="swiper_container_partners"
          autoplay={{
            delay: 21000,
            disableOnInteraction: false,
          }}
          speed={1000}
        >
          <div className="parent_partners">
            {partnersArray?.map((item, index) => {
              return (
                <SwiperSlide>
                  <div className="swiper__partners" key={index + 1}>
                    <img src={item} alt="partners" />
                  </div>
                </SwiperSlide>
              );
            })}
          </div>
        </Swiper>
      </div>
      <div className="container" style={{ margin: "40px auto" }}>
        <h1 className="title">{t("home.11_2")}</h1>
        <Swiper
          breakpoints={breakpoints}
          modules={[Autoplay, Pagination]}
          pagination={{ clickable: true }}
          // spaceBetween={50}
          // breakpoints={smBreakpoints}
          // slidesPerView={5}
          onSwiper={(swiper) => swiper}
          onSlideChange={() => "slide change"}
          className="swiper_container_partners"
          autoplay={{
            delay: 21000,
            disableOnInteraction: false,
          }}
          speed={1000}
        >
          <div className="parent_partners">
            {partnersTwo?.map((item, index) => {
              return (
                <SwiperSlide>
                  <div
                    className="swiper__partners parent__partners__image"
                    key={index}
                  >
                    <img src={item} alt="partners" />
                  </div>
                </SwiperSlide>
              );
            })}
          </div>
        </Swiper>
      </div>
      <div className="container custom_container">
        <div className="title">{t("home.10")}</div>
        <div className="customers">
          {data?.comments.map((item) => {
            return (
              <div className="customer" key={item.id}>
                <div className="user">
                  <img
                    src={`https://alximik.pythonanywhere.com/${item.photo}`}
                    alt=""
                  />
                  <div>
                    <h4>{item.full_name}</h4>
                    <p>{item.job}</p>
                  </div>
                </div>
                <p>
                  {active && item.comment.slice(0, 220)}
                  {".."}
                </p>
                <h5>{item.product.dateTime.slice(0, 10)}</h5>
              </div>
            );
          })}
        </div>
        <NavLink to={`/tavsiyalar`}>
          <div className="custom_btn">{t("btn")}</div>
        </NavLink>
      </div>
      <div className="container" style={{ display: "none" }}>
        <div className="title">{t("home.11")}</div>
        <div className="partners">
          <div className="partner">
            <img src="/assets/imgs/hamkor1.png" alt="" />
          </div>
          <div className="partner">
            <img src="/assets/imgs/hamkor2.png" alt="" />
          </div>
          <div className="partner">
            <img src="/assets/imgs/hamkor3.png" alt="" />
          </div>
          <div className="partner">
            <img src="/assets/imgs/hamkor4.png" alt="" />
          </div>
        </div>
      </div>
      <Map />
    </div>
  );
}

export default Home;
