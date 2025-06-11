import { TypeAlbum } from '../../../types';
import { EnumAlbums, EnumSongs } from '../types';

const album: TypeAlbum = {
  id: EnumAlbums.geval,
  name: 'Гевал',
  year: 2009,
  folder: '/artist/geval/albums/1.webp',
  songs: [
    { name: 'Зверь' },
    { name: 'Иуда' },
    { name: 'Homo Sapiens' },
    { name: 'Камлание' },
    { name: 'Троя' },
    { name: 'Грязный хлеб' },
    { name: 'Quo Vadis' },
    { name: 'Херувимы' },
    { name: 'Гевал' },
    { name: 'Умрём живыми' },
  ],
  info: `
  `,
};

export default album;
