import React from "react";
import Style from "./Footer.module.css";
export default function Footer() {
  return (
    <>
      <footer className={`${Style.footer} bg-dark pt-4 pb-3`}>
        <p className="paragraph text-center px-5">
          Copy Right 2023 © By Portfolio All Rights Reserved
        </p>
      </footer>
    </>
  );
}
