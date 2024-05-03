"use client";
import { useState, useEffect, memo, useCallback } from "react";
import { Logo } from "@/components/elements/Logo";
import { Navbar } from "../Navbar";
import { Burger } from "@/components/elements/Burger";
import { LinkTransparent } from "@/components/elements/LinkTransparent";
import { usePathname } from "next/navigation";
import style from "./header.module.scss";

// eslint-disable-next-line react/display-name
export const Header = memo(() => {
  const [topScroll, setTopScroll] = useState(0);
  const [openBurger, setOpenBurger] = useState(false);

  const path = usePathname();

  const toggleOpenBurger = useCallback(() => {
    setOpenBurger(!openBurger);
    if (openBurger) document.body.classList.remove("lock");
    if (!openBurger) document.body.classList.add("lock");
  }, [openBurger]);

  useEffect(() => {
    setOpenBurger(false);
    document.body.classList.remove("lock");
  }, [path]);

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
          <div className={style.header__contact}>
            <LinkTransparent text="Contact us" href="/contact_us" />
          </div>
          <Burger active={openBurger} toggleOpenBurger={toggleOpenBurger} />
        </div>
      </div>
      <div
        className={`${style.header__menu_mobile} ${
          openBurger ? style.active : ""
        }`}
      >
        {openBurger && <Navbar mobile={true} />}
      </div>
    </header>
  );
});
