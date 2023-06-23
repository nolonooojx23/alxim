import React from "react";
import { useParams } from "react-router-dom";
import { useFetch } from "../useFetch";
import "./SimpleTavsiyalar.css";

function SimpleTavsiyalar() {
  const { id } = useParams();
  const { data } = useFetch(
    "https://alximik.pythonanywhere.com/main/all_info/"
  );

  return (
    <div className="container">
      {data?.advices?.map((item) => {
        if (item.id == id) {
          return (
            <div className="tavsiya_content">
              <div className="tavsiya_title">
                <h1>{item.title_uz}</h1>
                <p>{item.about_uz}</p>
              </div>
              <div className="tavsiya_image">
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

export default SimpleTavsiyalar;
