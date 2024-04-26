"use client";

import { useState } from "react";
import Image from "next/image";
import message from "../../../../public/assets/icons/Message.svg";
import send from "../../../../public/assets/icons/Send.svg";
import style from "./subscribe.module.scss";

export const Subscribe = () => {
  const [value, setValue] = useState("");

  const onChangeInputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
    setValue(e.target.value);
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <section className={style.subscribe}>
      <div className={style.subscribe__container}>
        <div className={style.subscribe__body}>
          <div className={style.subscribe__column}>
            <h2 className={style.subscribe__title}>
              Subscribe to our newsletter for latest updates
            </h2>
          </div>
          <div className={style.subscribe__column}>
            <form className={style.form} onSubmit={onSubmit}>
              <Image
                src={message.src}
                alt="message"
                className={style.form__image}
                width={25}
                height={49}
              />
              <input
                className={style.form__input}
                value={value}
                onChange={onChangeInputHandler}
                type="text"
                placeholder="Enter your email address"
              />
              <button className={style.form__btn} type="submit">
                <Image src={send.src} alt="send" width={17} height={17} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
