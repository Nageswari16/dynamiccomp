import { PlatformDataStoreService } from './platform-data-store.service';
import * as i0 from "@angular/core";
export declare class OcrValidationService {
    private _storeservice;
    httpService: any;
    constructor(_storeservice: PlatformDataStoreService);
    getUpload(obj: any): any;
    static ɵfac: i0.ɵɵFactoryDeclaration<OcrValidationService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<OcrValidationService>;
}
