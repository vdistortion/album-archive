import { Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ArtistPageComponent } from './pages/artist-page/artist-page.component';
import { AlbumPageComponent } from './pages/album-page/album-page.component';
import { SongPageComponent } from './pages/song-page/song-page.component';
import { SongsPageComponent } from './pages/songs-page/songs-page.component';
import { OtherSongsPageComponent } from './pages/other-songs-page/other-songs-page.component';
import { VideoPageComponent } from './pages/video-page/video-page.component';
import { ImagesPageComponent } from './pages/images-page/images-page.component';

export const routes: Routes = [
  {
    path: '',
    component: HomePageComponent,
  },
  {
    path: 'artist/:artist',
    component: ArtistPageComponent,
  },
  {
    path: 'artist/:artist/video',
    component: VideoPageComponent,
  },
  {
    path: 'artist/:artist/images',
    component: ImagesPageComponent,
  },
  {
    path: 'artist/:artist/songs',
    component: SongsPageComponent,
  },
  {
    path: 'artist/:artist/songs/other',
    component: OtherSongsPageComponent,
  },
  {
    path: 'artist/:artist/song/:song',
    component: SongPageComponent,
  },
  {
    path: 'artist/:artist/album/:album',
    component: AlbumPageComponent,
  },
  {
    path: '**',
    redirectTo: '',
  },
];
