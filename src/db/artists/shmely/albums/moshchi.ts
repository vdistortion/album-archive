import { TypeAlbum } from '../../../types';
import { EnumAlbums, EnumSongs } from '../types';

const album: TypeAlbum = {
  id: EnumAlbums.moshchi,
  name: 'Мощи',
  year: 2000,
  folder: '/artist/shmely/albums/2000_moshi.jpg',
  streaming: {
    spotify: 'https://open.spotify.com/album/1xaIDZcBZLaXtnrsfg1Tbr',
    youtube:
      'https://www.youtube.com/playlist?list=OLAK5uy_mcpRAnZyTiyTLoYoZlOifD4WoKEopi6vs',
    youtubeMusic:
      'https://music.youtube.com/playlist?list=OLAK5uy_mGUbrFjlAsspY8eHWwTpWm_7DAB7C5J1s',
    yandexMusic: 'https://music.yandex.ru/album/3444130',
  },
  songs: [
    { name: 'Крыша горит' },
    { name: 'Сизоблюдов' },
    { name: 'Эпидемия Ха' },
    EnumSongs.laboratoriyaAltruizma,
    { name: 'Иволга' },
    { name: 'Проститутка-вампир' },
    { name: 'В мясном цеху праздник души' },
    { name: 'Клякса' },
    { name: 'Фабрика фекалий' },
    { name: 'Лукавый суицид' },
    { name: 'Падаль' },
    { name: 'Атеист' },
    { name: 'Радиактивные отходы' },
    { name: 'Мастурбатор' },
    { name: 'Сизоблюдов и Камнеблядов' },
  ],
};

export default album;
