import { Title } from "@/components/elements/Title";
import style from "./counter.module.scss";

export const Counter = () => {
  return (
    <section className={style.counter}>
      <div className={style.counter__container}>
        <div className={style.counter__column}>
          <Title
            classNameH2=""
            classNameH3=""
            textH2="Happy clients"
            textH3="123k+"
            marginBottom="0"
          />
        </div>
        <div className={style.counter__column}>
          <Title
            classNameH2=""
            classNameH3=""
            textH2="Project complete"
            textH3="300k+"
            marginBottom="0"
          />
        </div>
        <div className={style.counter__column}>
          <Title
            classNameH2=""
            classNameH3=""
            textH2="Years experience"
            textH3="10+"
            marginBottom="0"
          />
        </div>
      </div>
    </section>
  );
};
