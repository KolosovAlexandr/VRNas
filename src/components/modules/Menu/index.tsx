import { MenuItems } from "../MenuItems";
import { INavbar } from "@/types/INavbar";
import style from "./menu.module.scss";

export const Menu = ({
  data,
  refNav,
}: {
  data: INavbar[];
  refNav: React.RefObject<HTMLSelectElement>;
}) => {
  return (
    <ul className={style.menu__list}>
      {data.map((item) => (
        <MenuItems item={item} key={item.id} refNav={refNav} />
      ))}
    </ul>
  );
};
