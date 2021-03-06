import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {
    RouterModule,
    Routes
  } from '@angular/router';

import { AppComponent } from './app.component';
import { AlbumComponent } from './album/album.component';
import { ArtistComponent } from './artist/artist.component';
import { TrackComponent } from './track/track.component';
import { SearchComponent } from './search/search.component';

/*
 * Services
 */
import {SPOTIFY_PROVIDERS} from './services/spotify.service';


const routes: Routes = [
    { path: '', redirectTo: 'search', pathMatch: 'full' },
    { path: 'search', component: SearchComponent },
    { path: 'artists/:id', component: ArtistComponent },
    { path: 'tracks/:id', component: TrackComponent },
    { path: 'albums/:id', component: AlbumComponent },
];

@NgModule( {
    declarations: [
        AppComponent,
        AlbumComponent,
        ArtistComponent,
        TrackComponent,
        SearchComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        RouterModule.forRoot(routes) // <-- routes
    ],
    providers: [SPOTIFY_PROVIDERS],
    bootstrap: [AppComponent]
})
export class AppModule { }
