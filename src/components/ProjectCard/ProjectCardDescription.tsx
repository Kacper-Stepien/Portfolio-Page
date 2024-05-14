import { FC } from "react";

interface ProjectCardDescriptionProps {
  description: string;
}

const ProjectCardDescription: FC<ProjectCardDescriptionProps> = ({
  description,
}) => {
  return <p className="text-justify text-lg">{description}</p>;
};

export default ProjectCardDescription;
