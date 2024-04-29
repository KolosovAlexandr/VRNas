import { INavbar } from "@/types/INavbar";
import Link from "next/link";
import style from "./subMenu.module.scss";

type ISubMenu = {
  data: INavbar[];
  isOpen: boolean;
  onClick: (
    e: React.BaseSyntheticEvent<
      MouseEvent,
      EventTarget & HTMLAnchorElement,
      EventTarget
    >
  ) => void;
  mobile: boolean;
  title: string;
  onClickBtn: () => void;
};

export const SubMenu = ({
  data,
  isOpen,
  onClick,
  mobile,
  title,
  onClickBtn,
}: ISubMenu) => {
  return (
    <div className={style.menu__spoiler}>
      <Link
        href={title.toLowerCase()}
        className={`${mobile ? style.menu__link_mobile : style.menu__link}`}
        // onClick={onClick}
      >
        {title}
      </Link>
      <button
        onClick={onClickBtn}
        className={`${mobile ? style.menu__btn_mobile : style.menu__btn} ${
          isOpen ? style.active : ""
        }`}
      ></button>
      <ul
        className={`${mobile ? style.submenu_mobile : style.submenu} ${
          isOpen ? style.active : ""
        }`}
      >
        {data.map((item) => (
          <li className={style.submenu__item} key={item.id}>
            <Link href={item.href} className={style.submenu__link}>
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
