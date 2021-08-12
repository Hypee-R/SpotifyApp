import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
  ]
})
export class HomeComponent implements OnInit {

  nuevasCanciones: any[] = [];
  loading: boolean;
  error: boolean;
  mensajeError: string = '';
  constructor(
    private spotify: SpotifyService
  ) {
    this.error = false;
    this.loading = true;

    spotify.getNewReleases().subscribe( data => {
      this.nuevasCanciones = data;
      this.loading=false;
    }, (err) => {

      this.mensajeError = err.error.error.message;
      this.error = true;
      this.loading = false;
      console.log("Error en ", this.mensajeError);

    });

  }

  ngOnInit(): void {
  }

}

