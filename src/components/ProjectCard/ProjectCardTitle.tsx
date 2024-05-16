import { FC } from "react";

interface ProjectCardTitleProps {
  title: string;
}

const ProjectCardTitle: FC<ProjectCardTitleProps> = ({ title }) => {
  return (
    <h3 className="text-primary text-2xl md:text-3xl font-bold ">{title}</h3>
  );
};

export default ProjectCardTitle;
