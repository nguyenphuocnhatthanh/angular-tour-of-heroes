import { Component } from '@angular/core';
import { OnInit } from '@angular/core';

import { ProductListComponent } from './products/product-list.component';

@Component({
  selector: 'my-app',
  template: `
    <h1>{{title}}</h1>
    <my-products></my-products>
  `
})

export class AppComponent implements OnInit {
  title: string = 'Angular2 getting started';
  ngOnInit(): void {

  }
}



