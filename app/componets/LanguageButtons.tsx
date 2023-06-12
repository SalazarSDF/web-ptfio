import styles from "./LanguageButtons.module.css";
export default function LanguageButtons() {
  return (
    <div className={styles.lang}>
      <button className={styles.langButton}>EN</button>
      <span className={styles.slesh}>/</span>
      <button className={styles.langButton}>RU</button>
    </div>
  );
}
