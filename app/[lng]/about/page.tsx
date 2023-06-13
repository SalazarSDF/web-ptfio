import Link from "next/link";
import { useTranslation } from "@/app/i18n";
import styles from "./about.module.css";

const listItems = [
  { name: "home", href: "/" },
  { name: "about", href: "/about" },
  { name: "projects", href: "/projects" },
];

export default async function About({
  params: { lng },
}: {
  params: { lng: string };
}) {
  const { t } = await useTranslation(lng, "about-page");
  const aboutInfo = t("about-info").split("|");
  return (
    <div className={styles.aboutContainer}>
      <header className={styles.header}>
        <nav>
          <ul className={styles.navList}>
            {listItems.map((el) => (
              <li key={el.name}>
                <Link href={`${lng}/${el.href}`}>{t(`${el.name}`)}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      <h1>{t("title")}</h1>
      <Link href={`/${lng}`}>Back</Link>
      <div className={styles.parList}>
        {aboutInfo.map((el) => (
          <p key={el}>{el}</p>
        ))}
      </div>
    </div>
  );
}
