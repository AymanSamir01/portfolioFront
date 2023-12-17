import React from "react";
import SectionTitle from "../SectionTitle/SectionTitle";
import Sponsers from "../Sponsers/Sponsers";
import { useTranslation } from "react-i18next";

export default function Clients() {
  const [t, i18n] = useTranslation();
  return (
    <>
      <section
        className={`py-5 bg-section ${
          i18n.language === "ar" ? "rtl-direction" : ""
        }`}
        id="clients"
      >
        <SectionTitle title={t("our clients")} />
        <div className="">
          <Sponsers />
        </div>
      </section>
    </>
  );
}
