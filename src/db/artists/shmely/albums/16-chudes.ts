import { TypeAlbum } from '../../../types';
import { EnumAlbums } from '../types';

const album: TypeAlbum = {
  id: EnumAlbums.chudes16,
  name: '16 чудес',
  year: 2016,
  folder: '/artist/shmely/albums/2016_16.jpg',
  streaming: {
    spotify: 'https://open.spotify.com/album/20RNbLgkaoqnmqM6aZ5ppb',
    youtube: 'https://www.youtube.com/playlist?list=OLAK5uy_k5j2ONFgCxjaMibPrmWT_7cqOZpokpY0A',
    youtubeMusic:
      'https://music.youtube.com/playlist?list=OLAK5uy_lvl4Bi2EQ2Cr_pT1KK0COoNLGwDAHRHUE',
    yandexMusic: 'https://music.yandex.ru/album/4090274',
  },
  songs: [
    { name: 'Шукай' },
    { name: 'Душа не ладит с сердцем' },
    { name: 'Светится мгла' },
    { name: 'Кличе на озера' },
    { name: 'Аниматоры' },
    { name: 'Хаос чорноти' },
    { name: 'Я хочу бачити тебе' },
    { name: 'Барды Чернобыля' },
    { name: 'Бойся себя когда пьян' },
    { name: 'Зомби родстер' },
    { name: 'Ол инклюзив' },
    { name: 'Лавашабаш' },
  ],
};

export default album;
