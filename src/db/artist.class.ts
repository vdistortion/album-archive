import { TypeSong } from './types';

export class ArtistClass {
  songs: Record<string, TypeSong> = {};

  getSongsWithTexts(): TypeSong[] {
    return Object.values(this.songs).filter((song) => song.text);
  }

  getSongsWithoutAlbum(): TypeSong[] {
    return Object.values(this.songs).filter((song) => !song.albums.length);
  }

  getAllVideos(): TypeSong[] {
    return Object.values(this.songs).filter((song) => song.clipYouTubeId);
  }

  sortAsc(a: TypeSong, b: TypeSong) {
    if (a.name[0] < b.name[0]) return -1;
    if (a.name[0] > b.name[0]) return 1;
    return 0;
  }
}
