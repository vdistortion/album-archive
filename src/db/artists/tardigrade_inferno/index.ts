import { TypeArtist } from '../../types';
import { ArtistClass } from '../../artist.class';
import albums from './albums';
import songs from './songs';
import { EnumAlbums, EnumArtist } from './types';

const artist: TypeArtist = {
  id: EnumArtist.id,
  name: EnumArtist.name,
  image: '/artist/tardigrade_inferno/artist.webp',
  streaming: {
    spotify: 'https://open.spotify.com/artist/12ZMAQkYyLSuNLvjbySISC',
    appleMusic:
      'https://music.apple.com/ru/artist/tardigrade-inferno/1448941163',
    youtubeMusic: 'https://music.youtube.com/channel/UCEuTnjeJchT6Xv03VRktLbA',
    youtube: 'https://www.youtube.com/channel/UCEuTnjeJchT6Xv03VRktLbA',
    bandcamp: 'https://tardigradeinferno.bandcamp.com/',
    yandexMusic: 'https://music.yandex.ru/artist/6761875',
  },
  albums: [
    EnumAlbums.tardigradeInferno,
    EnumAlbums.executionIsFun,
    EnumAlbums.mastermind,
    EnumAlbums.howNightmaresDie,
    EnumAlbums.theWorstOfMe,
    EnumAlbums.spookyScarySkeletons,
    EnumAlbums.arrivalOfATrainSingle,
    EnumAlbums.firePlagueAndLocust,
    EnumAlbums.arrivalOfATrain,
    EnumAlbums.ringmasterHasToDie,
    EnumAlbums.clockworkGod,
    EnumAlbums.burnTheCircus,
  ],
};

class Artist extends ArtistClass {
  artist = artist;
  albums = albums;
  override songs = songs;
}

export default new Artist();
