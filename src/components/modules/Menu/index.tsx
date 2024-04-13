import { MenuItems } from "../MenuItems";
import { IConfigNavbar } from "@/types/IConfigNavbar";
import style from "./menu.module.scss";

export const Menu = ({
  data,
  refNav,
}: {
  data: IConfigNavbar[];
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
