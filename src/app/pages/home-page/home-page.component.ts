import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { ArtistService } from '../../services/artist.service';
import { artistList } from '../../../db';
import type { TypeArtist } from '../../../db/types';

@Component({
  selector: 'app-home-page',
  imports: [RouterLink],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomePageComponent {
  public artists: TypeArtist[] = artistList;

  constructor(
    private titleService: Title,
    private artistService: ArtistService,
  ) {
    this.titleService.setTitle('Каталог исполнителей');
    this.artistService.setArtist();
  }
}
