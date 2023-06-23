import "./About.css";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
import { useEffect, useState } from "react";
import Job from "../../components/Job";
import { useFetch } from "../../useFetch";
import { useTranslation } from "react-i18next";
import MediaJob from "../../components/MediaJob";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
import "swiper/css/pagination";
import "swiper/css/navigation";

function About() {
  const partnersArray = [
    "/assets/imgs/Institute_of_Ion-Plasma.png",
    "/assets/imgs/NANOCOMPOSIX.png",
    "/assets/imgs/NANOSHEL.jpg",
    "/assets/imgs/ozbekiston-xalq-tabobati-assotsiatsiyasi-.png",
    "/assets/imgs/Toshkent Farmatsevtika Insituti.png",
    "/assets/imgs/Toshkent Tibbiyot Akademiyasi.png",
    "/assets/imgs/YADRO FIZIKA INSITUTI.png",
  ];

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

  useEffect(() => {
    document.documentElement.scrollTop = 0;
  }, []);
  const { data } = useFetch("https://alximik.pythonanywhere.com/company/team/");
  const [state, setState] = useState(false);
  const { t } = useTranslation();
  return (
    <div className="about_page">
      <div className="about_hero">
        <div className="container">
          <div>
            <img src="/assets/logo/aboutlogo.png" alt="" />
            <h1 className="txt_h1">{t("about.1")}</h1>
            <p className="about_desk_txt p">{t("about.2")}</p>
          </div>
        </div>
        <div className="about__ten"></div>
      </div>
      <p className="about_txt p">{t("about.2")}</p>
      <hr />
      <div className="container purpose d-flex" style={{ display: "none" }}>
        <h2>
          <span>{t("about.3")}</span> <br /> {t("about.d")}
        </h2>
        <div className="purpose_info">{t("about.4")}</div>
      </div>
      {/* <hr /> */}
      <ScrollTrigger
        onEnter={() => setState(true)}
        onExit={() => setState(false)}
      >
        <div className="container count d-flex">
          <div>
            <h3>
              {t("about.5")}
              <br />
              {t("about.6")}
            </h3>
            <h1>
              {state && <CountUp start={0} end={7} duration={4} delay={0} />}
              <span className="plas">+</span>
            </h1>
          </div>
          <div>
            <h3>
              {t("about.7")} <br /> {t("about.8")}
            </h3>
            <h1>
              {state && <CountUp start={0} end={7000} duration={4} delay={0} />}
              <span className="plas">+</span>
            </h1>
          </div>
          <div>
            <h3>{t("about.9")}</h3>
            <h1>
              {state && <CountUp start={0} end={25} duration={4} delay={0} />}
              <span className="plas">+</span>
            </h1>
          </div>
        </div>
      </ScrollTrigger>
      <hr />
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
                  <div className="swiper__partners" key={index}>
                    <img src={item} alt="partners" />
                  </div>
                </SwiperSlide>
              );
            })}
          </div>
        </Swiper>
      </div>
      <hr />
      <div className="container connect" style={{ display: "none" }}>
        <h1>{t("about.11")}</h1>
        <p>{t("about.12")}</p>
        <div className="connecct_picture">
          <img src="/assets/imgs/flag.png" alt="" />
        </div>
      </div>
      <hr />
      <div className="container team_container" id="team">
        <h1 className="about13">{t("about.13")}</h1>
        <div className="team">
          <div className="desktop_">
            <Job data={data} />
          </div>
          <div className="media_">
            <MediaJob data={data} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
