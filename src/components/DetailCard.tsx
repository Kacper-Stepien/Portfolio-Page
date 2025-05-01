import { FC, ReactNode } from "react";

interface DetailCardProps {
  icon: ReactNode;
  description: string;
  gradient: string;
  iconColor: string;
  fullBadge?: boolean;
}

const DetailCard: FC<DetailCardProps> = ({
  icon,
  description,
  gradient,
  iconColor,
  fullBadge = true,
}) => {
  return (
    <div
      className={`flex flex-col items-center text-center p-8 rounded-xl bg-gradient-to-br ${gradient} shadow-lg hover:scale-105 transition-transform min-h-[260px]`}
    >
      {fullBadge ? (
        <div
          className={`flex items-center justify-center w-20 h-20 text-4xl bg-white ${iconColor} rounded-full shadow mb-4`}
        >
          {icon}
        </div>
      ) : (
        <div className={`flex gap-3 text-4xl mb-4 ${iconColor}`}>{icon}</div>
      )}

      <p className="text-base md:text-lg text-gray-800">{description}</p>
    </div>
  );
};

export default DetailCard;
