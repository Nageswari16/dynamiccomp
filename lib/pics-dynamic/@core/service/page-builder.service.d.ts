import { Observable } from 'rxjs';
import { PlatformDataStoreService } from './platform-data-store.service';
import * as i0 from "@angular/core";
export declare class PageBuilderService {
    private _storeservice;
    port_workflow: string;
    httpService: any;
    constructor(_storeservice: PlatformDataStoreService);
    getVersionList(pageId?: number | string): Observable<any>;
    getAllPageDesigns(id: any): any;
    duplicateDesignPage(data: any, id: any): any;
    activatePage(pageId: string): any;
    deactivatePage(pageId: string): any;
    static ɵfac: i0.ɵɵFactoryDeclaration<PageBuilderService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<PageBuilderService>;
}
