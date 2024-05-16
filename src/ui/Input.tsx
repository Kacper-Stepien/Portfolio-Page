import { RegisterOptions, UseFormRegister } from "react-hook-form";

import { FC } from "react";

interface InputProps {
  name: string;
  type: string;
  placeholder: string;
  isError: boolean;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  register: UseFormRegister<any>;
  rules?: RegisterOptions;
  textarea?: boolean;
}

const Input: FC<InputProps> = ({
  name,
  type,
  placeholder,
  isError,
  register,
  rules,
  textarea = false,
}) => {
  if (textarea) {
    return (
      <textarea
        placeholder={placeholder}
        {...register(name, rules)}
        className={`w-full h-40 resize-none p-2 rounded-md border-4 border-primary text-lg bg-dark focus:border-4 focus:border-secondary outline-none  ${
          isError && "border-red-600 "
        } `}
      />
    );
  }

  return (
    <input
      type={type}
      placeholder={placeholder}
      {...register(name, rules)}
      className={`w-full p-2 rounded-md border-4 border-primary text-lg bg-dark focus:border-4 focus:border-secondary outline-none  ${
        isError && "border-red-600 "
      } `}
    />
  );
};

export default Input;
