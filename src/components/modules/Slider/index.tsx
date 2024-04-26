"use client";
import { useState } from "react";
import { dataSlider } from "@/constants/slider";
import { LinkTransparent } from "@/components/elements/LinkTransparent";
import arrowNext from "../../../../public/assets/icons/Arrow-next.svg";
import Image from "next/image";
import Link from "next/link";
import style from "./slider.module.scss";

export const Slider = () => {
  const [sliderPosition, setSliderPosition] = useState(0);
  const [touchStartPosition, setTouchStartPosition] = useState(0);
  const [touchEndPosition, setTouchEndPosition] = useState(0);
  const [touched, setTouched] = useState(false);
  const [swiped, setSwiped] = useState(false);
  const [mouseStartPosition, setMouseStartPosition] = useState(0);
  const [mouseEndPosition, setMouseEndPosition] = useState(0);
  const [mouseClicked, setMouseClicked] = useState(false);
  const [mouseSwiped, setMouseSwiped] = useState(false);
  const widthPercent = 100;

  const translateFullSlides = (newPosition: number) => {
    let toTranslateX = -widthPercent * newPosition;
    for (let i = 0; i < dataSlider.length; i++) {
      let item = document.getElementById(`slide` + i);
      (item as HTMLElement).style.transform =
        `translateX(` + toTranslateX + `%)`;
    }
  };

  const prevSlideHandler = () => {
    let newPosition = sliderPosition;
    if (newPosition > 0) {
      newPosition = newPosition - 1;
    } else if (true) {
      newPosition = dataSlider.length - 1;
    }
    translateFullSlides(newPosition);
    setSliderPosition(newPosition);
  };

  const nextSlideHandler = () => {
    let newPosition = sliderPosition;
    if (newPosition < dataSlider.length - 1) {
      newPosition = newPosition + 1;
    } else if (true) {
      newPosition = 0;
    }
    translateFullSlides(newPosition);
    setSliderPosition(newPosition);
  };

  const touchStartHandler = (e: React.TouchEvent<HTMLDivElement>) => {
    setTouchStartPosition(e.targetTouches[0].clientX);
    setTouchEndPosition(e.targetTouches[0].clientX);
    setTouched(true);
  };

  const touchMoveHandler = (e: React.TouchEvent<HTMLDivElement>) => {
    setTouchEndPosition(e.targetTouches[0].clientX);
    const frameWidth = document.getElementById(`swiper`)?.offsetWidth;
    const translateDist =
      ((touchEndPosition - touchStartPosition) / (frameWidth as number)) * 100;
    translatePartialSlides(translateDist);
    if (touched === true) {
      setSwiped(true);
    }
  };

  const touchEndHandler = (e: React.TouchEvent<HTMLDivElement>) => {
    if (swiped) {
      if (touchStartPosition - touchEndPosition > 75) {
        nextSlideHandler();
      } else if (touchStartPosition - touchEndPosition < -75) {
        prevSlideHandler();
      } else {
        jumpToSlideHandler(sliderPosition);
      }
    }
    setTouched(false);
    setSwiped(false);
  };

  const mouseStartHandler = (e: React.MouseEvent<HTMLDivElement>) => {
    setMouseStartPosition(e.clientX);
    setMouseEndPosition(e.clientX);
    setMouseClicked(true);
  };
  const mouseMoveHandler = (e: React.MouseEvent<HTMLDivElement>) => {
    let frameWidth = document.getElementById("swiper")?.offsetWidth;
    if (mouseClicked === true) {
      setMouseEndPosition(e.clientX);
      let translateDist =
        ((mouseEndPosition - mouseStartPosition) / (frameWidth as number)) *
        100;
      translatePartialSlides(translateDist);
      setMouseSwiped(true);
    }
  };
  const mouseEndHandler = (e: React.MouseEvent<HTMLDivElement>) => {
    if (mouseSwiped === true) {
      if (mouseStartPosition - mouseEndPosition > 50) {
        nextSlideHandler();
      } else if (mouseStartPosition - mouseEndPosition < 50) {
        prevSlideHandler();
      } else {
        jumpToSlideHandler(sliderPosition);
      }
    }
    setMouseSwiped(false);
    setMouseClicked(false);
  };

  const mouseLeaveHandler = () => {
    setMouseClicked(false);
    jumpToSlideHandler(sliderPosition);
  };

  const translatePartialSlides = (toTranslate: number) => {
    let currentTranslation = -sliderPosition * widthPercent;
    let totalTranslation = currentTranslation + toTranslate;
    for (let i = 0; i < dataSlider.length; i++) {
      let item = document.getElementById("slide" + i);
      (item as HTMLElement).style.transform =
        `translateX(` + totalTranslation + `%)`;
    }
  };

  const jumpToSlideHandler = (index: number) => {
    translateFullSlides(index);
    setSliderPosition(index);
  };

  return (
    <div className={style.slider}>
      <div className={style.slider__swiper}>
        <div
          id="swiper"
          className={
            mouseClicked
              ? `${style.slider__wrapper} ${style.active}`
              : style.slider__wrapper
          }
          onTouchStart={(e) => touchStartHandler(e)}
          onTouchMove={(e) => touchMoveHandler(e)}
          onTouchEnd={(e) => touchEndHandler(e)}
          onMouseDown={(e) => mouseStartHandler(e)}
          onMouseMove={(e) => mouseMoveHandler(e)}
          onMouseUp={(e) => mouseEndHandler(e)}
          onMouseLeave={mouseLeaveHandler}
        >
          {dataSlider.map((el, i) => (
            <div className={style.slide} key={el.id} id={"slide" + i}>
              <Image
                src={el.src}
                alt={el.alt}
                className={style.slide__image}
                width={619}
                height={422}
              />
              <div className={style.slide__content}>
                <div className={style.slide__tag}>{el.tag}</div>
                <div className={style.slide__row}>
                  <Link href="#" className={style.slide__link}>
                    {el.text}
                  </Link>
                  <LinkTransparent
                    className={style.slide__btn}
                    src={arrowNext.src}
                    href="#"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className={style.pagination}>
        {dataSlider.map((el, i) => (
          <span
            onClick={() => jumpToSlideHandler(i)}
            key={el.id}
            className={
              sliderPosition === i
                ? `${style.pagination__bullet} ${style.active}`
                : style.pagination__bullet
            }
          ></span>
        ))}
      </div>
    </div>
  );
};
