import { Component, OnInit } from '@angular/core'

import { IProduct } from './product'
import { ProductService } from './product.service'

@Component({
    selector: 'my-products',
    moduleId: module.id,
    templateUrl: 'product-list.component.html',
    providers: [ProductService]
})

export class ProductListComponent implements OnInit{
    title: string = 'Page product';
    isShowImage : boolean = true;
    search: string;
    service: ProductService;
    products : IProduct[];
    constructor(private productService: ProductService) {
        this.service = productService;
    }
    ngOnInit():void {
        this.products = this.service.getProducts();
    }
    onClickImage() {
        this.isShowImage = ! this.isShowImage;
    }
    searchProduct() {
        console.log(this.search);
    }
    onRatingClicked(message: string) {
        this.title = 'Product click ' + message;
    }
}