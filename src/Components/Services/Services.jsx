import React from "react";
import SectionTitle from "../SectionTitle/SectionTitle";
import Style from "./Services.module.css";
import { useTranslation } from "react-i18next";
export default function Services() {
  const [t, i18n] = useTranslation();
  return (
    <>
      <section
        className={`${Style.Services} ${
          i18n.language == "ar" ? "rtl-direction" : ""
        } py-5 bg-section`}
        id="services"
      >
        <SectionTitle title={t("services")} />
        <div className="container">
          <div className="row g-4 mb-3">
            <div className="col-md-6 col-lg-4 col-xl-3">
              <div className="item bg-white text-center px-4 py-2 rounded-3 shadow">
                <div className="icon py-3 rounded-circle d-flex justify-content-center align-items-center">
                  <i className="fa-solid fa-laptop fa-2x" />
                </div>
                <h5 className="fw-bold pb-1">Web Design</h5>
                <p className="paragraph">
                  Lorem Ipsum is simply dummy text of the Lorem Ipsum has been
                  the industry's standard dummy text ever
                </p>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 col-xl-3">
              <div className="item bg-white text-center px-4 py-2 rounded-3 shadow">
                <div className="icon my-3 rounded-circle d-flex justify-content-center align-items-center">
                  <i className="fa-solid fa-bullhorn fa-2x" />
                </div>
                <h5 className="fw-bold pb-1">Branding</h5>
                <p className="paragraph">
                  Lorem Ipsum is simply dummy text of the Lorem Ipsum has been
                  the industry's standard dummy text ever
                </p>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 col-xl-3">
              <div className="item bg-white text-center px-4 py-2 rounded-3 shadow">
                <div className="icon my-3 rounded-circle d-flex justify-content-center align-items-center">
                  <i className="fa-solid fa-umbrella fa-2x" />
                </div>
                <h5 className="fw-bold pb-1">Development</h5>
                <p className="paragraph">
                  Lorem Ipsum is simply dummy text of the Lorem Ipsum has been
                  the industry's standard dummy text ever
                </p>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 col-xl-3">
              <div className="item bg-white text-center px-4 py-2 rounded-3 shadow">
                <div className="icon my-3 rounded-circle d-flex justify-content-center align-items-center">
                  <i className="fa-regular fa-gem fa-2x" />
                </div>
                <h5 className="fw-bold pb-1">Creative Design</h5>
                <p className="paragraph">
                  Lorem Ipsum is simply dummy text of the Lorem Ipsum has been
                  the industry's standard dummy text ever
                </p>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 col-xl-3">
              <div className="item bg-white text-center px-4 py-2 rounded-3 shadow">
                <div className="icon my-3 rounded-circle d-flex justify-content-center align-items-center">
                  <i className="fa-solid fa-display fa-2x" />
                </div>
                <h5 className="fw-bold pb-1">Fully Responsive</h5>
                <p className="paragraph">
                  Lorem Ipsum is simply dummy text of the Lorem Ipsum has been
                  the industry's standard dummy text ever
                </p>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 col-xl-3">
              <div className="item bg-white text-center px-4 py-2 rounded-3 shadow">
                <div className="icon my-3 rounded-circle d-flex justify-content-center align-items-center">
                  <i className="fa-solid fa-camera fa-2x" />
                </div>
                <h5 className="fw-bold pb-1">Retina Ready</h5>
                <p className="paragraph">
                  Lorem Ipsum is simply dummy text of the Lorem Ipsum has been
                  the industry's standard dummy text ever
                </p>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 col-xl-3">
              <div className="item bg-white text-center px-4 py-2 rounded-3 shadow">
                <div className="icon my-3 rounded-circle d-flex justify-content-center align-items-center">
                  <i className="fa-solid fa-bullhorn fa-2x" />
                </div>
                <h5 className="fw-bold pb-1">Branding</h5>
                <p className="paragraph">
                  Lorem Ipsum is simply dummy text of the Lorem Ipsum has been
                  the industry's standard dummy text ever
                </p>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 col-xl-3">
              <div className="item bg-white text-center px-4 py-2 rounded-3 shadow">
                <div className="icon my-3 rounded-circle d-flex justify-content-center align-items-center">
                  <i className="fa-solid fa-umbrella fa-2x" />
                </div>
                <h5 className="fw-bold pb-1">Development</h5>
                <p className="paragraph">
                  Lorem Ipsum is simply dummy text of the Lorem Ipsum has been
                  the industry's standard dummy text ever
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
