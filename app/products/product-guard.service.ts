import { Injectable } from '@angular/core'
import { CanActivate, ActivatedRouteSnapshot, Router } from '@angular/router'

@Injectable()
export class ProductGuard implements CanActivate {
    constructor(private router: Router) {
    }

    canActivate(route:ActivatedRouteSnapshot):boolean {
        let id = route.url[1].path;

        if (null === id || id < 1) {
            this.router.navigate(['/products']);

            return false;
        }

        return true;
    }

}