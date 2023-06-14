import Link from "next/link";
import { FC, MouseEventHandler } from "react";

interface Props {
  href: string;
  children: React.ReactNode;
  className?: string;
  onClick?: MouseEventHandler<HTMLAnchorElement>;
}
export const MobileNavLink: FC<Props> = ({ href, children, className, onClick }) => {
  return (
    <Link
      className={className + " " + "font-extrabold hover:text-black focus:text-black "}
      href={href}
      onClick={onClick}
    >
      {children}
    </Link>
  );
};
