// import { RouterProvider, createBrowserRouter } from "react-router-dom";
// import Layout from "./Components/Layout/Layout";
// import NotFound from "./Components/NotFound/NotFound";
import Navbar from "./Components/Navbar/Navbar";
import Slider from "./Components/MainSlider/MainSlider";
import Services from "./Components/Services/Services";
import About from "./Components/About/About";
import Contacts from "./Components/Contacts/Contacts";
import Footer from "./Components/Footer/Footer";
import Faqs from "./Components/Faqs/Faqs";
import Clients from "./Components/Clients/Clients";

import { initReactI18next } from "react-i18next";
import i18n from "i18next";
i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: require("./Locales/EN/translation.json"),
    },
    ar: {
      translation: require("./Locales/AR/translation.json"),
    },
  },
  lng: "en",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default function App() {
  // let routers = createBrowserRouter([
  //   {
  //     path: "",
  //     element: <Layout />,
  //     children: [
  //       {
  //         path: "about",
  //         element: <About />,
  //       },
  //       {
  //         path: "services",
  //         element: <Services />,
  //       },
  //       {
  //         path: "contacts",
  //         element: <Contacts />,
  //       },
  //       { path: "*", element: <NotFound /> },
  //     ],
  //   },
  // ]);
  return (
    <>
      {/* <RouterProvider router={routers}></RouterProvider> */}
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
