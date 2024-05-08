import { FC, ReactNode } from "react";

interface TechnologiesBoxProps {
  title: string;
  color: string;
  technologies: { icon: ReactNode; name: string; link: string }[];
}

const TechnologiesBox: FC<TechnologiesBoxProps> = ({
  title,
  color,
  technologies,
}) => {
  const goToLink = (link: string) => {
    window.open(link, "_blank");
  };

  return (
    <div
      className={`border-4 border-${color} flex text-4xl flex-col gap-8 p-8 rounded-xl`}
    >
      <h3 className={`text-${color}`}>{title}</h3>
      <div className="flex flex-wrap gap-8">
        {technologies.map((technology, index) => (
          <div
            key={index}
            className="flex gap-2 items-center  text-light hover:cursor-pointer hover:scale-110 transition-all"
            onClick={() => goToLink(technology.link)}
          >
            {technology.icon}
            <p className="text-[1.4rem]">{technology.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechnologiesBox;
