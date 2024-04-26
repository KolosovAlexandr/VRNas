import Link from "next/link";
import style from "./linkTransparent.module.scss";

type ILinkTransparent = {
  text?: string;
  className: string;
  href: string;
  src?: string;
};

export const LinkTransparent = ({
  text,
  className,
  href,
  src,
}: ILinkTransparent) => {
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
