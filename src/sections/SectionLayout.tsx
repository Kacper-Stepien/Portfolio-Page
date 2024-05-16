import { FC, ReactNode } from "react";

interface SectionLayoutProps {
  sectionRef: React.RefObject<HTMLDivElement>;
  children: ReactNode;
}

const SectionLayout: FC<SectionLayoutProps> = ({ sectionRef, children }) => {
  return (
    <div
      className="w-full min-h-screen relative bg-dark  flex justify-center items-center"
      ref={sectionRef}
    >
      <div className="flex flex-col  sm:max-w-[55rem]  xl:max-w-[80rem]  justify-center  w-full px-6 md:px-12 xl:px-24 py-24">
        {" "}
        {children}
      </div>
    </div>
  );
};

export default SectionLayout;
