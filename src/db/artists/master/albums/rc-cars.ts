import { TypeAlbum } from '../../../types';
import { EnumAlbums } from '../types';

const album: TypeAlbum = {
  id: EnumAlbums.rcCars,
  name: 'Недетские гонки',
  year: 2003,
  folder: '/artist/master/albums/rc_cars.jpg',
  songs: [
    { name: 'Руки прочь' },
    { name: 'Места хватит всем' },
    { name: 'Кто кого?' },
    { name: 'Берегись' },
    { name: 'Високосный век' },
    { name: 'Лабиринт' },
    { name: 'Metal-доктор' },
    { name: 'Мастер' },
    { name: 'Палачи' },
    { name: 'Сон' },
    { name: 'Таран' },
  ],
  info: `
Запись 2002 г., саундтрек к компьтерной игре
Алик Грановский - бас, Алексей Страйк - гитара, Андрей Лебедев Крустер - сэмплы, сведение, звуковые эффекты
  `,
};

export default album;
