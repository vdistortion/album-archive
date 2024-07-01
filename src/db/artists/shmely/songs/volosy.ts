import { TypeSong } from '../../../types';
import { EnumAlbums, EnumSongs } from '../types';

const song: TypeSong = {
  id: EnumSongs.volosy,
  name: ['Волосы', 'На солнце волосы'],
  albums: [
    EnumAlbums.durackiyeKnizhki,
    EnumAlbums.vulkanizaciyaDushi,
    EnumAlbums.spazmyRoka,
    EnumAlbums.poshmelye,
  ],
  duration: 198,
  text: `
Руки, что тянулись вон, туго связаны
Не добраться до мечты
Вены, что несли любовь, нежно вспороты,
Как разведённые мосты

На солнце волосы...

Платье, что пустилось впляс, стёрлось в дырочки,
Загорелось и прошло
Сани, что катились вниз, заупрямились,
Когда солнышко взошло
`,
};

export default song;
