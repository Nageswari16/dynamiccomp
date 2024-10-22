import { PlatformDataStoreService } from './platform-data-store.service';
import * as i0 from "@angular/core";
export declare class PageBuilderViewService {
    private _storeservice;
    port_workflow: string;
    httpService: any;
    constructor(_storeservice: PlatformDataStoreService);
    getPageVersionByid(id: any): any;
    createPage(data: any): any;
    getFacilityDetails(providerid: any): any;
    static ɵfac: i0.ɵɵFactoryDeclaration<PageBuilderViewService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<PageBuilderViewService>;
}
