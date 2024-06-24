import { TypeAlbum } from '../../../types';
import { EnumAlbums } from '../types';

const album: TypeAlbum = {
  id: EnumAlbums.mekhanicheskayaBalerina,
  name: 'Механическая балерина',
  year: 2010,
  folder: '/artist/shmely/albums/2010_balerina.jpg',
  streaming: {
    spotify: 'https://open.spotify.com/album/0AoYg8ddVNIoismWBYv7jp',
    youtube:
      'https://www.youtube.com/playlist?list=OLAK5uy_lKAK6qxtulNpigAsSzglJMTDsX86CWRZg',
    youtubeMusic:
      'https://music.youtube.com/playlist?list=OLAK5uy_kAfpmxC-5vpT_zMwug5HcuXsnFi4l41bo',
    yandexMusic: 'https://music.yandex.ru/album/3444129',
  },
  songs: [
    { name: 'Механическая балерина' },
    { name: 'Люди' },
    { name: 'Какофония сердец' },
    { name: 'Вещий сон' },
    { name: 'Прёт? Так при!' },
    { name: 'Жги' },
    { name: 'Лысая гора' },
    { name: 'Небо против' },
    { name: 'Котейка на трёх ножках' },
    { name: 'Снова про любовь, блин' },
    { name: 'Цветочный медведь' },
    { name: 'Колыбельная++' },
    { name: 'Аель-Ауа' },
    { name: 'Женщина-игра (bonus track)' },
  ],
};

export default album;
