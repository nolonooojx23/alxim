import React, { useEffect, useState } from "react";
import "./Navbar.css";
import { FaArrowCircleUp } from "react-icons/fa";
import { BsList } from "react-icons/bs";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Rater from "react-rater";
import "react-rater/lib/react-rater.css";
import { SlBasket } from "react-icons/sl";
import { AiOutlineHeart } from "react-icons/ai";
import { IoMdExit } from "react-icons/io";
import { BsTelegram, BsInstagram, BsYoutube, BsFacebook } from "react-icons/bs";
import Sale from "./Sale";
import DropDown from "./DropDown";
import Image from "../assets/logo2.svg";

function Navbar() {
  const [date, setDate] = useState(new Date().getFullYear());
  const [show, setShow] = useState(false);
  const [data, setData] = useState([]);
  const [col, setCol] = useState(false);
  const [showBtn, setShowbnt] = useState(false);
  const [media, setMedia] = useState(false);
  const [state, setState] = useState("");
  const [stat, setStat] = useState(false);
  const [cl, setCl] = useState(false);
  const [pro, setPro] = useState(0);
  const { t, i18n } = useTranslation();
  const Navigatex = useNavigate();
  window.addEventListener("scroll", () => {
    if (window.scrollY > 155) {
      setShowbnt(true);
    } else {
      setShowbnt(false);
    }
  });

  setTimeout(() => {
    setData(JSON.parse(sessionStorage.getItem("product")));
  }, 3000);
  let product = data?.map((item) => {
    if (!state) {
      return undefined;
    }
    if (item.name.toLowerCase().includes(state.toLocaleLowerCase())) {
      return (
        <Link
          to={`/tavsiya/${item.id}`}
          className="box_card item "
          key={item.id}
        >
          <div>
            <img
              src={`https://alximik.pythonanywhere.com${item.photo}`}
              alt=""
              className="pic_search"
            />

            <div className="item__logo">
              <div className="item__block">
                <NavLink to={`/tavsiya/${item.id}`}>
                  <button className="block__btn">{t("btn")}</button>
                </NavLink>
                <div className="block__icons">
                  <button onClick={() => setStat(!stat)} className="my-div">
                    <SlBasket onClick={() => setPro(item.id)} />
                  </button>
                  <button onClick={() => setCl(!cl)}>
                    {cl ? <AiFillHeart className="red" /> : <AiOutlineHeart />}
                  </button>
                  <button>
                    <NavLink to={`/tavsiya/${item.id}`} className="btn__a">
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
            <div className="text search_txt">
              <h3 className="color" key={item.productType.id}>
                {item.name}
              </h3>
              <p className="color">{item.price}sum</p>
            </div>
          </div>
        </Link>
      );
    }
  });
  let modal = product?.every((item) => item === undefined);
  return (
    <div className="navbar">
      {stat ? <Sale /> : null}
      <div className="gamburger__section" onClick={() => setMedia(!media)}>
        <BsList className="gam__none" />
        <section
          className={
            media
              ? "navSection_three_media active_media media__block"
              : "navSection_three"
          }
        >
          <div className="container navthree_container">
            <ul>
              <li>
                <img src="/assets/logo/logo.png" alt="" />
              </li>
              <li>
                <select
                  className="language"
                  name=""
                  style={{
                    backgroundColor: "transparent",
                    color: "#f2ce9a",
                    width:"100px",
                    textTransform: "uppercase",
                    // borderRadius: "20px",
                    fontSize: "18px",
                    padding: "4px",
                    // pointerEvents:'none',
                    cursor:"pointer",
                    zIndex:"9999999999"
                  }}
                  id=""
                  onClick={()=> setMedia(true)}
                  value={localStorage.getItem("i18nextLng")}
                  size={3}
                  onChange={(e) => i18n.changeLanguage(e.target.value)}
                >
                  <option value="en">en</option>
                  <option value="uz">uz</option>
                  <option value="ru">ru</option>
                </select>
              </li>
              <li>
                <NavLink to="/">{t("nav_text.1")}</NavLink>
              </li>
              <li>
                <NavLink to="/about">{t("nav_text.2")}</NavLink>
              </li>
              <li>
                <NavLink to="/products">{t("nav_text.3")}</NavLink>
              </li>
              <li>
                <NavLink to="/news">{t("nav_text.4")}</NavLink>
              </li>
              <li>
                <NavLink to="/career">{t("nav_text.5")}</NavLink>
              </li>
              <li>
                <NavLink to="/partners">{t("nav_text.6")}</NavLink>
              </li>
              <li className="link">
                <a className="link_a" href="http://alximik.uz">
                  &copy;{date} <span>alximik.uz</span>
                </a>
              </li>
            </ul>
            <div className="circles">
              <span>
                <BsTelegram />
              </span>
              <span>
                <BsInstagram />
              </span>
              <span>
                <BsYoutube />
              </span>
              <span>
                <BsFacebook />
              </span>
            </div>
          </div>
        </section>
      </div>
      <section className="navSection_one">
        <div className="container navOne_container media_container">
          <div>
            <div onClick={() => Navigatex("/")}>
              <a href="#Map">
                <img src="/assets/logo/map.svg" alt="" />
                <h4>{t("navbar.map")}</h4>
              </a>
            </div>
            <div>
              <a href="#footer">
                <img src="/assets/logo/tg.svg" alt="" />
                <h4>{t("navbar.query")}:</h4>
              </a>
            </div>
          </div>
          <div className="circles">
            <span>
              <a href="https://t.me/alkimyogar_info">
                <BsTelegram />
              </a>
            </span>
            <span>
              <a href="https://www.instagram.com/alkimyogaruz">
                <BsInstagram />
              </a>
            </span>
            <span>
              <a href="https://www.facebook.com/search/top/?q=al%20kimyogar%20pharm">
                <BsFacebook />
              </a>
            </span>
            <span>
              <a href="https://www.youtube.com/results?search_query=alkimyogaruz">
                <BsYoutube />
              </a>
            </span>
          </div>

          <div>
            <div>
              {t("navbar.call")}:
              <h4>
                <a href="tel:+998 73 240 00 30">+998 73 240 00 30</a>
              </h4>
            </div>
            <select
              className="language"
              name=""
              style={{ backgroundColor: "white", textTransform: "uppercase" }}
              id=""
              value={localStorage.getItem("i18nextLng")}
              onChange={(e) => i18n.changeLanguage(e.target.value)}
            >
              <option value="en">en</option>
              <option value="uz">uz</option>
              <option value="ru">ru</option>
            </select>
          </div>
        </div>
      </section>
      <section className="navSection_two">
        <div className="container navTwo_container media__cont_two">
          <div className="media__flex">
            <img src="/assets/logo/logo.png" alt="" />
            {/* <img src="/assets/logo/logo2.svg" alt="" /> */}
          </div>
          <div className="form">
            <div className="search">
              <form action="">
                <input
                  className="mobile"
                  style={show ? { opacity: "1" } : { opacity: "0" }}
                  type="text"
                  placeholder={t("navbar.inp")}
                  onChange={(e) => {
                    setState(e.target.value);
                    setCol(!col);
                  }}
                />
                <input
                  className="desktop"
                  type="text"
                  placeholder={t("navbar.inp")}
                  onChange={(e) => {
                    setState(e.target.value);
                    setCol(!col);
                  }}
                />
              </form>
              <button onClick={() => setShow(!show)} className="search_btn">
                <img src="/assets/logo/search.svg" alt="" />
              </button>
            </div>
          </div>
        </div>
      </section>
      <section
        className={showBtn ? "navSection_three active" : "navSection_three"}
      >
        <div className="container navthree_container">
          <ul>
            <li>
              <NavLink to="/">{t("nav_text.1")}</NavLink>
            </li>
            <li style={{ position: "relative" }}>
              {showBtn ? (
                <DropDown
                  name={t("nav_text.2")}
                  text={t("dropDown.1")}
                  text1={t("dropDown.2")}
                  image={Image}
                  to={"/about"}
                  path1={"#team"}
                  path2={"#partners"}
                />
              ) : (
                <NavLink to="/about">{t("nav_text.2")}</NavLink>
              )}
            </li>
            <li style={{ position: "relative" }}>
              {showBtn ? (
                <DropDown
                  name={t("nav_text.3")}
                  text={"Flayers"}
                  path1={"#flayers"}
                  to={"/products"}
                />
              ) : (
                <NavLink to="/products">{t("nav_text.3")}</NavLink>
              )}
            </li>
            <li style={{ position: "relative" }}>
              {showBtn ? (
                <DropDown
                  name={t("nav_text.4")}
                  text={t("dropDownNews.1")}
                  path1={"#useful_content"}
                  path2={"#news"}
                  text1={t("dropDownNews.2")}
                  //  text3={t("dropDownNews.3")}

                  to={"/news"}
                />
              ) : (
                <NavLink to="/news">{t("nav_text.4")}</NavLink>
              )}
            </li>
            <li style={{ position: "relative" }}>
              {showBtn ? (
                <DropDown
                  to={"/career"}
                  name={t("nav_text.5")}
                  text={t("partners_nav.1")}
                  text1={t("partners_nav.2")}
                  path1={"#values"}
                  path2={"#form__career"}
                />
              ) : (
                <NavLink to="/career">{t("nav_text.5")}</NavLink>
              )}
            </li>
            <li>
              <NavLink to="/partners">{t("nav_text.6")}</NavLink>
            </li>
            {/* <li style={{ position: "relative" }}>
              <DropDown
                name={t("nav_text.8")}
                to={"/222"}
                text={t("dropDown.3")}
                text1={t("....")}
                image={Image}
              />
            </li> */}
          </ul>
        </div>
      </section>
      <div
        onClick={() => {
          document.documentElement.scrollTop = 0;
        }}
        className={showBtn ? "scrollToTop-btn active" : "scrollToTop-btn"}
      >
        <FaArrowCircleUp />
      </div>
      <div style={{ position: "absolute", zIndex: "3", top: "0" }}>
        <div className="">
          {modal ? (
            ""
          ) : (
            <div
              onClick={() => setState("")}
              className={`search_box cardes_items  ${col ? "s" : "j"}`}
            >
              {product}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
