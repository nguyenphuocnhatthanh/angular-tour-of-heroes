"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var product_service_1 = require('./product.service');
var ProductListComponent = (function () {
    function ProductListComponent(productService) {
        this.productService = productService;
        this.title = 'Page product';
        this.isShowImage = true;
        this.service = productService;
    }
    ProductListComponent.prototype.ngOnInit = function () {
        this.products = this.service.getProducts();
    };
    ProductListComponent.prototype.onClickImage = function () {
        this.isShowImage = !this.isShowImage;
    };
    ProductListComponent.prototype.searchProduct = function () {
        console.log(this.search);
    };
    ProductListComponent.prototype.onRatingClicked = function (message) {
        this.title = 'Product click ' + message;
    };
    ProductListComponent = __decorate([
        core_1.Component({
            selector: 'my-products',
            moduleId: module.id,
            templateUrl: 'product-list.component.html',
            providers: [product_service_1.ProductService]
        }), 
        __metadata('design:paramtypes', [product_service_1.ProductService])
    ], ProductListComponent);
    return ProductListComponent;
}());
exports.ProductListComponent = ProductListComponent;
//# sourceMappingURL=product-list.component.js.map