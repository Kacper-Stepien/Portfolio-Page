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
      className="w-[26rem] h-[26rem] rounded-full border-4 border-secondary"
    />
  );
};

export default ProfileImage;
