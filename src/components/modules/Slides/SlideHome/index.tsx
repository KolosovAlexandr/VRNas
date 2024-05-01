import Link from "next/link";
import Image from "next/image";
import { LinkTransparent } from "@/components/elements/LinkTransparent";
import arrowNext from "../../../../../public/assets/icons/Arrow-next.svg";
import style from "./slideHome.module.scss";

export type ISlideHome = {
  props: {
    src: string;
    alt: string;
    tag: string;
    text: string;
    id: string;
    href: string;
  };
  i: number;
};

export const SlideHome = ({ props, i }: ISlideHome) => {
  const { id, src, alt, tag, text, href } = props;
  return (
    <div className={style.slide} key={id} id={"slide" + i}>
      <Image
        src={src}
        alt={alt}
        className={style.slide__image}
        width={619}
        height={422}
      />
      <div className={style.slide__content}>
        <div className={style.slide__tag}>{tag}</div>
        <div className={style.slide__row}>
          <Link href="#" className={style.slide__link}>
            {text}
          </Link>
          <LinkTransparent
            className={style.slide__btn}
            src={arrowNext.src}
            href={href}
          />
        </div>
      </div>
    </div>
  );
};
