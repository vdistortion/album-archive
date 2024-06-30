import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { YouTubePlayer } from '@angular/youtube-player';
import { ArtistService } from '../../services/artist.service';
import artists from '../../../db';
import { TypeItem, TypeItems, TypeSong } from '../../../db/types';

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
    this.artistName = artist.artist.name;
    this.songs = artist.getAllVideos().sort(artist.sortAsc);
  }

  ngOnInit(): void {
    this.titleService.setTitle(`${this.artistName} | Клипы`);
  }

  stateChange(e: any) {
    console.log(e);
  }
}
