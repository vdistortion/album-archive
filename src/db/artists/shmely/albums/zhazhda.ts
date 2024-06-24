import { TypeAlbum } from '../../../types';
import { EnumAlbums, EnumSongs } from '../types';

const album: TypeAlbum = {
  id: EnumAlbums.zhazhda,
  name: 'Жажда',
  year: 2004,
  streaming: { yandexMusic: 'https://music.yandex.ru/album/79310' },
  songs: [
    { name: 'Жажда' },
    { name: 'Дорогая (очень ранняя)' },
    { name: 'Сера' },
    { name: 'День рождения (застольная)' },
    { name: 'Трудный ребёнок (школьная)' },
    EnumSongs.yaNeAngel,
    { name: 'Дискотека (очень ранняя)' },
    { name: 'Я обернусь огнём (другая версия)' },
    { name: 'Коробас' },
  ],
};

export default album;
