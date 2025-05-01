import { FC } from "react";

interface ProjectCardTitleProps {
  title: string;
}

const ProjectCardTitle: FC<ProjectCardTitleProps> = ({ title }) => {
  return (
    <h3 className="text-primary text-2xl md:text-3xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
      {title}
    </h3>
  );
};

export default ProjectCardTitle;
