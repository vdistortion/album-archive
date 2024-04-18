import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import artists from '../../../db';
import { TypeItem, TypeItems, TypeSong } from '../../../db/types';

@Component({
  selector: 'app-other-songs-page',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './other-songs-page.component.html',
  styleUrl: './other-songs-page.component.scss',
})
export class OtherSongsPageComponent implements OnInit {
  public artists: TypeItems = artists;
  public artistName: string = '';
  public artistId: string | null = null;
  public songs: TypeSong[] = [];

  constructor(private route: ActivatedRoute) {
    this.artistId = this.route.snapshot.paramMap.get('artist');
    if (!this.artistId) return;

    const artist: TypeItem = this.artists[this.artistId];
    this.artistName = artist.artist.name;
    this.songs = Object.values(artist.songs).filter(
      (song) => !song.albums.length,
    );
  }

  ngOnInit(): void {
    document.title = `${this.artistName} | Другие песни`;
  }
}
