import { FC, ReactNode } from "react";

interface SectionLayoutProps {
  sectionRef: React.RefObject<HTMLDivElement>;
  children: ReactNode;
}

const SectionLayout: FC<SectionLayoutProps> = ({ sectionRef, children }) => {
  return (
    <div className="w-full h-screen relative bg-dark" ref={sectionRef}>
      {children}
    </div>
  );
};

export default SectionLayout;
