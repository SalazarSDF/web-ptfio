import Stars from "./componets/Stars";
import Link from "next/link";
import styles from "./page.module.css";

const listItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Projects", href: "/projects" },
];
export default function Home() {
  return (
    <div className={styles.container}>
      <nav className={styles.navigation}>
        <ul className={styles.navList}>
          {listItems.map((el) => (
            <li key={el.name}>
              <Link className={styles.listLink} href={el.href}>
                {el.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <h1 className={styles.heading}>Welcome</h1>

      <p className={styles.paragraph}>
        Hi, my name is Elijah, I&apos;m frontend developer, it&apos;s my
        portfolio web-site where you can find my projects, and my current
        technology stack.
      </p>

      <Stars quantity={200} refresh={true} />
    </div>
  );
}
