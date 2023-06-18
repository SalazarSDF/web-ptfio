import Link from "next/link";
import { useTranslation } from "@/app/i18n";
import styles from "./NavAside.module.css";
import LanguageButtons from "./LanguageButtons";

const navItems = [
  { name: "home", href: "/" },
  { name: "about", href: "/about" },
  { name: "projects", href: "/projects" },
];

export default async function NavAside({
  active,
  lng,
}: {
  active: string;
  lng: string;
}) {
  const { t } = await useTranslation(lng, "nav");
  const JSXNavItems = navItems.map((el) => {
    const isActive = el.name === active;
    return isActive ? (
      <li key={el.name}>
        <span className={styles.activeLink}>{t(`${el.name}`)}</span>
      </li>
    ) : (
      <li key={el.name}>
        <Link className={styles.listLink} href={`${lng}/${el.href}`}>
          {t(`${el.name}`)}
        </Link>
      </li>
    );
  });

  return (
    <aside className={styles.aside}>
      <nav className={styles.nav}>
        <ul className={styles.navList}>
          {JSXNavItems}{" "}
          <li>
            <LanguageButtons
              language={lng}
              ruHref={`ru/${active}`}
              enHref={`en/${active}`}
            />
          </li>
        </ul>
      </nav>
    </aside>
  );
}
