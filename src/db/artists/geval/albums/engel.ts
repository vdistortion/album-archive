import { TypeAlbum } from '../../../types';
import { EnumAlbums, EnumSongs } from '../types';

const album: TypeAlbum = {
  id: EnumAlbums.engel,
  name: 'Скорбящий ангел',
  year: 2016,
  folder: '/artist/geval/albums/5.webp',
  songs: [
    { name: 'Млечный путь' },
    { name: 'Чёрно-белое' },
    { name: 'Скорбящий ангел' },
    { name: 'Старик у моря' },
    { name: 'Сидящий демон' },
  ],
  info: `
  `,
};

export default album;
