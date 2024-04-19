import { TypeAlbum } from '../../../types';
import { EnumAlbums } from '../types';

const album: TypeAlbum = {
  id: EnumAlbums.koshkinyObidy,
  name: 'Кошкины обиды',
  year: 2007,
  songs: [
    { name: 'Уходи' },
    { name: 'Череп. Слёзы.' },
    { name: 'Кошкины обиды' },
    { name: 'Пантомима' },
    { name: 'Меч' },
    { name: 'Равнодушно' },
    { name: 'Зло реки' },
    { name: 'Летальный приход' },
    { name: 'Жертва' },
    { name: 'Суета' },
    { name: 'Дорога к морю' },
    { name: 'Женщина летучая мышь' },
    { name: 'За пределом (Shado News)' },
    { name: 'La Rencontre (Steve Love)' },
  ],
};

export default album;
