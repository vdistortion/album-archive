import schwarzerEngel from './artists/schwarzer_engel';
import tardigradeInferno from './artists/tardigrade_inferno';
import master from './artists/master';
import shmely from './artists/shmely';
import mc18 from './artists/mc18';
import { TypeArtist, TypeItems } from './types';

const artists: TypeItems = {
  [schwarzerEngel.artist.id]: schwarzerEngel,
  [tardigradeInferno.artist.id]: tardigradeInferno,
  [master.artist.id]: master,
  [shmely.artist.id]: shmely,
  [mc18.artist.id]: mc18,
};

export default artists;

console.log(artists);

export const artistList: TypeArtist[] = [
  tardigradeInferno.artist,
  master.artist,
  shmely.artist,
  mc18.artist,
  schwarzerEngel.artist,
];
