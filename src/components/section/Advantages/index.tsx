import style from "./advantages.module.scss";
import { AdvantagesItem } from "@/components/section/Advantages/AdvantagesItem";
import { dataAdvantages } from "@/constants/advantages";

export const Advantages = () => {
  return (
    <section className={style.advantages}>
      <div className={style.advantages__container}>
        <div className={style.advantages__body}>
          <div className={style.advantages__content}>
            {dataAdvantages.map((el) => (
              <AdvantagesItem
                key={el.title}
                text={el.text}
                src={el.src}
                alt={el.alt}
                title={el.title}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
