import React from "react";
import "./Header.css";
import HeroButton from "./HeroButton";

export default function Header() {
  return (
    <div className="outerheader">
      <div className="innerbox">
        <div className="flex-col">
          <p className="header_display flex-vcenter">
            Week 1 | Form and Technique
          </p>
        </div>
        <div className="header_number-here">
          <p className="header_txt-973">
            The World’s Fittest Women Kara Saunders trains you for the next
            eight weeks to build strength, mobility and endurance in this series{" "}
          </p>
        </div>
        <HeroButton className="headerbutton" />
      </div>
    </div>
  );
}
