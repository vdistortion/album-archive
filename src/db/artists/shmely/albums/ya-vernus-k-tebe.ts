import { TypeAlbum } from '../../../types';
import { EnumAlbums, EnumSongs } from '../types';

const album: TypeAlbum = {
  id: EnumAlbums.yaVernusKTebe,
  name: 'Я вернусь к тебе',
  year: 2006,
  folder: '/artist/shmely/albums/2006_vernus.jpg',
  songs: [
    { name: 'Жди меня в полночь' },
    { name: 'Ангелы в дверях' },
    { name: 'Вьюга' },
    EnumSongs.laboratoriyaAltruizma,
    { name: 'Гроза' },
    EnumSongs.biomekhanika,
    { name: 'Клоун умер' },
    EnumSongs.bol,
    EnumSongs.pokidayaMir,
    { name: 'Все мечты сбываются' },
    { name: 'Драма' },
    { name: 'Эвакуатор' },
    { name: 'Драматургия' },
  ],
};

export default album;
