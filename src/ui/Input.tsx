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
  const baseClasses =
    "w-full p-3 rounded-lg border bg-dark text-lg transition focus:outline-none focus:ring-2 focus:ring-secondary hover:scale-[1.02]";
  const errorClasses = isError ? "border-red-500" : "border-primary";

  if (textarea) {
    return (
      <textarea
        placeholder={placeholder}
        {...register(name, rules)}
        className={`${baseClasses} ${errorClasses} resize-none min-h-[10rem]`}
      />
    );
  }

  return (
    <input
      type={type}
      placeholder={placeholder}
      {...register(name, rules)}
      className={`${baseClasses} ${errorClasses}`}
    />
  );
};

export default Input;
