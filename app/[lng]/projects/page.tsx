import styles from "./projects.module.css";
import { useTranslation } from "@/app/i18n";
import NavAside from "@/app/componets/NavAside";
import { FaJsSquare } from "react-icons/fa";
import { BsArrowUpRight } from "react-icons/bs";

const projectsArr = [
  {
    name: "Online Zoo",
    date: "2022-09-19",
    link: "https://salazarsdf.github.io/online-zoo_layout-/dist/",
    translateKey: "online-zoo",
    figmaLink:
      "https://www.figma.com/file/ypzT9idgAILaSRVRmDAJxn/online-zoo-3-weeks?type=design",
    techTask:
      "https://github.com/rolling-scopes-school/tasks/tree/master/stage1/stream2/online-zoo#%D0%BD%D0%B5%D0%B4%D0%B5%D0%BB%D1%8F-3",
    gitLink: "https://github.com/SalazarSDF/online-zoo_layout-",
  },
  {
    name: "Song Bird",
    date: "2022-11-22",
    translateKey: "song-bird",
    link: "https://rolling-scopes-school.github.io/salazarsdf-JSFE2022Q3/song-bird/",
    techTask:
      "https://github.com/rolling-scopes-school/tasks/blob/master/tasks/songbird/songbird-2022q3.md",
  },
  {
    name: "Gem Puzzle",
    date: "2022-10-18",
    translateKey: "gem-puzzle",
    link: "https://rolling-scopes-school.github.io/salazarsdf-JSFE2022Q3/puzzle-game/",
    techTask:
      "https://github.com/rolling-scopes-school/tasks/blob/master/tasks/stage-1/dom-api/codejam-the-gem-puzzle.md",
  },

  {
    name: "React Online Store",
    date: "2023-03-29",
    translateKey: "react-online-store",
    link: "https://github.com/rolling-scopes-school/tasks/tree/master/tasks/online-store-team",
    techTask:
      "https://github.com/rolling-scopes-school/tasks/tree/master/tasks/online-store-team",
  },
];

type project = {
  name: string;
  date: string;
  link: string;
  techTask: string;
  figmaLink?: string;
  gitLink?: string;
};

function JsProjects2({
  project,
  projectDescr,
}: {
  project: project;
  projectDescr: string;
}) {
  return (
    <li className={styles.li}>
      <h3 className={styles.projectHeading}>{project.name}</h3>
      <hr className={styles.hor} />
      <a className={styles.project} href={project.link}>
        <time
          className={styles.date}
          dateTime={`${project.date}T00:00:00.000Z`}
        >
          {project.date}
        </time>
        <h4 className={styles.projectName}>{project.name}</h4>
        <p className={styles.projectDescr}>{projectDescr}</p>
        <div className={styles.svgContainer}>
          <FaJsSquare className={styles.projectSvg} />
          <BsArrowUpRight className={styles.projectArrow} />
        </div>
      </a>

      <div className={styles.aditionLinks}>
        <a className={styles.aditionLink} href={project.techTask}>
          Tech
          <BsArrowUpRight />
        </a>
        {project.figmaLink && (
          <a className={styles.aditionLink} href={project.figmaLink}>
            Figma
            <BsArrowUpRight />
          </a>
        )}
        {project.gitLink && (
          <a className={styles.aditionLink} href={project.gitLink}>
            Git Hub
            <BsArrowUpRight />
          </a>
        )}
      </div>
    </li>
  );
}

function JsProjects() {
  return (
    <li className={styles.li}>
      <h3 className={styles.projectHeading}>Online Zoo</h3>
      <hr className={styles.hor} />
      <a
        className={styles.project}
        href="https://salazarsdf.github.io/online-zoo_layout-/dist/"
      >
        <time className={styles.date} dateTime="2022-09-28T00:00:00.000Z">
          Sep 28, 2022
        </time>
        <h4 className={styles.projectName}>Online Zoo</h4>
        <p className={styles.projectDescr}>
          Learn css and DOM-tree, mostly interesting part was implement slider
          and randomly shuffle cards.
        </p>
        <div className={styles.svgContainer}>
          <FaJsSquare className={styles.projectSvg} />
          <BsArrowUpRight className={styles.projectArrow} />
        </div>
      </a>

      <div className={styles.aditionLinks}>
        <a
          className={styles.aditionLink}
          href="https://github.com/rolling-scopes-school/tasks/blob/master/tasks/stage-1/dom-api/codejam-the-gem-puzzle.md"
        >
          Technical task
          <BsArrowUpRight />
        </a>

        <a
          className={styles.aditionLink}
          href="https://github.com/rolling-scopes-school/tasks/blob/master/tasks/stage-1/dom-api/codejam-the-gem-puzzle.md"
        >
          Technical task
          <BsArrowUpRight />
        </a>
        <a
          className={styles.aditionLink}
          href="https://github.com/rolling-scopes-school/tasks/blob/master/tasks/stage-1/dom-api/codejam-the-gem-puzzle.md"
        >
          Technical task
          <BsArrowUpRight />
        </a>
      </div>
    </li>
  );
}

export default async function Projects({
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
          {/* <ul className={styles.projectsList}>{JsProjects()}</ul> */}
          <ul className={styles.projectsList}>
            {projectsArr.map((el) => (
              <JsProjects2
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
