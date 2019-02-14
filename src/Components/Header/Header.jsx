import React from "react";
import "./Header.scss";

export default function Header() {
  return (
    <header className="header">
      <img
        alt="headerimg"
        src="/img/header-img.jpg"
        className="header-background"
      />
      <div className="header-content">
        <h1 className="header-heading-1">WE ARE TELIA</h1>
        <h5 className="header-heading-5">
          Even better services both in and outside Finland.
        </h5>
      </div>
      <picture className="header-icon">
        <img alt="headericon" src="/img/header-icon.png" />
      </picture>
    </header>
  );
}
