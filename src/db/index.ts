import master from './artists/master';
import shmely from './artists/shmely';
import { TypeArtist, TypeItems } from './types';

const artists: TypeItems = {
  [master.artist.id]: master,
  [shmely.artist.id]: shmely,
};

export default artists;

export const artistList: TypeArtist[] = [master.artist, shmely.artist];
