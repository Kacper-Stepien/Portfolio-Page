import { FC } from "react";

interface SectionTitleProps {
  title: string;
}

const SectionTitle: FC<SectionTitleProps> = ({ title }) => {
  return (
    <h2 className="text-light text-4xl sm:text-5xl font-bold mb-12 sm:mb-16 md:mb-24">
      {title}
    </h2>
  );
};

export default SectionTitle;
