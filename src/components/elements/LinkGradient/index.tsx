import Link from "next/link";
import style from "./linkGradient.module.scss";

type ILinkGradient = {
  text: string;
  className?: string;
  href: string;
};

export const LinkGradient = ({
  text,
  className,
  href = "#",
}: ILinkGradient) => {
  return (
    <Link href={href} className={`${style.linkGradient} ${className}`}>
      {text}
    </Link>
  );
};
