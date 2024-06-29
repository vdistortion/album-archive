import { TypeAlbum } from '../../../types';
import { EnumAlbums, EnumSongs } from '../types';

const album: TypeAlbum = {
  id: EnumAlbums.risunkiNaDushe,
  name: 'Рисунки на душе',
  year: 2001,
  folder: '/artist/shmely/albums/2001_risunki.jpg',
  streaming: { yandexMusic: 'https://music.yandex.ru/album/79304' },
  songs: [
    { name: 'Intro' },
    EnumSongs.skelety,
    { name: 'Путь к...' },
    { name: 'Гроза' },
    EnumSongs.patologoanatom,
    { name: 'Пляшущий карлик' },
    { name: 'Погадай' },
    { name: 'Завтра на выписку' },
    EnumSongs.tulovishchej,
    { name: 'Клюквенный сок' },
    EnumSongs.laboratoriyaAltruizma,
    { name: 'Дайте света' },
    [EnumSongs.tulovishchej, { name: ['Туловищей (remix)'] }],
    { name: 'Рисунки на душе' },
    [EnumSongs.skelety, { name: ['Скелеты (video edit)'] }],
    { name: 'Outro' },
  ],
};

export default album;
