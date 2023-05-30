import { FC } from "react";
import { ButtonTemplate } from "./ButtonTemplate";

interface Props {
  className?: string;
  children: React.ReactNode;
}

export const LargeButton: FC<Props> = ({ className, children }) => {
  return <ButtonTemplate className={"px-16 w-full py-4 text-2xl rounded-sm " + className}>{children}</ButtonTemplate>;
};
