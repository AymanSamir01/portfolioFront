import React from "react";
import Style from "./Footer.module.css";
import { useTranslation } from "react-i18next";

export default function Footer() {
  const [t, i18n] = useTranslation();
  return (
    <>
      <footer
        className={`${Style.footer} ${
          i18n.language === "ar" ? "rtl-direction" : ""
        } bg-dark pt-4 pb-3`}
      >
        <p className="paragraph text-center px-5">
          Copy Right 2023 © By Portfolio All Rights Reserved
        </p>
      </footer>
    </>
  );
}
