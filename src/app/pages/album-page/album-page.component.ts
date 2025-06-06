import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { StreamingListComponent } from '../../components/ui/streaming-list/streaming-list.component';
import { ArtistService } from '../../services/artist.service';
import { TrimPipe } from '../../trim.pipe';
import artists from '../../../db';
import type { TypeAlbum, TypeItem, TypeItems, TypeSong } from '../../../db/types';

@Component({
  selector: 'app-album-page',
  imports: [RouterLink, TrimPipe, StreamingListComponent],
  templateUrl: './album-page.component.html',
  styleUrl: './album-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AlbumPageComponent implements OnInit {
  public artists: TypeItems = artists;
  public artistName: string = '';
  public artistId: string | null = null;
  public album: TypeAlbum | null = null;
  public songs: (TypeSong | { name: string; id: string; duration: number })[] = [];

  constructor(
    private route: ActivatedRoute,
    private titleService: Title,
    private artistService: ArtistService,
  ) {
    this.route.params.subscribe(({ artist, album }) => {
      this.artistService.setArtist(artist, album);
    });
    this.artistId = this.route.snapshot.paramMap.get('artist');
    const albumId: string | null = this.route.snapshot.paramMap.get('album');
    if (!this.artistId || !albumId) return;

    const artist: TypeItem = this.artists[this.artistId];
    this.artistName = artist.artist.name;
    this.album = artist.albums[albumId];
    this.songs = this.album.songs.map((songId) => {
      if (typeof songId === 'string') {
        const song = artist.songs[songId];
        return {
          id: song.id,
          name: song.name[0],
          duration: song.duration ?? 0,
        };
      }
      if (Array.isArray(songId)) {
        const [id, { name }] = songId;
        const song = artist.songs[id];
        return {
          id,
          name: name[0],
          duration: song.duration ?? 0,
        };
      }
      return { name: songId.name, id: '', duration: 0 };
    });
  }

  ngOnInit(): void {
    this.titleService.setTitle(`${this.album?.name} (${this.album?.year}) | ${this.artistName}`);
  }

  getTime(duration: number): string {
    const m = duration / 60;
    const s = duration % 60;
    return [Math.trunc(m), ('0' + s).slice(-2)].join(':');
  }
}
