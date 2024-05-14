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
      className={`flex items-center gap-8 bg-${bgColor} px-12 py-8 rounded-xl max-w-[70%] text-${textColor} ${alignSelf} hover:scale-110 transition-all`}
    >
      <div>{content}</div>
      <p className="text-xl text-justify">{description}</p>
    </div>
  );
};

export default DetailCard;
