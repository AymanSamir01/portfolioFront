import React from "react";
import Navbar from "../Navbar/Navbar";
import Slider from "../MainSlider/MainSlider";
import Services from "../Services/Services";
import About from "../About/About";
import Contacts from "../Contacts/Contacts";
import Footer from "../Footer/Footer";
import Faqs from "../Faqs/Faqs";
import Clients from "../Clients/Clients";

export default function Layout() {
  return (
    <>
      <Navbar />
      <Slider />
      <About />
      <Services />
      <Faqs />
      <Clients />
      <Contacts />
      <Footer />
    </>
  );
}
