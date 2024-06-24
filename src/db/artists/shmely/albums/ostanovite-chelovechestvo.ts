import { TypeAlbum } from '../../../types';
import { EnumAlbums } from '../types';

const album: TypeAlbum = {
  id: EnumAlbums.ostanoviteChelovechestvo,
  name: 'Остановите человечество',
  year: 2003,
  folder: '/artist/shmely/albums/2003_ostanovite.jpg',
  streaming: { yandexMusic: 'https://music.yandex.ru/album/79308' },
  songs: [
    { name: 'Аист над инкубатором' },
    { name: 'Я всё нарушил' },
    { name: 'В клочья' },
    { name: 'Чужой' },
    { name: 'Шанс' },
    { name: 'Красота' },
    { name: 'На могиле любви' },
    { name: 'Био-мотор' },
    { name: 'Откровения' },
    { name: 'Нет выбора' },
    { name: 'Прорвёмся' },
    { name: 'Голос-палач' },
    { name: 'Он' },
    { name: 'Остановите человечество' },
    { name: 'Мой путь' },
    { name: 'Взгляд изнутри' },
  ],
};

export default album;
