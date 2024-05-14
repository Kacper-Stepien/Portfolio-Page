import { FC, ReactNode } from "react";

interface ProjectCardTechnologiesProps {
  technologies: ReactNode[];
}

const ProjectCardTechnologies: FC<ProjectCardTechnologiesProps> = ({
  technologies,
}) => {
  return (
    <div className="flex items-center gap-8 mt-8">
      <h4 className="text-secondary text-2xl font-bold">Technologies:</h4>
      <ul className="ml-6 flex gap-4 text-3xl">
        {technologies.map((technology, index) => (
          <li key={index}>{technology}</li>
        ))}
      </ul>
    </div>
  );
};

export default ProjectCardTechnologies;
