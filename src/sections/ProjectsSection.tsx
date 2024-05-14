import SectionTitle from "../ui/SectionTitle";
import ProjectCard from "../components/ProjectCard/ProjectCard";
import {
  FaReact,
  FaNodeJs,
  FaDocker,
  FaSass,
  FaHtml5,
  FaCss3Alt,
  FaGithub,
  FaGitAlt,
} from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import {
  SiTypescript,
  SiExpress,
  SiRedux,
  SiAdobexd,
  SiVite,
} from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { BiLogoMongodb } from "react-icons/bi";
import { SiReactrouter } from "react-icons/si";

const ProjectsSection = () => {
  return (
    <>
      <SectionTitle title="Projects" />
      <div className="flex flex-col gap-24">
        <ProjectCard
          title="MotoSplot"
          description="MotoSplot is a digital community platform designed and implemented as a part of an engineering project. The application caters to automotive enthusiasts, offering a comprehensive space for information sharing, interaction, and collaboration. The project includes both server-side and client-side components. An important component of the application is real-time chat between friends."
          githubLink="https://github.com/Kacper-Stepien/MotoSplot"
          images={[
            "/Motosplot/motosplot1.webp",
            "/Motosplot/motosplot2.webp",
            "/Motosplot/motosplot3.webp",
            "/Motosplot/motosplot4.webp",
            "/Motosplot/motosplot5.webp",
            "/Motosplot/motosplot6.webp",
            "/Motosplot/motosplot7.webp",
            "/Motosplot/motosplot8.webp",
            "/Motosplot/motosplot9.webp",
            "/Motosplot/motosplot10.webp",
            "/Motosplot/motosplot11.webp",
            "/Motosplot/motosplot12.webp",
            "/Motosplot/motosplot13.webp",
            "/Motosplot/motosplot14.webp",
          ]}
          technologies={[
            <FaReact />,
            <SiTypescript />,
            <SiRedux />,
            <SiReactrouter />,
            <SiVite />,
            <RiTailwindCssFill />,
            <FaGitAlt />,
            <FaGithub />,
            <SiAdobexd />,
          ]}
        />
        <ProjectCard
          title="Wild Animals"
          description="This is a encyclopedia application built with TypeScript, React, Sass, and Vite. It utilizes the Wild Animals API to provide detailed information about various wild animals. User can explore different animals using advanced filters and searching by animal name."
          githubLink="https://github.com/Kacper-Stepien/Wild-Animals"
          liveLink="https://wild-animals.onrender.com/"
          images={[
            "/WildAnimals/wild1.webp",
            "/WildAnimals/wild2.webp",
            "/WildAnimals/wild3.webp",
            "/WildAnimals/wild4.webp",
            "/WildAnimals/wild5.webp",
            "/WildAnimals/wild6.webp",
            "/WildAnimals/wild7.webp",
            "/WildAnimals/wild8.webp",
            "/WildAnimals/wild9.webp",
          ]}
          technologies={[
            <FaReact />,
            <SiTypescript />,
            <SiReactrouter />,
            <FaSass />,
            <SiVite />,
            <IoLogoJavascript />,
            <FaNodeJs />,
            <SiExpress />,
            <BiLogoMongodb />,
            <FaGitAlt />,
            <FaGithub />,
            <SiAdobexd />,
          ]}
        />
        <ProjectCard
          title="ChatLeap"
          description="ChatLeap is a social networking application similar to Twitter. It consists of a REST API and a client-side web application."
          githubLink="https://github.com/Kacper-Stepien/ChatLeap"
          liveLink="https://chatleap.onrender.com/"
          images={[
            "/ChatLeap/chat1.webp",
            "/ChatLeap/chat2.webp",
            "/ChatLeap/chat3.webp",
            "/ChatLeap/chat4.webp",
            "/ChatLeap/chat5.webp",
            "/ChatLeap/chat6.webp",
            "/ChatLeap/chat7.webp",
            "/ChatLeap/chat8.webp",
            "/ChatLeap/chat9.webp",
            "/ChatLeap/chat10.webp",
            "/ChatLeap/chat11.webp",
            "/ChatLeap/chat12.webp",
            "/ChatLeap/chat13.webp",
            "/ChatLeap/chat14.webp",
            "/ChatLeap/chat15.webp",
          ]}
          technologies={[
            <FaReact />,
            <SiTypescript />,
            <SiReactrouter />,
            <FaSass />,
            <SiVite />,
            <IoLogoJavascript />,
            <FaNodeJs />,
            <SiExpress />,
            <BiLogoMongodb />,
            <FaDocker />,
            <FaGitAlt />,
            <FaGithub />,
            <SiAdobexd />,
          ]}
        />
        <ProjectCard
          title="Muscle Imports"
          description="This is an informational website for a fictional company specializing in importing muscle cars from the USA to Poland. The project showcases my proficiency in web development and design, utilizing technologies such as React, TypeScript, and Tailwind CSS to create an engaging user experience."
          githubLink="https://github.com/Kacper-Stepien/Muscle-Imports"
          liveLink="https://muscle-import.onrender.com/"
          images={[
            "/MuscleImports/muscle1.webp",
            "/MuscleImports/muscle2.webp",
            "/MuscleImports/muscle3.webp",
            "/MuscleImports/muscle4.webp",
            "/MuscleImports/muscle5.webp",
            "/MuscleImports/muscle6.webp",
            "/MuscleImports/muscle7.webp",
          ]}
          technologies={[
            <FaReact />,
            <SiTypescript />,
            <RiTailwindCssFill />,
            <SiVite />,
            <SiAdobexd />,
          ]}
        />
        <ProjectCard
          title="Flash Cards"
          description="Front-end application that lets users create and manage their own flashcards. Users can add questions and answers with categories, and the cards are displayed with a double-sided format. The app supports flipping cards, deleting and editing them, and all changes are saved locally"
          githubLink="https://github.com/Kacper-Stepien/Flash-Cards"
          liveLink="https://kacper-stepien.github.io/Flash-Cards/dist/index.html#"
          images={[
            "/FlashCards/flash1.webp",
            "/FlashCards/flash2.webp",
            "/FlashCards/flash3.webp",
            "/FlashCards/flash4.webp",
            "/FlashCards/flash5.webp",
            "/FlashCards/flash6.webp",
            "/FlashCards/flash7.webp",
            "/FlashCards/flash8.webp",
            "/FlashCards/flash9.webp",
            "/FlashCards/flash10.webp",
            "/FlashCards/flash11.webp",
            "/FlashCards/flash12.webp",
            "/FlashCards/flash13.webp",
          ]}
          technologies={[
            <SiTypescript />,
            <FaHtml5 />,
            <FaCss3Alt />,
            <FaSass />,
            <SiAdobexd />,
          ]}
        />
      </div>
    </>
  );
};

export default ProjectsSection;
