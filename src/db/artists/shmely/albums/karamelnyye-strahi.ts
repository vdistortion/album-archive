import { TypeAlbum } from '../../../types';
import { EnumAlbums } from '../types';

const album: TypeAlbum = {
  id: EnumAlbums.karamelnyyeStrahi,
  name: 'Карамельные страхи',
  year: 2008,
  songs: [
    { name: 'Женщина в сером' },
    { name: 'Свадьбы не будет' },
    { name: 'Мама' },
    { name: 'Неспокойные сны (стих)' },
    { name: 'Колыбельная+' },
    { name: 'Карамельные страхи' },
    { name: 'Раны' },
    { name: 'Я тебя люблю' },
    { name: 'Змея эйфория' },
    { name: 'Я буду жить' },
    { name: 'Нервы' },
    { name: 'Лирика' },
    { name: 'Цвет дождя (bonus track)' },
    { name: 'В живых играют мертвецы (bonus track)' },
  ],
};

export default album;
