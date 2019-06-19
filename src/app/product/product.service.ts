import {Injectable} from '@angular/core';

import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {Observable} from 'rxjs';

export interface Product {
  cod: number;
  description: string;
}

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private httpClient: HttpClient) {
  }

  retrieveProducts(): Observable<Product[]> {
    return this.httpClient.get('/assets/products.json')
      .pipe(
        map((data: any) => {
          return data.products.filter(p => p.active === 1);
        }));
  }
}
