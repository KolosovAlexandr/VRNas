"use client";
import { useRef, memo } from "react";
import { Menu } from "../Menu";
import { dataNavbar } from "@/constants/navbar";
import style from "./navbar.module.scss";

// eslint-disable-next-line react/display-name
export const Navbar = memo(({ mobile = false }: { mobile?: boolean }) => {
  const refNav = useRef(null);

  return (
    <nav className={style.menu} ref={refNav}>
      <Menu data={dataNavbar} refNav={refNav} mobile={mobile} />
      {mobile && (
        <button className={style.menu__btn}>
          <span>Contact us</span>
        </button>
      )}
    </nav>
  );
});
