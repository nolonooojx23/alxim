import React from "react";
import { useParams } from "react-router-dom";
import { useFetch } from "../useFetch";

function BatafsilProduct() {
  const { id } = useParams();
  const { data } = useFetch(
    "https://alximik.pythonanywhere.com/main/all_info/"
  );

  return (
    <div className="container">
      {data?.new_products?.map((item) => {
        if (item.id == id) {
          return (
            <div className="custom_card">
              <div className="custom_card__title media_title">
                <h1 className="custom_h1">{item.name}</h1>
                <div className="card__image_sect media_show">
                  <img
                    src={`https://alximik.pythonanywhere.com/${item.photo}`}
                    alt="rasm"
                    className="custom_card_img"
                  />
                </div>
                <p className="custom_p">
                  {item.about_uz}
                  ...
                </p>
              </div>
              <div className=" desktop_show">
                <img
                  src={`https://alximik.pythonanywhere.com/${item.photo}`}
                  alt=""
                  className="desktop_show"
                />
              </div>
            </div>
          );
        }
      })}
    </div>
  );
}

export default BatafsilProduct;
