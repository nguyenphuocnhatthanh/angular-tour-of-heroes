import { Component } from '@angular/core';
import { OnInit } from '@angular/core';

import { ProductListComponent } from './products/product-list.component';

@Component({
  selector: 'my-app',
  template: `
   <div>
        <nav class='navbar navbar-default'>
            <div class='container-fluid'>
                <a class='navbar-brand'>{{title}}</a>
                <ul class='nav navbar-nav'>
                    <li><a [routerLink]="['/welcome']">Home</a></li>
                    <li><a [routerLink]="['/products']">Product List</a></li>
                </ul>
            </div>
        </nav>
        <div class='container'>
            <router-outlet></router-outlet>
        </div>
     </div>
  `
})

export class AppComponent implements OnInit {
  title: string = 'Angular2 getting started';
  ngOnInit(): void {

  }
}



