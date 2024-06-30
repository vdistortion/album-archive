import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { faviconChange } from '../../favicon';
import artists from '../../../db';
import { TypeItem, TypeItems, TypeSong } from '../../../db/types';

@Component({
  selector: 'app-songs-page',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './songs-page.component.html',
  styleUrl: './songs-page.component.scss',
})
export class SongsPageComponent implements OnInit {
  public artists: TypeItems = artists;
  public artistName: string = '';
  public artistId: string | null = null;
  public songs: TypeSong[] = [];

  constructor(private route: ActivatedRoute) {
    this.artistId = this.route.snapshot.paramMap.get('artist');
    if (!this.artistId) return;
    faviconChange(this.artistId);

    const artist: TypeItem = this.artists[this.artistId];
    this.artistName = artist.artist.name;
    this.songs = artist.getSongsWithTexts().sort(artist.sortAsc);
  }

  ngOnInit(): void {
    document.title = `${this.artistName} | Все песни`;
  }
}
