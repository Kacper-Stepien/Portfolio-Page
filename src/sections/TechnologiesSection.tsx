import TechnologiesBox from "../components/TechnologiesBox";
import {
  FaReact,
  FaNodeJs,
  FaDocker,
  FaHtml5,
  FaCss3Alt,
  FaGithub,
  FaGitAlt,
  FaAngular,
} from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import {
  SiNestjs,
  SiExpress,
  SiRedux,
  SiAdobexd,
  SiVitest,
  SiVite,
  SiReactrouter,
  SiSass,
  SiJest,
  SiVisualstudiocode,
  SiReacthookform,
} from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import {
  BiLogoPostgresql,
  BiLogoMongodb,
  BiLogoTypescript,
} from "react-icons/bi";

const TechnologiesSection = () => {
  return (
    <div className="flex flex-col  justify-center h-full w-full px-48 ">
      <h2 className="text-light text-5xl font-bold mb-24">
        Technologies I use
      </h2>
      <div className="flex gap-10">
        <TechnologiesBox
          title="Frontend"
          color="primary"
          technologies={[
            {
              icon: <IoLogoJavascript className="text-[#F0DB4F]" />,
              name: "JavaScript",
              link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
            },
            {
              icon: <BiLogoTypescript className="text-[#3178C6] " />,
              name: "TypeScript",
              link: "https://www.typescriptlang.org/",
            },
            {
              icon: <FaReact className="text-[#00D8FE]" />,
              name: "React",
              link: "https://reactjs.org/",
            },
            {
              icon: <SiReactrouter className="text-[#F54250]" />,
              name: "React Router",
              link: "https://reactrouter.com/",
            },
            {
              icon: <SiRedux className="text-[#764ABC]" />,
              name: "Redux Toolkit",
              link: "https://redux-toolkit.js.org/",
            },
            {
              icon: <SiReacthookform className="text-[#EC5990]" />,
              name: "React Hook Form",
              link: "https://react-hook-form.com/",
            },
            {
              icon: <SiVite className="text-[#5BB0FF]" />,
              name: "Vite",
              link: "https://vitejs.dev/",
            },
            {
              icon: <SiVitest className="text-[#FCC72B]" />,
              name: "Vitest",
              link: "https://vitest.dev/",
            },
            {
              icon: <SiJest className="text-[#98425B]" />,
              name: "Jest",
              link: "https://jestjs.io/",
            },

            {
              icon: <FaAngular className="text-[#DD0031]" />,
              name: "Angular",
              link: "https://angular.io/",
            },

            {
              icon: <RiTailwindCssFill className="text-[#06B6D4]" />,
              name: "Tailwind CSS",
              link: "https://tailwindcss.com/",
            },
            {
              icon: <FaHtml5 className="text-[#E34F26]" />,
              name: "HTML",
              link: "https://developer.mozilla.org/en-US/docs/Web/HTML",
            },
            {
              icon: <FaCss3Alt className="text-[#1572B6]" />,
              name: "CSS",
              link: "https://developer.mozilla.org/en-US/docs/Web/CSS",
            },
            {
              icon: <SiSass className="text-[#CD669A]" />,
              name: "Sass",
              link: "https://sass-lang.com/",
            },
          ]}
        />
        <TechnologiesBox
          title="Backend"
          color="secondary"
          technologies={[
            {
              icon: <FaNodeJs className="text-[#68A063]" />,
              name: "Node.js",
              link: "https://nodejs.org/",
            },

            {
              icon: <SiExpress className="text-[#000000]" />,
              name: "Express",
              link: "https://expressjs.com/",
            },
            {
              icon: <SiNestjs className="text-[#E0234E]" />,
              name: "NestJS",
              link: "https://nestjs.com/",
            },
            {
              icon: <BiLogoMongodb className="text-[#47A248]" />,
              name: "MongoDB",
              link: "https://www.mongodb.com/",
            },
            {
              icon: <BiLogoPostgresql className="text-[#336791]" />,
              name: "PostgreSQL",
              link: "https://www.postgresql.org/",
            },
          ]}
        />
        <TechnologiesBox
          title="Other"
          color="light"
          technologies={[
            {
              icon: <FaGitAlt className="text-[#F05032]" />,
              name: "Git",
              link: "https://git-scm.com/",
            },
            {
              icon: <FaGithub className="text-[#181717]" />,
              name: "GitHub",
              link: "https://github.com/",
            },
            {
              icon: <FaDocker className="text-[#2496ED]" />,
              name: "Docker",
              link: "https://www.docker.com/",
            },
            {
              icon: <SiVisualstudiocode className="text-[#007ACC]" />,
              name: "VS Code",
              link: "https://code.visualstudio.com/",
            },
            {
              icon: <SiAdobexd className="text-[#FF63F6]" />,
              name: "Adobe XD",
              link: "https://www.adobe.com/products/xd.html",
            },
          ]}
        />
      </div>
    </div>
  );
};

export default TechnologiesSection;
