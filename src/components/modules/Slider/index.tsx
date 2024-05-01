"use client";
import { useState } from "react";
import style from "./slider.module.scss";

type IDataHome = {
  src: string;
  alt: string;
  tag: string;
  text: string;
  id: string;
};

type IDataService = {
  id: string;
  title: string;
  subtitle: string;
  paragraph_1: string;
  paragraph_2: string;
  paragraph_3: string;
  paragraph_4: string;
  list: string[];
};

type ISlider = {
  data: IDataHome[] | IDataService[];
  children: React.ReactNode;
  pagination: boolean;
  className?: string;
};

export const Slider = ({ data, children, pagination, className }: ISlider) => {
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
    for (let i = 0; i < data.length; i++) {
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
      newPosition = data.length - 1;
    }
    translateFullSlides(newPosition);
    setSliderPosition(newPosition);
  };

  const nextSlideHandler = () => {
    let newPosition = sliderPosition;
    if (newPosition < data.length - 1) {
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

  const touchEndHandler = () => {
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
  const mouseEndHandler = () => {
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
    for (let i = 0; i < data.length; i++) {
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
    <div className={`${style.slider} ${className ? className : ""}`}>
      <div className={style.slider__swiper}>
        <div
          id="swiper"
          className={`${style.slider__wrapper} ${
            mouseClicked ? style.active : ""
          }`}
          onTouchStart={(e) => touchStartHandler(e)}
          onTouchMove={(e) => touchMoveHandler(e)}
          onTouchEnd={touchEndHandler}
          onMouseDown={(e) => mouseStartHandler(e)}
          onMouseMove={(e) => mouseMoveHandler(e)}
          onMouseUp={mouseEndHandler}
          onMouseLeave={mouseLeaveHandler}
        >
          {children}
        </div>
      </div>
      {pagination ? (
        <div className={style.pagination}>
          {data.map((el, i) => (
            <span
              onClick={() => jumpToSlideHandler(i)}
              key={el.id}
              className={`${style.pagination__bullet} ${
                sliderPosition === i ? style.active : ""
              }`}
            ></span>
          ))}
        </div>
      ) : null}
    </div>
  );
};
