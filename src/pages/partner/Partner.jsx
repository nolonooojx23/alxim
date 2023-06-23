import "./Partner.css";
import { FiPhoneCall } from "react-icons/fi";
import Videos from "../../components/Video";
import { useFetch } from "../../useFetch";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination, Scrollbar } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
// import Rasm from "../../assets/Rasm.png";
import { useEffect } from "react";
import Job from "../../components/Job";
import Success from "../../components/Success";
import Error from "../../components/Error";
function Partner() {
  useEffect(() => {
    document.documentElement.scrollTop = 0;
  }, []);
  const [states, setStates] = useState();

  const { t, i18n } = useTranslation();
  const { data } = useFetch("https://alximik.pythonanywhere.com/partner/type/");
  // form
  const [select, setSelect] = useState({
    partnerType: 1,
  });
  const [full_name, setFull_name] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("https://alximik.pythonanywhere.com/partner/application/", {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        full_name,
        phone,
        ...select,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
        setStates(true);
        setFull_name("");
        setPhone("");
      })
      .catch((error) => {
        console.error("Error:", error);
        setStates(false);
      });
  };
  return (
    <div className="partner_header">
      <div className="container">
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
          {data?.map((item) => (
            <SwiperSlide className="slide">
              <div className="custom_card">
                <div className="custom_card__title">
                  <h1 className="custom_h1">
                    {i18n.language == "uz"
                      ? item.title_uz
                      : i18n.language == "ru"
                      ? item.title_ru
                      : item.title_eng}
                    {/* {t("partner.0")} <br /> {t("partner.0_1")} */}
                  </h1>
                  <div className="card__image_sect media_show cover_rasm">
                    <img
                      src={item.photo}
                      alt="rasm"
                      className="custom_card_img"
                    />
                  </div>

                  <a href="#ariza">
                    <button className="btn_slide btn_asosiy">
                      {t("carer.2")}
                    </button>
                  </a>
                </div>
                <div className="card__image_sect desktop_show">
                  <img src={item.photo} alt="" className="desktop_image " />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="container partneres">
        <h1>{t("partner.1")}</h1>
        {data?.map((item) => (
          <div>
            <img src={item.photo} alt="" className="custom_partner_img" />
            <h2>
              {i18n.language == "uz"
                ? item.title_uz
                : i18n.language == "ru"
                ? item.title_ru
                : item.title_eng}
            </h2>
            <p style={{marginBottom:"20px"}}>
              {i18n.language == "uz"
                ? item.about_uz
                : i18n.language == "ru"
                ? item.about_ru
                : item.about_eng}
            </p>
          </div>
        ))}
        <div className="btns">
          <a href="#ariza" className="btn">
            {t("partner.3")}
          </a>
          <a href="tel:+998 73 240 00 30" className="a">
            <FiPhoneCall /> {t("partner.11")}
          </a>
        </div>

        <h2>{t("partner.2")}</h2>
        <Videos video={"https://www.youtube.com/watch?v=BK_ls9hWoFU"} />
        <h2 id="ariza">{t("partner.3")}</h2>
        <div className="d-flex ">
          <div className="partner__info">
            <h3>{t("partner.4")}</h3>
            {/* <p className="info__p">{t("partner.5")}</p> */}
          </div>
          <form className="partner__form" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="#">{t("partner.6")}</label>
              <select
                name="partnerType"
                id="partner_select"
                className="partner_select"
                onChange={(e) => setSelect({ partnerType: e.target.value })}
              >
                <option value="0">-------</option>
                <option value="1">Dorixona</option>
                <option value="2">Fermer</option>
                <option value="3">Xususiy klinika</option>
              </select>
            </div>
            <div>
              <label htmlFor="#">{t("partner.7")}</label>
              <input
                onChange={(e) => setFull_name(e.target.value)}
                type="text"
                name="full_name"
                className="partner__input"
                value={full_name}
              />
            </div>
            <div>
              <label htmlFor="#">{t("partner.9")}</label>
              <input
                onChange={(e) => setPhone(e.target.value)}
                type="number"
                name="phone"
                className="partner__input"
                value={phone}
              />
            </div>
            <button
              type="submit"
              className="partner__btn"
              onClick={() => {
                setTimeout(() => {
                  setStates(null);
                }, 3000);
              }}
            >
              {t("partner.10")}
            </button>
          </form>
          {states === true ? <Success /> : states === false ? <Error /> : null}
          <Job />
        </div>
      </div>
    </div>
  );
}

export default Partner;
