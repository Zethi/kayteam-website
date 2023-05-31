import { FC } from "react";

interface Props {
  author: string;
  children: React.ReactNode;
}

export const OpinionBox: FC<Props> = ({ author, children }) => {
  return (
    <div className="mx-12 my-4 flex max-w-2xl flex-col rounded-md p-5 text-justify shadow-box md:mx-0 md:h-80">
      <p className="mb-2 text-center text-xl md:text-3xl">{author}</p>
      <p className="text-sm font-medium md:text-xl">{children}</p>
    </div>
  );
};
