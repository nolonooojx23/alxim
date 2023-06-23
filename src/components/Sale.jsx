import React from "react";
import { useState } from "react";
import "./Sale.css";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { useFetch } from "../useFetch";
import Success from "./Success";
import Error from "./Error";
import { useTranslation } from "react-i18next";
function Sale({ id }) {
  const { t } = useTranslation();
  const [close, setClose] = useState(false);
  const [quan, setQuan] = useState({
    quantity: id,
  });
  const [state, setState] = useState({
    full_name: "",
    address: "",
    phone: "",
    product: id,
  });
  const handleChange = (e) => {
    let value = e.target.value;
    setState((prev) => {
      return {
        ...prev,
        [e.target.name]: value,
      };
    });
  };
  const [states, setStates] = useState();
  const { data } = useFetch(
    "http://alximik.pythonanywhere.com/product/order/quantity/"
  );
  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("https://alximik.pythonanywhere.com/product/order/", {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ...state, ...quan }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
        setStates(true);
      })
      .catch((error) => {
        console.log("Error:", error);
        setStates(false);
      });
  };
  return (
    <div className={`sales ${close ? "block" : null}`}>
      <div className="sale_bgc" onClick={() => setClose(true)}></div>
      <div className="sale">
        <AiOutlineCloseCircle
          className="close"
          onClick={() => setClose(true)}
        />
        <h1>{t("carer.2")}</h1>
        <form action="#" onSubmit={handleSubmit} className="sale_form">
          <div>
            <label htmlFor="#" className="form_label">
              {t("carer.8")}
            </label>
            <input
              type="text"
              onChange={handleChange}
              name="full_name"
              className="form_input"
            />
            <label htmlFor="#" className="form_label">
              {t("carer.9")}
            </label>
            <input
              type="text"
              onChange={handleChange}
              name="address"
              className="form_input"
            />
          </div>

          <div>
            <label htmlFor="#" className="form_label">
              {t("carer.11")}
            </label>
            <input
              type="text"
              name="phone"
              onChange={handleChange}
              className="form_input"
            />
            <label htmlFor="#" className="form_label">
              {t("carer.16")}
            </label>
            <select
              name="quantity"
              id="dropdown"
              onChange={(e) => setQuan({ quantity: e.target.value })}
              className="form_select"
            >
              <option value="">------</option>
              {data?.map((item) => (
                <option value={item.id} key={item.id}>
                  {item.quantity}
                </option>
              ))}
            </select>
          </div>
          <button
            type="Submit"
            className="form_btn"
            onClick={() => {
              setTimeout(() => {
                setClose(true);
                setStates(null);
              }, 3000);
            }}
          >
            {t("carer.15")}
          </button>
        </form>
      </div>
      {states === true ? <Success /> : states === false ? <Error /> : null}
    </div>
  );
}

export default Sale;
