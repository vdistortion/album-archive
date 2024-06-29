import { TypeAlbum } from '../../../types';
import { EnumAlbums, EnumSongs } from '../types';

const album: TypeAlbum = {
  id: EnumAlbums.vulkanizaciyaDushi,
  name: 'Вулканизация души',
  year: 1999,
  folder: '/artist/shmely/albums/1999_vd_.jpg',
  songs: [
    { name: 'Крижана вода' },
    { name: 'Веснянка' },
    { name: 'У Гаю' },
    { name: 'Боги' },
    { name: 'Помолись' },
    { name: 'О-О-О' },
    { name: 'Диво' },
    { name: 'Оргазм' },
    EnumSongs.volosy,
    { name: 'Мiсяцъ' },
    { name: 'Дуня' },
    { name: 'Смерть' },
  ],
};

export default album;
