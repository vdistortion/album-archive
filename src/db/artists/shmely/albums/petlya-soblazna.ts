import { TypeAlbum } from '../../../types';
import { EnumAlbums, EnumSongs } from '../types';

const album: TypeAlbum = {
  id: EnumAlbums.petlyaSoblazna,
  name: 'Петля соблазна',
  year: 1998,
  songs: [
    {
      name: 'Вьюга',
    },
    {
      name: 'Психоз',
    },
    {
      name: 'Солнышко выйдет',
    },
    {
      name: 'Весна покойница',
    },
    {
      name: 'Как на плахе святой',
    },
    {
      name: 'Ганьба',
    },
    {
      name: 'Аллилуйа',
    },
    {
      name: 'Обессиленный прах',
    },
    {
      name: 'Бiсов гай',
    },
    EnumSongs.trahniNebo,
    EnumSongs.divchinaKulya,
    {
      name: 'Завiтай',
    },
    {
      name: 'Чёрная исповедь',
    },
    {
      name: 'Фашистский мотоцикл',
    },
    {
      name: 'Понедельник',
    },
  ],
};

export default album;
