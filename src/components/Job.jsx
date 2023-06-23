import React, { useState } from "react";

import "./Job.css";
import {
  AnimatePresence,
  motion,
  LazyMotion,
  domAnimation,
  circOut,
  cubicBezier,
  useTransform,
} from "framer-motion";

import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from "react-icons/bs";
function Job({ data }) {

  const [numm, setNumm] = useState(3);
  const [numm1, setNumm1] = useState(2);
  const [numm2, setNumm2] = useState(1);
  const [numm3, setNumm3] = useState(0);

  const toLeft = () => {
    setNumm((numm) => (numm === 0 ? data.length - 1 : numm - 1));
    setNumm1((numm1) => (numm1 === 0 ? data.length - 1 : numm1 - 1));
    setNumm2((numm2) => (numm2 === 0 ? data.length - 1 : numm2 - 1));
    setNumm3((numm3) => (numm3 === 0 ? data.length - 1 : numm3 - 1));
  };
  const toRight = () => {
    setNumm((numm) => (numm === data.length - 1 ? 0 : numm + 1));
    setNumm1((numm1) => (numm1 === data.length - 1 ? 0 : numm1 + 1));
    setNumm2((numm2) => (numm2 === data.length - 1 ? 0 : numm2 + 1));
    setNumm3((numm3) => (numm3 === data.length - 1 ? 0 : numm3 + 1));
  };
  return (
    <>
      {data && (
        <div className="Job_flex" key={data[0].id}>
          <div className="Job_text">
            <h1>{data[numm].full_name}</h1>
            <h4>
              {/* {i18n.language === "uz"
                ? data[numm].job_uz.toUpperCase()
                : i18n.language === "ru"
                ? data[numm].job_ru.toUpperCase()
                : data[numm].job_eng.toUpperCase()} */}
            </h4>
            <p>
              {/* {i18n.language === "uz"
                ? data[numm].about_uz
                : i18n.language === "ru"
                ? data[numm].about_ru
                : data[numm].about_eng}{" "} */}
            </p>
            <BsFillArrowLeftCircleFill
              className="icon__arrow"
              onClick={toLeft}
            />
            <BsFillArrowRightCircleFill
              className="icon__arrow"
              onClick={toRight}
            />
          </div>
          <div className="Job_picture">
            {/* <AnimatePresence> */}
              <motion.div
                layout
                initial={{ x: 300 }}
                animate={{x: 0 }}
                exit={{ x: "-800px" }}
                transition={{
                  opacity: { ease: "linear" },
                  layout: { duration: 0.3 },
                }}
              >
                <img
                  // key={data[numm]}
                  src={data[numm].photo}
                  alt=""
                  className="job_img first_img"
                />
              </motion.div>
            {/* </AnimatePresence> */}
            {/* <AnimatePresence> */}
            <motion.div
              layout
              // initial={{ x: 300 }}
              animate={{ opacity: 0.5, x: 0 }}
              exit={{ x: 800 }}
              transition={{
                opacity: { ease: "linear" },
                layout: { duration: 0.3 },
              }}
            >
              <img
                src={data[numm1].photo}
                key={data[numm1]}
                alt=""
                onClick={toRight}
                className="job_img second_img"
              />
            </motion.div>
            {/* </AnimatePresence> */}
            <motion.img
              layout
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              // exit={{ x: 0 }}
              transition={{
                opacity: { ease: "linear" },
                layout: { duration: 0.3 },
              }}
              onClick={toLeft}
              src={data[numm2].photo}
              alt=""
              className="job_img third_img"
            />
            <img
              src={data[numm3].photo}
              alt=""
              className="job_img fourth_img"
            />
          </div>
        </div>
      )}
    </>
  );
}

export default Job;
