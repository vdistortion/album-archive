import { TypeAlbum } from '../../../types';
import { EnumAlbums, EnumSongs } from '../types';

const album: TypeAlbum = {
  id: EnumAlbums.vosemZhenshchinNaRaduge,
  name: 'Восемь женщин на радуге',
  year: 2005,
  folder: '/artist/shmely/albums/2005_8.jpg',
  streaming: {
    spotify: 'https://open.spotify.com/album/3XCE0DFw3NkkTXcIXQUBUG',
    youtube: 'https://www.youtube.com/playlist?list=OLAK5uy_n5v0d9QAPVVjafh936OD9bKmlrdjXaJG0',
    youtubeMusic:
      'https://music.youtube.com/playlist?list=OLAK5uy_k78_d1RVxFP6B04ZnTvobzmfJMMYLNN7o',
    yandexMusic: 'https://music.yandex.ru/album/79312',
  },
  songs: [
    { name: 'Впереди' },
    { name: 'Похороны любви' },
    { name: 'Полнолуние' },
    { name: 'Восемь женщин на радуге' },
    { name: 'Мельпомена' },
    EnumSongs.yaNeAngel,
    { name: 'Иволга' },
    { name: 'Солнце вампира' },
    { name: 'Художник' },
    { name: 'Пластика сна' },
    { name: 'Ритуал сожжения кукол' },
    { name: 'Глоток' },
    { name: 'Стон олицетворения' },
    { name: 'Где есть ты' },
    { name: 'Женщина-бабочка' },
    { name: 'Радуга над бензиновой лужей' },
  ],
  info: `
ЛЁС - вокал, хоровые партии, аранжировка
ШМЕЛЬ - вокал, бас, клавиши, партии ударных, акустическая гитара, аранжировка
A. WATERS - гитара, синтезаторы, сведение, мастеринг, аранжировка
В записи приняли участие: Иван Тимошенко - гитара, акустическая гитара, аранжировка; Дос - скрипка; Павел Шуваев - акустическая гитара; Алексей Ермаков - запись вокалов
"A.W.Studio", студия "ТЕНИП" 2005 г.
  `,
};

export default album;
