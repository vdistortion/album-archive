import { TypeArtist } from '../../types';
import albums from './albums';
import songs from './songs';
import { EnumAlbums, EnumArtist } from './types';

const artist: TypeArtist = {
  id: EnumArtist.id,
  name: EnumArtist.name,
  image: '/artist/master/artist.webp',
  streaming: {
    spotify: 'https://open.spotify.com/artist/3Gocx0waYCfV2wx0d5nKzs',
    youtube: 'https://www.youtube.com/channel/UC8n4KOpcZlbnWJ1DHa96k9Q',
    youtubeMusic: 'https://music.youtube.com/channel/UC8n4KOpcZlbnWJ1DHa96k9Q',
    yandexMusic: 'https://music.yandex.ru/artist/359599',
  },
  albums: [
    EnumAlbums.master,
    EnumAlbums.sPetlyojNaShee,
    EnumAlbums.talkOfTheDevil,
    EnumAlbums.maniacParty,
    EnumAlbums.pesniMyortvyh,
    EnumAlbums.labirint,
    EnumAlbums.rcCars,
    EnumAlbums.klassika,
    EnumAlbums.zhizni33,
    EnumAlbums.akustika,
    EnumAlbums.poTuStoronuSna,
    EnumAlbums.viii,
  ],
};

export default { artist, albums, songs };
