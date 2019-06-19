import {Component, OnDestroy, OnInit} from '@angular/core';

import {HttpClient} from '@angular/common/http';
import {map, delay} from 'rxjs/operators';

interface Product {
  cod: number;
  description: string;
}

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html'
})
export class ProductListComponent implements OnInit, OnDestroy {
  title: string;

  listProducts: Product[];

  sub: any;

  constructor(private httpClient: HttpClient) {
    this.listProducts = [];
    this.title = '';
  }

  ngOnInit(): void {

    this.title = 'Hello lads!!!';

    this.listProducts = [];
    this.sub = this.httpClient.get('/api/products.json')
      .pipe(
        delay(2000),
        map((data: any) => {
          this.listProducts = data.products;
        })
      ).subscribe();

  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

}
