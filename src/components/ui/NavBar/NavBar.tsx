import Image from "next/image";
import { NavLink } from "./NavLink";
import Link from "next/link";

export const NavBar = () => {
  return (
    <nav className="flex h-24 w-full items-center justify-between bg-white px-6 shadow-lg 2xl:px-80">
      <Link href={"/"}>
        <Image
          src={"https://kayteam.org/wp-content/themes/KayTeam_Template/images/Recurso31.png"}
          alt="KayTeam"
          width={180}
          height={55}
        />
      </Link>
      <div className="hidden lg:block">
        <NavLink href={"/about"} className={"mx-6 text-lg  xl:text-xl"}>
          ABOUT US
        </NavLink>
        <NavLink href={"/resources"} className={"mx-6 text-lg  xl:text-xl"}>
          OUR PRODUCTS
        </NavLink>
        <NavLink href={"https://github.com/KayTeam-Studio"} className={"mx-6 text-lg  xl:text-xl"}>
          PORTFOLIO
        </NavLink>
        <NavLink href={"/knowledge"} className={"mx-6 text-lg  xl:text-xl"}>
          KNOWLEDGE BASE
        </NavLink>
      </div>

      <div className="block cursor-pointer lg:hidden ">
        <Image
          src="/assets/components/ui/NavBar/three-horizontal-lines.svg"
          alt="horizontal-lines"
          height={30}
          width={30}
        />
      </div>
    </nav>
  );
};
