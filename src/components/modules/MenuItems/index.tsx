"use client";

import Link from "next/link";
import { INavbar } from "@/types/INavbar";
import { SubMenu } from "../SubMenu";
import style from "./menuItems.module.scss";
import { useState } from "react";
import { useClickOutside } from "@/hooks/useClickOutSide";

export const MenuItems = ({
  item,
  refNav,
}: {
  item: INavbar;
  refNav: React.RefObject<HTMLSelectElement>;
}) => {
  const [isOpen, setIsOpen] = useState(false);

  useClickOutside(refNav, () => setIsOpen(false));

  const toggleIsOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <li className={style.menu__item}>
      {item.children ? (
        <>
          <Link
            href={item.href}
            className={style.menu__link}
            onClick={toggleIsOpen}
          >
            {item.title}
          </Link>
          <SubMenu
            data={item.children}
            isOpen={isOpen}
            onClick={toggleIsOpen}
          />
        </>
      ) : (
        <Link href={item.href} className={style.menu__link}>
          {item.title}
        </Link>
      )}
    </li>
  );
};
