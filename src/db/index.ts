import schwarzerEngel from './artists/schwarzer_engel';
import tardigradeInferno from './artists/tardigrade_inferno';
import master from './artists/master';
import shmely from './artists/shmely';
import { TypeArtist, TypeItems } from './types';

const artists: TypeItems = {
  [schwarzerEngel.artist.id]: schwarzerEngel,
  [tardigradeInferno.artist.id]: tardigradeInferno,
  [master.artist.id]: master,
  [shmely.artist.id]: shmely,
};

export default artists;

console.log(artists);

export const artistList: TypeArtist[] = [
  tardigradeInferno.artist,
  master.artist,
  shmely.artist,
  schwarzerEngel.artist,
];
