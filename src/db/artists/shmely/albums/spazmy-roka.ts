import { TypeAlbum } from '../../../types';
import { EnumAlbums, EnumSongs } from '../types';

const album: TypeAlbum = {
  id: EnumAlbums.spazmyRoka,
  name: 'Спазмы рока',
  year: 2001,
  folder: '/artist/shmely/albums/2001_spazmi.jpg',
  streaming: {
    spotify: 'https://open.spotify.com/album/28tVBP8rDTC3eLMVzOAZ5m',
    youtube:
      'https://www.youtube.com/playlist?list=OLAK5uy_l79--sEsZYpEuVcmBME0YHVr2cHd5B22U',
    youtubeMusic:
      'https://music.youtube.com/playlist?list=OLAK5uy_noWkxPhjlR4FF4_LZCf6WX1ztDral0UMg',
    yandexMusic: 'https://music.yandex.ru/album/3444133',
  },
  songs: [
    EnumSongs.yaVselennaya,
    { name: 'Макет Мира Счастья' },
    EnumSongs.naLadoniPlaneta,
    { name: 'Огонь - наш свет, огонь - наш след' },
    { name: 'Чёрная вода' },
    EnumSongs.patologoanatom,
    EnumSongs.novayaReligiya,
    { name: 'Ждать' },
    { name: 'Моя любимая (Бешеный кайф)' },
    { name: 'Невесёлая сказка' },
    EnumSongs.saprofag,
    { name: 'Спазмы рока' },
    EnumSongs.volosy,
    { name: 'Завтра на выписку в ад (Клочья)' },
    { name: 'Всё во имя человека' },
    { name: 'Бой' },
  ],
};

export default album;
