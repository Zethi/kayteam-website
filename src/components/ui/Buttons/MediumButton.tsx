import { FC } from "react";
import { ButtonTemplate } from "./ButtonTemplate";

interface Props {
  className?: string;
  children: React.ReactNode;
}

export const MediumButton: FC<Props> = ({ className, children }) => {
  return <ButtonTemplate className={"px-12 py-4 w-fit text-xl rounded-sm " + className}>{children}</ButtonTemplate>;
};
