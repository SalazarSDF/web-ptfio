import styles from "./projects.module.css";
import { useTranslation } from "@/app/i18n";
import NavAside from "@/app/componets/NavAside";
import { FaJsSquare } from "react-icons/fa";
export default async function Projects({
  params: { lng },
}: {
  params: { lng: string };
}) {
  const { t } = await useTranslation(lng, "projects-page");
  return (
    <div className={styles.projectsContainer}>
      <NavAside active="projects" lng={lng} />
      <main>
        <h2 className={styles.mainTitle}>{t("title")}</h2>
        <p className={styles.par}>{t("description")}</p>
        <hr className={styles.hor} />
        <section>
          <h3 className={styles.techHead}>JS</h3>
          <hr className={styles.hor} />
          <ul className={styles.projectsList}>
            <li className={styles.li}>
              <a
                className={styles.project}
                href="https://salazarsdf.github.io/online-zoo_layout-/dist/"
              >
                <time
                  className={styles.date}
                  dateTime="2023-04-01T00:00:00.000Z"
                >
                  Apr 1, 2023
                </time>
                <h3 className={styles.projectName}>Online Zoo</h3>
                <p className={styles.projectDescr}>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Mollitia atque nisi, nobis exercitationem doloremque quibusdam
                  dolorum voluptatum enim dignissimos nostrum nihil, earum
                  perferendis id molestias aliquid consectetur soluta accusamus
                  voluptates.
                </p>
                <FaJsSquare className={styles.projectSvg}/>
              </a>
            </li>
          </ul>
        </section>
      </main>
    </div>
  );
}
