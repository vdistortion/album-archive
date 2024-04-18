import { TypeArtist, EnumArtists } from '../../types';
import albums from './albums';
import songs from './songs';
import { EnumAlbums } from './types';

const artist: TypeArtist = {
  id: EnumArtists.master,
  name: 'Мастер',
  albums: [EnumAlbums.sideSleep],
};

export default { artist, albums, songs };
