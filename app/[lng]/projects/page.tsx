import styles from "./projects.module.css";
import { useTranslation } from "@/app/i18n";
import NavAside from "@/app/componets/NavAside";
import { FaJsSquare, FaReact, FaGamepad } from "react-icons/fa";
import { BsArrowUpRight } from "react-icons/bs";
import { SiNextdotjs, SiRedux } from "react-icons/si";

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
    techStack: "js",
  },
  {
    name: "Song Bird",
    date: "2022-11-22",
    link: "https://rolling-scopes-school.github.io/salazarsdf-JSFE2022Q3/song-bird/",
    translateKey: "song-bird",
    techTask:
      "https://github.com/rolling-scopes-school/tasks/blob/master/tasks/songbird/songbird-2022q3.md",
    techStack: ["js", "game"],
  },
  {
    name: "Gem Puzzle",
    date: "2022-10-18",
    link: "https://rolling-scopes-school.github.io/salazarsdf-JSFE2022Q3/puzzle-game/",
    translateKey: "gem-puzzle",
    techTask:
      "https://github.com/rolling-scopes-school/tasks/blob/master/tasks/stage-1/dom-api/codejam-the-gem-puzzle.md",
    techStack: ["js", "game"],
  },
  {
    name: "React Online Store",
    date: "2023-03-29",
    link: "https://scintillating-mochi-031dfe.netlify.app/",
    translateKey: "react-online-store",
    techTask:
      "https://github.com/rolling-scopes-school/tasks/tree/master/tasks/online-store-team",
    gitLink: "https://github.com/SalazarSDF/React_Online-Store",
    techStack: "react",
  },
  {
    name: "Portfolio",
    date: "2023-06-08",
    link: "https://github.com/SalazarSDF/web-ptfio",
    translateKey: "portfolio",
    gitLink: "https://github.com/SalazarSDF/web-ptfio",
    techStack: ["react", "next"],
  },
  {
    name: "React Posts",
    date: "2023-07-17",
    link: "https://wondrous-lebkuchen-411d41.netlify.app",
    translateKey: "react-posts",
    gitLink: "https://github.com/SalazarSDF/React_posts",
    techTask: "https://github.com/SalazarSDF/React_posts",
    techStack: ["react", "redux"],
  },
];

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
            {projectsArr.map((el) => (
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
