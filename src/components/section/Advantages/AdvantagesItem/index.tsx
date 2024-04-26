import Image from "next/image";
import style from "./advantagesItem.module.scss";

type IAdvantagesItem = {
  src: string;
  alt: string;
  title: string;
  text: string;
};

export const AdvantagesItem = ({ src, alt, title, text }: IAdvantagesItem) => {
  return (
    <div className={style.column}>
      <div className={style.column__image}>
        <Image src={src} alt={alt} height={70} width={70} />
      </div>
      <h2 className={style.column__title}>{title}</h2>
      <p className={style.column__text}>{text}</p>
    </div>
  );
};
