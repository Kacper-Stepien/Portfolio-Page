import { FC, ReactNode } from "react";

interface DetailCardProps {
  content: ReactNode;
  description: string;
  bgColor: string;
  textColor: string;
  alignSelf?: string;
}

const DetailCard: FC<DetailCardProps> = ({
  content,
  description,
  bgColor,
  textColor,
  alignSelf,
}) => {
  return (
    <div
      className={`flex-col lg:flex-row flex items-center gap-8 ${bgColor} md:px-12  px-4 sm:px-6  py-6 md:py-8 rounded-xl md:max-w-[70%] text-${textColor} ${alignSelf} hover:scale-110 transition-all`}
    >
      <div>{content}</div>
      <p className="md:text-xl text-justify">{description}</p>
    </div>
  );
};

export default DetailCard;
