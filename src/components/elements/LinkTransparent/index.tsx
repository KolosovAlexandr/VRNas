import Link from "next/link";
import { IConfigLink } from "@/types/IConfigLink";
import style from "./linkTransparent.module.scss";

export const LinkTransparent = ({
  text,
  className,
  href = "#",
  image,
}: IConfigLink) => {
  return image ? (
    <Link href={href} className={`${style.linkTransparent} ${className}`}>
      <img className={style.linkTransparent__image} src={image} alt="icon" />
    </Link>
  ) : (
    <Link href={href} className={`${style.linkTransparent} ${className}`}>
      <span className={style.linkTransparent__text}>{text}</span>
    </Link>
  );
};
