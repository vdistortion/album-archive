import shmely from './artists/shmely';
import { TypeItem } from './types';

console.log(parseArtist(shmely));

export default [shmely];

function parseArtist({ artist, albums, songs }: TypeItem) {
  const albumList = artist.albums.map((albumId) => {
    const songsList = albums[albumId].songs.map((songId) => songs[songId]);

    return { ...albums[albumId], songs: songsList };
  });

  return { ...artist, albums: albumList };
}
