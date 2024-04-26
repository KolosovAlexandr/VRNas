import Image from "next/image";
import style from "./partnersItem.module.scss";

type IPartnersItem = {
  src: string;
  alt: string;
};

export const PartnersItem = ({ src, alt }: IPartnersItem) => {
  return (
    <div className={`${style.partner}`}>
      <div className={style.partner__logo}>
        <img src={src} alt={alt} />
      </div>
    </div>
  );
};
