import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.scss',
})
export class GalleryComponent {
  @Input({ required: true }) pictures: string[];
  @Input({ required: true }) path: string;
  @Input({ required: true }) id: string;
}
