import { MenuItems } from "../MenuItems";
import { INavbar } from "@/types/INavbar";
import style from "./menu.module.scss";

type IMenu = {
  data: INavbar[];
  refNav: React.RefObject<HTMLSelectElement>;
  mobile: boolean;
};

export const Menu = ({ data, refNav, mobile }: IMenu) => {
  return (
    <ul className={`${mobile ? style.menu__list_mobile : style.menu__list}`}>
      {data.map((item) => (
        <MenuItems item={item} key={item.id} refNav={refNav} mobile={mobile} />
      ))}
    </ul>
  );
};
