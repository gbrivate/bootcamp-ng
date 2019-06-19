import {Component, OnDestroy, OnInit} from '@angular/core';

import {ProductService, Product} from './product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html'
})
export class ProductListComponent implements OnInit, OnDestroy {
  title: string;

  listProducts: Product[];

  sub: any;

  constructor(private productService: ProductService) {
    this.listProducts = [];
    this.title = '';
  }

  ngOnInit(): void {
    this.title = 'Hello lads!!!';
    this.listProducts = [];
    this.sub = this.productService.retrieveProducts()
      .subscribe(products  => {
        this.listProducts = products;
      });
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

}
