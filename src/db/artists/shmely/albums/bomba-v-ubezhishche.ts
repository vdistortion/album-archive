import { TypeAlbum } from '../../../types';
import { EnumAlbums, EnumSongs } from '../types';

const album: TypeAlbum = {
  id: EnumAlbums.bombaVUbezhishche,
  name: 'Бомба в убежище',
  year: 2000,
  songs: [
    { name: 'Агония' },
    { name: 'Тишина и покой' },
    { name: 'Бом лбом' },
    EnumSongs.polnaSuma,
    { name: 'Туляремия' },
    { name: 'Вирус' },
    EnumSongs.yaNeAngel,
    { name: 'Вихрь страстей' },
    { name: 'Садизм' },
    { name: 'Хули пули праху' },
    { name: 'Трупные пятна' },
    { name: 'Анаконда' },
    { name: 'Борода' },
    EnumSongs.slyoznaya,
    { name: 'Новый год' },
    { name: 'Язва на душе' },
    { name: 'Zастольная' },
  ],
};

export default album;
