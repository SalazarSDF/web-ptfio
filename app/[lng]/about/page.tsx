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
  // <Link href={`/${lng}`}>Back</Link>

  const JSXListItems = listItems.map((el) => {
    const isAbout = el.name === "about";

    return isAbout ? (
      <li key={el.name}>
        <span className={styles.aboutLink}>{t(`${el.name}`)}</span>
      </li>
    ) : (
      <li key={el.name}>
        <Link className={styles.listLink} href={`${lng}/${el.href}`}>
          {t(`${el.name}`)}
        </Link>
      </li>
    );
  });
  //TODO: ADD CONTACTS github linkedin e-mial
  return (
    <div className={styles.aboutContainer}>
      <aside className={styles.aside}>
        <nav className={styles.nav}>
          <ul className={styles.navList}>{JSXListItems}</ul>
        </nav>
      </aside>

      <main className={styles.main}>
        <section className={styles.section}>
          <h2 className={styles.title}>{t("title")}</h2>
          <hr className={styles.hor} />

          <div className={styles.parList}>
            {aboutInfo.map((el) => (
              <p key={el}>{el}</p>
            ))}
          </div>

          <hr className={styles.hor} />
          <h2 className={styles.title}>{t("contacts")}</h2>
          <hr className={styles.hor} />
        </section>
      </main>
    </div>
  );
}
