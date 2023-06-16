import Link from "next/link";
import styles from "./LanguageButtons.module.css";
export default function LanguageButtons({
  language,
  enHref,
  ruHref,
}: {
  language: string;
  enHref: string;
  ruHref: string;
}) {
  const isEnglish = language === "en";
  const isRussian = language === "ru";
  return (
    <div className={styles.lang}>
      <Link
        href={enHref}
        className={isEnglish ? styles.langButtonActive : styles.langButton}
      >
        EN
      </Link>
      <span className={styles.slesh}>/</span>
      <Link
        href={ruHref}
        className={isRussian ? styles.langButtonActive : styles.langButton}
      >
        RU
      </Link>
    </div>
  );
}
