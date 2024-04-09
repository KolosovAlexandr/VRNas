"use client";
import { useRef } from "react";
import { Menu } from "../Menu";
import { configurationNavbar } from "@/constants/configurationNavbar";
import style from "./navbar.module.scss";

export const Navbar = () => {
  const refNav = useRef(null);

  return (
    <nav className={style.menu} ref={refNav}>
      <Menu data={configurationNavbar} refNav={refNav} />
    </nav>
  );
};
