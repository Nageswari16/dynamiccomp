import { PlatformDataStoreService } from './platform-data-store.service';
import * as i0 from "@angular/core";
export declare class PermissionService {
    private _storeservice;
    httpService: any;
    constructor(_storeservice: PlatformDataStoreService);
    getPermissionRoleById(id: string): any;
    getPagePermission(data: any): any;
    getPageLookupPermission(): any;
    static ɵfac: i0.ɵɵFactoryDeclaration<PermissionService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<PermissionService>;
}
