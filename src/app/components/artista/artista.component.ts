import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styles: [
  ]
})
export class ArtistaComponent implements OnInit {

  dataArtista: any;
  topTracks: any[] = [];
  loading: boolean;
  constructor(
    private _ativatedRoute: ActivatedRoute,
    private _spotify: SpotifyService
  ) {

    this.loading = true;
    this._ativatedRoute.params.subscribe( params => {

      this.getDataArtist(params["id"]);
      this.getTopTracks(params["id"]);

    });

  }

  ngOnInit(): void {
  }

  getDataArtist(id: string){
    this.loading = true;

    this._spotify.getArtista(id).subscribe( artista => {
      this.dataArtista = artista;
      this.loading = false;
    });
  }

  getTopTracks(id: string){

    this._spotify.getTopTracks(id).subscribe(topTracks => {
        this.topTracks = topTracks;
        console.log(topTracks);

    });

  }

}
