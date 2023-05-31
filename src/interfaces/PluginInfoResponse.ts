export interface PluginInfoResponse {
  external: boolean;
  file: File;
  description: string;
  likes: number;
  sourceCodeLink: string;
  donationLink: string;
  supportedLanguages: string;
  testedVersions: string[];
  versions: Version[];
  updates: Author[];
  reviews: Author[];
  links: Links;
  name: string;
  tag: string;
  version: Version;
  author: Author;
  category: Author;
  rating: Rating;
  icon: Icon;
  releaseDate: number;
  updateDate: number;
  downloads: number;
  premium: boolean;
  price: number;
  contributors: string;
  id: number;
}

export interface Author {
  id: number;
}

export interface File {
  type: string;
  size: number;
  sizeUnit: string;
  url: string;
}

export interface Icon {
  url: string;
  data: string;
  info: string;
  hash: string;
}

export interface Links {
  additionalInformation: string;
  alternativeSupport: string;
  discussion: string;
}

export interface Rating {
  count: number;
  average: number;
}

export interface Version {
  id: number;
  uuid: string;
}
