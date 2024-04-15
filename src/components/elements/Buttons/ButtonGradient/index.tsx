import style from "./buttonGradient.module.scss";

export const ButtonGradient = ({
  text,
  padding,
}: {
  text: string;
  padding: string;
}) => {
  return (
    <button className={style.buttonGradient} style={{ padding: padding }}>
      {text}
    </button>
  );
};
