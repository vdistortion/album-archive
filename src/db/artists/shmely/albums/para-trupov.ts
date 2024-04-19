import { TypeAlbum } from '../../../types';
import { EnumAlbums } from '../types';

const album: TypeAlbum = {
  id: EnumAlbums.paraTrupov,
  name: 'Пара трупов',
  year: 2013,
  songs: [
    { name: 'Звёзды светят ярче' },
    { name: 'Белые чулочки' },
    { name: 'Пара трупов' },
    { name: 'На конечном горизонте' },
    { name: 'Новая радость' },
    { name: 'Кукла Герда' },
    { name: 'Проститутки Москвы' },
    { name: 'Дизайн' },
    { name: 'Последняя любовь' },
    { name: 'Экскурсия по Аду' },
    { name: 'Ансамбль' },
    { name: 'Гробовщик' },
  ],
};

export default album;
