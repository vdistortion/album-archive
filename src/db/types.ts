type TypeId = string | number;

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
  [key: string]: TypeAlbum;
};

export type TypeSong = {
  id: TypeId;
  name: string[];
  albums: TypeId[];
  text: string;
};

export type TypeSongs = {
  [key: string]: TypeSong;
};

export type TypeItem = {
  artist: TypeArtist;
  albums: TypeAlbums;
  songs: TypeSongs;
};

export const enum EnumArtists {
  shmely,
}
