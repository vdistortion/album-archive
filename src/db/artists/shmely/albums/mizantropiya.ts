import { TypeAlbum } from '../../../types';
import { EnumAlbums } from '../types';

const album: TypeAlbum = {
  id: EnumAlbums.mizantropiya,
  name: 'Мизантропия',
  year: 2016,
  folder: '/artist/shmely/albums/2016_mizantropiya.jpg',
  streaming: {
    spotify: 'https://open.spotify.com/album/5fyLR7SyykWK1EmVKesNNK',
    youtube: 'https://www.youtube.com/playlist?list=OLAK5uy_ni5xNthJBzgd9MZ63IBNDGsWa0rtcuJA0',
    youtubeMusic:
      'https://music.youtube.com/playlist?list=OLAK5uy_ly9XGbpMjncfPi2jDs8Kyq9bm47Iiezuc',
    yandexMusic: 'https://music.yandex.ru/album/4184010',
  },
  songs: [
    { name: 'Летальные потехи' },
    { name: 'Хотив спитати' },
    { name: 'Наоборот' },
    { name: 'Не сумувати' },
    { name: 'Поздно планировать жизнь' },
    { name: 'Металевий свiт' },
    { name: 'Механики' },
    { name: 'Човен Страху' },
    { name: 'Мизантропия' },
    { name: 'Автомобiлизм' },
    { name: 'Адская машина' },
    { name: 'Бесконечность' },
    { name: 'Сваи' },
    { name: 'Ток' },
    { name: 'Ведьмы мои' },
  ],
};

export default album;
