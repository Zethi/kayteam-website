import Link from "next/link";
import { FC } from "react";

interface Props {
  href: string;
  children: React.ReactNode;
  className?: string;
}
export const NavLink: FC<Props> = ({ href, children, className }) => {
  return (
    <Link
      className={className + " " + "border-kt-orange pb-2 font-extrabold hover:border-b-2 focus:text-kt-orange "}
      href={href}
    >
      {children}
    </Link>
  );
};
