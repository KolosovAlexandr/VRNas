import { LinkTransparent } from "@/components/elements/LinkTransparent";
import arrowNext from "../../../../public/assets/icons/Arrow-next.svg";
import { IConfigArticles } from "@/types/IConfigArticles";
import Link from "next/link";
import style from "./articlesItem.module.scss";

export const ArticlesItem = ({
  id,
  tag,
  text,
  image,
  alt,
}: IConfigArticles) => {
  return (
    <div className={style.article}>
      <img className={style.article__image} src={image} alt={alt} />
      <div className={style.article__info}>
        <div className={style.article__tag}>{tag}</div>
        <Link href="#">{text}</Link>
      </div>
      <LinkTransparent
        className={style.article__btn}
        href="#"
        image={arrowNext.src}
      />
    </div>
  );
};
