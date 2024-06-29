import { TypeAlbum } from '../../../types';
import { EnumAlbums } from '../types';

const album: TypeAlbum = {
  id: EnumAlbums.zloradostnayaOpuholNew,
  name: 'Злорадостная опухоль. Переиздание',
  year: 2016,
  folder: '/artist/shmely/albums/2016_zo.jpg',
  streaming: {
    spotify: 'https://open.spotify.com/album/4Q4riSrf2rdfmY6EllfbRp',
    youtube:
      'https://www.youtube.com/playlist?list=OLAK5uy_kf4b67Cf_KzFSmA1Ya-ptvWjGMmG9rfWs',
    youtubeMusic:
      'https://music.youtube.com/playlist?list=OLAK5uy_lEU8oxwMxMRJ8Qm8pCykRlxwEBZBbYlK0',
    yandexMusic: 'https://music.yandex.ru/album/3444126',
  },
  songs: [
    { name: 'Были мы' },
    { name: 'Лезвие' },
    { name: 'Песенка пластилина' },
    { name: 'Злорадостная опухоль' },
    { name: 'Глисты' },
    { name: 'Шейк шейк ча ча ча' },
    { name: 'Лечебница' },
    { name: 'Смирительная рубаха' },
    { name: 'Мутанты' },
    { name: 'Джаги мертвее всех мёртвых' },
    { name: 'Апокалипсис' },
    { name: 'Печальная история' },
  ],
};

export default album;
