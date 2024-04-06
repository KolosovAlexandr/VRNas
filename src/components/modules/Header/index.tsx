import styles from "./header.module.scss";
import { Navbar } from "../Navbar";

export const Header = () => {
  return (
    <header className={styles.header}>
      <Navbar />
    </header>
  );
};
