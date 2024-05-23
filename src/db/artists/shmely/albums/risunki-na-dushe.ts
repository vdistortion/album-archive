import { TypeAlbum } from '../../../types';
import { EnumAlbums, EnumSongs } from '../types';

const album: TypeAlbum = {
  id: EnumAlbums.risunkiNaDushe,
  name: 'Рисунки на душе',
  year: 2001,
  streaming: { yandexMusic: 'https://music.yandex.ru/album/79304' },
  songs: [
    { name: 'Intro' },
    { name: 'Скелеты' },
    { name: 'Путь к...' },
    { name: 'Гроза' },
    { name: 'Патологоанатом' },
    { name: 'Пляшущий карлик' },
    { name: 'Погадай' },
    { name: 'Завтра на выписку' },
    { name: 'Туловищей' },
    { name: 'Клюквенный сок' },
    EnumSongs.laboratoriyaAltruizma,
    { name: 'Дайте света' },
    { name: 'Туловищей (remix)' },
    { name: 'Рисунки на душе' },
    { name: 'Скелеты (video edit)' },
    { name: 'Outro' },
  ],
};

export default album;
