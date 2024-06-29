type TypeId = string;

type TypeStreamingList =
  | 'spotify'
  | 'bandcamp'
  | 'youtube'
  | 'youtubeMusic'
  | 'appleMusic'
  | 'yandexMusic';

export type TypeStreaming = Partial<Record<TypeStreamingList, string>>;

export type TypeArtist = {
  id: TypeId;
  name: string;
  albums: TypeId[];
  image: string;
  streaming?: TypeStreaming;
};

export type TypeAlbum = {
  id: TypeId;
  name: string;
  year: number;
  songs: (TypeId | { name: string })[];
  info?: string;
  folder?: string;
  order?: number;
  streaming?: TypeStreaming;
};

export type TypeAlbums = Record<TypeId, TypeAlbum>;

export type TypeSong = {
  id: TypeId;
  name: string[];
  albums: TypeId[];
  text: string;
  authors?: string;
  clipYouTubeId?: string;
};

export type TypeSongs = Record<TypeId, TypeSong>;

export type TypeItem = {
  artist: TypeArtist;
  albums: TypeAlbums;
  songs: TypeSongs;
};

export type TypeItems = Record<TypeId, TypeItem>;
