"use client";
import { useRef } from "react";
import { Menu } from "../Menu";
import { configNavbar } from "@/constants/configurationNavbar";
import style from "./navbar.module.scss";

export const Navbar = ({ mobile = false }: { mobile?: boolean }) => {
  const refNav = useRef(null);

  return (
    <nav className={style.menu} ref={refNav}>
      <Menu data={configNavbar} refNav={refNav} mobile={mobile} />
      {mobile && (
        <button className={style.menu__btn}>
          <span>Contact us</span>
        </button>
      )}
    </nav>
  );
};
