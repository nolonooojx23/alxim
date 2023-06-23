import React, { useState } from "react";
import {
  FaTelegramPlane,
  FaInstagram,
  FaFacebookF,
  FaPhone,
} from "react-icons/fa";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";

function Footer() {
  const { t } = useTranslation();

  const [date, setDate] = useState(new Date().getFullYear());
  return (
    <div className="footer" id="footer">
      <div className="footer_media">
        <section>
          <div className="container navthree_container footer_m">
            <ul>
              <li>
                <img src="/assets/logo/logo.png" alt="" />
              </li>
              <li>
                <NavLink to="/">{t("nav_text.1")}</NavLink>
              </li>
              <li>
                <NavLink to="/about">{t("nav_text.2")}</NavLink>
              </li>
              <li>
                <NavLink to="/products">{t("nav_text.3")}</NavLink>
              </li>
              <li>
                <NavLink to="/news">{t("nav_text.4")}</NavLink>
              </li>
              <li>
                <NavLink to="/career">{t("nav_text.5")}</NavLink>
              </li>
              <li>
                <NavLink to="/partners">{t("nav_text.6")}</NavLink>
              </li>

              <li>
                <NavLink to="/tavsiyalar">{t("nav_text.7")}</NavLink>
              </li>
              <li className="link">
                <a className="link_a" href="http://alximik.uz">
                  &copy;{date}
                  <span>alximik.uz</span>
                </a>
              </li>
            </ul>
          </div>
        </section>
      </div>
      <div className="container footer_container">
        <div className="siteFooter">
          <div>
            <img src="/assets/logo/footerlogo.png" alt="" />
            <p>{t("home.5")}</p>
          </div>
          <ul>
            <h3>{t("home.7")}</h3>
            <li>
              <a href="/">{t("footer.1")}</a>
            </li>
            <li>
              <a href="/about">{t("footer.2")}</a>
            </li>
            <li>
              <a href="/products">{t("footer.3")}</a>
            </li>
            <li>
              <a href="/products">{t("footer.4")}</a>
            </li>
            <li>
              <a href="/tavsiyalar">{t("footer.5")}</a>
            </li>
            <li>
              <a href="/career">{t("footer.6")}</a>
            </li>
          </ul>
          <ul>
            <h3>{t("footer.8")}</h3>
            <li>
              <a href="">{t("footer.9")}</a>
            </li>
            <li>
              <a href="">{t("footer.10")}</a>
            </li>
            <li>
              <a href="">{t("footer.11")}</a>
            </li>
            <li>
              <a href="/products">{t("footer.12")}</a>
            </li>
            <li>
              <a href="/tavsiyalar">{t("footer.13")}</a>
            </li>
            <li>
              <a href="/career">{t("footer.14")}</a>
            </li>
          </ul>
          <ul>
            <h3>{t("footer.15")}</h3>
            <li>
              <span>
                <FaTelegramPlane />
              </span>
              <a href="https://t.me/alkimyogar_info">alkimyogar_info</a>
            </li>
            <li>
              <span>
                <FaInstagram />
              </span>
              <a href="https://www.instagram.com/alkimyogaruz/">alkimyogaruz</a>
            </li>
            <li>
              <span>
                <FaFacebookF />
              </span>
              <a href="https://www.facebook.com/search/top/?q=al%20kimyogar%20pharm">
                Al kimyogar pharm
              </a>
            </li>
            <h3 style={{ marginTop: "20px" }}>{t("footer.16")}</h3>
            <a
              style={{ display: "flex", gap: "10px", marginBottom: "10px" }}
              href="tel://+998 73 240 00 30"
            >
              <FaPhone /> <h4>+998 73 240 00 30</h4>
            </a>
            <a
              style={{ display: "flex", gap: "10px" }}
              href="tel://+998 99 401 30 00"
            >
              <FaPhone /> <h4>+998 99 401 30 00</h4>
            </a>
          </ul>
        </div>
        {/* <hr /> */}
        <div className="after" style={{ borderTop: "2px solid white" }}>
          © {date} <a href="">alximik.uz</a> {t("footer.17")}
        </div>
      </div>
    </div>
  );
}

export default Footer;
