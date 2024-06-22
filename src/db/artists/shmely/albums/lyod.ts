import { TypeAlbum } from '../../../types';
import { EnumAlbums } from '../types';

const album: TypeAlbum = {
  id: EnumAlbums.lyod,
  name: 'Лёд',
  year: 2005,
  folder: '/artist/shmely/albums/2005_lyod.jpg',
  streaming: {
    spotify: 'https://open.spotify.com/album/5pL8KLhjDalWkja1X7dKz9',
    youtube:
      'https://www.youtube.com/playlist?list=OLAK5uy_nXvdHxMP-aZmghtnw-vMDkh7MmjhHzMSc',
    youtubeMusic:
      'https://music.youtube.com/playlist?list=OLAK5uy_lNKOLD4k7WdPQm4mG-38CMnTtmV_Dd-rc',
    yandexMusic: 'https://music.yandex.ru/album/79313',
  },
  songs: [
    { name: 'Осиновый кол' },
    { name: 'Женщина-птица' },
    { name: 'Солнце моё' },
    { name: 'Любовь' },
    { name: 'Повелительница снов' },
    { name: 'Иди' },
    { name: 'Полынь' },
    { name: 'Лёд' },
    { name: 'Шутка' },
    { name: 'Чёрная волга' },
    { name: 'На том свете мы встретимся вновь' },
    { name: 'Огненные слёзы гиены' },
    { name: 'Давит небо' },
  ],
};

export default album;
