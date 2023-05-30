import { FC } from "react";
import { ButtonTemplate } from "./ButtonTemplate";

interface Props {
  className?: string;
  children: React.ReactNode;
}

export const BigButton: FC<Props> = ({ className, children }) => {
  return <ButtonTemplate className={"px-16 py-4 w-fit text-2xl rounded-sm " + className}>{children}</ButtonTemplate>;
};
