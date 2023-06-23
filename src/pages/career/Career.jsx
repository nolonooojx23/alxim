import React, { useState } from "react";
import "./Career.css";
import pic from "/assets/logo/logo.png";
import doc from "/assets/imgs/doctor.png";
import Marketing from "../../components/Marketing";
import { useTranslation } from "react-i18next";
import { useFetch } from "../../useFetch";
import { useEffect } from "react";
import Success from "../../components/Success";
import Error from "../../components/Error";
import Tanlov from "../../components/Tanlov";
function Career() {
  const [state, setState] = useState();
  useEffect(() => {
    document.documentElement.scrollTop = 0;
  }, []);
  const { data } = useFetch(
    "https://alximik.pythonanywhere.com/application/job/info/"
  );
  const { t, i18n } = useTranslation();
  const [full_name, setFull_name] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [phone, setPhone] = useState("");
  const [vocation, setVocation] = useState(0);
  const [address, setAddress] = useState(0);
  const [degree, setDegree] = useState(0);
  const [salary, setSalary] = useState(0);
  // const handleChange = (e) => {
  //   let value = e.target.value;
  //   setState((prev) => {
  //     return {
  //       ...prev,
  //       [e.target.name]: e.target.name == "salary" ? Number(value) : value,
  //     };
  //   });
  // };
  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("https://alximik.pythonanywhere.com/application/job/", {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        full_name,
        dateOfBirth,
        phone,
        vocation,
        address,
        degree,
        salary,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        // console.log("Success:", data);
        setState(true);
        setFull_name("");
        setVocation("");
        setDateOfBirth("");
        setDegree("");
        setAddress("");
        setSalary("");
        setPhone("");
      })
      .catch((error) => {
        setState(false);
        console.error("Error:", error);
      });
  };

  return (
    <>
      <header>
        <div className="container" >
          <div className="logo__container"><img src={pic} alt="" className="con_pic" /></div>
          <h1>
            {t("carer.1")}
          </h1>
          {/* <a href="#ariza">{t("carer.2")}</a> */}
        </div>
      </header>
        <div className="values__container" id="values">
        <Tanlov/>
        </div>
      <main className="container" >
        <h1>{t("carer.3")}</h1>
        {/* <img src={doc} alt="" className="qadr_img" /> */}
        {/* <h2>{t("carer.4")}</h2> */}
        <p>{t("carer.5")}</p>
        {/* <Marketing /> */}
        <form
          action="#"
          id="ariza"
          className="container form"
          onSubmit={handleSubmit}
        >
          <h2>{t("carer.6")}</h2>
          <div className="form_dropdown">
            <label htmlFor="#">{t("carer.7")}</label>
            <select
              className="section"
              name="vocation"
              id="dropdown"
              onChange={(e) => setVocation(e.target.value)}
              value={vocation}
            >
              <option value="">------</option>
              {data?.vocation?.map((item) => (
                <option value={item.id} key={item.id}>
                  {i18n.language == "uz"
                    ? item.job_uz
                    : i18n.language == "ru"
                    ? item.job_ru
                    : item.job_eng}
                </option>
              ))}
            </select>
          </div>
          <div className="form__input_names" id="form__career">
            <div className="flex">
              <label htmlFor="#">{t("carer.8")}</label> <br />
              <input
                type="text"
                name="full_name"
                value={full_name}
                className="input"
                onChange={(e) => setFull_name(e.target.value)}
              />
            </div>
            <div className="flex">
              <label htmlFor="#">{t("carer.9")}</label> <br />
              <select
                className="section"
                name="address"
                id="dropdown"
                onChange={(e) => setAddress(e.target.value)}
                value={address}
              >
                <option value="">------</option>
                {data?.city?.map((item) => (
                  <option value={item.id} key={item.id}>
                    {i18n.language == "uz"
                      ? item.name_uz
                      : i18n.language == "ru"
                      ? item.name_ru
                      : item.name_eng}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="form__input_names">
            <div className="flex">
              <label htmlFor="#">{t("carer.10")}</label> <br />
              <input
                type="date"
                name="dateOfBirth"
                className="input"
                onChange={(e) => setDateOfBirth(e.target.value)}
                value={dateOfBirth}
              />
            </div>
            <div className="flex">
              <label htmlFor="#">{t("carer.11")}</label> <br />
              <input
                type="number"
                className="input"
                name="phone"
                onChange={(e) => setPhone(e.target.value)}
                value={phone}
              />
            </div>
          </div>
          <div className="form__input_names my-4">
            <div className="flex">
              <label htmlFor="#">{t("carer.12")}</label> <br />
              <select
                className="section"
                name="degree"
                id="dropdown"
                onChange={(e) => setDegree(e.target.value)}
                value={degree}
              >
                <option value="">------</option>
                {data?.degree?.map((item) => (
                  <option value={item.id} key={item.id}>
                    {i18n.language == "uz"
                      ? item.name_uz
                      : i18n.language == "ru"
                      ? item.name_ru
                      : item.name_eng}
                  </option>
                ))}
              </select>
            </div>
            <div className="flex">
              <label htmlFor="#">{t("carer.13")}</label> <br />
              <select
                className="section"
                name="salary"
                id="dropdown"
                onChange={(e) => setSalary(e.target.value)}
                value={salary}
              >
                <option value="">------</option>
                {data?.salary?.map((item) => (
                  <option value={item.id} key={item.id}>
                    {item.amount}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="form__picture">
            {/* <input type="file" className="pic" /> */}
            {/* <input type="file" className="pic" multiple accept="image/*" /> */}
          </div>
          <button
            type="submit"
            className="end"
            onClick={() => {
              setTimeout(() => {
                setState(null);
              }, 3000);
            }}
          >
            {t("carer.15")}
          </button>
        </form>
        {state === true ? <Success /> : state === false ? <Error /> : null}
      </main>
    </>
  );
}

export default Career;
