import { TypeAlbum } from '../../../types';
import { EnumAlbums } from '../types';

const album: TypeAlbum = {
  id: EnumAlbums.moskovskayaYarmarkaUdovolstvij,
  name: 'Московская ярмарка удовольствий',
  year: 2009,
  folder: '/artist/shmely/albums/2009_myau.jpg',
  streaming: {
    spotify: 'https://open.spotify.com/album/0wzOwUeEa3fVPI77pJRK8E',
    youtube: 'https://www.youtube.com/playlist?list=OLAK5uy_loV5x6XOgMrmUH5w9d1IlTiuF_jGr3ll8',
    youtubeMusic:
      'https://music.youtube.com/playlist?list=OLAK5uy_nH21z5pDqYVpk4W06KePL0KE-pMCeRVCw',
    yandexMusic: 'https://music.yandex.ru/album/3444131',
  },
  songs: [
    { name: 'Все деньги кончились' },
    { name: 'Девочка с чёрными бантиками' },
    { name: 'Женщина-тень' },
    { name: 'Жёлуди' },
    { name: 'Любовь из стекла' },
    { name: 'Ласка' },
    { name: 'Кризис' },
    { name: 'Московская ярмарка удовольствий' },
    { name: 'Пир' },
    { name: 'Две столицы' },
    { name: 'Брюхо' },
    { name: 'Зоя' },
    { name: 'Где? (bonus track)' },
    { name: 'С Новым годом (bonus track)' },
    { name: 'Млечная депрессия (bonus track)' },
  ],
};

export default album;
