"use client";

import { useState } from "react";
import { IConfigService } from "@/types/IConfigService";
import { LinkTransparent } from "@/components/elements/LinkTransparent";
import style from "./serviceCard.module.scss";

export const ServiceCard = ({ id, src, alt, title, text }: IConfigService) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className={style.card}>
      <div
        className={`${style.card__body} ${isOpen ? style.active : ""}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className={style.card__top}>
          <div className={style.card__image}>
            <img src={src} alt={alt} />
          </div>
          <div className={style.card__title}>{title}</div>
          <button
            className={`${style.card__btn_mobile} ${
              isOpen ? style.active : ""
            }`}
          ></button>
        </div>
        <div className={style.card__spoiler}>
          <div className={style.card__content}>
            <p className={style.card__text}>{text}</p>
            <LinkTransparent
              className={style.card__link}
              href="#"
              text="learn more"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
