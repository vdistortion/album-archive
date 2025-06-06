import { TypeSong } from '../../../types';
import { EnumAlbums, EnumSongs } from '../types';

const song: TypeSong = {
  id: EnumSongs.patologoanatom,
  name: ['Патологоанатом'],
  albums: [EnumAlbums.spazmyRoka, EnumAlbums.risunkiNaDushe, EnumAlbums.poshmelye],
  duration: 184,
  text: `
Морфий, бинт и вата, –
Уснула вся палата.
Лишь не спит кибернетический маньяк –
Патологоанатом.

Патологоанатом (x2)
Робот ада, робот ада –
Синтетический патологоанатом
Патологоанатом (x2)

Вместо пота ртуть
Падает жертве на грудь.
Кислотные слезы разрывают атом.
Здесь запах чем-то напоминает ладан.

Утром проснутся люди.
Ничего не узнают они,,
Что скоро, разорвав их груди,
Вылетят железные ШМЕЛИ!
`,
};

export default song;
