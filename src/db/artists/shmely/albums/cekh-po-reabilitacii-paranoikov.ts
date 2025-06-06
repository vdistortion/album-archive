import { TypeAlbum } from '../../../types';
import { EnumAlbums } from '../types';

const album: TypeAlbum = {
  id: EnumAlbums.cekhPoReabilitaciiParanoikov,
  name: 'Цех по реабилитации параноиков',
  year: 2011,
  folder: '/artist/shmely/albums/2010_crp.jpg',
  streaming: {
    spotify: 'https://open.spotify.com/album/74KcaQJrAjhzeHvW6rZUIQ',
    youtube: 'https://www.youtube.com/playlist?list=OLAK5uy_nvSuftR3G7q_K8Vs-fiCNpZl3ElyIU9aI',
    youtubeMusic:
      'https://music.youtube.com/playlist?list=OLAK5uy_mPPAXZrdGJIx_q2kUTz6POPoJdG26koUc',
    yandexMusic: 'https://music.yandex.ru/album/3444136',
  },
  songs: [
    { name: 'Свет остановился' },
    { name: 'Отвали, моя черешня' },
    { name: 'Были мы (new version)' },
    { name: 'Я хочу быть роботом' },
    { name: 'Катёнка (new version)' },
    { name: 'Цех по реабилитации параноиков' },
    { name: 'Песенка пластилина-2 (продолжение)' },
    { name: 'Лечебница (new version)' },
    { name: 'Заговорка' },
    { name: 'Паника (из цикла Школьные песни)' },
    { name: 'Почта' },
    { name: 'Халява (из цикла Школьные песни)' },
  ],
};

export default album;
