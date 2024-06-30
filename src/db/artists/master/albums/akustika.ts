import { TypeAlbum } from '../../../types';
import { EnumAlbums, EnumSongs } from '../types';

const album: TypeAlbum = {
  id: EnumAlbums.akustika,
  name: 'Акустика',
  year: 2005,
  folder: '/artist/master/albums/akystika_2005.jpg',
  songs: [
    EnumSongs.plachSvireli,
    { name: 'Тореро' },
    { name: 'Високосный век' },
    { name: '33 жизни' },
    { name: 'Палачи' },
    { name: 'Heavy-ламбада' },
    { name: 'Пепел на ветру' },
    { name: 'Игра' },
    { name: 'Кресты' },
    { name: 'Здесь куют металл' },
    EnumSongs.veter,
  ],
  info: `
Акустический альбом вышел в свет в конце декабря 2005 года. В альбом вошли как старые хиты, так и две новые композиции.

"Каждый шаг на нашей дороге - новое приключение, испытание и опыт. Этот альбом - ещё одно движение вперёд для нас и для тебя..."



Состав:
А. Страйк - гитара        А. Грановский - бас-гитара
LEXX - гитара, вокал     А. Карпухин - ударные, перкуссия
  `,
};

export default album;
