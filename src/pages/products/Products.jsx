import React from "react";
import "./Products.css";
import Discount from "../../components/discount/Discount";
import Videos from "../../components/Video";
import Carousels from "../../components/Carousels";
import { useFetch } from "../../useFetch";
import Product from "../../components/Product";
import { useTranslation } from "react-i18next";
import Gender from "../../components/Gender";
import { useState } from "react";
import NewCarousel from "../../components/NewCarousel";
import { useEffect } from "react";
import FlayerSwiper from "../../components/FlayerSwiper";
function Products() {
  useEffect(() => {
    document.documentElement.scrollTop = 0;
  }, []);
  const [state, setStare] = useState("Hamma uchun");
  const [active, setActive] = useState(false);
  const { t } = useTranslation();
  const { data } = useFetch(
    "https://alximik.pythonanywhere.com/main/all_info/"
  );

  return (
    <div className="products_page">
      <NewCarousel carousel={data?.new_products} />
      <div className="container">
        <div className="products_btn">
          <button
            className={state === "Hamma uchun" ? "active" : ""}
            onClick={() => {
              setStare("Hamma uchun");
              setActive(!active);
            }}
          >
            {t("product.1")}
          </button>
          <button
            className={state === "Erkak" ? "active" : ""}
            onClick={() => {
              setStare("Erkak");
              setActive(!active);
            }}
          >
            {t("product.2")}
          </button>
          <button
            className={state === "Ayol" ? "active" : ""}
            onClick={() => {
              setStare("Ayol");
              setActive(!active);
            }}
          >
            {t("product.3")}
          </button>
          <button
            className={state === "Bola" ? "active" : ""}
            onClick={() => {
              setStare("Yosh bolalar");
              setActive(!active);
            }}
          >
            {t("product.4")}
          </button>
          <button
            className={state === "Keksa" ? "active" : ""}
            onClick={() => {
              setStare("Keksa");
              setActive(!active);
            }}
          >
            {t("product.5")}
          </button>
        </div>
        {/* <Product /> */}
        <Gender jins={state} />
      </div>
      <div className="container">
        <Discount />
        <div className="youtube">
          <h1 className="youtube_h1">{t("product.6")}</h1>
          <div className="settime__logo">
          <div className="settimeout__logo">
            <img src="/assets/logo/logo.png" alt="" />
          </div>
          </div>
          <Videos video={"https://www.youtube.com/watch?v=BK_ls9hWoFU"} />
        </div>
      </div>
      <div className="containerr container" style={{margin: "10px auto"}} id="flayers">
        <FlayerSwiper />
      </div>
    </div>
  );
}

export default Products;
