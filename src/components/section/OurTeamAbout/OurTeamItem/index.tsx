import Image from "next/image";
import style from "./ourTeamItem.module.scss";

type IOurTeamItem = {
  props: {
    id: string;
    src: string;
    alt: string;
    name: string;
    job: string;
  };
};

export const OurTeamItem = ({
  props,
  className,
  width,
  height,
}: IOurTeamItem & { className: string; width: number; height: number }) => {
  const { id, src, alt, name, job } = props;
  return (
    <li key={id} className={`${style.item} ${className}`}>
      <div className={style.item__image}>
        <Image src={src} alt={alt} width={width} height={height} />
      </div>
      <div className={style.item__info}>
        <p className={style.item__name}>{name}</p>
        <p className={style.item__job}>{job}</p>
      </div>
    </li>
  );
};
