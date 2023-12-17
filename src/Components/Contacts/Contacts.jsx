import React from "react";
import SectionTitle from "../SectionTitle/SectionTitle";
import Style from "./Contacts.module.css";
import { useTranslation } from "react-i18next";

export default function Contacts() {
  const [t, i18n] = useTranslation();
  return (
    <>
      <section
        className={`${Style.contact} ${
          i18n.language === "ar" ? "rtl-direction" : ""
        } section-padding`}
        id="contacts"
      >
        <SectionTitle title={t("contact us")} />
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-3">
              <div>
                <div className="item text-center px-4 py-2 rounded-3">
                  <div className="icon mb-3 rounded-circle d-flex justify-content-center align-items-center">
                    <i className="fa-solid fa-location-arrow fa-2x" />
                  </div>
                  <h5 className="fw-bold pb-1">{t("address")}</h5>
                  <p className="paragraph">6834 Hollywood Blvd</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <div>
                <div className="item text-center px-4 py-2 rounded-3">
                  <div className="icon mb-3 rounded-circle d-flex justify-content-center align-items-center">
                    <i className="fa-solid fa-envelope fa-2x" />
                  </div>
                  <h5 className="fw-bold pb-1">{t("email")}</h5>
                  <p className="paragraph">Support@website.com</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <div>
                <div className="item text-center px-4 py-2 rounded-3">
                  <div className="icon mb-3 rounded-circle d-flex justify-content-center align-items-center">
                    <i className="fa-solid fa-phone fa-2x" />
                  </div>
                  <h5 className="fw-bold pb-1">{t("phone")}</h5>
                  <p className="paragraph">+20 010 2517 8918</p>
                </div>
              </div>
            </div>
          </div>
          <div className="row justify-content-center g-4 mt-3">
            <div className="col-lg-5">
              <input
                className="form-control border-0"
                type="text"
                placeholder={t("name")}
                aria-label="default input example"
              />
            </div>
            <div className="col-lg-5">
              <input
                className="form-control border-0"
                type="email"
                placeholder={t("email")}
                aria-label="default input example"
              />
            </div>
            <div className="col-lg-10">
              <textarea
                className="form-control border-0"
                placeholder={t("message")}
                defaultValue={""}
              />
              <button
                className="submit d-block mt-4 btn btn-dark py-2 px-5 fw-semibold"
                type="submit"
              >
                {t("submit")}
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
