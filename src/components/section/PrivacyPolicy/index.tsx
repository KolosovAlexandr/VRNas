import { Title } from "@/components/elements/Title";
import {
  dataPrivacyPolicy,
  dataPrivacyPolicyList,
} from "@/constants/privacyPolicy";
import Image from "next/image";
import image from "../../../../public/assets/images/man-8.png";
import style from "./privacyPolicy.module.scss";

export const PrivacyPolicy = () => {
  return (
    <section className={style.policy}>
      <Image
        src={image.src}
        alt="image"
        layout="fill"
        className={style.policy__image_left}
      />
      <Image
        src={image.src}
        alt="image"
        layout="fill"
        className={style.policy__image_right}
      />
      <div className={style.policy__container}>
        <div className={style.policy__title}>
          <Title
            textH2="Privacy Policy"
            textH3="Privacy Policy"
            marginBottom="2rem"
          />
          <p className={style.policy__post}>
            This Privacy Policy describes how [Company Name] collects, uses, and
            protects the personal information of our website visitors and
            customers.
          </p>
        </div>
        <p className={style.policy__subtitle}>Information We Collect</p>
        <p className={style.policy__text}>
          We may collect the following types of personal information:
        </p>
        <ul className={style.policy__list}>
          {dataPrivacyPolicyList[0].list.map((el) => (
            <li key={el} className={style.policy__item}>
              {el}
            </li>
          ))}
        </ul>
        <p className={style.policy__subtitle}>How We Use Your Information</p>
        <p className={style.policy__text}>
          We may use your personal information for the following purposes:
        </p>
        <ul className={style.policy__list}>
          {dataPrivacyPolicyList[1].list.map((el) => (
            <li key={el} className={style.policy__item}>
              {el}
            </li>
          ))}
        </ul>
        {dataPrivacyPolicy.map((el) => (
          <div className={style.policy__article} key={el.id}>
            <p className={style.policy__subtitle}>{el.title}</p>
            <p className={style.policy__text}>{el.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
