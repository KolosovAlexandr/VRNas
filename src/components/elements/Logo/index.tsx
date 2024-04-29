import Link from "next/link";
import Image from "next/image";
import { memo } from "react";
import style from "./logo.module.scss";

// eslint-disable-next-line react/display-name
export const Logo = memo(() => {
  return (
    <Link href="#" className={style.logo}>
      <Image src="/assets/icons/Logo.svg" alt="logo" height={38} width={109} />
    </Link>
  );
});
