import React, { useState } from "react";
import Rater from "react-rater";
import "react-rater/lib/react-rater.css";
import { useFetch } from "../useFetch";
import { SlBasket } from "react-icons/sl";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { IoMdExit } from "react-icons/io";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";
import Sale from "./Sale";
import canada from "../assets/canada.png";

function Product() {
  const { data } = useFetch("https://alximik.pythonanywhere.com/product/");
  const { t, i18n } = useTranslation();
  const [state, setState] = useState(false);
  const [cl, setCl] = useState(false);
  const [pro, setPro] = useState(0);
  return (
    <>
      {state ? <Sale id={pro} /> : ""}
      <div className="cards_items">
        {data?.map((item) => (
          <div className="item" key={item.id}>
            <div>
              <img src={item.photo} alt="" className="picture_pro" />
              {/* nano immun, artincum, argenta nano silver narmosten */}
              {(item.id === 5 ||
                item.id === 1 ||
                item.id === 2 ||
                item.id === 3 ||
                item.id === 12 ||
                item.id === 11) && (
                <>
                  <img src={canada} alt="" className="canada_image" />
                  <p className="canada_title">
                    Kanada texnologiyasi asosida tayyorlangan
                  </p>
                </>
              )}
              <div className="item__logo">
                <div className="item__block">
                  <NavLink to={`/tavsiya/${item.id}`}>
                    <button className="block__btn">{t("btn")}</button>
                  </NavLink>
                  <div className="block__icons">
                    <button onClick={() => setState(!state)} className="my-div">
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
              <div className="text">
                <h3 key={item.productType.id}>{item.name}</h3>
                <p>{item.price}sum</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Product;
