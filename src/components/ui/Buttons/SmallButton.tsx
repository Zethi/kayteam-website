import { FC } from "react";
import { ButtonTemplate } from "./ButtonTemplate";

interface Props {
  className?: string;
  children: React.ReactNode;
  href?: string;
}

export const SmallButton: FC<Props> = ({ className, children, href }) => {
  return (
    <ButtonTemplate href={href} className={"w-fit rounded-sm px-8 py-3 text-lg " + className}>
      {children}
    </ButtonTemplate>
  );
};
