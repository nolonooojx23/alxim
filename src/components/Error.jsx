import React from "react";
import "./Post.css";
import { useTranslation } from "react-i18next";
function Success() {
  const { t } = useTranslation();
  return <div className="error">{t("error")}....</div>;
}

export default Success;
