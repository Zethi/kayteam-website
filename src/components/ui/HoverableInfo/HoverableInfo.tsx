import { FC } from "react";

interface Props {
  children: React.ReactNode;
}

export const HoverableInfo: FC<Props> = ({ children }) => {
  return (
    <div className="relative transition-all hover:scale-110">
      <div className="absolute inset-0 z-10 flex justify-center opacity-0 duration-300 hover:opacity-100">
        <p>Your brand could be here!</p>
      </div>
      <div className="relative mt-8">
        <div className="flex h-48 content-center">{children}</div>
      </div>
    </div>
  );
};
