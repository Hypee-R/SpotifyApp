import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

  @Input() _items: any[] = [];

  constructor(
    private _router: Router
  ) { }

  ngOnInit(): void {
  }

  verArtista(item: any){

    let artistaId;

    if(item.type === 'artist'){
      artistaId = item.id;
    }else{
      artistaId = item.artists[0].id;
    }

    this._router.navigate(['/artist', artistaId]);

  }

}
