import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { faviconChange } from '../../favicon';
import { artistList } from '../../../db';
import { TypeArtist } from '../../../db/types';

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
    faviconChange();
    document.title = 'Каталог исполнителей';
  }
}
