"use client";
import { useEffect, useState } from "react";
import { ArticlesItem } from "../Articles/ArticlesItem";
import { dataArticles } from "@/constants/articles";
import Link from "next/link";
import style from "./blog.module.scss";

export const Blog = () => {
  const [countElements] = useState(9);
  const [page, setPage] = useState(1);
  const [data, setData] = useState(dataArticles.slice(0, countElements * page));
  const [totalPages, setTotalPages] = useState([]);

  const pages = () => {
    let arr: number[] = [];
    let total = Math.ceil(dataArticles.length / countElements);
    for (let i = 1; i <= total; i++) {
      arr.push(i);
    }
    setTotalPages(arr as never);
  };
  useEffect(() => {
    pages();
  }, []);

  const changePage = (el: number) => {
    let range = el * countElements;
    setPage(el);
    setData(dataArticles.slice(range - countElements, range));
  };

  return (
    <section className={style.blog}>
      <div className={style.blog__container}>
        <div className={style.blog__content}>
          {data.map((el) => (
            <ArticlesItem
              props={el}
              key={el.id}
              className={style.article}
              blog={true}
            >
              <Link href={`/recent_articles/${el.id}`}>read more</Link>
            </ArticlesItem>
          ))}
        </div>
        <div className={style.pagination}>
          <ul className={style.pagination__list}>
            {totalPages.map((el) => (
              <li
                key={el}
                className={`${style.pagination__item} ${
                  el === page ? style.active : ""
                } `}
                onClick={() => changePage(el)}
              >
                {el}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};
