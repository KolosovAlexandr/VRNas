import Link from "next/link";
import { IConfigLink } from "@/types/IConfigLink";
import style from "./linkTransparent.module.scss";

export const LinkTransparent = ({
  text,
  className,
  href = "#",
  src,
}: IConfigLink) => {
  return src ? (
    <Link href={href} className={`${style.linkTransparent} ${className}`}>
      <img className={style.linkTransparent__image} src={src} alt="icon" />
    </Link>
  ) : (
    <Link href={href} className={`${style.linkTransparent} ${className}`}>
      <span className={style.linkTransparent__text}>{text}</span>
    </Link>
  );
};
