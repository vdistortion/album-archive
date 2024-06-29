import { TypeAlbum } from '../../../types';
import { EnumAlbums, EnumSongs } from '../types';

const album: TypeAlbum = {
  id: EnumAlbums.vethijSbornik,
  name: 'Ветхий сборник',
  year: 2005,
  folder: '/artist/shmely/albums/2005_vs.jpg',
  streaming: { yandexMusic: 'https://music.yandex.ru/album/79303' },
  songs: [
    { name: 'Помолись' },
    { name: 'У Гаю' },
    { name: 'Крижана вода' },
    { name: 'Диво' },
    { name: 'Веснянка' },
    { name: 'Мiсяцъ' },
    { name: 'О-О-О' },
    { name: 'Как на плахе святой' },
    { name: 'Смерть' },
    { name: 'Вьюга' },
    { name: 'Дуня' },
    { name: 'Шуловье' },
    { name: 'Психоз' },
    { name: 'Спазмы рока' },
    { name: 'Завiтай' },
    { name: 'Обессиленный прах' },
    EnumSongs.saprofag,
  ],
};

export default album;
