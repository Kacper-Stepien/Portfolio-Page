import { FC, useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

interface ProjectCardGalleryProps {
  photos: string[];
}

const ProjectCardGallery: FC<ProjectCardGalleryProps> = ({ photos }) => {
  const [currentImage, setCurrentImage] = useState(0);

  const nextImage = () => {
    setCurrentImage((currentImage + 1) % photos.length);
  };

  const previousImage = () => {
    setCurrentImage((currentImage + photos.length - 1) % photos.length);
  };

  return (
    <div className="relative rounded-t-xl">
      <div className="overflow-hidden w-full rounded-t-xl">
        <img src={photos[currentImage]} alt="project" />
      </div>
      <button
        onClick={previousImage}
        className="absolute  top-1/2  left-[-15px] md:left-[-25px] bg-light text-dark p-2 rounded-xl hover:bg-primary transition-all group"
        aria-label="Previous image"
      >
        <IoIosArrowBack className="text-2xl sm:text-3xl group-hover:scale-125 transition-all" />
      </button>
      <button
        onClick={nextImage}
        className="absolute  top-1/2  right-[-15px] md:right-[-25px] bg-light text-dark p-2 rounded-xl hover:bg-primary transition-all group"
        aria-label="Next image"
      >
        <IoIosArrowForward className="text-2xl sm:text-3xl group-hover:scale-125 transition-all" />
      </button>
    </div>
  );
};

export default ProjectCardGallery;
