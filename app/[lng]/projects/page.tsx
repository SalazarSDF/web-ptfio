import styles from "./projects.module.css";
import { useTranslation } from "@/app/i18n";
import NavAside from "@/app/components/NavAside";
import { FaJsSquare, FaReact, FaGamepad } from "react-icons/fa";
import { BsArrowUpRight } from "react-icons/bs";
import { SiNextdotjs, SiRedux } from "react-icons/si";
import { projectsList } from "./model";


type project = {
  name: string;
  date: string;
  link: string;
  translateKey: string;
  techTask?: string;
  figmaLink?: string;
  gitLink?: string;
  techStack: string | string[];
};

function Projects({
  project,
  projectDescr,
}: {
  project: project;
  projectDescr: string;
}) {
  const [_, month, day, year] = new Date(project.date).toString().split(" ");
  return (
    <li className={styles.li}>
      {/* <h3 className={styles.projectHeading}>{project.name}</h3> */}
      {/* <hr className={styles.hor} /> */}
      <a target="_blank" className={styles.project} href={project.link}>
        <time
          className={styles.date}
          dateTime={`${project.date}T00:00:00.000Z`}
        >
          {`${month} ${day}, ${year}`}
        </time>
        <h4 className={styles.projectName}>{project.name}</h4>
        <p className={styles.projectDescr}>{projectDescr}</p>
        <div className={styles.svgContainer}>
          {project.techStack.includes("js") && (
            <FaJsSquare className={styles.jsSvg} />
          )}
          {project.techStack.includes("game") && (
            <FaGamepad className={styles.gameSvg} />
          )}
          {project.techStack.includes("react") && (
            <FaReact className={styles.reactSvg} />
          )}
          {project.techStack.includes("next") && (
            <SiNextdotjs className={styles.nextSvg} />
          )}

          {project.techStack.includes("redux") && (
            <SiRedux className={styles.reduxSvg} />
          )}

          <BsArrowUpRight className={styles.projectArrow} />
        </div>
      </a>

      <div className={styles.aditionLinks}>
        {project.techTask && (
          <a
            target="_blank"
            className={styles.aditionLink}
            href={project.techTask}
          >
            Tech
            <BsArrowUpRight />
          </a>
        )}
        {project.figmaLink && (
          <a
            target="_blank"
            className={styles.aditionLink}
            href={project.figmaLink}
          >
            Figma
            <BsArrowUpRight />
          </a>
        )}
        {project.gitLink && (
          <a
            target="_blank"
            className={styles.aditionLink}
            href={project.gitLink}
          >
            Git Hub
            <BsArrowUpRight />
          </a>
        )}
      </div>
    </li>
  );
}

export default async function ProjectsPage({
  params: { lng },
}: {
  params: { lng: string };
}) {
  const { t } = await useTranslation(lng, "projects-page");
  return (
    <div className={styles.projectsContainer}>
      <NavAside active="projects" lng={lng} />
      <main className={styles.main}>
        <h2 className={styles.mainTitle}>{t("title")}</h2>
        <p className={styles.par}>{t("description")}</p>
        <hr className={styles.hor} />
        <section>
          <ul className={styles.projectsList}>
            {projectsList.map((el) => (
              <Projects
                key={el.link}
                project={el}
                projectDescr={t(el.translateKey)}
              />
            ))}
          </ul>
        </section>
      </main>
    </div>
  );
}
