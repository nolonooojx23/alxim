import React, { useState } from "react";
import Rater from "react-rater";
import "react-rater/lib/react-rater.css";
import { useFetch } from "../useFetch";
import { SlBasket } from "react-icons/sl";
import { IoMdExit } from "react-icons/io";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import Sale from "./Sale";
function Gender({ jins }) {
  const { data } = useFetch(
    "https://alximik.pythonanywhere.com//main/all_info/"
  );
  const [state, setState] = useState(false);
  const [impotID, setSimportID] = useState(0);
  const [cl, setCl] = useState(false);
  const { t, i18n } = useTranslation();
  let gen = data?.products.map((item) => {
    if (item.gender.gender === jins) {
      return (
        <div className="item" key={item.id}>
          <div>
            <img
              src={`https://alximik.pythonanywhere.com${item.photo}`}
              alt=""
              className="picture_pro"
            />
            <div className="item__logo">
              <div className="item__block">
                <NavLink to={`/tavsiya/${item.id}`}>
                  <button className="block__btn">{t("btn")}</button>
                </NavLink>

                <div className="block__icons">
                  <button onClick={() => setState(!state)} className="my-div">
                    <SlBasket onClick={() => setSimportID(item.id)} />
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
                interactive={false}
              />
            </div>
            <div className="text">
              <h3 key={item.productType.id}>{item.name}</h3>
              <p>{item.price}sum</p>
            </div>
          </div>
        </div>
      );
    }
  });
  let product = gen?.every((item) => item === undefined);

  return (
    <>
      {state ? <Sale id={impotID} /> : null}
      <div className="cards_gender cards_items">
        {product ? "Malumnot topilmadi..." : gen}
      </div>
    </>
  );
}

export default Gender;
