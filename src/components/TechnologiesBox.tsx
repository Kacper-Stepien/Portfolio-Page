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
      className={`border-4 border-${color} flex text-2xl md:text-3xl lg:text-4xl flex-col gap-8  p-4 sm:p-8 rounded-xl group hover:scale-110 transition-all hover:shadow-xl`}
    >
      <h3 className={`text-${color} font-semibold`}>{title}</h3>
      <div className="flex flex-wrap gap-8 justify-center">
        {technologies.map((technology, index) => (
          <div
            key={index}
            className="flex gap-2 items-center  text-light hover:cursor-pointer hover:scale-110 transition-all"
            onClick={() => goToLink(technology.link)}
          >
            {technology.icon}
            <p className="text-[1.2rem] md:text-[1.4rem]">{technology.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechnologiesBox;
