import { FC } from "react";
import { ButtonTemplate } from "./ButtonTemplate";

interface Props {
  className?: string;
  children: React.ReactNode;
}

export const SmallButton: FC<Props> = ({ className, children }) => {
  return <ButtonTemplate className={className + " px-8 py-3 text-lg rounded-sm"}>{children}</ButtonTemplate>;
};
