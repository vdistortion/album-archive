import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import artists from '../db';

console.log(artists);

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'album-archive';
}
