import { TypeAlbum } from '../../../types';
import { EnumAlbums } from '../types';

const album: TypeAlbum = {
  id: EnumAlbums.zloradostnayaOpuhol,
  name: 'Злорадостная опухоль',
  year: 1999,
  folder: '/artist/shmely/albums/1999_zo.jpg',
  songs: [
    { name: 'Были мы' },
    { name: 'Лезвие' },
    { name: 'Песенка пластилина' },
    { name: 'Злорадостная опухоль' },
    { name: 'Глисты' },
    { name: 'Шейк шейк ча ча ча' },
    { name: 'Лечебница' },
    { name: 'Смирительная рубаха' },
    { name: 'Мутанты' },
    { name: 'Джаги мертвее всех мёртвых' },
    { name: 'Апокалипсис' },
    { name: 'Печальная история' },
  ],
};

export default album;
