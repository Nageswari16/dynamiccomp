import { Injector } from '@angular/core';
import { DynamicTabPageService } from '../../@core/service/dynamic-tab-page-service';
import { DataStoreService } from '../../@core/service/data-store.service';
import * as i0 from "@angular/core";
export declare class customEventService {
    dataStore: DataStoreService;
    dynamicTabPageService: DynamicTabPageService;
    action: string;
    constructor(injector: Injector);
    customEventsButton(event: any): void;
    downloadReport(data: any): void;
    downloadFile(s3BucketUrlName: any): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<customEventService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<customEventService>;
}
