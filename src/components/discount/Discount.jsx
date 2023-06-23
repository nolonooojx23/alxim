import React, { useState } from "react";
import "./Discount.css";
import { useFetch } from "../../useFetch";
import { useTranslation } from "react-i18next";
import Sale from "../Sale";
import { Autoplay, Pagination, Scrollbar } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
function Discount() {
  const [state, setState] = useState(false);
  const { t, i18n } = useTranslation();
  const [pro, setPro] = useState(0);
  const { data } = useFetch("https://alximik.pythonanywhere.com/product/discount/");

  return (
    <>
      {state ? <Sale id={pro} /> : null}
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
          pauseOnMouseEnter: true
        }}
        speed={1000}
      >
        {data?.map((item) => (
          <SwiperSlide className="slide">
            <div className="discount" key={item.id}>
              <div>
                <h2>{t("sum")}</h2>
                <h3>
                  {i18n.language === "uz"
                    ? item.product.productType.name_uz
                    : i18n.language === "ru"
                    ? item.product.productType.name_ru
                    : item.product.productType.name_eng}
                </h3>
                <p>
                  {i18n.language === "uz"
                    ? item.title_uz.slice(0, 100)
                    : i18n.language === "ru"
                    ? item.title_ru.slice(0, 100)
                    : item.title_eng.slice(0, 100)}
                </p>
                <ul>
                  <li>
                    <img src="/assets/icons/chack.svg" alt="" />
                    {i18n.language === "uz"
                      ? item.product.about_uz.slice(0, 100)
                      : i18n.language === "ru"
                      ? item.product.about_ru.slice(0, 100)
                      : item.product.about_eng.slice(0, 100)}
                  </li>
                  <li>
                    <img src="/assets/icons/chack.svg" alt="" /> {item.product.price} {t("recommendation.9")}
                  </li>
                  <li>
                    <img src="/assets/icons/chack.svg" alt="" />{" "}
                    {i18n.language === "uz"
                      ? item.product.expirationDate_uz.slice(0, 100)
                      : i18n.language === "ru"
                      ? item.product.expirationDate_ru.slice(0, 100)
                      : item.product.expirationDate_eng.slice(0, 100)}
                  </li>
                </ul>
                <button
                  className="btn"
                  onClick={() => {
                    setState(!state);
                    setPro(item.id);
                  }}
                >
                  {t("footer.12")}
                </button>
              </div>
              <div className="dis-cont-img">
                <img src={item.product.photo} alt="" className="dis_img" />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}

export default Discount;
