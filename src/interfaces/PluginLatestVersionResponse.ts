export interface PluginLatestVersionResponse {
  downloads: number;
  name: string;
  rating: Rating;
  releaseDate: number;
  resource: number;
  uuid: string;
  id: number;
}

export interface Rating {
  count: number;
  average: number;
}
