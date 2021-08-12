import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: [
  ]
})
export class SearchComponent implements OnInit {

  artistas: any[] = [];
  loading: boolean = false;
  error: boolean = false;
  mensajeError: string = '';
  constructor(
    private spotify: SpotifyService
  ) { }

  ngOnInit(): void {
  }

  buscar(termino: string){
    this.error = false;
    this.loading = true;

    this.spotify.getArtistas(termino).subscribe( data => {
      this.artistas = data;
      this.loading = false;
    }, (err) => {

      this.mensajeError = err.error.error.message;
      this.error = true;
      this.loading = false;
      console.log("Error en ", this.mensajeError);

    });
  }

}
