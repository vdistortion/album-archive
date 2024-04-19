import { TypeAlbum } from '../../../types';
import { EnumAlbums, EnumSongs } from '../types';

const album: TypeAlbum = {
  id: EnumAlbums.spazmyRoka,
  name: 'Спазмы рока',
  year: 2001,
  songs: [
    EnumSongs.yaVselennaya,
    { name: 'Макет Мира Счастья' },
    EnumSongs.naLadoniPlaneta,
    { name: 'Огонь - наш свет, огонь - наш след' },
    { name: 'Чёрная вода' },
    { name: 'Патологоанатом (Клочья)' },
    { name: 'Новая религия' },
    { name: 'Ждать' },
    { name: 'Моя любимая (Бешеный кайф)' },
    { name: 'Невесёлая сказка' },
    { name: 'Сапрофаг' },
    { name: 'Спазмы рока' },
    { name: 'На солнце волосы' },
    { name: 'Завтра на выписку в ад (Клочья)' },
    { name: 'Всё во имя человека' },
    { name: 'Бой' },
  ],
};

export default album;
