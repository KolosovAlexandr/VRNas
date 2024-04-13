import { IAdvantages } from "@/types/IConfigAdvantages";
import style from "./advantagesColumn.module.scss";

export const AdvantagesColumn = ({ src, alt, title, text }: IAdvantages) => {
  return (
    <div className={style.advantages__column}>
      <div className={style.advantages__image}>
        <img src={src} alt={alt} />
      </div>
      <h2 className={style.advantages__title}>{title}</h2>
      <p className={style.advantages__text}>{text}</p>
    </div>
  );
};
