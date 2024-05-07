import { FC, ReactNode } from "react";

interface AppLayoutProps {
  children: ReactNode;
}

const AppLayout: FC<AppLayoutProps> = ({ children }) => {
  return (
    <div className="relative w-full min-h-screen">
      <p className="absolute top-0 left-0 text-red-500 text-xl z-50">xdssss</p>
      {children}
    </div>
  );
};

export default AppLayout;
