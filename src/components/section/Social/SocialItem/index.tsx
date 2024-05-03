import Image from "next/image";
import style from "./socialItem.module.scss";

type ISocialItem = {
  props: {
    src: string;
    title: string;
    text: string;
  };
};

export const SocialItem = ({ props }: ISocialItem) => {
  const { src, title, text } = props;
  return (
    <div className={style.item}>
      <div className={style.item__image}>
        <Image height={32} width={32} alt="icon" src={src} />
      </div>
      <div className={style.item__info}>
        <p className={style.item__title}>{title}</p>
        <p className={style.item__text}>{text}</p>
      </div>
    </div>
  );
};
