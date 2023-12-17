import React from "react";
import Style from "./SectionTitle.module.css";

export default function SectionTitle({ title, description }) {
  return (
    <>
      <div className={Style.sectionTitle}>
        <h2 className="fw-bolder">{title}</h2>
        <p>{description}</p>
      </div>
    </>
  );
}
