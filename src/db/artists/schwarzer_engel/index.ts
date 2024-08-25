import { Countries, TypeArtist } from '../../types';
import { ArtistClass } from '../../artist.class';
import albums from './albums';
import songs from './songs';
import { EnumAlbums, EnumArtist } from './types';

const artist: TypeArtist = {
  id: EnumArtist.id,
  name: EnumArtist.name,
  image: '/artist/schwarzer_engel/artist.webp',
  country: [Countries.de],
  streaming: {
    spotify: 'https://open.spotify.com/artist/15g7I4KWNHNSPdcCtm6dpk',
    appleMusic: 'https://music.apple.com/ru/artist/schwarzer-engel/368426508',
    youtubeMusic: 'https://music.youtube.com/channel/UCxOOlzavKjwWTVIm5S5fXrA',
    youtube: 'https://youtube.com/channel/UCxOOlzavKjwWTVIm5S5fXrA',
    bandcamp: 'https://schwarzerengelofficial.bandcamp.com/',
    yandexMusic: 'https://music.yandex.ru/artist/556109',
  },
  albums: [
    EnumAlbums.kultDerKrHe,
    EnumAlbums.kreuzigetMich,
    EnumAlbums.sieben,
    EnumAlbums.hHereGewalt,
  ],
};

class Artist extends ArtistClass {
  artist = artist;
  override albums = albums;
  override songs = songs;
}

export default new Artist();
