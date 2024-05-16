import { FC } from "react";

interface ProfileImageProps {
  imageSource: string;
  altText: string;
}

const ProfileImage: FC<ProfileImageProps> = ({ imageSource, altText }) => {
  return (
    <img
      src={imageSource}
      alt={altText}
      className="w-72 h-72 sm:w-96 sm:h-96 lg:w-[26rem] lg:h-[26rem] rounded-full border-4 border-secondary order-first xl:order-last"
    />
  );
};

export default ProfileImage;
