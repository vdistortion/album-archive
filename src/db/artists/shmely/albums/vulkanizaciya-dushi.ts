import { TypeAlbum } from '../../../types';
import { EnumAlbums, EnumSongs } from '../types';

const album: TypeAlbum = {
  id: EnumAlbums.vulkanizaciyaDushi,
  name: 'Вулканизация души',
  year: 1999,
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
