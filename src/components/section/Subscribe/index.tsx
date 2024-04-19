"use client";
import { useState } from "react";
import message from "../../../../public/assets/icons/Message.svg";
import send from "../../../../public/assets/icons/Send.svg";
import style from "./subscribe.module.scss";

export const Subscribe = () => {
  const [value, setValue] = useState("");

  const onChangeInputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
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
              <img
                src={message.src}
                alt="message"
                className={style.form__image}
              />
              <input
                onBlur={() => {}}
                className={style.form__input}
                value={value}
                onChange={onChangeInputHandler}
                type="text"
                placeholder="Enter your email address"
              />
              <button className={style.form__btn}>
                <img src={send.src} alt="send" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
