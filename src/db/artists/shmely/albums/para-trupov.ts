import { TypeAlbum } from '../../../types';
import { EnumAlbums } from '../types';

const album: TypeAlbum = {
  id: EnumAlbums.paraTrupov,
  name: 'Пара трупов',
  year: 2013,
  folder: '/artist/shmely/albums/2013_para.jpg',
  streaming: {
    spotify: 'https://open.spotify.com/album/6AfviE2K704Bym6YNCdMMk',
    youtube:
      'https://www.youtube.com/playlist?list=OLAK5uy_nTkPpeyc83R9Kt6M9PaGmyy59OHDa5ovQ',
    youtubeMusic:
      'https://music.youtube.com/playlist?list=OLAK5uy_nQT0FMPii6bQHu7gPMH0Cu3X9kinOkYbU',
    yandexMusic: 'https://music.yandex.ru/album/3444132',
  },
  songs: [
    { name: 'Звёзды светят ярче' },
    { name: 'Белые чулочки' },
    { name: 'Пара трупов' },
    { name: 'На конечном горизонте' },
    { name: 'Новая радость' },
    { name: 'Кукла Герда' },
    { name: 'Проститутки Москвы' },
    { name: 'Дизайн' },
    { name: 'Последняя любовь' },
    { name: 'Экскурсия по Аду' },
    { name: 'Ансамбль' },
    { name: 'Гробовщик' },
  ],
};

export default album;
