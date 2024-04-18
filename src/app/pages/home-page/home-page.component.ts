import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import artists, { artistList } from '../../../db';
import { TypeArtist } from '../../../db/types';

console.log(artists);

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss',
})
export class HomePageComponent implements OnInit {
  public artists: TypeArtist[] = artistList;

  ngOnInit(): void {
    document.title = 'Каталог исполнителей';
  }
}
