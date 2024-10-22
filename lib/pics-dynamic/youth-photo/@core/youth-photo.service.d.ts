import { PlatformDataStoreService } from '../../@core/service/platform-data-store.service';
import * as i0 from "@angular/core";
export declare class YouthPhotoService {
    private _storeservice;
    httpService: any;
    constructor(_storeservice: PlatformDataStoreService);
    uploadKey(objparams: any): any;
    addPhoto(data: any): any;
    getYouthPhoto(youthid: any): any;
    deleteYouthPhoto(youthid: any): any;
    getByPhotoId(photoid: any): any;
    updateYouthPhoto(data: any): any;
    getPhysicalDescription(youthid: any): any;
    getPhysicalMarkDescription(code: any): any;
    getActivePage(tabPageId: any, permission?: boolean, action?: string): any;
    static ɵfac: i0.ɵɵFactoryDeclaration<YouthPhotoService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<YouthPhotoService>;
}
