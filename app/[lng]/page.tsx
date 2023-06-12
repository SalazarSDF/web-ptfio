import Stars from "../componets/Stars";
import Link from "next/link";
import styles from "./page.module.css";
import LanguageButtons from "../componets/LanguageButtons";

const listItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Projects", href: "/projects" },
];
export default function Home({ params: { lng } }: { params: { lng: string } }) {
  const noStars = true;
  console.log("NO STARS:", noStars);
  return (
    <div className={styles.container}>
      <nav className={styles.navigation}>
        <ul className={styles.navList}>
          {listItems.map((el) => (
            <li key={el.name}>
              <Link
                className={styles.listLink}
                href={`${lng}/${el.href}`}
                locale="ru"
              >
                {el.name}
              </Link>
            </li>
          ))}
          <li>
            <LanguageButtons />
          </li>
        </ul>
      </nav>
      <h1 className={styles.heading}>Welcome</h1>
      <p className={styles.paragraph}>
        Hi, my name is Elijah, I&apos;m frontend developer, it&apos;s my
        portfolio web-site where you can find my projects, and my current
        technology stack.
      </p>
      {noStars ? "" : <Stars quantity={200} refresh={true} />}
    </div>
  );
}
