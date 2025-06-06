import { TypeAlbum } from '../../../types';
import { EnumAlbums } from '../types';

const album: TypeAlbum = {
  id: EnumAlbums.teatrUrodov,
  name: 'Театр уродов',
  year: 2011,
  folder: '/artist/shmely/albums/2011_teatr.jpg',
  streaming: {
    spotify: 'https://open.spotify.com/album/40ou3ofmt60WN6Z1LXpF0p',
    youtube: 'https://www.youtube.com/playlist?list=OLAK5uy_kziusKHBqOaVCF3vKxL1PcshlkPV1UU5U',
    youtubeMusic:
      'https://music.youtube.com/playlist?list=OLAK5uy_liV01e1JDnannkLWqdmM7BJv613aPj9Ws',
    yandexMusic: 'https://music.yandex.ru/album/3444134',
  },
  songs: [
    { name: 'Улёт' },
    { name: 'Санитарка' },
    { name: 'Тату на попе' },
    { name: 'Маэстро ужасов' },
    { name: 'Дорога пуста' },
    { name: 'Зелёный поезд' },
    { name: 'Фокусник' },
    { name: 'Поцелуи' },
    { name: 'Ах, у ели' },
    { name: 'Мало' },
    { name: 'Театр уродов' },
    { name: 'КрАЗ 255' },
    { name: 'Судьба' },
    { name: 'Му-Му жива' },
  ],
};

export default album;
