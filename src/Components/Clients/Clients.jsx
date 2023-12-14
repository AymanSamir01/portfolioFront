import React from "react";
import SectionTitle from "../SectionTitle/SectionTitle";
import Sponsers from "../Sponsers/Sponsers";

export default function Clients() {
  return (
    <>
      <section className={`py-5 bg-section`} id="clients">
        <SectionTitle title="Our Clients" />
        <div className="">
          <Sponsers />
        </div>
      </section>
    </>
  );
}
