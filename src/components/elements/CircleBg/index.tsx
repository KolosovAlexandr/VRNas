import style from "./circleBg.module.scss";

type IProps = {
  img: string;
  className?: string;
};

export const CircleBg = ({ img, className }: IProps) => {
  return (
    <div className={`${className} ${style.container}`}>
      <img src={img} alt="" />
    </div>
  );
};
