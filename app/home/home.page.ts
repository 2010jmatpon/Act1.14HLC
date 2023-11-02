import { Component } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  users: any;
  filtro: string = "";
  constructor(private httpClient:HttpClient) {
    this.users = this.httpClient.get('https://github.com/2010jmatpon/Act1.14HLC/blob/master/MOCK_DATA.json');
  }

}
