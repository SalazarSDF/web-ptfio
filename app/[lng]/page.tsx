import Stars from "../componets/Stars";
import Link from "next/link";
import styles from "./page.module.css";
import LanguageButtons from "../componets/LanguageButtons";
import { useTranslation } from "../i18n";

const listItems = [
  { name: "home", href: "/" },
  { name: "about", href: "/about" },
  { name: "projects", href: "/projects" },
];
export default async function Home({
  params: { lng },
}: {
  params: { lng: string };
}) {
  const noStars = false;
  console.log("NO STARS:", noStars);
  const { t } = await useTranslation(lng, "translation");
  return (
    <div className={styles.container}>
      <nav className={styles.navigation}>
        <ul className={styles.navList}>
          {listItems.map((el) => (
            <li key={el.name}>
              <Link className={styles.listLink} href={`${lng}/${el.href}`}>
                {t(`${el.name}`)}
              </Link>
            </li>
          ))}
          <li>
            <LanguageButtons language={lng} enHref="/en" ruHref="/ru" />
          </li>
        </ul>
      </nav>
      <h1 className={styles.heading}>{t("title")}</h1>
      <p className={styles.paragraph}>{t("paragraph")}</p>
      {noStars ? "" : <Stars quantity={200} refresh={true} />}
    </div>
  );
}
