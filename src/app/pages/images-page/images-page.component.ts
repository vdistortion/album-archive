import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { GalleryCardComponent } from '../../components/ui/gallery-card/gallery-card.component';
import { ArtistService } from '../../services/artist.service';
import artists from '../../../db';
import type { TypeItems, TypeStructurePictures } from '../../../db/types';

@Component({
  selector: 'app-images-page',
  imports: [GalleryCardComponent],
  templateUrl: './images-page.component.html',
  styleUrl: './images-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ImagesPageComponent implements OnInit {
  public artists: TypeItems = artists;
  public images: TypeStructurePictures[] = [];
  public artistName: string = '';
  public artistId: string | null = null;

  constructor(
    private route: ActivatedRoute,
    private titleService: Title,
    private artistService: ArtistService,
  ) {
    this.route.params.subscribe(({ artist }) => {
      this.artistService.setArtist(artist);
      const artistItem = this.artists[artist];

      if (artistItem) {
        this.artistId = artistItem.artist.id;
        this.artistName = artistItem.artist.name;
        if (artistItem.artist.images) this.images = artistItem.artist.images;
      }
    });
  }

  ngOnInit(): void {
    this.titleService.setTitle(`${this.artistName} | Фото`);
  }
}
