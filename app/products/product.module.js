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
var forms_1 = require("@angular/forms");
var common_1 = require("@angular/common");
var router_1 = require('@angular/router');
var product_list_component_1 = require("./product-list.component");
var product_detail_component_1 = require("./product-detail.component");
var product_filter_pipe_1 = require("./product-filter-pipe");
var start_component_1 = require("../shared/start.component");
var product_guard_service_1 = require("./product-guard.service");
var ProductModule = (function () {
    function ProductModule() {
    }
    ProductModule = __decorate([
        core_1.NgModule({
            imports: [
                forms_1.FormsModule,
                common_1.CommonModule,
                router_1.RouterModule.forRoot([
                    { path: 'products', component: product_list_component_1.ProductListComponent },
                    {
                        path: 'products/:id', component: product_detail_component_1.ProductDetailComponent,
                        canActivate: [product_guard_service_1.ProductGuard]
                    },
                ])
            ],
            declarations: [
                product_list_component_1.ProductListComponent,
                product_detail_component_1.ProductDetailComponent,
                product_filter_pipe_1.ProductFilterPipe,
                start_component_1.StartComponent
            ],
            providers: [
                product_guard_service_1.ProductGuard
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], ProductModule);
    return ProductModule;
}());
exports.ProductModule = ProductModule;
//# sourceMappingURL=product.module.js.map