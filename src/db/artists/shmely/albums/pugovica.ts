import { TypeAlbum } from '../../../types';
import { EnumAlbums, EnumSongs } from '../types';

const album: TypeAlbum = {
  id: EnumAlbums.pugovica,
  name: 'Пуговица',
  year: 2006,
  folder: '/artist/shmely/albums/2006_pugovica.jpg',
  streaming: { yandexMusic: 'https://music.yandex.ru/album/79314' },
  songs: [
    EnumSongs.intro,
    { name: 'Пуговица' },
    { name: 'Ангел 13' },
    { name: 'Стриптиз интеллекта' },
    { name: 'Женщина-драматургия' },
    { name: 'Мегаполис' },
    EnumSongs.gilotina,
    EnumSongs.zver,
    EnumSongs.renessans,
    EnumSongs.antiromantika,
    { name: 'Ходит чёрная королева' },
    { name: 'Вальс влюблённых волн' },
    { name: 'Катёнка' },
    { name: 'Мир - комедия' },
    EnumSongs.sudorogi,
  ],
};

export default album;
