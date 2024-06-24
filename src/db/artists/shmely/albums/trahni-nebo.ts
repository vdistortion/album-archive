import { TypeAlbum } from '../../../types';
import { EnumAlbums, EnumSongs } from '../types';

const album: TypeAlbum = {
  id: EnumAlbums.trahniNebo,
  name: 'Трахни небо',
  year: 2000,
  songs: [
    { name: 'Лай иллюзии' },
    { name: 'Вьюга' },
    { name: 'Психоз' },
    { name: 'Солнышко' },
    EnumSongs.tulovishchej,
    { name: 'Как на плахе святой' },
    { name: 'Ганьба' },
    { name: 'Аллилуйя' },
    EnumSongs.raspyatie,
    EnumSongs.trahniNebo,
    EnumSongs.divchinaKulya,
    { name: 'Завiтай зачiкай' },
    { name: 'Фашистский мотоцикл' },
    { name: 'Травы' },
  ],
};

export default album;
