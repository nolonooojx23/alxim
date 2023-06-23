import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import Product0 from "../assets/flayers/fl1.png";
import Product1 from "../assets/flayers/fl2.png";
import Product3 from "../assets/flayers/fl4.png";
import Product4 from "../assets/flayers/fl5.png";
import Product5 from "../assets/flayers/fl6.png";
import Product6 from "../assets/flayers/fl7.png";
import Product7 from "../assets/flayers/fl8.png";
import Product8 from "../assets/flayers/fl9.png";
import Product9 from "../assets/flayers/fl10.png";
import Product10 from "../assets/flayers/fl11.png";
import Product11 from "../assets/flayers/fl12.png";
import Product12 from "../assets/flayers/fl13.jpg";

import Pro1 from "../assets/pdf/pro1.pdf";
import Pro2 from "../assets/pdf/pro2.pdf";
import Pro4 from "../assets/pdf/pro4.pdf";
import Pro5 from "../assets/pdf/pro5.pdf";
import Pro6 from "../assets/pdf/pro6.pdf";
import Pro7 from "../assets/pdf/pro7.pdf";
import Pro8 from "../assets/pdf/pro8.pdf";
import Pro9 from "../assets/pdf/pro9.pdf";
import Pro10 from "../assets/pdf/pro10.pdf";
import Pro11 from "../assets/pdf/pro11.pdf";
import Pro12 from "../assets/pdf/pro12.pdf";
import Pro13 from "../assets/pdf/pro13.pdf";
import "./Flayer.css";

// import required modules
import { Autoplay, Navigation, EffectCoverflow, Pagination } from "swiper";
import { BsDownload } from "react-icons/bs";
import { FaSearchPlus } from "react-icons/fa";
import { HiOutlineSearch } from "react-icons/hi";

export default function FlayerSwiper() {
  const [state, setState] = useState(false);
  const [num, setNum] = useState(0);
  const UrlImages = [
    { file: Pro1, src: Product0 },
    { file: Pro2, src: Product1 },
    { file: Pro4, src: Product3 },
    { file: Pro5, src: Product4 },
    { file: Pro6, src: Product5 },
    { file: Pro7, src: Product6 },
    { file: Pro8, src: Product7 },
    { file: Pro9, src: Product8 },
    { file: Pro10, src: Product9 },
    { file: Pro11, src: Product10 },
    { file: Pro12, src: Product11 },
    { file: Pro13, src: Product12 },
  ];
  const handleClick = (idx) => {
    setNum(idx);
  };

  return (
    <>
      <div
        onClick={() => setState(false)}
        className={`${state ? "active" : "noActive"} modal__flayer`}
      >
        {<img src={UrlImages[num].src} alt="nnnn" />}
      </div>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        centeredSlides={true}
        slidesPerView={"auto"}
        spaceBetween={20}
        coverflowEffect={{
          rotate: 30,
          stretch: 0,
          depth: 90,
          modifier: 1,
          slideShadows: true,
        }}
        navigation={true}
        pagination={{ clickable: true }}
        modules={[Autoplay, EffectCoverflow, Navigation, Pagination]}
        className="mySwiper active relative__swiper "
      >
        <>
          {UrlImages?.map((item, idx) => {
            return (
              <SwiperSlide key={idx} className="swiper__slide">
                <img src={item.src} alt="image booor" />
                <div className="swiperr__body">
                  <a
                    href={item.file}
                    target="_blank"
                    className="download__button"
                  >
                    <BsDownload />{" "}
                  </a>
                  <button
                    // href={`https://google.com/${idx}`}
                    className="search__button"
                    onClick={() => {
                      handleClick(idx);
                      setState(true);
                    }}
                  >
                    <HiOutlineSearch />{" "}
                  </button>
                </div>
              </SwiperSlide>
            );
          })}
        </>
      </Swiper>
    </>
  );
}
