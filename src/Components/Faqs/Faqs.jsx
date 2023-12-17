import React from "react";
import Accordions from "../Accordions/Accordions";
import img from "../../Assets/Images/faqs.png";
import { Translation, useTranslation } from "react-i18next";

export default function Faqs() {
  const [t, i18n] = useTranslation();
  return (
    <>
      <section
        className={`faqs padding-section section-padding ${
          i18n.language == "ar" ? "rtl-direction" : ""
        }`}
        id="faqs"
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-5">
              <div className="image">
                <img src={img} className="w-100 ps-4 pb-4" alt="" />
              </div>
            </div>
            <div className="col-lg-7 p-xl-3 mt-5 mt-lg-0">
              <div>
                <h3 className="fw-bold mb-4">{t("why choose us?")}</h3>
                <Accordions />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
