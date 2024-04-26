import { LinkTransparent } from "@/components/elements/LinkTransparent";
import Image from "next/image";
import arrowNext from "../../../../../public/assets/icons/Arrow-next.svg";
import Link from "next/link";
import style from "./articlesItem.module.scss";

type IArticlesItem = {
  tag: string;
  text: string;
  src: string;
  alt: string;
};

export const ArticlesItem = ({ tag, text, src, alt }: IArticlesItem) => {
  return (
    <div className={style.article}>
      <Image
        className={style.article__image}
        src={src}
        alt={alt}
        width={142}
        height={91}
      />
      <div className={style.article__info}>
        <div className={style.article__tag}>{tag}</div>
        <Link className={style.article__text} href="#">
          {text}
        </Link>
      </div>
      <LinkTransparent
        className={`${style.article__btn} ${style.button}`}
        href="#"
        src={arrowNext.src}
      />
    </div>
  );
};
