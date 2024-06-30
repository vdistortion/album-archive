import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { ArtistService } from './services/artist.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent],
  templateUrl: './app.component.html',
})
export class AppComponent {
  constructor(private artistService: ArtistService) {
    this.artistService.artist$.subscribe(this.faviconChange);
  }

  faviconChange(artistId: string) {
    const link: HTMLLinkElement = document.querySelector('[rel="icon"]')!;
    const icon: string =
      artistId.length && artistId === 'master'
        ? 'artist/master/favicon.ico'
        : 'favicon.ico';

    if (link.href !== icon) link.href = icon;
  }
}
