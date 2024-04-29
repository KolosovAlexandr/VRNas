import { memo } from "react";
import style from "./burger.module.scss";

type IBurger = {
  active: boolean;
  toggleOpenBurger: () => void;
};

// eslint-disable-next-line react/display-name
export const Burger = memo(({ active, toggleOpenBurger }: IBurger) => {
  return (
    <button
      className={`${style.burger} ${active ? style.active : ""}`}
      onClick={toggleOpenBurger}
    >
      <div className={style.burger__container}>
        <div className={style.burger__line}></div>
        <div className={style.burger__line}></div>
        <div className={style.burger__line}></div>
      </div>
    </button>
  );
});
