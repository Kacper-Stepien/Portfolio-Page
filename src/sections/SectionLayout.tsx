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
      <div className="flex flex-col max-w-[80rem]  justify-center  w-full px-16 py-24">
        {" "}
        {children}
      </div>
    </div>
  );
};

export default SectionLayout;
