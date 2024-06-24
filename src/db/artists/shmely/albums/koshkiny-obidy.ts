import { TypeAlbum } from '../../../types';
import { EnumAlbums } from '../types';

const album: TypeAlbum = {
  id: EnumAlbums.koshkinyObidy,
  name: 'Кошкины обиды',
  year: 2007,
  folder: '/artist/shmely/albums/2007_obidy.jpg',
  streaming: {
    spotify: 'https://open.spotify.com/album/4GUxH5Jfgjt8as9HOTgert',
    youtube:
      'https://www.youtube.com/playlist?list=OLAK5uy_lR7Pe58N1QAhRwvosJkNnfAnnm1vtxoS0',
    youtubeMusic:
      'https://music.youtube.com/playlist?list=OLAK5uy_lDcR1z3lQhYexnJx3XtUCozmhSDzgbLuw',
    yandexMusic: 'https://music.yandex.ru/album/3444128',
  },
  songs: [
    { name: 'Уходи' },
    { name: 'Череп. Слёзы.' },
    { name: 'Кошкины обиды' },
    { name: 'Пантомима' },
    { name: 'Меч' },
    { name: 'Равнодушно' },
    { name: 'Зло реки' },
    { name: 'Летальный приход' },
    { name: 'Жертва' },
    { name: 'Суета' },
    { name: 'Дорога к морю' },
    { name: 'Женщина летучая мышь' },
    { name: 'За пределом (Shado News)' },
    { name: 'La Rencontre (Steve Love)' },
  ],
};

export default album;
