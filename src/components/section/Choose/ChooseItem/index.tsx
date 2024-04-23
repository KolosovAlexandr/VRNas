"use client";
import { useState } from "react";
import { IConfigChoose } from "@/types/IConfigChoose";
import arrow from "../../../../../public/assets/icons/Arrow down.svg";
import style from "./chooseItem.module.scss";

export const ChooseItem = ({ className, title, text }: IConfigChoose) => {
  const [hidden, setHidden] = useState(false);
  return (
    <div
      className={`${className} ${style.item}`}
      onClick={() => setHidden(!hidden)}
    >
      <button
        className={
          !hidden ? style.item__button : `${style.item__button} ${style.active}`
        }
      >
        {title} <img src={arrow.src} alt="icon" />
      </button>
      <div
        className={
          !hidden ? style.item__text : `${style.item__text} ${style.active}`
        }
      >
        {text}
      </div>
    </div>
  );
};
