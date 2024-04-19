import { LinkTransparent } from "@/components/elements/LinkTransparent";
import { IConfigArticles } from "@/types/IConfigArticles";
import arrowNext from "../../../../public/assets/icons/Arrow-next.svg";
import Link from "next/link";
import style from "./articlesItem.module.scss";

export const ArticlesItem = ({ id, tag, text, src, alt }: IConfigArticles) => {
  return (
    <div className={style.article}>
      <img className={style.article__image} src={src} alt={alt} />
      <div className={style.article__info}>
        <div className={style.article__tag}>{tag}</div>
        <Link className={style.article__text} href="#">
          {text}
        </Link>
      </div>
      <LinkTransparent
        className={`${style.article__btn} ${style.button}`}
        href="#"
        image={arrowNext.src}
      />
    </div>
  );
};
