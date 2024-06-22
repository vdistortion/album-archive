import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-album-card',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './album-card.component.html',
  styleUrl: './album-card.component.scss',
})
export class AlbumCardComponent {
  @Input({ required: true }) public link: string;
  @Input({ required: true }) public name: string;
  @Input() public image: string | undefined;
  @Input() public year: number = 0;

  get folder() {
    return this.image ?? '/artist/album-card.jpg';
  }
}
