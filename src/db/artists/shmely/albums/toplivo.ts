import { TypeAlbum } from '../../../types';
import { EnumAlbums } from '../types';

const album: TypeAlbum = {
  id: EnumAlbums.toplivo,
  name: 'Топливо',
  year: 2010,
  streaming: {
    spotify: 'https://open.spotify.com/album/0frmw2fWFkFtuoeobgciN8',
    youtube:
      'https://www.youtube.com/playlist?list=OLAK5uy_kkufNdmy_VwLed5KlwFD4q4LfGwmPF8JU',
    youtubeMusic:
      'https://music.youtube.com/playlist?list=OLAK5uy_nFcLyMsmp6FHj0wt6J3w--1qXcmgyX_xY',
    yandexMusic: 'https://music.yandex.ru/album/3444135',
  },
  songs: [
    { name: 'Топливо-жизнь' },
    { name: 'Автомобиль и ты' },
    { name: 'Паруса' },
    { name: 'Женщина за рулём' },
    { name: 'Черёмуха' },
    { name: 'Меланхолия' },
    { name: 'Ласковый уродец' },
    { name: 'Найди...' },
    { name: 'Генератор мечты' },
    { name: 'Хворь' },
    { name: 'Доктор Моторфил' },
    { name: 'Нефть Аллилуйя' },
    { name: 'Хоровод' },
    { name: 'Плюшевые зомби' },
    { name: 'Труна на колёсах' },
    { name: 'Бог любит себя' },
  ],
};

export default album;
