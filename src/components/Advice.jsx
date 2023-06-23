import React from "react";
import { useParams } from "react-router-dom";
import { useFetch } from "../useFetch";
import "./Advice.css";

function Advice() {
  const { id } = useParams();

  const { data } = useFetch(
    "https://alximik.pythonanywhere.com/main/all_info/"
  );

  return (
    <div className="container">
      {data?.advices.map((item) => {
        if (item.id == id) {
          return (
            <div className="advice_content">
              <div className="advice_title">
                <h1>{item.title_uz}</h1>
                <p>{item.about_uz}</p>
              </div>
              <div className="advice_img">
                <img
                  src={`https://alximik.pythonanywhere.com/${item.photo}`}
                  alt=""
                />
              </div>
            </div>
          );
        }
      })}
    </div>
  );
}

export default Advice;
