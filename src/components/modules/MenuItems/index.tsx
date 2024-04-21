"use client";

import Link from "next/link";
import { IConfigNavbar } from "@/types/IConfigNavbar";
import { SubMenu } from "../SubMenu";
import { useState } from "react";
import { useClickOutside } from "@/hooks/useClickOutSide";
import style from "./menuItems.module.scss";

type IMenuItems = {
  item: IConfigNavbar;
  refNav: React.RefObject<HTMLSelectElement>;
  mobile: boolean;
};

export const MenuItems = ({ item, refNav, mobile }: IMenuItems) => {
  const [isOpen, setIsOpen] = useState(false);

  useClickOutside(refNav, () => setIsOpen(false));

  const toggleIsOpen = (
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
    <li className={`${mobile ? style.menu__item_mobile : style.menu__item}`}>
      {item.children ? (
        <>
          <SubMenu
            data={item.children}
            isOpen={isOpen}
            onClick={toggleIsOpen}
            mobile={mobile}
            title={item.title}
          />
        </>
      ) : (
        <Link
          href={item.href}
          className={`${mobile ? style.menu__link_mobile : style.menu__link}`}
        >
          {item.title}
        </Link>
      )}
    </li>
  );
};
