import React from "react";
import Accordions from "../Accordions/Accordions";
import img from "../../Assets/Images/faqs.png";

export default function Faqs() {
  return (
    <>
      <section className={`faqs padding-section section-padding`} id="faqs">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-5">
              <div className="image">
                <img src={img} className="w-100 ps-4 pb-4" alt="" />
              </div>
            </div>
            <div className="col-lg-7 p-xl-3 mt-5 mt-lg-0">
              <div>
                <h3 className="fw-bold mb-4">Why Choose Us?</h3>
                <Accordions />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
