import { TypeAlbum } from '../../../types';
import { EnumAlbums } from '../types';

const album: TypeAlbum = {
  id: EnumAlbums.vosemZhenshchinNaRaduge,
  name: 'Восемь женщин на радуге',
  year: 2005,
  streaming: {
    spotify: 'https://open.spotify.com/album/3XCE0DFw3NkkTXcIXQUBUG',
    youtube:
      'https://www.youtube.com/playlist?list=OLAK5uy_n5v0d9QAPVVjafh936OD9bKmlrdjXaJG0',
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
    { name: 'Я не ангел' },
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
};

export default album;
