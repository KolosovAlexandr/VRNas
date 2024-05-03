"use client";
import { useRef, memo } from "react";
import { Menu } from "../Menu";
import { dataNavbar } from "@/constants/navbar";
import { LinkTransparent } from "@/components/elements/LinkTransparent";
import style from "./navbar.module.scss";

// eslint-disable-next-line react/display-name
export const Navbar = memo(({ mobile = false }: { mobile?: boolean }) => {
  const refNav = useRef(null);

  return (
    <nav className={style.menu} ref={refNav}>
      <Menu data={dataNavbar} refNav={refNav} mobile={mobile} />
      {mobile && (
        <div className={style.menu__btn}>
          <LinkTransparent text="Contact us" href="/contact_us" />
        </div>
      )}
    </nav>
  );
});
