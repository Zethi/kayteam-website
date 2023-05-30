import { FC } from "react";

interface Props {
  className?: string;
  children: React.ReactNode;
}

export const ButtonTemplate: FC<Props> = ({ className, children }) => {
  return (
    <button
      className={className + " cursor-pointer bg-kt-orange text-white transition-colors duration-200 hover:bg-black"}
    >
      {children}
    </button>
  );
};
