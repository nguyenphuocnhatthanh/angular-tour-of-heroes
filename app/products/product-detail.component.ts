import { Component, OnInit } from '@angular/core'
import { ActivatedRoute, Router } from '@angular/router'

import { IProduct } from './product'
import { ProductService } from './product.service'

@Component({
    templateUrl: 'product-detail.component.html',
    moduleId: module.id,
    providers: [ProductService]
})

export class ProductDetailComponent implements OnInit {
    title: string;
    product: IProduct;
    productId: number;
    constructor(private productService: ProductService,
                private activeRouter: ActivatedRoute,
                private router: Router
    ) {

    }
    ngOnInit():void {
        this.productId = this.activeRouter.params['id'];
        this.title = `Product detail ${this.productId}`;
    }
    onBack() {
        this.router.navigate(['/products']);
    }
}