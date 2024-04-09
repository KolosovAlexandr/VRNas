import style from "./page.module.scss";
import { Header } from "@/components/modules/Header";

export default function Home() {
  return (
    <div className={style.wrapper}>
      <Header />
    </div>
  );
}
