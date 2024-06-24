import { TypeAlbum } from '../../../types';
import { EnumAlbums } from '../types';

const album: TypeAlbum = {
  id: EnumAlbums.karamelnyyeStrahi,
  name: 'Карамельные страхи',
  year: 2008,
  folder: '/artist/shmely/albums/2008_strahi.jpg',
  streaming: {
    spotify: 'https://open.spotify.com/album/7biUa81AdYs3MZ44VKMJXr',
    youtube:
      'https://www.youtube.com/playlist?list=OLAK5uy_mP9ymhFypJA4WYW-baAVJ0yKUwGO0-M8g',
    youtubeMusic:
      'https://music.youtube.com/playlist?list=OLAK5uy_nXeF2ClIBVJ0TsyEbRNV7FoJFjjtssJUY',
    yandexMusic: 'https://music.yandex.ru/album/3444127',
  },
  songs: [
    { name: 'Женщина в сером' },
    { name: 'Свадьбы не будет' },
    { name: 'Мама' },
    { name: 'Неспокойные сны (стих)' },
    { name: 'Колыбельная+' },
    { name: 'Карамельные страхи' },
    { name: 'Раны' },
    { name: 'Я тебя люблю' },
    { name: 'Змея эйфория' },
    { name: 'Я буду жить' },
    { name: 'Нервы' },
    { name: 'Лирика' },
    { name: 'Цвет дождя (bonus track)' },
    { name: 'В живых играют мертвецы (bonus track)' },
  ],
};

export default album;
