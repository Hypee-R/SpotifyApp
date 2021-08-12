import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(
    private http: HttpClient
  ) { }

  getToken(){

  }

  getEndPoint(endpoint: string){
    const URL = `https://api.spotify.com/v1/${endpoint}`;

    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQBVBoRIAFKMsib6-WUQwRRgFYMHQrRA144ZWJMKzElouHEgTaNFDhchetppAi6q_SY_dMZoa0Ece1DMOmg'
    });

    return this.http.get(URL, { headers });

  }


  getNewReleases(){
    return this.getEndPoint('browse/new-releases')
               .pipe( map( (data: any) => data.albums.items ));
  }

  getArtistas(termino: string){
    return this.getEndPoint(`search?q=${ termino }&type=artist&limit=15`)
               .pipe( map( (data: any) => data.artists.items ));
  }

  getArtista(id: string){
    return this.getEndPoint(`artists/${ id }`);
  }

  getTopTracks(id: string){
    return this.getEndPoint(`artists/${ id }/top-tracks?market=es`)
              .pipe( map( (data: any) => data.tracks));
  }

}
