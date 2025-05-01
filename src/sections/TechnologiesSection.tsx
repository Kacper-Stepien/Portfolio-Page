import {
  FaReact,
  FaNodeJs,
  FaDocker,
  FaHtml5,
  FaCss3Alt,
  FaGithub,
  FaGitAlt,
  // FaAngular,
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
import TechnologyCard from "../components/TechnologyCard";
import SectionTitle from "../ui/SectionTitle";

const TechnologiesSection = () => {
  return (
    <>
      <SectionTitle title="Technologies I use" />
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-4 sm:gap-6 md:gap-8 justify-items-center">
        <TechnologyCard
          name="TypeScript"
          icon={<BiLogoTypescript className="text-[#3178C6] " />}
          link="https://www.typescriptlang.org/"
          glowColor="#3178C6"
        />
        <TechnologyCard
          name="React"
          icon={<FaReact className="text-[#00D8FE]" />}
          link="https://reactjs.org/"
          glowColor="#00D8FE"
        />
        <TechnologyCard
          name="JavaScript"
          icon={<IoLogoJavascript className="text-[#F0DB4F]" />}
          link="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
          glowColor="#F0DB4F"
        />
        <TechnologyCard
          name="Node.js"
          icon={<FaNodeJs className="text-[#68A063]" />}
          link="https://nodejs.org/"
          glowColor="#68A063"
        />
        <TechnologyCard
          name="Express"
          icon={<SiExpress className="text-[#FFF]" />}
          link="https://expressjs.com/"
          glowColor="#FFF"
        />
        <TechnologyCard
          name="NestJS"
          icon={<SiNestjs className="text-[#E0234E]" />}
          link="https://nestjs.com/"
          glowColor="#E0234E"
        />
        <TechnologyCard
          name="React Router"
          icon={<SiReactrouter className="text-[#F54250]" />}
          link="https://reactrouter.com/"
          glowColor="#F54250"
        />
        <TechnologyCard
          name="Redux Toolkit"
          icon={<SiRedux className="text-[#764ABC]" />}
          link="https://redux-toolkit.js.org/"
          glowColor="#764ABC"
        />

        <TechnologyCard
          name="React Hook Form"
          icon={<SiReacthookform className="text-[#EC5990]" />}
          link="https://react-hook-form.com/"
          glowColor="#EC5990"
        />
        <TechnologyCard
          name="Vite"
          icon={<SiVite className="text-[#5BB0FF]" />}
          link="https://vitejs.dev/"
          glowColor="#5BB0FF"
        />
        <TechnologyCard
          name="Vitest"
          icon={<SiVitest className="text-[#FCC72B]" />}
          link="https://vitest.dev/"
          glowColor="#FCC72B"
        />
        <TechnologyCard
          name="Jest"
          icon={<SiJest className="text-[#98425B]" />}
          link="https://jestjs.io/"
          glowColor="#98425B"
        />
        {/* <TechnologyCard
          name="Angular"
          icon={<FaAngular className="text-[#DD0031]" />}
          link="https://angular.io/"
        /> */}
        <TechnologyCard
          name="Tailwind CSS"
          icon={<RiTailwindCssFill className="text-[#06B6D4]" />}
          link="https://tailwindcss.com/"
          glowColor="#06B6D4"
        />
        <TechnologyCard
          name="Sass"
          icon={<SiSass className="text-[#CD669A]" />}
          link="https://sass-lang.com/"
          glowColor="#CD669A"
        />
        <TechnologyCard
          name="HTML"
          icon={<FaHtml5 className="text-[#E34F26]" />}
          link="https://developer.mozilla.org/en-US/docs/Web/HTML"
          glowColor="#E34F26"
        />
        <TechnologyCard
          name="CSS"
          icon={<FaCss3Alt className="text-[#1572B6]" />}
          link="https://developer.mozilla.org/en-US/docs/Web/CSS"
          glowColor="#1572B6"
        />

        <TechnologyCard
          name="MongoDB"
          icon={<BiLogoMongodb className="text-[#47A248]" />}
          link="https://www.mongodb.com/"
          glowColor="#47A248"
        />
        <TechnologyCard
          name="PostgreSQL"
          icon={<BiLogoPostgresql className="text-[#336791]" />}
          link="https://www.postgresql.org/"
          glowColor="#336791"
        />
        <TechnologyCard
          name="Git"
          icon={<FaGitAlt className="text-[#F05032]" />}
          link="https://git-scm.com/"
          glowColor="#F05032"
        />
        <TechnologyCard
          name="GitHub"
          icon={<FaGithub className="text-[#FFF]" />}
          link="https://github.com"
          glowColor="#FFF"
        />
        <TechnologyCard
          name="Docker"
          icon={<FaDocker className="text-[#2496ED]" />}
          link="https://www.docker.com/"
          glowColor="#2496ED"
        />
        <TechnologyCard
          name="VS Code"
          icon={<SiVisualstudiocode className="text-[#007ACC]" />}
          link="https://code.visualstudio.com/"
          glowColor="#007ACC"
        />
        <TechnologyCard
          name="Adobe XD"
          icon={<SiAdobexd className="text-[#FF63F6]" />}
          link="https://www.adobe.com/products/xd.html"
          glowColor="#FF63F6"
        />
      </div>
    </>
  );
};

export default TechnologiesSection;
