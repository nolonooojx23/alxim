import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { IoMdArrowDropdown } from "react-icons/io";
import "semantic-ui-css/semantic.min.css";
import { Button, Dropdown } from "semantic-ui-react";
import "./DropDown.css";
import { useState } from "react";

const styles = {
  position: "absolute",
  top: "20px",
  background: "white",
  right: 0,
  width: "100px",
  borderRadius: "5px",
  flexDirection: "column",
  zIndex: "999",
};
const route = {
  color: "black",
  display: "block",
  padding: "5px 7px",
  borderRadius: "10px",
};

const DropDown = ({ name, text, text1, text3, to, path1, path2, image }) => {
  const [drop, setDrop] = useState(false);
  const Navigator = useNavigate();
  return (
    <>
      <NavLink to={to}>{name}</NavLink>
      <div className="hover_me">
        <IoMdArrowDropdown
          onClick={() => setDrop(!drop)}
          style={{ marginLeft: "2px", cursor: "pointer", padding: "2px" }}
          className="dropped"
        ></IoMdArrowDropdown>
        <div style={styles} className="dropTrue">
          {image ? (
            <a className="logo__image_bottomNav" href="http://rizon.uz/">
              <img src={image} alt="image__logo" />
            </a>
          ) : (
            ""
          )}
          <a
            onClick={() => Navigator(to)}
            href={path1}
            style={route}
            className="route"
          >
            {text}
          </a>
          <a
            onClick={() => Navigator(to)}
            href={path2}
            style={route}
            className="route"
          >
            {text1}
          </a>
          <a
            onClick={() => Navigator(to)}
            href="#"
            style={route}
            className="route"
          >
            {text3}
          </a>
        </div>
      </div>
    </>
  );
};

export default DropDown;
