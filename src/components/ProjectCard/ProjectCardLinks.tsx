import { FC } from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

interface ProjectCardLinksProps {
  githubLink: string;
  liveLink?: string;
}

const ProjectCardLinks: FC<ProjectCardLinksProps> = ({
  githubLink,
  liveLink,
}) => {
  return (
    <div className="flex gap-4 text-2xl">
      <a
        href={githubLink}
        target="blank"
        className="hover:scale-150 transition-all hover:text-secondary"
      >
        <FaGithub />
      </a>
      {liveLink && (
        <a
          href={liveLink}
          target="blank"
          className="hover:scale-150 transition-all hover:text-primary"
        >
          <FaExternalLinkAlt />
        </a>
      )}
    </div>
  );
};

export default ProjectCardLinks;
