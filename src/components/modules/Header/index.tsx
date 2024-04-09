import { Logo } from "@/components/elements/Logo";
import { Navbar } from "../Navbar";
import { ButtonTransparent } from "@/components/elements/Buttons/ButtonTransparent";
import style from "./header.module.scss";

export const Header = () => {
  return (
    <header className={style.header}>
      <div className={style.header__container}>
        <div className={style.header__column}>
          <Logo />
        </div>
        <div className={style.header__column}>
          <div className={style.header__menu}>
            <Navbar />
          </div>
        </div>
        <div className={style.header__column}>
          <ButtonTransparent text="Contact us" />
        </div>
      </div>
    </header>
  );
};
