"use client";

import Link from "next/link";
import { IConfigNavbar } from "@/types/IConfigNavbar";
import { SubMenu } from "../SubMenu";
import { useState } from "react";
import { useClickOutside } from "@/hooks/useClickOutSide";
import style from "./menuItems.module.scss";

export const MenuItems = ({
  item,
  refNav,
}: {
  item: IConfigNavbar;
  refNav: React.RefObject<HTMLSelectElement>;
}) => {
  const [isOpen, setIsOpen] = useState(false);

  useClickOutside(refNav, () => setIsOpen(false));

  const toggleIsOpen = () => {
    setIsOpen(!isOpen);
  };
  const toggleIsOpenWithEvent = (
    e: React.BaseSyntheticEvent<
      MouseEvent,
      EventTarget & HTMLAnchorElement,
      EventTarget
    >
  ) => {
    e.preventDefault();
    setIsOpen(!isOpen);
  };

  return (
    <li className={style.menu__item}>
      {item.children ? (
        <>
          <Link
            href={item.href}
            className={style.menu__link}
            onClick={toggleIsOpenWithEvent}
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
