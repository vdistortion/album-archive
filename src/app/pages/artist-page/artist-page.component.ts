import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { AlbumCardComponent } from '../../components/ui/album-card/album-card.component';
import { StreamingListComponent } from '../../components/ui/streaming-list/streaming-list.component';
import { ArtistService } from '../../services/artist.service';
import artists from '../../../db';
import {
  TypeAlbum,
  TypeItem,
  TypeItems,
  TypeStreaming,
} from '../../../db/types';

@Component({
  selector: 'app-artist-page',
  standalone: true,
  imports: [RouterLink, AlbumCardComponent, StreamingListComponent],
  templateUrl: './artist-page.component.html',
  styleUrl: './artist-page.component.scss',
})
export class ArtistPageComponent implements OnInit {
  public artists: TypeItems = artists;
  public artistName: string = '';
  public artistId: string | null = null;
  public albums: TypeAlbum[] = [];
  public streaming: TypeStreaming | undefined;

  constructor(
    private route: ActivatedRoute,
    private titleService: Title,
    private artistService: ArtistService,
  ) {
    this.route.params.subscribe(({ artist }) => {
      this.artistService.setArtist(artist);
    });
    this.artistId = this.route.snapshot.paramMap.get('artist');
    if (!this.artistId) return;

    const artist: TypeItem = this.artists[this.artistId];
    this.streaming = artist.artist.streaming;
    this.artistName = artist.artist.name;
    this.albums = artist.artist.albums.map((albumId) => {
      return artist.albums[albumId];
    });
  }

  ngOnInit(): void {
    this.titleService.setTitle(`${this.artistName} | Дискография`);
  }
}
