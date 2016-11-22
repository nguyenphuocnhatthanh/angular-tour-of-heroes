import { Injectable } from '@angular/core'

import { IProduct } from './product'
import { PRODUCTS } from './mock-product'

@Injectable()
export class ProductService {
    getProducts(): IProduct[] {
        return PRODUCTS;
    }
}