import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import type { TypeStreaming, TypeStreamingList } from '../../../../db/types';

type TypeStreamingItem = {
  name: string;
  image: string;
};

@Component({
  selector: 'app-streaming-list',
  imports: [],
  templateUrl: './streaming-list.component.html',
  styleUrl: './streaming-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StreamingListComponent {
  @Input({ required: true }) public streaming: TypeStreaming | undefined;

  protected readonly streamingList: Record<TypeStreamingList, TypeStreamingItem> = {
    spotify: {
      name: 'Spotify',
      image: 'spotify.svg',
    },
    appleMusic: {
      name: 'Apple Music',
      image: 'appleMusic.svg',
    },
    youtubeMusic: {
      name: 'YouTube Music',
      image: 'YouTubeMusic.svg',
    },
    youtube: {
      name: 'YouTube',
      image: 'YouTube.svg',
    },
    bandcamp: {
      name: 'Bandcamp',
      image: 'bandcamp.svg',
    },
    yandexMusic: {
      name: 'Яндекс.Музыка',
      image: 'yandexMusic.svg',
    },
  };

  get list() {
    if (!this.streaming) return [];

    const list: [TypeStreamingList, string][] = Object.entries(this.streaming) as [
      TypeStreamingList,
      string,
    ][];

    return list.map(([id, link]) => {
      const { name, image } = this.streamingList[id];

      return {
        link,
        name,
        image,
      };
    });
  }
}
