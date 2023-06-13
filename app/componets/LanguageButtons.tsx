import Link from "next/link";
import styles from "./LanguageButtons.module.css";
export default function LanguageButtons() {
  return (
    <div className={styles.lang}>
      <Link href={"/en"} className={styles.langButton}>
        EN
      </Link>
      <span className={styles.slesh}>/</span>
      <Link href={"/ru"} className={styles.langButton}>
        RU
      </Link>
    </div>
  );
}
