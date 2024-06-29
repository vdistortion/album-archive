import { TypeArtist } from '../../types';
import albums from './albums';
import songs from './songs';
import { EnumAlbums, EnumArtist } from './types';

const artist: TypeArtist = {
  id: EnumArtist.id,
  name: EnumArtist.name,
  streaming: {
    spotify: 'https://open.spotify.com/artist/12ZMAQkYyLSuNLvjbySISC',
    youtube: 'https://www.youtube.com/channel/UCEuTnjeJchT6Xv03VRktLbA',
    youtubeMusic: 'https://music.youtube.com/channel/UCEuTnjeJchT6Xv03VRktLbA',
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

export default { artist, albums, songs };
