import { IConfigAdvantages } from "@/types/IConfigAdvantages";
import style from "./advantagesItem.module.scss";

export const AdvantagesItem = ({
  src,
  alt,
  title,
  text,
}: IConfigAdvantages) => {
  console.log(src);
  console.log(alt);
  return (
    <div className={style.column}>
      <div className={style.column__image}>
        <img src={src} alt={alt} />
      </div>
      <h2 className={style.column__title}>{title}</h2>
      <p className={style.column__text}>{text}</p>
    </div>
  );
};
