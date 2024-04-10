import style from "./buttonGradient.module.scss";

export const ButtonGradient = ({ text }: { text: string }) => {
  return (
    <div className={style.container}>
      <button className={style.buttonGradient}>{text}</button>
    </div>
  );
};
