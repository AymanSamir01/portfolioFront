import React, { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-scroll";
import { useTranslation } from "react-i18next";

export default function Navbar() {
  const [scrolling, setScrolling] = useState(false);
  const { t, i18n } = useTranslation();

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setScrolling(true);
      document
        .getElementById("navbarSupportedContent")
        .classList.remove("show");
    } else {
      setScrolling(false);
      document
        .getElementById("navbarSupportedContent")
        .classList.remove("show");
    }
  };

  // change background color of menu when i click on it without scroll
  function changeBackground() {
    const navbar = document.getElementById("navbar-example2");
    if (navbar.classList.contains("scrolled") && window.scrollY === 0) {
      navbar.classList.remove("scrolled");
    } else {
      navbar.classList.add("scrolled");
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <header id="home">
        <nav
          id="navbar-example2"
          className={`navbar ${
            scrolling ? "scrolled" : ""
          } navbar-expand-lg  navbar-dark fixed-top`}
        >
          <div
            className={`${
              i18n.language === "ar" ? "rtl-direction" : ""
            } container d-flex flex-row`}
          >
            <Link className="navbar-brand fw-bold links " to="home">
              {t("portfolio")}
            </Link>
            <div className="dropWeb d-flex align-items-center gap-4 text-white">
              <div className="nav-item dropdown">
                <div
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <i className="fa-solid fa-globe fs-4"></i>
                </div>
                <ul
                  className={`dropdown-menu ${
                    i18n.language === "ar" ? "start-0" : ""
                  }`}
                >
                  <li>
                    <p
                      onClick={() => {
                        i18n.changeLanguage("en");
                        const navbar =
                          document.getElementById("navbar-example2");
                        if (
                          navbar.classList.contains("scrolled") &&
                          window.scrollY === 0
                        ) {
                          navbar.classList.remove("scrolled");
                        }
                      }}
                      className="dropdown-item mb-0"
                    >
                      EN
                    </p>
                  </li>
                  <li>
                    <p
                      onClick={() => {
                        i18n.changeLanguage("ar");
                        const navbar =
                          document.getElementById("navbar-example2");
                        if (
                          navbar.classList.contains("scrolled") &&
                          window.scrollY === 0
                        ) {
                          navbar.classList.remove("scrolled");
                        }
                      }}
                      className="dropdown-item mb-0"
                    >
                      AR
                    </p>
                  </li>
                </ul>
              </div>
              <div
                className=""
                type="button"
                onClick={() => changeBackground()}
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <i className="fa-solid fa-bars fs-4"></i>
              </div>
            </div>
            <div
              className={`collapse navbar-collapse ${
                i18n.language === "ar" ? " flex-grow-0" : ""
              }`}
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav  ms-auto mb-2 mb-lg-0">
                <li className="nav-item me-2">
                  <Link
                    className="nav-link"
                    to="slider"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={150}
                    aria-current="page"
                  >
                    {t("home")}
                  </Link>
                </li>
                <li className="nav-item me-2">
                  <Link
                    className="nav-link"
                    to="about"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={150}
                  >
                    {t("about")}
                  </Link>
                </li>
                <li className="nav-item me-2">
                  <Link
                    className="nav-link"
                    to="services"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={150}
                  >
                    {t("services")}
                  </Link>
                </li>
                <li className="nav-item me-2">
                  <Link
                    className="nav-link"
                    to="faqs"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={150}
                  >
                    {t("faqs")}
                  </Link>
                </li>
                <li className="nav-item me-2">
                  <Link
                    className="nav-link"
                    to="clients"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={150}
                  >
                    {t("clients")}
                  </Link>
                </li>
                <li className="nav-item me-2">
                  <Link
                    className="nav-link"
                    to="contacts"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={150}
                  >
                    {t("contact")}
                  </Link>
                </li>
                <li className="nav-item dropdown dropMobile">
                  <div
                    className="nav-link dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <i className="fa-solid fa-globe fs-4"></i>
                  </div>
                  <ul
                    className={`dropdown-menu ${
                      i18n.language === "ar" ? "start-0" : ""
                    }`}
                  >
                    <li>
                      <p
                        onClick={() => {
                          i18n.changeLanguage("en");
                        }}
                        className="dropdown-item mb-0"
                      >
                        EN
                      </p>
                    </li>
                    <li>
                      <p
                        onClick={() => {
                          i18n.changeLanguage("ar");
                        }}
                        className="dropdown-item mb-0"
                      >
                        AR
                      </p>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}
