import { memo } from "react";
import style from "./title.module.scss";

type ITitle = {
  classNameH2: string;
  classNameH3: string;
  textH2: string;
  textH3: string;
  marginBottom: string;
};

// eslint-disable-next-line react/display-name
export const Title = memo(
  ({
    classNameH2 = "",
    classNameH3 = "",
    textH2,
    textH3,
    marginBottom,
  }: ITitle) => {
    return (
      <>
        <h2 className={`${classNameH2} ${style.title_h2}`}>{textH2}</h2>
        <h3
          className={`${classNameH3} ${style.title_h3}`}
          style={{ marginBottom: marginBottom }}
        >
          {textH3}
        </h3>
      </>
    );
  }
);
