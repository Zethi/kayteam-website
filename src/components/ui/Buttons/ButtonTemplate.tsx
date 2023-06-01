import { FC } from "react";
interface Props {
  className?: string;
  children: React.ReactNode;
  href?: string;
}

export const ButtonTemplate: FC<Props> = ({ className, children, href }) => {
  return (
    <button
      className={"cursor-pointer bg-kt-orange text-white transition-colors duration-200 hover:bg-black " + className}
    >
      <a href={href ? href : ""}>{children}</a>
    </button>
  );
};
