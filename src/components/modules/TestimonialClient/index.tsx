"use client";
import { useState } from "react";
import { IConfigTestimonial } from "@/types/IConfigTestimonial";
import style from "./testimonialClient.module.scss";

export const TestimonialClient = ({
  clientImg,
  text,
  name,
  job,
}: IConfigTestimonial) => {
  const [active, setActive] = useState(false);
  const toggleClick = () => {
    setActive(!active);
  };
  return (
    <div className={style.client}>
      <button
        onClick={toggleClick}
        className={
          active ? `${style.client__btn} ${style.active}` : style.client__btn
        }
      >
        <img src={clientImg} alt="" />
      </button>
      <div className={style.client__body}>
        <div className={style.client__text}>{text}</div>
        <div className={style.client__name}>
          <span>{name}</span> - {job}
        </div>
      </div>
    </div>
  );
};
