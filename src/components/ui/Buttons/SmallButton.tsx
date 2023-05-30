import { FC } from "react";
import { ButtonTemplate } from "./ButtonTemplate";

interface Props {
  className?: string;
  children: React.ReactNode;
}

export const SmallButton: FC<Props> = ({ className, children }) => {
  return <ButtonTemplate className={"px-8 py-3 w-fit text-lg rounded-sm " + className}>{children}</ButtonTemplate>;
};
