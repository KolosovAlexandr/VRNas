import style from "./navbar.module.scss";
import Link from "next/link";
import { configurationNavbar } from "@/constants/configurationNavbar";

export const Navbar = () => {
  return (
    <nav className={style.nav}>
      <ul>
        {configurationNavbar.map((el) => (
          <li key={el.id}>
            <Link href={el.href}>{el.title}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
