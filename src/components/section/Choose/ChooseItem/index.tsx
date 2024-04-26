"use client";
import { useState } from "react";
import { IChooseItem } from "@/types/IChoose";
import Image from "next/image";
import arrow from "../../../../../public/assets/icons/Arrow down.svg";
import style from "./chooseItem.module.scss";

export const ChooseItem = ({ className, title, text }: IChooseItem) => {
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
        {title} <Image src={arrow.src} alt="icon" width={7.5} height={5} />
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
