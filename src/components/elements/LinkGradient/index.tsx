import Link from "next/link";
import { IConfigLink } from "@/types/IConfigLink";
import style from "./linkGradient.module.scss";

export const LinkGradient = ({ text, className, href = "#" }: IConfigLink) => {
  return (
    <Link href={href} className={`${style.linkGradient} ${className}`}>
      {text}
    </Link>
  );
};
