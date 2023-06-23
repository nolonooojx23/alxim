import React from "react";
import "./Post.css";
import { useTranslation } from "react-i18next";
function Success() {
  const { t } = useTranslation();
  return <div className="success">{t("success")}....</div>;
}

export default Success;
