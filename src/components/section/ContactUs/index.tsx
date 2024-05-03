"use client";
import { useState } from "react";
import { Title } from "@/components/elements/Title";
import Image from "next/image";
import image from "../../../../public/assets/images/man-9.png";
import style from "./contact.module.scss";

export const ContactUs = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <section className={style.contact}>
      <div className={style.contact__container}>
        <div className={style.contact__content}>
          <div className={style.contact__column}>
            <Title textH2="Contact us" textH3="Get in Touch" marginBottom="" />
            <p
              className={style.contact__text}
            >{`At VRNas, we're always happy to hear from our clients and potential clients. Whether you have a question about our VR services, want to discuss a potential project, or just want to say hello, we're here to help.`}</p>
            <form className={style.form} onSubmit={onSubmit}>
              <div className={style.form__wrapper}>
                <input
                  type="text"
                  className={style.form__input}
                  placeholder="First Name"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
                <input
                  type="text"
                  className={style.form__input}
                  placeholder="Last Name"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </div>
              <div className={style.form__wrapper}>
                <input
                  type="text"
                  className={style.form__input}
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <input
                  type="text"
                  className={style.form__input}
                  placeholder="Phone Number"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>
              <textarea
                placeholder="Message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
              <button type="submit" className={style.form__btn}>
                Send message
              </button>
            </form>
          </div>
          <div className={style.contact__column}>
            <div className={style.contact__image}>
              <Image src={image.src} alt="image" layout="fill" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
