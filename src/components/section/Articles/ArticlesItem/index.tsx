import Image from "next/image";
import Link from "next/link";
import style from "./articlesItem.module.scss";

type IArticlesItem = {
  props: {
    tag: string;
    text: string;
    src: string;
    alt: string;
    href: string;
  };
};

export const ArticlesItem = ({
  props,
  className,
  children,
  blog,
}: IArticlesItem & {
  className?: string;
  children?: React.ReactNode;
  blog: boolean;
}) => {
  const { tag, text, src, alt, href } = props;
  return (
    <div className={`${style.article} ${className}`}>
      <div className={`${style.article__image} ${blog ? style.blog : ""}`}>
        <Image src={src} alt={alt} layout="fill" />
      </div>
      <div className={`${style.article__info} ${blog ? style.blog : ""}`}>
        <div className={style.article__tag}>{tag}</div>
        <Link className={style.article__text} href={href}>
          {text}
        </Link>
      </div>
      <div className={`${style.article__link} ${blog ? style.blog : ""}`}>
        {children}
      </div>
    </div>
  );
};
