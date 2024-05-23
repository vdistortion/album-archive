import { TypeArtist } from '../../types';
import albums from './albums';
import songs from './songs';
import { EnumAlbums, EnumArtist } from './types';

const artist: TypeArtist = {
  id: EnumArtist.id,
  name: EnumArtist.name,
  streaming: {
    spotify: 'https://open.spotify.com/artist/4OXVjz9BARB2MwT6sdx8JE',
    youtube: 'https://www.youtube.com/channel/UCZkpG0pk3z1LondQYU_11Iw',
    youtubeMusic: 'https://music.youtube.com/channel/UCZkpG0pk3z1LondQYU_11Iw',
    yandexMusic: 'https://music.yandex.ru/artist/213256',
  },
  albums: [
    EnumAlbums.trotilovyyeSkazki,
    EnumAlbums.tulovishche,
    EnumAlbums.purga,
    EnumAlbums.durackiyeKnizhki,
    EnumAlbums.petlyaSoblazna,
    EnumAlbums.zloradostnayaOpuhol,
    EnumAlbums.vulkanizaciyaDushi,
    EnumAlbums.princessaBezTrusov,
    EnumAlbums.bombaVUbezhishche,
    EnumAlbums.moshchi,
    EnumAlbums.trahniNebo,
    EnumAlbums.organizm,
    EnumAlbums.spazmyRoka,
    EnumAlbums.risunkiNaDushe,
    EnumAlbums.poshmelye,
    EnumAlbums.negativProstranstva,
    EnumAlbums.agressivnyjPokoj,
    EnumAlbums.polnaSuma,
    EnumAlbums.ostanoviteChelovechestvo,
    EnumAlbums.zhazhda,
    EnumAlbums.tenSerdca,
    EnumAlbums.lyod,
    EnumAlbums.vethijSbornik,
    EnumAlbums.vosemZhenshchinNaRaduge,
    EnumAlbums.pugovica,
    EnumAlbums.yaVernusKTebe,
    EnumAlbums.koshkinyObidy,
    EnumAlbums.karamelnyyeStrahi,
    EnumAlbums.moskovskayaYarmarkaUdovolstvij,
    EnumAlbums.mekhanicheskayaBalerina,
    EnumAlbums.toplivo,
    EnumAlbums.cekhPoReabilitaciiParanoikov,
    EnumAlbums.teatrUrodov,
    EnumAlbums.paraTrupov,
    EnumAlbums.belyjKarandash,
    EnumAlbums.zloradostnayaOpuholNew,
    EnumAlbums.chudes16,
    EnumAlbums.mizantropiya,
  ],
};

export default { artist, albums, songs };
