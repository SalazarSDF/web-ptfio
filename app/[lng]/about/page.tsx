import Link from "next/link";
import { useTranslation } from "@/app/i18n";
import styles from "./about.module.css";
import LanguageButtons from "@/app/componets/LanguageButtons";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { MdMail } from "react-icons/md";

const listItems = [
  { name: "home", href: "/" },
  { name: "about", href: "/about" },
  { name: "projects", href: "/projects" },
];

const techSkills = [
  "React (+ Hooks), Redux.",
  "SPA using HTML5, CSS3, JS Frameworks",
  "Development using ES6 / ES7, Typescript.",
  "Responsive web development.",
  "CSS Animations.",
  "Package managers – NPM, Yarn, Webpack.",
  "CSS pre-compilers – SASS, PostCSS, LESS.",
  "Clean coding practices – ESLint.",
  "Version control – Git, BitBucket.",
  "CI/CD – Heroku, Vercel.",
  "Rest APIs",
  "UI/UX design.",
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
  return (
    <div className={styles.aboutContainer}>
      <aside className={styles.aside}>
        <nav className={styles.nav}>
          <ul className={styles.navList}>
            {JSXListItems}{" "}
            <li>
              <LanguageButtons
                language={lng}
                ruHref="ru/about"
                enHref="en/about"
              />
            </li>
          </ul>
        </nav>
      </aside>

      <main className={styles.main}>
        <section>
          <h2 className={styles.title}>{t("title")}</h2>
          <hr className={styles.hor} />
          <div className={styles.parList}>
            {aboutInfo.map((el) => (
              <p key={el}>{el}</p>
            ))}
          </div>
          <h2 className={styles.title}>{t("tech")}</h2>
          <hr className={styles.hor} />
          <ul className={styles.techList}>
            {techSkills.map((el) => (
              <li className={styles.techItem}  key={el}>{el}</li>
            ))}
          </ul>

          <h2 className={styles.title}>{t("links")}</h2>
          <hr className={styles.hor} />
          <div className={styles.contacts}>
            <a
              className={styles.contactLink}
              href="https://github.com/SalazarSDF"
            >
              <div className={styles.svgContainer}>
                <AiFillGithub />
                <span className={styles.linkText}>Github</span>
              </div>
            </a>
            <a
              className={styles.contactLink}
              href="https://www.linkedin.com/in/matias-elijah-71359327b"
            >
              <div className={styles.svgContainer}>
                <AiFillLinkedin />
                <span className={styles.linkText}>LinkedIn</span>
              </div>
            </a>
            <a className={styles.contactLink} href="mailto:q37076111@gmail.com">
              <div className={styles.svgContainer}>
                <MdMail />
                <span className={styles.linkText}>Gmail</span>
              </div>
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}
//MdMail
