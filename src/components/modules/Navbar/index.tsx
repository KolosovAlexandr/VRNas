"use client";
import { useRef } from "react";
import { Menu } from "../Menu";
import { configNavbar } from "@/constants/configurationNavbar";
import style from "./navbar.module.scss";

export const Navbar = () => {
  const refNav = useRef(null);

  return (
    <nav className={style.menu} ref={refNav}>
      <Menu data={configNavbar} refNav={refNav} />
    </nav>
  );
};
