import { ResourceCard } from "@/components/ui/Cards";
import { PluginInfoResponse } from "@/interfaces/PluginInfoResponse";
import { timestampToTextConverter } from "../../utils/timestampToTextConverter";

const pluginsId = [92834, 95021, 95365, 98063];

async function getPluginsInfo() {
  let pluginsInfo: PluginInfoResponse[] = [];
  for (let i = 0; i < pluginsId.length; i++) {
    await fetch(`https://api.spiget.org/v2/resources/${pluginsId[i]}`)
      .then(response => response.json())
      .then(pluginInfo => pluginsInfo.push(pluginInfo));
  }

  return pluginsInfo;
}

async function getPluginVersions() {
  let pluginsVersions = new Map<number, PluginInfoResponse>();
  for (let i = 0; i < pluginsId.length; i++) {
    await fetch(`https://api.spiget.org/v2/resources/${pluginsId[i]}/versions/latest`)
      .then(response => response.json())
      .then(pluginLatestVersion => pluginsVersions.set(pluginsId[i], pluginLatestVersion));
  }

  return pluginsVersions;
}

export default async function Resources() {
  const pluginsInfo: PluginInfoResponse[] = await getPluginsInfo();
  const pluginsVersions: Map<number, PluginInfoResponse> = await getPluginVersions();
  return (
    <main>
      <div className="mx-3 flex flex-col items-center justify-center sm:mx-16 md:mx-40">
        <h1 className="mt-12 text-5xl md:mt-16 md:text-6xl">Resources</h1>

        <div className="mb-16 mt-12 flex w-full flex-col gap-7">
          {pluginsInfo.map(plugin => (
            <ResourceCard
              key={plugin.name}
              pluginId={plugin.id}
              pluginImageRef={plugin.icon.data}
              pluginName={plugin.name}
              pluginVersion={pluginsVersions.get(plugin.id)?.name}
              pluginTag={plugin.tag}
              pluginDownloads={plugin.downloads}
              pluginRating={plugin.rating.average}
              pluginUpdateDate={timestampToTextConverter(plugin.updateDate)}
            />
          ))}
        </div>
      </div>
    </main>
  );
}
