import { TypeAlbum } from '../../../types';
import { EnumAlbums, EnumSongs } from '../types';

const album: TypeAlbum = {
  id: EnumAlbums.spasms,
  name: 'Спазмы рока',
  year: 2001,
  songs: [EnumSongs.planeta],
};

export default album;
