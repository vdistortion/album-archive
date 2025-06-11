import { TypeAlbum } from '../../../types';
import { EnumAlbums, EnumSongs } from '../types';

const album: TypeAlbum = {
  id: EnumAlbums.rim,
  name: 'Третий Рим',
  year: 2010,
  folder: '/artist/geval/albums/3.webp',
  songs: [
    { name: 'Третий Рим' },
    { name: 'Печать зверя (Алиса cover)' },
    { name: 'Лабиринт' },
  ],
  info: `
  `,
};

export default album;
