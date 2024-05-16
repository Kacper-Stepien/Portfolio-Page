import { FC, ReactNode } from "react";

interface InputErrorMessageProps {
  children: ReactNode;
}

const InputErrorMessage: FC<InputErrorMessageProps> = ({ children }) => {
  return <p className={`text-red-500 ml-2`}>{children}</p>;
};

export default InputErrorMessage;
