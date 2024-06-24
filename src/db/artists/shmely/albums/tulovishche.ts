import { TypeAlbum } from '../../../types';
import { EnumAlbums, EnumSongs } from '../types';

const album: TypeAlbum = {
  id: EnumAlbums.tulovishche,
  name: 'Туловище',
  year: 1998,
  songs: [
    {
      name: 'Небо (стих)',
    },
    {
      name: 'Железный бог',
    },
    {
      name: 'Лай иллюзии',
    },
    {
      name: 'Травы',
    },
    {
      name: 'Первая любовь (стих)',
    },
    EnumSongs.tulovishchej,
    {
      name: 'Экзотика',
    },
    {
      name: 'Гнилое озеро',
    },
    {
      name: 'Жало бей саваляй',
    },
    {
      name: 'Лагiдно',
    },
    EnumSongs.raspyatie,
    {
      name: 'Кораблики',
    },
    {
      name: 'Ветер и гром',
    },
    {
      name: 'Непутёвый автобус',
    },
    {
      name: 'Мясной вопрос',
    },
    {
      name: 'Гимноподобная',
    },
  ],
};

export default album;
