import { TypeAlbum } from '../../../types';
import { EnumAlbums } from '../types';

const album: TypeAlbum = {
  id: EnumAlbums.toplivo,
  name: 'Топливо',
  year: 2010,
  songs: [
    { name: 'Топливо-жизнь' },
    { name: 'Автомобиль и ты' },
    { name: 'Паруса' },
    { name: 'Женщина за рулём' },
    { name: 'Черёмуха' },
    { name: 'Меланхолия' },
    { name: 'Ласковый уродец' },
    { name: 'Найди...' },
    { name: 'Генератор мечты' },
    { name: 'Хворь' },
    { name: 'Доктор Моторфил' },
    { name: 'Нефть Аллилуйя' },
    { name: 'Хоровод' },
    { name: 'Плюшевые зомби' },
    { name: 'Труна на колёсах' },
    { name: 'Бог любит себя' },
  ],
};

export default album;
