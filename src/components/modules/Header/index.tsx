"use client";
import { useState, useEffect } from "react";
import { Logo } from "@/components/elements/Logo";
import { Navbar } from "../Navbar";
import { ButtonTransparent } from "@/components/elements/Buttons/ButtonTransparent";
import style from "./header.module.scss";

export const Header = () => {
  const [topScroll, setTopScroll] = useState(0);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setTopScroll(window.scrollY);
    });
    return window.removeEventListener("scroll", () => {});
  }, []);

  return (
    <header
      className={`${style.header} ${topScroll > 0 ? style.headerScroll : ""}`}
    >
      <div className={style.header__container}>
        <div className={style.header__column}>
          <Logo />
        </div>
        <div className={style.header__column}>
          <div className={style.header__menu}>
            <Navbar />
          </div>
        </div>
        <div className={style.header__column}>
          <ButtonTransparent text="Contact us" />
        </div>
      </div>
    </header>
  );
};
