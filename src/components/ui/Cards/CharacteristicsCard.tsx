import { lato } from "@/app/fonts";
import Image from "next/image";
import { FC } from "react";

interface Props {
  title: string;
  description: string;
  image: string;
}
export const CharacteristicsCard: FC<Props> = ({ image, title, description }) => {
  return (
    <div className="flex h-80 w-72 flex-col items-center justify-center rounded shadow-card">
      <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-lg bg-kt-orange">
        <Image src={image} height={64} width={64} alt={"card-image"} />
      </div>
      <h3 className="font-oswald mb-2 text-3xl font-normal">{title}</h3>
      <p className={`mx-6 text-center ${lato.className} text-base font-light`}>{description}</p>
    </div>
  );
};
