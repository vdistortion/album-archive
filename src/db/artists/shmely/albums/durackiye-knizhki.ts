import { TypeAlbum } from '../../../types';
import { EnumAlbums } from '../types';

const album: TypeAlbum = {
  id: EnumAlbums.durackiyeKnizhki,
  name: 'Дурацкие книжки',
  year: 1998,
  folder: '/artist/shmely/albums/1998_knizhki.jpg',
  streaming: {
    spotify: 'https://open.spotify.com/album/63sm3EX7I90qTqXEFBcUdT',
    youtube:
      'https://www.youtube.com/playlist?list=OLAK5uy_kgofi2TmxxKfzOrot5dsKipLqRNh1VjsE',
    youtubeMusic:
      'https://music.youtube.com/playlist?list=OLAK5uy_l16b-hVl6mCOISWOuLJWtDPH5uTbbBoG4',
    yandexMusic: 'https://music.yandex.ru/album/3444884',
  },
  songs: [
    {
      name: 'Я не ангел',
    },
    {
      name: 'Могильщик',
    },
    {
      name: 'Волосы',
    },
    {
      name: 'Жрать подано',
    },
    {
      name: 'Гори, костёр!',
    },
    {
      name: 'Резиновые дебри',
    },
    {
      name: 'Язва на душе',
    },
    {
      name: 'Дурацкие книжки',
    },
    {
      name: 'Говно',
    },
    {
      name: 'Не грусти, и так хуёво',
    },
    {
      name: 'Пьяные облака',
    },
    {
      name: 'Икона',
    },
    {
      name: 'Откровения',
    },
    {
      name: 'Мiсяцъ з неба геть',
    },
    {
      name: 'Дорогая',
    },
    {
      name: 'Руйнется мозок',
    },
    {
      name: 'Вакханалия',
    },
  ],
};

export default album;
