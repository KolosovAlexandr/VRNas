import style from "./advantages.module.scss";
import { AdvantagesColumn } from "@/components/modules/AdvantagesColumn";
import { configAdvantages } from "@/constants/configurationAdvantages";

export const Advantages = () => {
  return (
    <section className={style.advantages}>
      <div className={style.advantages__container}>
        <div className={style.advantages__body}>
          <div className={style.advantages__content}>
            {configAdvantages.map((el) => (
              <AdvantagesColumn
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
