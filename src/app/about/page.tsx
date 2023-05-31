import { TeamPersonCard } from "@/components/ui/Cards";

export default function About() {
  return (
    <div className="flex flex-col items-center justify-center ">
      <h1 className="mt-12 text-5xl md:mt-16 md:text-6xl">Meet the team</h1>

      <div className="mx-6 mb-20 mt-12 flex flex-wrap justify-center gap-12 md:mx-16 md:mb-96">
        <TeamPersonCard
          name="Schmidt Segundo"
          jobName="Chief Executive Officer"
          image="/assets/avatars/segu.jpg"
          instagramURL="https://www.instagram.com/segundoschmidt/"
          twitterURL="https://twitter.com/segundoschmidt_"
          githubURL="https://github.com/segu23"
        />
        <TeamPersonCard
          name="Pereyra Osvaldo"
          jobName="Chief Technology Officer"
          image="/assets/avatars/osvaldo.jpg"
          instagramURL="https://www.instagram.com/sir_osvaldo/"
          twitterURL="https://twitter.com/SirAldo5"
          githubURL="https://github.com/SirOswaldo"
        />
        <TeamPersonCard
          name="You could be here"
          jobName="We are hiring!"
          image="/assets/logos/kayteam-logo-black.png"
          instagramURL="https://www.instagram.com/sir_osvaldo/"
          twitterURL="https://twitter.com/SirAldo5"
          githubURL="https://github.com/SirOswaldo"
        />
      </div>
    </div>
  );
}
