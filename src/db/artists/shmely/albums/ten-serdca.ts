import { TypeAlbum } from '../../../types';
import { EnumAlbums } from '../types';

const album: TypeAlbum = {
  id: EnumAlbums.tenSerdca,
  name: 'Тень сердца',
  year: 2004,
  streaming: {
    spotify: 'https://open.spotify.com/album/7fsVsr0pCmCEpyQ9o2jMXW',
    youtube:
      'https://www.youtube.com/playlist?list=OLAK5uy_k_3MQ5DeK39QrTGigpDgrsyMK04F16W-c',
    youtubeMusic:
      'https://music.youtube.com/playlist?list=OLAK5uy_l8lFy44LN0_BS2JYDee8CyKtCkd3xmfL0',
    yandexMusic: 'https://music.yandex.ru/album/79311',
  },
  songs: [
    { name: 'Для неё одной' },
    { name: 'Бей, колокол!' },
    { name: 'Напролом' },
    { name: 'Волчья ягода' },
    { name: 'Тень сердца' },
    { name: 'Ливень слёз' },
    { name: 'Вулканизация душ' },
    { name: 'Карусель' },
    { name: 'Тьма' },
    { name: 'Корм для души' },
    { name: 'Вместе умереть' },
    { name: 'Свобода' },
    { name: 'Спидвей' },
    { name: 'Волчья ягода (remix)' },
    { name: 'Тень сердца (remix)' },
  ],
};

export default album;
