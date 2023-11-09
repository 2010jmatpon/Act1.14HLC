import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {

  rappers: any;
  filtro: string = "";
  constructor(private httpClient:HttpClient) {
    this.rappers = this.httpClient.get('https://raw.githubusercontent.com/2010jmatpon/Act1.14HLC/master/MOCK_DATA.json');
  }

}
