import { NgModule } from '@angular/core'
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { RouterModule } from  '@angular/router'

import { ProductListComponent } from "./product-list.component";
import { ProductDetailComponent } from "./product-detail.component";
import { ProductFilterPipe } from "./product-filter-pipe";
import { StartComponent } from "../shared/start.component";
import { ProductGuard } from "./product-guard.service";


@NgModule({
    imports: [
        FormsModule,
        CommonModule,
        RouterModule.forRoot([
            { path: 'products', component: ProductListComponent },
            {
                path: 'products/:id', component: ProductDetailComponent,
                canActivate: [ProductGuard]
            },
        ])
    ],
    declarations: [
        ProductListComponent,
        ProductDetailComponent,
        ProductFilterPipe,
        StartComponent
    ],
    providers: [
        ProductGuard
    ]
})

export class ProductModule {

}