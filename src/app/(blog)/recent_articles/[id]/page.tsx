import { dataBlog } from "@/constants/articles";
import { ArticlesItem } from "@/components/section/Articles/ArticlesItem";
import Link from "next/link";
import Image from "next/image";
import arrowDown from "../../../../../public/assets/icons/Arrow down.svg";
import twitter from "../../../../../public/assets/icons/logo-twitter.svg";
import facebook from "../../../../../public/assets/icons/logo-fb-simple.svg";
import instagram from "../../../../../public/assets/icons/logo-instagram.svg";
import style from "./page.module.scss";

type IBlogArticle = {
  params: {
    id: string;
  };
};

export function generateMetadata({ params: { id } }: IBlogArticle) {
  let temp = dataBlog.filter((el) => id === el.id);
  const { text } = temp[0];
  return {
    title: text,
  };
}

export default function BlogArticle({ params: { id } }: IBlogArticle) {
  const item = dataBlog.filter((el) => {
    let temp = el.id === id;
    return temp;
  });
  const {
    text,
    tag,
    data,
    src,
    p1,
    p2,
    p3,
    p4,
    p5,
    p6,
    p7,
    image,
    image2,
    postTags,
  } = item[0];
  return (
    <section className={style.article}>
      <div className={style.article__links}>
        <Link href="/">Home</Link>
        <Image src={arrowDown.src} alt="icon" width={8} height={8}></Image>
        <Link href="/resent_articles">Recent Articles</Link>
        <Image src={arrowDown.src} alt="icon" width={8} height={8}></Image>
        <span>{text}</span>
      </div>
      <div className={style.article__container}>
        <div className={style.article__column}>
          <div className={style.article__content}>
            <div className={style.article__tag}>{tag}</div>
            <div className={style.article__title}>{text}</div>
            <div className={style.article__data}>{data}</div>
            <div className={style.article__image}>
              <Image src={src} alt="image" layout="fill"></Image>
            </div>
            <p className={style.article__text}>{p1}</p>
            <p className={style.article__text}>{p2}</p>
            <p className={style.article__text}>{p3}</p>
            <p className={style.article__text}>{p4}</p>
            <p className={style.article__text}>{p5}</p>
            <div className={style.article__wrapper}>
              <div className={style.article__action}>
                <Image src={image} alt="image" layout="fill"></Image>
              </div>
              <div className={style.article__action}>
                <Image src={image2} alt="image" layout="fill"></Image>
              </div>
            </div>
            <p className={style.article__text}>{p6}</p>
            <p className={style.article__text}>{p7}</p>
            <p className={style.article__text}>Post Tags:</p>
            <p className={style.article__tags}>{postTags}</p>
            <p className={style.article__text}>Share:</p>
            <div className={style.article__social}>
              <Link href="#">
                <Image
                  src={twitter.src}
                  alt="icon"
                  width={16}
                  height={16}
                ></Image>
              </Link>
              <Link href="#">
                <Image
                  src={facebook.src}
                  alt="icon"
                  width={16}
                  height={16}
                ></Image>
              </Link>
              <Link href="#">
                <Image
                  src={instagram.src}
                  alt="icon"
                  width={16}
                  height={16}
                ></Image>
              </Link>
            </div>
          </div>
        </div>
        <div className={style.article__column}>
          <p className={style.article__recentTitle}>Recent Article</p>
          <div className={style.article__recent}>
            {dataBlog.slice(0, 4).map((el) => (
              <ArticlesItem
                blog={false}
                key={el.id}
                props={el}
                className={style.post}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
