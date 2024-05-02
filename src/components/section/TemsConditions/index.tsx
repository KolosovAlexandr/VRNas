import { Title } from "@/components/elements/Title";
import { dataConditions, dataConditionsList } from "@/constants/conditions";
import Image from "next/image";
import image from "../../../../public/assets/images/man-8.png";
import style from "./temsConditions.module.scss";

export const TemsConditions = () => {
  return (
    <section className={style.conditions}>
      <Image
        src={image.src}
        alt="image"
        layout="fill"
        className={style.conditions__image_left}
      />
      <Image
        src={image.src}
        alt="image"
        layout="fill"
        className={style.conditions__image_right}
      />
      <div className={style.conditions__container}>
        <div className={style.conditions__title}>
          <Title
            textH2="Tems & Conditions"
            textH3="Tems and Conditions"
            marginBottom="2rem"
          />
        </div>
        <p className={style.conditions__post}>
          Welcome to VRNas. Please read these Terms and Conditions carefully
          before using our website and services.
        </p>
        <div className={style.conditions__article}>
          <p className={style.conditions__subtitle}>Acceptance of Term</p>
          <p className={style.conditions__text}>
            By accessing or using any part of our website or services, you agree
            to be bound by these Terms and Conditions. If you do not agree to
            all the terms and conditions of this agreement, then you may not
            access the website or use any services.
          </p>
          <p className={style.conditions__subtitle}>
            Use of Website and Services
          </p>
          <p className={style.conditions__text}>
            You may use our website and services solely for lawful purposes and
            in accordance with these Terms and Conditions. You agree not to use
            our website or services:
          </p>
          <ul className={style.conditions__list}>
            {dataConditionsList.map((el) => (
              <li className={style.conditions__item} key={el}>
                {el}
              </li>
            ))}
          </ul>
          {dataConditions.map((el) => (
            <div key={el.id} className={style.conditions__article}>
              <p className={style.conditions__subtitle}>{el.title}</p>
              <p className={style.conditions__text}>{el.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
