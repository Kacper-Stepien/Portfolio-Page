import { FC } from "react";

interface TechnologyCardProps {
  name: string;
  icon: React.ReactNode;
  link: string;
  glowColor: string;
}

const TechnologyCard: FC<TechnologyCardProps> = ({
  name,
  icon,
  link,
  glowColor,
}) => {
  const goToLink = (link: string) => {
    window.open(link, "_blank");
  };

  return (
    <div
      className="relative flex flex-col items-center w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 group cursor-pointer"
      onClick={() => goToLink(link)}
    >
      <div
        className="absolute inset-0 rounded-lg blur-xl opacity-0 transition-opacity duration-300 group-hover:opacity-50"
        style={{ background: glowColor }}
      ></div>

      <div className="relative z-10 flex flex-col items-center justify-center w-full h-full text-4xl sm:text-5xl md:text-6xl p-4  rounded-lg transition-transform transform group-hover:scale-110 bg-transparent">
        {icon}
      </div>

      <div className="absolute top-full  bg-gray-700 text-white text-xs sm:text-sm px-2 py-1 rounded-md shadow opacity-0 translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0 pointer-events-none">
        {name}
      </div>
    </div>
  );
};

export default TechnologyCard;
