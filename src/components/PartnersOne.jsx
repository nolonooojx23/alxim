import React from "react";
import Partner1 from "../assets/partners/Institute_of_Ion-Plasma.png";
import Partner2 from "../assets/partners/NANOCOMPOSIX.png";
import Partner3 from "../assets/partners/NANOSHEL.jpg";
import Partner4 from "../assets/partners/ozbekiston-xalq-tabobati-assotsiatsiyasi-.png";
import Partner5 from "../assets/partners/Toshkent Farmatsevtika Insituti.png";
import Partner6 from "../assets/partners/Toshkent Tibbiyot Akademiyasi.png";
import Partner7 from "../assets/partners/YADRO FIZIKA INSITUTI.png";
import Swiper, { Autoplay, Pagination } from "swiper";
import { SwiperSlide } from "swiper/react";

const PartnersOne = () => {
  const partnersArray = [
    Partner1,
    Partner2,
    Partner3,
    Partner4,
    Partner5,
    Partner6,
    Partner7,
  ];

  return (
    <div>
      <div className="container" style={{ margin: "40px 0" }} id="partners">
        <h1 className="title">Ilmiy hamkorlarimiz</h1>

        <Swiper
        //   breakpoints={smBreakpoints}
          modules={[Autoplay, Pagination]}
          pagination={{ clickable: true }}
          spaceBetween={50}
          // breakpoints={smBreakpoints}
          slidesPerView={5}
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
    </div>
  );
};

export default PartnersOne;
