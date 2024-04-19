import { TypeAlbum } from '../../../types';
import { EnumAlbums, EnumSongs } from '../types';

const album: TypeAlbum = {
  id: EnumAlbums.trotilovyyeSkazki,
  name: 'Тротиловые сказки',
  year: 1998,
  songs: [
    { name: 'Чорна доба' },
    { name: 'Яблочко-мяучило' },
    { name: 'Секс, наркотики, самогон' },
    { name: 'Лихомане мене нiч' },
    { name: 'Адская машина' },
    { name: 'Зима' },
    { name: 'За тобою' },
    { name: 'Не ходи' },
    { name: 'Цвинтар' },
    { name: 'Оргiя' },
    EnumSongs.dajGarri,
  ],
};

export default album;
