import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule }   from '@angular/http';

import { AppComponent }   from './app.component';
import { ProductModule } from './products/product.module';
import { WelcomeComponent } from './home/welcome.component';

import { AppRoutingModule } from './app-routing.module'
import {RouterModule} from "@angular/router";

@NgModule({
  imports:      [ BrowserModule, 
                  FormsModule,
                  HttpModule,
                  ProductModule,
                  RouterModule.forRoot([
                      { path: 'welcome', component: WelcomeComponent },
                      { path: '', redirectTo: 'welcome', pathMatch: 'full' },
                      { path: '**', redirectTo: 'welcome', pathMatch: 'full' },
                  ]),
                ],
  declarations: [ 
                  AppComponent,
                  WelcomeComponent
                ],
  providers: [  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
