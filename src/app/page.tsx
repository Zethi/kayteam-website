import Image from "next/image";
import { SmallButton } from "@/components/ui/Buttons";
import { CharacteristicsCard } from "@/components/ui/Cards";
import { HoverableInfo } from "@/components/ui/HoverableInfo";
import { ReviewsCarrousel } from "@/components/ui/Carrousel";

export default function Home() {
  return (
    <main>
      <div className="mb-12 grid grid-cols-2 pt-10 md:mb-40 md:pt-20">
        {/* Left */}
        <div className="col-span-2 flex h-96 items-center justify-center md:col-span-1 md:mr-12 md:h-full md:justify-end">
          <div className="flex flex-col items-center md:items-end">
            <h1 className="text-center text-6xl md:text-right md:text-7xl">
              Developing
              <br className="pt-2" />
              your ideas
            </h1>
            <SmallButton href="#contact" className="mt-4">
              Contact Us
            </SmallButton>
          </div>
        </div>

        {/* Right */}
        <div className="hidden md:block">
          <Image src={"/assets/decorations/KayTeamTop.webp"} priority alt="Kayteam-logo" height={500} width={500} />
        </div>
      </div>

      <div className="flex w-full flex-col items-center justify-center bg-black py-4 text-white md:h-28 md:flex-row md:gap-8">
        <p className="mx-5 text-lg font-light md:mx-0 md:mt-0 md:text-3xl">
          Do you want to be up to date with the news?
        </p>
        <SmallButton href="https://kayteam.org/discord" className="my-4 text-base md:my-0 md:text-xl">
          <div className="flex flex-row flex-wrap items-center gap-3">
            <Image src="/assets/logos/discord-logo-white.svg" height={30} width={30} alt="Discord" />
            Join us on Discord
          </div>
        </SmallButton>
      </div>

      <div className="mt-16">
        <div className="flex flex-col items-center">
          <h2 className="text-5xl">Why choose us?</h2>
          <p className="text-md mx-5 mt-3 text-justify font-medium md:mx-0 md:text-xl">
            At KayTeam, customer satisfaction is our priority, and we do everything to achieve it.
          </p>
        </div>

        <div className="mt-12 flex flex-wrap justify-center gap-10">
          <CharacteristicsCard
            image="/assets/components/ui/cards/own-project.svg"
            title="Own Projects"
            description="Not only do we make commissions, we have our own free development projects."
          />
          <CharacteristicsCard
            image="/assets/components/ui/cards/creativity.svg"
            title="Creativity"
            description="The members of our team use all their creativity in order to develop the best final product."
          />
          <CharacteristicsCard
            image="/assets/components/ui/cards/open-source.svg"
            title="Open Source"
            description="When you hire our services, you will also get the source code, so you can edit it at will in the future."
          />
          <CharacteristicsCard
            image="/assets/components/ui/cards/price-quote.svg"
            title="Price Quote"
            description="We provide quotation of projects, so that the client can choose his best option."
          />
        </div>
      </div>

      <div
        className="mt-12 flex h-40 w-full text-white md:mt-16"
        style={{
          backgroundImage: "url(/assets/sponsors/Sparked/sparked-youtube-banner.png)"
        }}
      >
        <div className="text-md mx-5 flex w-full flex-col items-center justify-center gap-5 md:flex-row md:gap-8 xl:mx-0">
          <p className="text-lg font-light md:text-3xl ">
            Are you looking for a Minecraft host at a good price and with good performance?
          </p>
          <SmallButton href="https://sparkedhost.com" className="text-base font-bold md:text-xl">
            Check SparkedHost
          </SmallButton>
        </div>
      </div>

      <div className="mt-12 md:mt-16">
        <ReviewsCarrousel />
      </div>

      <div className="mt-12 bg-black py-12 text-white md:mt-16">
        <p className="text-center text-5xl">Our Sponsors</p>

        <div className="mt-6 flex flex-wrap justify-center gap-12 md:mt-10">
          <HoverableInfo>
            <Image
              className="h-40"
              src={"/assets/sponsors/Sparked/sparked-logo-white.png"}
              alt="Sparked-logo-white"
              height={100}
              width={200}
            />
          </HoverableInfo>

          <HoverableInfo>
            <Image
              className="h-40"
              src={"/assets/logos/kayteam-logo-white.png"}
              alt="Kayteam-logo-white"
              height={100}
              width={170}
            />
          </HoverableInfo>

          <HoverableInfo>
            <Image
              className="h-40"
              src={"/assets/sponsors/Gtadictos/gtadictos-logo-white.png"}
              alt="Gtadictos-logo-white"
              height={160}
              width={170}
            />
          </HoverableInfo>
        </div>
      </div>

      <div id="contact" className="mx-6 my-12 flex justify-center md:mx-0 md:my-24">
        <form className="grid w-fit grid-cols-2 rounded-md p-6 shadow-box md:p-16" action="">
          <div className="col-span-2 flex flex-col items-center md:col-span-1 md:mr-16  md:items-end">
            <p className="text-4xl ">Contact Info</p>
            <a
              href="mailto:contact@kayteam.org"
              className="mt-2 flex items-center gap-1 font-normal transition-colors hover:text-kt-orange md:text-xl"
            >
              <svg className="hidden h-6 w-6 md:block" viewBox="0 0 448 448" fill={"#ff5307"}>
                <path d="m314.375 144h-180.75l90.375 77.464844zm0 0"></path>
                <path d="m224 240c-1.910156 0-3.757812-.683594-5.207031-1.929688l-98.792969-84.679687v150.609375h208v-150.609375l-98.792969 84.679687c-1.449219 1.246094-3.296875 1.929688-5.207031 1.929688zm0 0"></path>
                <path d="m224 0c-123.710938 0-224 100.289062-224 224s100.289062 224 224 224 224-100.289062 224-224c-.140625-123.652344-100.347656-223.859375-224-224zm120 312c0 4.417969-3.582031 8-8 8h-224c-4.417969 0-8-3.582031-8-8v-176c0-4.417969 3.582031-8 8-8h224c4.417969 0 8 3.582031 8 8zm0 0"></path>
              </svg>
              <p>contact@kayteam.org</p>
            </a>
          </div>
          <div className="col-span-2 mt-5 flex flex-col justify-center gap-3 md:col-span-1 md:mt-0">
            <input className="border border-black p-2" type="text" placeholder="Enter your name" />
            <input className="border border-black p-2" type="text" placeholder="Enter a valid email address" />
            <textarea
              className="resize-none border border-black p-2"
              placeholder="Enter your message"
              rows={4}
              cols={50}
            />

            <SmallButton className="w-full" href="/">
              Submit
            </SmallButton>
          </div>
        </form>
      </div>
    </main>
  );
}
