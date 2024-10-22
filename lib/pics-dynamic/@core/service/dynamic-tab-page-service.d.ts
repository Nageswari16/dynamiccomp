import { NgxfUploaderService } from 'ngxf-uploader';
import { PlatformDataStoreService } from './platform-data-store.service';
import * as i0 from "@angular/core";
export declare class DynamicTabPageService {
    private uploadService;
    private _storeservice;
    httpService: any;
    private isPageDesign;
    observePage: import("rxjs").Observable<boolean>;
    constructor(uploadService: NgxfUploaderService, _storeservice: PlatformDataStoreService);
    getActivePage(tabPageId: any, permission?: boolean, action?: string): any;
    getDynamicPage(pageId: any): any;
    getPageById(pageId: any): any;
    getListBySourceId(sourceId: any): any;
    getResponseByPageId(responseId: any, pageId: any): any;
    createFormResponse(id: any, requestData: any): any;
    createUserSurvey(history: any, Id: any): any;
    updateFormResponse(id: any, requestData: any, EditGridPageID?: any): any;
    exportReport(data: any): any;
    uploadFile(file: any): import("rxjs").Observable<import("ngxf-uploader").UploadEvent>;
    getUniqueId(api: string): any;
    changePage(page: any): void;
    createFormResponseAttachment(data: any): any;
    getYouthSummaryDetails(data: any): any;
    getAlertCount(youthId: any): any;
    getRiskValue(youthId: any): any;
    static ɵfac: i0.ɵɵFactoryDeclaration<DynamicTabPageService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<DynamicTabPageService>;
}
