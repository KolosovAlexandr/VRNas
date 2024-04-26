import { Title } from "@/components/elements/Title/Index";
import { ChooseItem } from "../Choose/ChooseItem";
import { dataFAQ } from "@/constants/FAQ";
import style from "./FAQ.module.scss";

export const FAQ = () => {
  return (
    <section className={style.asked}>
      <div className={style.asked__container}>
        <div className={style.asked__top}>
          <Title
            classNameH2={style.asked__title}
            classNameH3={style.asked__subtitle}
            textH2="FAQ"
            textH3="Frequently Asked Questions"
            marginBottom="1rem"
          />
          <p className={style.asked__text}>
            At VRNas, we want to make sure that you have all the information you
            need to make informed decisions about our VR services. Here are some
            of the most common questions we receive:
          </p>
        </div>
        <div className={style.asked__bottom}>
          <ul className={style.asked__list}>
            {dataFAQ.map((el) => (
              <li key={el.id}>
                <ChooseItem
                  className={style.asked__item}
                  title={el.question}
                  text={el.answer}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};
