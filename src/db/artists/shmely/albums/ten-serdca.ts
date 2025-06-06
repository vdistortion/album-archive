import { TypeAlbum } from '../../../types';
import { EnumAlbums } from '../types';

const album: TypeAlbum = {
  id: EnumAlbums.tenSerdca,
  name: 'Тень сердца',
  year: 2004,
  folder: '/artist/shmely/albums/2004_ten.jpg',
  streaming: {
    spotify: 'https://open.spotify.com/album/7fsVsr0pCmCEpyQ9o2jMXW',
    youtube: 'https://www.youtube.com/playlist?list=OLAK5uy_k_3MQ5DeK39QrTGigpDgrsyMK04F16W-c',
    youtubeMusic:
      'https://music.youtube.com/playlist?list=OLAK5uy_l8lFy44LN0_BS2JYDee8CyKtCkd3xmfL0',
    yandexMusic: 'https://music.yandex.ru/album/79311',
  },
  songs: [
    { name: 'Для неё одной' },
    { name: 'Бей, колокол!' },
    { name: 'Напролом' },
    { name: 'Волчья ягода' },
    { name: 'Тень сердца' },
    { name: 'Ливень слёз' },
    { name: 'Вулканизация душ' },
    { name: 'Карусель' },
    { name: 'Тьма' },
    { name: 'Корм для души' },
    { name: 'Вместе умереть' },
    { name: 'Свобода' },
    { name: 'Спидвей' },
    { name: 'Волчья ягода (remix)' },
    { name: 'Тень сердца (remix)' },
  ],
  info: `
Лёс (Лёля) - вокал, музыка; Шмель (Александр) - вокал, бас, музыка, тексты; Росс (Ростислав) - клавиши, синтезаторы, бэк-вокал; Базилио (Игорь) - гитара, бэк-вокал; Ларс (Юра) - барабаны.
Песня ”Для неё одной” посвящается безвременно ушедшему из жизни музыканту - Николаю Быкову, и другим, которых уже нет в живых.
Запись, сведение, мастеринг и ремиксирование - Росс. Записано на ”SHMELY RECORDS” ноябрь 2003 г. - март 2004 г. Некоторые вокальные партии записаны на студии фирмы ”ТЕНИП” А. Ермаковым. Предварительная запись некоторых песен произведена на ”A.W. studio”. Скрипки в песне ”ТЕНЬ СЕРДЦА” - Марьяна Пискарёва (Дос). Клип - Игорь Архангельский.
  `,
};

export default album;
