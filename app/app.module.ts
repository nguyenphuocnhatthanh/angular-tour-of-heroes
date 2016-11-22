import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

import { AppComponent }   from './app.component';
import { ProductListComponent } from './products/product-list.component';
import { ProductFilterPipe } from './products/product-filter-pipe';
import { StartComponent } from './shared/start.component';

@NgModule({
  imports:      [ BrowserModule, 
                  FormsModule 
                ],
  declarations: [ 
                  AppComponent,
                  ProductListComponent,
                  ProductFilterPipe,
                  StartComponent
                ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
