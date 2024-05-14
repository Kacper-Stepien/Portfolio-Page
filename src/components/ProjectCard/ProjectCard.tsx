import { FC, ReactNode } from "react";
import ProjectCardDescription from "./ProjectCardDescription";
import ProjectCardTitle from "./ProjectCardTitle";
import ProjectCardLinks from "./ProjectCardLinks";
import ProjectCardTechnologies from "./ProjectCardTechnologies";
import ProjectCardGallery from "./ProjectCardGallery";

interface ProjectCardProps {
  title: string;
  description: string;
  githubLink: string;
  liveLink?: string;
  images: string[];
  technologies: ReactNode[];
}

const ProjectCard: FC<ProjectCardProps> = ({
  title,
  description,
  githubLink,
  liveLink,
  images,
  technologies,
}) => {
  return (
    <div className="border-4 border-primary rounded-xl text-light">
      <div className="border-b-4 border-primary rounded-t-xl">
        <ProjectCardGallery photos={images} />
      </div>
      <div className="p-6">
        <div className="flex justify-between items-center text mb-12">
          <ProjectCardTitle title={title} />
          <ProjectCardLinks githubLink={githubLink} liveLink={liveLink} />
        </div>
        <ProjectCardDescription description={description} />
        <ProjectCardTechnologies technologies={technologies} />
      </div>
    </div>
  );
};

export default ProjectCard;
