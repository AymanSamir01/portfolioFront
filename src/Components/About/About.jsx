import React from "react";
import Style from "./About.module.css";
import img from "../../Assets/Images/undraw_portfolio_feedback_6r17.png";
import { useTranslation } from "react-i18next";
import { Link } from "react-scroll";

export default function About() {
  const [t, i18n] = useTranslation();
  return (
    <>
      <section
        className={`${Style.about} ${
          i18n.language === "ar" ? "rtl-direction" : ""
        } section-padding`}
        id="about"
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
                <h3 className="fw-bold">{t("about us")}</h3>
                <span className="sub-title text-uppercase d-inline-block mb-4">
                  ui / ux designer &amp; web developer
                </span>
                <p className="paragraph">
                  We are <span className="fw-bold">Programming Company</span>{" "}
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever It has survived not only five
                  centuries, but also the leap into electronic but also the leap
                  into electronic typesetting, remaining essentially unchanged.
                  It was popularised in the 1960s with the release of Letraset
                  sheets containing
                </p>
                <p className="paragraph">
                  We are Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever It has survived not only five
                  centuries, but also the leap into electronic but also the leap
                  into electronic typesetting, remaining essentially unchanged.
                  It was popularised in the 1960s with the release of Letraset
                  sheets containing
                </p>

                <div>
                  <Link
                    className="nav-link"
                    to="contacts"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={150}
                    aria-current="page"
                  >
                    <button className="btn btn-dark py-2 px-3" href="#">
                      {t("contact us")}
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
