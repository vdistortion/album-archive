import { TypeAlbum } from '../../../types';
import { EnumAlbums, EnumSongs } from '../types';

const album: TypeAlbum = {
  id: EnumAlbums.negativProstranstva,
  name: 'Негатив пространства',
  year: 2002,
  folder: '/artist/shmely/albums/2002_negativ.jpg',
  streaming: { yandexMusic: 'https://music.yandex.ru/album/79306' },
  songs: [
    { name: 'Реаниматор' },
    { name: 'Вера и любовь' },
    { name: 'Волчица' },
    { name: 'Нежность' },
    EnumSongs.slyoznaya,
    { name: 'Первородный грех' },
    { name: 'Лихорадит меня ночь' },
    { name: 'Негатив пространства' },
    { name: 'Последний рейс (Клочья)' },
    { name: 'Высота' },
    { name: 'Прощай' },
    { name: 'Через край' },
    { name: 'Брага' },
    { name: 'Всё' },
    { name: 'Реаниматор (Club MIX)' },
  ],
};

export default album;
