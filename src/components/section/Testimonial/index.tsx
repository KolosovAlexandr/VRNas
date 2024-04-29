"use client";
import { useState } from "react";
import { Title } from "@/components/elements/Title";
import { TestimonialItem } from "@/components/section/Testimonial/TestimonialItem";
import { dataTestimonial } from "@/constants/testimonial";
import Image from "next/image";
import image from "../../../../public/assets/images/man-4.png";
import style from "./testimonial.module.scss";

export const Testimonial = () => {
  const [list, setList] = useState(dataTestimonial);
  const toggleActiveClick = (id: string) => {
    setList(
      list.map((el) =>
        el.id === id ? { ...el, active: !el.active } : { ...el, active: false }
      )
    );
  };
  return (
    <section className={style.testimonial}>
      <div className={style.testimonial__container}>
        <div className={style.testimonial__top}>
          <Title
            classNameH2={style.testimonial__title}
            classNameH3={style.testimonial__subtitle}
            textH2="testimonial"
            textH3="What Our Clients Are Saying"
            marginBottom="0"
          />
        </div>
        <div className={style.testimonial__body}>
          <Image
            className={style.testimonial__image}
            src={image.src}
            alt="image"
            width={1250}
            height={1250}
          />
          <div className={style.clients}>
            {list.map((el) => (
              <TestimonialItem
                key={el.name}
                clientImg={el.clientImg}
                name={el.name}
                text={el.text}
                job={el.job}
                id={el.id}
                active={el.active}
                toggleClick={toggleActiveClick}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
