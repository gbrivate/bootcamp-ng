import {Component} from '@angular/core';

@Component({
  selector: 'app-part-one',
  templateUrl: './app.component.html'
})
export class AppComponent {
  title: string;
  isProductList: boolean;

  constructor() {
    this.title = 'Hello';
    this.isProductList = false;
  }

  handleProductList(value): void {
    this.isProductList = value;
  }

}
