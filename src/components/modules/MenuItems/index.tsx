"use client";

import Link from "next/link";
import { INavbar } from "@/types/INavbar";
import { SubMenu } from "../SubMenu";
import { useState, useEffect } from "react";
import { useClickOutside } from "@/hooks/useClickOutSide";
import { usePathname } from "next/navigation";
import style from "./menuItems.module.scss";

type IMenuItems = {
  item: INavbar;
  refNav: React.RefObject<HTMLSelectElement>;
  mobile: boolean;
};

// eslint-disable-next-line react/display-name
export const MenuItems = ({ item, refNav, mobile }: IMenuItems) => {
  const [isOpen, setIsOpen] = useState(false);

  useClickOutside(refNav, () => setIsOpen(false));

  const path = usePathname();

  useEffect(() => {
    setIsOpen(false);
  }, [path]);

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

  const toggleIsOpenButton = () => {
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
            onClickBtn={toggleIsOpenButton}
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
