type TypeId = string;

export type TypeStreaming = {
  spotify?: string;
  youtube?: string;
  youtubeMusic?: string;
  yandexMusic?: string;
};

export type TypeArtist = {
  id: TypeId;
  name: string;
  albums: TypeId[];
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

export type TypeAlbums = {
  [key: TypeId]: TypeAlbum;
};

export type TypeSong = {
  id: TypeId;
  name: string[];
  albums: TypeId[];
  text: string;
  authors?: string;
};

export type TypeSongs = {
  [key: TypeId]: TypeSong;
};

export type TypeItem = {
  artist: TypeArtist;
  albums: TypeAlbums;
  songs: TypeSongs;
};

export type TypeItems = {
  [key: TypeId]: TypeItem;
};
