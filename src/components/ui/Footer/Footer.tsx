import { FC } from "react";

export const Footer = () => {
  return (
    <footer className="flex flex-col items-center bg-black py-10 font-lato text-xs text-white lg:text-sm ">
      <div className="flex-row gap-1 md:flex">
        <p className="flex flex-row justify-center gap-1 font-normal ">
          {" Follow us on "}
          <SocialLink href="https://twitter.com/KayTeam_" text="Twitter" />
        </p>

        <p className="flex flex-row justify-center gap-1 font-normal">
          <span className="hidden md:block">{" • "}</span>
          {" Join us on "}
          <SocialLink href="https://kayteam.org/discord" text="Discord" />
        </p>

        <p className="flex flex-row justify-center gap-1 font-normal">
          <span className="hidden md:block">{" • "}</span>
          {" Follow us on "}
          <SocialLink href="https://www.instagram.com/kayteam_/" text="Instagram" />
        </p>
      </div>

      <p className="font-bold">contact@kayteam.org</p>
      <br />
      <p className="font-normal">KayTeam © 2019 - 2023 All rights reserved.</p>
    </footer>
  );
};

interface Props {
  href: string;
  text: string;
}
const SocialLink: FC<Props> = ({ href, text }) => {
  return (
    <a href={href} rel="noreferrer" className="hover:socialLink-text-shadow font-bold duration-300" target="_blank">
      {text}
    </a>
  );
};
