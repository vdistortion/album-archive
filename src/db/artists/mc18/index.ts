import { Countries, TypeArtist } from '../../types';
import { ArtistClass } from '../../artist.class';
import albums from './albums';
import songs from './songs';
import { EnumAlbums, EnumArtist } from './types';

const artist: TypeArtist = {
  id: EnumArtist.id,
  name: EnumArtist.name,
  image: '/artist/mc18/artist.webp',
  country: [Countries.ru],
  streaming: {
    spotify: 'https://open.spotify.com/artist/4bwjWEvpBL8vxOUd5QTFMC',
    appleMusic: 'https://music.apple.com/ru/artist/один-восемь/1569514383',
    youtubeMusic: 'https://music.youtube.com/channel/UC8og8oz94f_chm3n-DdAyBw',
    youtube: 'https://www.youtube.com/channel/UC8og8oz94f_chm3n-DdAyBw',
    yandexMusic: 'https://music.yandex.ru/artist/3095203',
  },
  albums: [
    EnumAlbums.pochtiFantastika,
    EnumAlbums.lyudiHaosa,
    EnumAlbums.projtiIostatsya,
    EnumAlbums.damaChervi,
    EnumAlbums.ubivayaMolodost,
    EnumAlbums.bekdor,
    EnumAlbums.akval,
    EnumAlbums.yad,
    EnumAlbums.chuzhim,
    EnumAlbums.plamya,
    EnumAlbums.chetyreK,
    EnumAlbums.solnce,
    EnumAlbums.kolesnica,
    EnumAlbums.zaMirIlyubov,
  ],
};

class Artist extends ArtistClass {
  artist = artist;
  override albums = albums;
  override songs = songs;
}

export default new Artist();
