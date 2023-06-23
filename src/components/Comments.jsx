import React, { useState } from "react";
import { useFetch } from "../useFetch";
import { useTranslation } from "react-i18next";

function Comments() {
    const [stat, setStat] = useState(false);
  const [cl, setCl] = useState(false);
  const { t, i18n } = useTranslation();
  const [pro, setPro] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const { data } = useFetch(
    "https://alximik.pythonanywhere.com/main/all_info/"
  );
  return (
    <div className="customers">
      {data?.comments.map((item) => {
        return (
          <div className="customer" key={item.full_name}>
            <div className="user">
              <img
                src={`https://alximik.pythonanywhere.com/${item.photo}`}
                alt=""
              />
              <div>
                <h4>{item.full_name}</h4>
                <p>{item.job}</p>
              </div>
            </div>
            <p>
              {!isActive && item.comment.slice(0, 200)}
              {isActive && item.comment}
            </p>
            <span onClick={setIsActive((isActive) => !isActive)}>
              {!isActive ? "Show" : "Hide"} More{" "}
            </span>
            <h5>{item.product.dateTime.slice(0, 10)}</h5>
          </div>
        );
      })}
    </div>
  );
}

export default Comments;
