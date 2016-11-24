import { Injectable } from '@angular/core'
import { Http, Response, Headers, RequestOptions } from '@angular/http'
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';

import { IProduct } from './product'
import { PRODUCTS } from './mock-product'

@Injectable()
export class ProductService {
    private productsUrl = 'http://linepro.dev/users';
    constructor(private http: Http) {

    }

    getProducts(): Observable<IProduct[]> {
        let headers = new Headers({ 'Accept': 'application/json' });
        let options = new RequestOptions({'method': 'GET', 'headers': headers});
        return this.http.get(this.productsUrl)
            .map(this.extractData)
            .do(data => console.log(data))
            .catch(this.handleError);
    }

    getProduct(): Promise<IProduct> {
        return null;
    }

    private extractData(res: Response) : IProduct[] {
        let body = res.json();

        return body.data || {};
    }

    private handleError(error: Response) {
        // in a real world app, we may send the server to some remote logging infrastructure
        // instead of just logging it to the console
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}