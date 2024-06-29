import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import artists from '../../../db';
import { TypeItem, TypeItems, TypeSong } from '../../../db/types';
import { YouTubePlayer } from '@angular/youtube-player';

@Component({
  selector: 'app-video-page',
  standalone: true,
  imports: [RouterLink, YouTubePlayer],
  templateUrl: './video-page.component.html',
  styleUrl: './video-page.component.scss',
})
export class VideoPageComponent implements OnInit {
  public artists: TypeItems = artists;
  public artistName: string = '';
  public artistId: string | null = null;
  public songs: TypeSong[] = [];

  constructor(private route: ActivatedRoute) {
    this.artistId = this.route.snapshot.paramMap.get('artist');
    if (!this.artistId) return;

    const artist: TypeItem = this.artists[this.artistId];
    this.artistName = artist.artist.name;
    this.songs = Object.values(artist.songs)
      .filter((song) => song.clipYouTubeId)
      .sort((a: TypeSong, b: TypeSong) => {
        if (a.name[0] < b.name[0]) {
          return -1;
        }
        if (a.name[0] > b.name[0]) {
          return 1;
        }
        return 0;
      });
  }

  ngOnInit(): void {
    document.title = `${this.artistName} | Клипы`;
  }
}
