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
    products : IProduct[];
    errMsg : string;

    constructor(private service: ProductService) {

    }
    ngOnInit():void {
        this.service.getProducts()
            .subscribe(
                products => this.products = products,
                error => this.errMsg = <any>error
            );
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