import { FC } from "react";
import { ButtonTemplate } from "./ButtonTemplate";

interface Props {
  className?: string;
  children: React.ReactNode;
}

export const MediumButton: FC<Props> = ({ className, children }) => {
  return <ButtonTemplate className={className + " px-12 py-4 text-xl rounded-sm"}>{children}</ButtonTemplate>;
};
