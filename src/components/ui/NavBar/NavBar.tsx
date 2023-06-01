"use client";
import Image from "next/image";
import { NavLink } from "./NavLink";
import Link from "next/link";
import { useState, useEffect } from "react";
import { MobileNavLink } from "./MobileAdapters/MobileNavLink";

export const NavBar = () => {
  let [mobileNavIsDeployed, setMobileNavDeploy] = useState(false);
  useEffect(() => {
    if (!mobileNavIsDeployed) {
      document.body.style.overflowY = "scroll";
    } else {
      document.body.style.overflow = "hidden";
    }
  }, [mobileNavIsDeployed]);
  console.log(mobileNavIsDeployed);
  return (
    <nav className="flex h-24 w-full items-center justify-between bg-white px-6 shadow-lg 2xl:px-80">
      <Link href={"/"}>
        <Image
          src={"https://kayteam.org/wp-content/themes/KayTeam_Template/images/Recurso31.png"}
          alt="KayTeam"
          width={180}
          height={55}
          onClick={() => {
            if (mobileNavIsDeployed) setMobileNavDeploy(false);
          }}
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
          onClick={() => setMobileNavDeploy(!mobileNavIsDeployed)}
        />
        {mobileNavIsDeployed ? (
          <div className="fixed right-0 top-24 flex h-screen w-screen flex-col gap-16 bg-kt-orange text-white transition-all  ">
            <div className="mt-16 flex flex-col items-center gap-16">
              <MobileNavLink
                href={"/about"}
                className={"mx-6 text-4xl"}
                onClick={() => setMobileNavDeploy(!mobileNavIsDeployed)}
              >
                ABOUT US
              </MobileNavLink>
              <MobileNavLink
                href={"/resources"}
                className={"mx-6 text-4xl"}
                onClick={() => setMobileNavDeploy(!mobileNavIsDeployed)}
              >
                OUR PRODUCTS
              </MobileNavLink>
              <MobileNavLink
                href={"https://github.com/KayTeam-Studio"}
                className={"mx-6 text-4xl"}
                onClick={() => setMobileNavDeploy(!mobileNavIsDeployed)}
              >
                PORTFOLIO
              </MobileNavLink>
              <MobileNavLink
                href={"/knowledge"}
                className={"mx-6 text-4xl"}
                onClick={() => setMobileNavDeploy(!mobileNavIsDeployed)}
              >
                KNOWLEDGE BASE
              </MobileNavLink>
            </div>
          </div>
        ) : (
          <></>
        )}
      </div>
    </nav>
  );
};
