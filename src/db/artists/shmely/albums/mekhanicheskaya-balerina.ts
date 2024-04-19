import { TypeAlbum } from '../../../types';
import { EnumAlbums } from '../types';

const album: TypeAlbum = {
  id: EnumAlbums.mekhanicheskayaBalerina,
  name: 'Механическая балерина',
  year: 2010,
  songs: [
    { name: 'Механическая балерина' },
    { name: 'Люди' },
    { name: 'Какофония сердец' },
    { name: 'Вещий сон' },
    { name: 'Прёт? Так при!' },
    { name: 'Жги' },
    { name: 'Лысая гора' },
    { name: 'Небо против' },
    { name: 'Котейка на трёх ножках' },
    { name: 'Снова про любовь, блин' },
    { name: 'Цветочный медведь' },
    { name: 'Колыбельная++' },
    { name: 'Аель-Ауа' },
    { name: 'Женщина-игра (bonus track)' },
  ],
};

export default album;
