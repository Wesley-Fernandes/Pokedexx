import Style from "./Header.css";
import React from "react";
import icon from "../../Img/Icon.webp";

export default function Header() {
  return (
    <header id="header">
      <a href="/">
        <img src={icon} />
        <h1>POKEDEX</h1>
      </a>
    </header>
  );
}
