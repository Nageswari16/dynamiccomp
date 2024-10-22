import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { PermissionService } from '../service/permission.service';
import { PermissionStore } from '../store/permission.store';
import * as i0 from "@angular/core";
export declare class RoutePermissionResolver {
    private permissionStore;
    private permissionService;
    constructor(permissionStore: PermissionStore, permissionService: PermissionService);
    resolve(route: ActivatedRouteSnapshot, _state: RouterStateSnapshot): import("rxjs").Observable<unknown[]>;
    static ɵfac: i0.ɵɵFactoryDeclaration<RoutePermissionResolver, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<RoutePermissionResolver>;
}
