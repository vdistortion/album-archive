import { TypeAlbum } from '../../../types';
import { EnumAlbums, EnumSongs } from '../types';

const album: TypeAlbum = {
  id: EnumAlbums.organizm,
  name: 'Организм',
  year: 2000,
  folder: '/artist/shmely/albums/2000_organizm.jpg',
  songs: [
    EnumSongs.polnaSuma,
    { name: 'Организм' },
    { name: 'Погадай' },
    { name: 'Путь к... (Клочья)' },
    { name: 'Искушение' },
    EnumSongs.pokidayaMir,
    [EnumSongs.slyoznaya, { name: ['Лиха та беда'] }],
    { name: 'Клякса' },
    { name: 'Фабрика фекалий' },
    { name: 'Иволгой' },
    { name: 'Гроза (Клочья)' },
    EnumSongs.laboratoriyaAltruizma,
    { name: 'Череп и подснежник' },
    { name: 'Агония' },
    { name: 'Крыша горит' },
    { name: 'Сизоблюдов' },
  ],
};

export default album;
