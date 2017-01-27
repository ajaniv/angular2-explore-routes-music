import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { SpotifyService } from '../services/spotify.service';
@Component( {
    selector: 'app-artist',
    templateUrl: './artist.component.html',
    styleUrls: ['./artist.component.css']
})
export class ArtistComponent implements OnInit {

    id: string;
    artist: Object; // @TODO: replace with Artist class

    constructor( public route: ActivatedRoute,
        public location: Location,
        public spotify: SpotifyService) {
        route.params.subscribe( params => { this.id = params['id']; });
    }

    ngOnInit(): void {
        this.spotify
            .getArtist( this.id )
            .subscribe(( res: any ) => this.renderArtist( res ) );
    }

    back(): void {
        this.location.back();
    }

    renderArtist( res: any ): void {
        this.artist = res;
    }

}
