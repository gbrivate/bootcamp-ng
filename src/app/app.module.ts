import {BrowserModule} from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import {NgModule} from '@angular/core';

import {HttpClientModule} from '@angular/common/http';

import {AppComponent} from './app.component';
import {ProductListComponent} from './product/product-list.component';
import {GithubComponent} from './github/github.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    GithubComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
