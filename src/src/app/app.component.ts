import {Component, OnInit} from '@angular/core';

import { HttpClient } from '@angular/common/http';

interface Product {
  cod: number;
  description: string;
}

@Component({
  selector: 'app-part-one',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title: string;

  listProducts: Product[];

  constructor(private httpClient: HttpClient) {
    this.listProducts = [];
    this.title = '';
    console.log(httpClient);
  }

  ngOnInit(): void {

    this.title = 'Hello lads!!!';

  }

}
