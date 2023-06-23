import React from "react";
import { useParams } from "react-router-dom";
import { useFetch } from "../useFetch";
import "./Foyda.css";

function Foyda() {
  const { id } = useParams();

  const { data } = useFetch(
    "https://alximik.pythonanywhere.com/main/all_info/"
  );

  return (
    <div>
      {data?.use_products.map((prod) => {
        if (prod.id == id) {
          return (
            <div className="container">
              <div className="foyda_content">
                <div className="foyda_title">
                  <h1>{prod.title_uz}</h1>
                  <p>{prod.about_uz}</p>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Tempora itaque facere laudantium impedit debitis, minus
                    eaque id alias tenetur fugiat! Numquam fugit maxime eligendi
                    magnam repudiandae omnis rem ex et est nihil unde quasi
                    temporibus, perferendis aliquid illum illo. Culpa!
                  </p>
                </div>
                <div className="foyda_img">
                  <img
                    src={`https://alximik.pythonanywhere.com/${prod.photo}`}
                    alt=""
                  />
                </div>
              </div>
            </div>
          );
        }
      })}
    </div>
  );
}

export default Foyda;
