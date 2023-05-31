import { FC } from "react";
import Image from "next/image";

interface Props {
  pluginId: number;
  pluginImageRef: string;
  pluginName: string;
  pluginVersion: any;
  pluginTag: string;
  pluginDownloads: number;
  pluginRating: number;
  pluginUpdateDate: string;
}

export const ResourceCard: FC<Props> = ({
  pluginId,
  pluginImageRef,
  pluginName,
  pluginVersion,
  pluginTag,
  pluginDownloads,
  pluginRating,
  pluginUpdateDate
}) => {
  return (
    <a
      href={`https://www.spigotmc.org/resources/${pluginId}`}
      className="grid h-24 cursor-pointer grid-cols-2 overflow-hidden p-4 shadow-box transition-all hover:scale-105 md:h-32 md:p-8"
    >
      <div className="flex flex-row gap-4">
        <div className="flex items-center">
          <Image
            className="hidden md:block"
            src={`data:image/png;base64,${pluginImageRef}`}
            alt={pluginName}
            width={64}
            height={64}
          />
        </div>
        <div>
          <div className="text-base md:text-xl">
            {pluginName} - {pluginVersion}
          </div>
          <div className="overflow-hidden text-sm font-medium md:text-base">{pluginTag}</div>
        </div>
      </div>

      <div className="flex flex-col items-end text-sm md:text-base">
        <div>Downloads: {pluginDownloads}</div>
        <div>Rating: {pluginRating}</div>
        <div>Updated: {pluginUpdateDate}</div>
      </div>
    </a>
  );
};
