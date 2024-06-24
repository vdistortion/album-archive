import { TypeAlbum } from '../../../types';
import { EnumAlbums } from '../types';

const album: TypeAlbum = {
  id: EnumAlbums.belyjKarandash,
  name: 'Белый карандаш',
  year: 2014,
  folder: '/artist/shmely/albums/2014_karandash.jpg',
  streaming: {
    spotify: 'https://open.spotify.com/album/4BKbUBCtcHXI55rIgRK1N2',
    youtube:
      'https://www.youtube.com/playlist?list=OLAK5uy_me_kZEdgKM1vA9Z3ztRoX4z7PGpIzFXQo',
    youtubeMusic:
      'https://music.youtube.com/playlist?list=OLAK5uy_liI8wzWEd8L3cCk0h6iXOxEnakMSfvEz8',
    yandexMusic: 'https://music.yandex.ru/album/3444125',
  },
  songs: [
    { name: 'Сердце Бога' },
    { name: 'Белый карандаш' },
    { name: 'Сей час' },
    { name: 'Под асфальт' },
    { name: 'Безответная любовь' },
    { name: 'Вселенский оргазм' },
    { name: 'Кабаре' },
    { name: 'Потеха' },
    { name: 'Напои нас' },
    { name: 'Попутчица' },
    { name: 'Другой смех' },
    { name: 'Океаномагия' },
    { name: 'Пылающий ангел' },
    { name: 'Нет выбора' },
    { name: 'Андромеда' },
  ],
};

export default album;
