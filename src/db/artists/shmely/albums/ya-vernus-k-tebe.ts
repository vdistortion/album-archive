import { TypeAlbum } from '../../../types';
import { EnumAlbums, EnumSongs } from '../types';

const album: TypeAlbum = {
  id: EnumAlbums.yaVernusKTebe,
  name: 'Я вернусь к тебе',
  year: 2006,
  songs: [
    { name: 'Жди меня в полночь' },
    { name: 'Ангелы в дверях' },
    { name: 'Вьюга' },
    EnumSongs.laboratoriyaAltruizma,
    { name: 'Гроза' },
    { name: 'Биомеханика' },
    { name: 'Клоун умер' },
    { name: 'Боль' },
    { name: 'Покидая мир' },
    { name: 'Все мечты сбываются' },
    { name: 'Драма' },
    { name: 'Эвакуатор' },
    { name: 'Драматургия' },
  ],
};

export default album;
