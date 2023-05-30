import { FC } from "react";
import { ButtonTemplate } from "./ButtonTemplate";

interface Props {
  className?: string;
  children: React.ReactNode;
}

export const BigButton: FC<Props> = ({ className, children }) => {
  return <ButtonTemplate className={className + " px-16 py-4 text-2xl rounded-sm"}>{children}</ButtonTemplate>;
};
