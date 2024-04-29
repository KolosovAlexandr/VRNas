"use client";
import { useState } from "react";
import { IChooseItem } from "@/types/IChoose";
import Image from "next/image";
import arrow from "../../../../../public/assets/icons/Arrow down.svg";
import style from "./chooseItem.module.scss";

export const ChooseItem = ({ className, title, text, FAQ }: IChooseItem) => {
  const [hidden, setHidden] = useState(false);
  return (
    <div
      className={`${className} ${style.item} ${FAQ && style.asked} ${
        hidden ? style.active : ""
      }`}
      onClick={() => setHidden(!hidden)}
    >
      <button
        className={`${style.item__button} ${hidden ? style.active : ""} ${
          FAQ && style.asked__button
        }`}
      >
        {title} <Image src={arrow.src} alt="icon" width={7.5} height={5} />
      </button>
      <div className={`${style.item__text} ${hidden ? style.active : ""}`}>
        {text}
      </div>
    </div>
  );
};
