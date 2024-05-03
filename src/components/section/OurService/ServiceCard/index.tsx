"use client";

import { useState } from "react";
import { LinkTransparent } from "@/components/elements/LinkTransparent";
import Image from "next/image";
import style from "./serviceCard.module.scss";

type IServiceCard = {
  src: string;
  alt: string;
  title: string;
  text: string;
};

export const ServiceCard = ({ src, alt, title, text }: IServiceCard) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className={style.card}>
      <div
        className={`${style.card__body} ${isOpen ? style.active : ""}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className={style.card__top}>
          <div className={style.card__image}>
            <Image src={src} alt={alt} width={48} height={48} />
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
            <div className={style.card__link}>
              <LinkTransparent href="/detail_service" text="learn more" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
