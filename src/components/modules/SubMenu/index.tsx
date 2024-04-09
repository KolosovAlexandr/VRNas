import { INavbar } from "@/types/INavbar";
import Link from "next/link";
import style from "./subMenu.module.scss";

export const SubMenu = ({
  data,
  isOpen,
  onClick,
}: {
  data: INavbar[];
  isOpen: boolean;
  onClick: () => void;
}) => {
  return (
    <div className={style.menu__spoiler}>
      <ul
        className={
          isOpen ? `${style.submenu} ${style.submenu_active}` : style.submenu
        }
      >
        {data.map((item) => (
          <li className={style.submenu__item} key={item.id}>
            <Link href={item.href} className={style.submenu__link}>
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
      <button
        onClick={onClick}
        className={
          isOpen
            ? `${style.submenu__btn} ${style.submenu__btn_active}`
            : style.submenu__btn
        }
      ></button>
    </div>
  );
};
