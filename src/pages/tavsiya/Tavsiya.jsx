import React from "react";
import "./Tavsiya.css";
import Rater from "react-rater";
import "react-rater/lib/react-rater.css";
import { useFetch } from "../../useFetch";
import logo from "/assets/logo/aboutlogo.png";
import {
  AiFillSave,
  AiOutlineFacebook,
  AiOutlineInstagram,
  AiOutlineShareAlt,
  AiOutlineZoomIn,
} from "react-icons/ai";
// import ProductDoc from "./pdf/Mahsulotlar katalog matn.pdf";
import { BsTelegram } from "react-icons/bs";
import Videos from "../../components/Video";
import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";
import { SlBasket } from "react-icons/sl";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { IoMdExit } from "react-icons/io";
import { useEffect, useState } from "react";
import { FaHandsHelping } from "react-icons/fa";
import Sale from "../../components/Sale";
import { AnimatePresence, motion } from "framer-motion";
function tavsiya() {
  const [active, setActive] = useState(true);
  const [activeImage, setActiveImage] = useState(false);
  const [state, setState] = useState(false);
  const [pro, setPro] = useState(0);
  const [cl, setCl] = useState(false);
  useEffect(() => {
    document.documentElement.scrollTop = 0;
  }, []);
  const { t, i18n } = useTranslation();
  const { id } = useParams();
  const { data } = useFetch("https://alximik.pythonanywhere.com/product/");
  const { data: date } = useFetch(
    "-"
  );

  const top = () => {
    document.documentElement.scrollTop = 0;
  };
  
  return (
    <div className="container tavsiya_header">
      {state ? <Sale id={pro} /> : ""}
      <div className="logo__image">
        <img src={logo} alt="" className="header_img" />
      </div>
      {
        <div className="recommend__product">
          {data?.map((item) => {
            if (item.id == id) {
              return (
                <div key={item.id}>
                  <h1 className="recomment__header">
                    {i18n.language === "uz"
                      ? "Mahsulotlar "
                      : i18n.language === "ru"
                      ? "Продукты "
                      : "Products "}
                    / {item.name}
                  </h1>

                  <div
                    onClick={() => setActiveImage(false)}
                    className={`${
                      activeImage ? "modal__image active" : "modal__image"
                    }`}
                  >
                    <img src={item.photo} alt="modal__image" />
                  </div>

                  <div className="box__product">
                    <div className="box__left_el">
                      <img src={item.photo} className="box__image" alt="" />
                      <button
                        className="btn_data"
                        onClick={() => {
                          setActiveImage(true);
                        }}
                      >
                        <AiOutlineZoomIn /> &nbsp;
                        {i18n.language === "uz"
                          ? "Kattalashtirish"
                          : i18n.language === "ru"
                          ? "Увеличить"
                          : "Zoom"}
                      </button>
                    </div>
                    <div className="box__right_el">
                      <h2 className="box__r_title">{item.name}</h2>
                      {/* <h3 className={`${activeImage ? "opacity-0" : ""}`}>
                        <FaHandsHelping className="box__pro_icon" />
                        <a href="#" style={{ textTransform: "uppercase" }}>
                          {i18n.language === "uz"
                            ? "RETSEPTSIZ"
                            : i18n.language === "ru"
                            ? "БЕЗ РЕТСЕПТА"
                            : "Without a prescription"}
                        </a>
                      </h3> */}
                      <h3 className={`${activeImage ? "opacity-0" : ""}`}>
                        <AiFillSave className="box__pro_icon" />
                        <a
                          href={item.flayer}
                          target="_blank"
                          style={{ textTransform: "uppercase" }}
                        >
                          {i18n.language === "uz"
                            ? "Yuklab olish"
                            : i18n.language === "ru"
                            ? "Скачать"
                            : "download"}
                        </a>
                      </h3>
                      <h3 className={`${activeImage ? "opacity-0" : ""}`}>
                        <AiOutlineShareAlt className="box__pro_icon" />
                        <span  style={{ textTransform: "uppercase" }}>
                          {i18n.language === "uz"
                            ? "Ulashish :"
                            : i18n.language === "ru"
                            ? "Отправить :"
                            : "Share :"}
                        </span>
                        <div className="social__icons">
                          <a
                            target="_blank"
                            href="https://www.instagram.com/alkimyogaruz/"
                          >
                            <AiOutlineInstagram />
                          </a>
                          <a
                            target="_blank"
                            href={`https://www.facebook.com/sharer/sharer.php?u=https://alximik.uz/tavsiya/${id}/`}
                          >
                            <AiOutlineFacebook />
                          </a>
                          <a
                            target="_blank"
                            style={{paddingBottom:3}}
                            href={`https://t.me/share/url?url=https://alximik.uz/tavsiya/${id}`}
                          >
                            <BsTelegram />
                          </a>
                        </div>
                      </h3>
                    </div>
                  </div>
                </div>
              );
            }
          })}

          <div className="about__home_pro">
            <button
              onClick={() => setActive(true)}
              className={active && "active"}
            >
              {i18n.language === "uz"
                ? "Mahsulot haqida"
                : i18n.language === "ru"
                ? "О продукте"
                : "About product"}
            </button>
            <button
              onClick={() => setActive(false)}
              className={!active && "active"}
            >
              {i18n.language === "uz"
                ? "Qo'llanma"
                : i18n.language === "ru"
                ? "Руководства"
                : "Guide"}
            </button>
          </div>

          {data?.map((item) => {
            if (item.id == id) {
              if (active) {
                return (
                  // {active ? (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ ease: "easeOut", duration: 1 }}
                    exit={{ opacity: 0 }}
                    className={`${active ? " opacity-1" : "opacity-0"}`}
                  >
                    <h2
                      style={{
                        fontSize: "20px",
                        marginLeft: "15px",
                        fontWeight: "600",
                      }}
                    >
                      {" "}
                      <span style={{ fontWeight: "bold" }}>
                        {i18n.language === "uz"
                          ? "Mahsulot turi : "
                          : i18n.language === "ru"
                          ? "Тип продукта : "
                          : "Type product : "}
                      </span>
                      {i18n.language === "uz"
                        ? item.productType.name_uz
                        : i18n.language === "ru"
                        ? item.productType.name_ru
                        : item.productType.name_eng}
                    </h2>
                    <div className="section__pro">
                      <p>
                        <span style={{ fontWeight: "bold", fontSize: "18px" }}>
                          {i18n.language === "uz"
                            ? "Tarkibi : "
                            : i18n.language === "ru"
                            ? "Состав : "
                            : " Composition : "}{" "}
                          <br />
                        </span>
                        {i18n.language === "uz"
                          ? item.about_uz
                          : i18n.language === "ru"
                          ? item.about_ru
                          : item.about_eng}
                      </p>
                    </div>

                    <div className="section__pro">
                      <p>
                        <span style={{ fontWeight: "bold", fontSize: "17px" }}>
                          {i18n.language === "uz"
                            ? "Chiqarilish shakli : "
                            : i18n.language === "ru"
                            ? "Форма выпуска : "
                            : " Release form : "}
                        </span>
                        {i18n.language === "uz"
                          ? item.release_form_uz
                          : i18n.language === "ru"
                          ? item.release_form_ru
                          : item.release_form_eng}
                      </p>
                    </div>
                    <h2
                      style={{
                        fontSize: "18px",
                        marginLeft: "20px",
                        fontWeight: "600",
                      }}
                    >
                      {" "}
                      <span style={{ fontWeight: "bold" }}>
                        {i18n.language === "uz"
                          ? "Narxi : "
                          : i18n.language === "ru"
                          ? "Цена : "
                          : "Price : "}
                      </span>
                      {i18n.language === "uz"
                        ? item.price + " so'm"
                        : i18n.language === "ru"
                        ? item.price + " сум"
                        : item.price + " summ"}
                    </h2>
                  </motion.div>
                );
              } else {
                return (
                  <AnimatePresence>
                    <motion.div
                      key={item.id}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ ease: "easeOut", duration: 1 }}
                      exit={{ opacity: 0 }}
                    >
                      <div className="section__pro">
                        <p>
                          <span
                            style={{ fontWeight: "bold", fontSize: "18px" }}
                          >
                            {i18n.language === "uz"
                              ? item.apply_uz.substr(0, 14)
                              : i18n.language === "ru"
                              ? item.apply_ru.substr(0, 14)
                              : item.apply_eng.substr(0, 14)}
                            <br />
                          </span>
                          {i18n.language === "uz"
                            ? item.apply_uz
                            : i18n.language === "ru"
                            ? item.apply_ru
                            : item.apply_eng}
                        </p>
                      </div>

                      <div className="section__pro">
                        <p>
                          <table className="table__product">
                            <thead>
                              <tr>
                                <th>
                                  {i18n.language === "uz"
                                    ? item.apply_childerns_uz.substr(0, 8)
                                    : i18n.language === "ru"
                                    ? item.apply_childerns_ru.substr(0, 8)
                                    : item.apply_childerns_eng.substr(0, 8)}
                                </th>
                                <th>
                                  {i18n.language === "uz"
                                    ? item.apply_olders_uz.substr(0, 8)
                                    : i18n.language === "ru"
                                    ? item.apply_olders_ru.substr(0, 8)
                                    : item.apply_olders_eng.substr(0, 8)}
                                </th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>
                                  {i18n.language === "uz"
                                    ? item.apply_childerns_uz.substr(8)
                                    : i18n.language === "ru"
                                    ? item.apply_childerns_uz.substr(8)
                                    : item.apply_childerns_uz.substr(8)}
                                </td>
                                <td>
                                  {i18n.language === "uz"
                                    ? item.apply_olders_uz.substr(8)
                                    : i18n.language === "ru"
                                    ? item.apply_olders_ru.substr(8)
                                    : item.apply_olders_eng.substr(8)}
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </p>
                      </div>
                    </motion.div>
                  </AnimatePresence>
                );
              }
            }
          })}
        </div>
      }

      <div className="maxsulotlar" style={{marginTop:"100px"}}>
        <h2 className="m_h2 my-2">{t("recommendation.7")}</h2>
        <div className="card_products cards_items">
          {data?.map((item) => {
            if (item.rate === 5) {
              return (
                <div className="item" key={item.id}>
                  <div>
                    <img src={item.photo} alt="" className="picture_pro" />
                    <div className="item__logo">
                      <div className="item__block">
                        <NavLink to={`/tavsiya/${item.id}`}>
                          <button className="block__btn" onClick={() => top()}>
                            {t("btn")}
                          </button>
                        </NavLink>
                        <div className="block__icons">
                          <button
                            onClick={() => setState(!state)}
                            className="my-div"
                          >
                            <SlBasket />
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
                              onClick={() => top()}
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
                      <p>
                        {item.price}
                        {t("recommendation.9")}
                      </p>
                    </div>
                  </div>
                </div>
              );
            }
          })}
        </div>
      </div>
    </div>
  );
}

export default tavsiya;
