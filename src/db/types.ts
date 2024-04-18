type TypeId = string;

export type TypeArtist = {
  id: TypeId;
  name: string;
  albums: TypeId[];
};

export type TypeAlbum = {
  id: TypeId;
  name: string;
  year: number;
  songs: TypeId[];
  info?: string;
  folder?: string;
  order?: number;
};

export type TypeAlbums = {
  [key: TypeId]: TypeAlbum;
};

export type TypeSong = {
  id: TypeId;
  name: string[];
  albums: TypeId[];
  text: string;
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

export const enum EnumArtists {
  master = 'master',
  shmely = 'shmely',
}
