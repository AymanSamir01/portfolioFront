import React, { useEffect } from "react";
import { useState } from "react";
// import { Link, NavLink } from "react-router-dom";
import { Link, animateScroll as scroll } from "react-scroll";

export default function Navbar() {
  const [scrolling, setScrolling] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setScrolling(true);
    } else {
      setScrolling(false);
    }
  };

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
          <div className="container">
            <Link className="navbar-brand fw-bold links" to="/">
              Portfolio
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav  ms-auto mb-2 mb-lg-0">
                <li className="nav-item me-2">
                  <Link
                    className="nav-link"
                    to="slider"
                    spy={true}
                    smooth={true}
                    offset={-30}
                    duration={300}
                    aria-current="page"
                  >
                    Home
                  </Link>
                </li>
                <li className="nav-item me-2">
                  <Link
                    className="nav-link"
                    to="about"
                    spy={true}
                    smooth={true}
                    offset={-30}
                    duration={300}
                  >
                    About
                  </Link>
                </li>
                <li className="nav-item me-2">
                  <Link
                    className="nav-link"
                    to="services"
                    spy={true}
                    smooth={true}
                    offset={-30}
                    duration={300}
                  >
                    Services
                  </Link>
                </li>
                <li className="nav-item me-2">
                  <Link
                    className="nav-link"
                    to="faqs"
                    spy={true}
                    smooth={true}
                    offset={-30}
                    duration={300}
                  >
                    FAQs
                  </Link>
                </li>
                <li className="nav-item me-2">
                  <Link
                    className="nav-link"
                    to="clients"
                    spy={true}
                    smooth={true}
                    offset={-30}
                    duration={300}
                  >
                    Clients
                  </Link>
                </li>
                <li className="nav-item me-2">
                  <Link
                    className="nav-link"
                    to="contacts"
                    spy={true}
                    smooth={true}
                    offset={-30}
                    duration={300}
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}
