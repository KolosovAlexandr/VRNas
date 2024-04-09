import style from "./buttonTransparent.module.scss";

export const ButtonTransparent = ({ text }: { text: string }) => {
  return (
    <button className={style.buttonTransparent}>
      <span className={style.buttonTransparent__text}>{text}</span>
    </button>
  );
};
