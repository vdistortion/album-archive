import { TypeArtist, EnumArtists } from '../../types';
import albums from './albums';
import songs from './songs';
import { EnumAlbums } from './types';

const artist: TypeArtist = {
  id: EnumArtists.shmely,
  name: 'Шмели',
  albums: [EnumAlbums.spasms, EnumAlbums.poshmelye],
};

export default { artist, albums, songs };
