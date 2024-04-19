import { TypeAlbum } from '../../../types';
import { EnumAlbums } from '../types';

const album: TypeAlbum = {
  id: EnumAlbums.pugovica,
  name: 'Пуговица',
  year: 2006,
  songs: [
    { name: 'Всё будет хорошо (intro)' },
    { name: 'Пуговица' },
    { name: 'Ангел 13' },
    { name: 'Стриптиз интеллекта' },
    { name: 'Женщина-драматургия' },
    { name: 'Мегаполис' },
    { name: 'Гильотина в цветах' },
    { name: 'Зверь' },
    { name: 'Ренессанс' },
    { name: 'Антиромантика' },
    { name: 'Ходит чёрная королева' },
    { name: 'Вальс влюблённых волн' },
    { name: 'Катёнка' },
    { name: 'Мир - комедия' },
    { name: 'Судороги живых болот' },
  ],
};

export default album;
