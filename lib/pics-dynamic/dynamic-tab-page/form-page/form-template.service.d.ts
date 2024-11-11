import { Injector } from '@angular/core';
import { DynamicTabPageService } from '../../@core/service/dynamic-tab-page-service';
import { AlertService } from '../../@core/service/alert.service';
import { DynamicsearchService } from '../../@core/service/dynamicsearch.service';
import { DataStoreService } from '../../@core/service/data-store.service';
import { LocalService } from '../../@core/service/local.service';
import * as i0 from "@angular/core";
export declare class TemplateService {
    private localStorage;
    private alertService;
    private dynamicSearchService;
    private jsonForm;
    dataStore: DataStoreService;
    templateResult: any;
    dynamicTabPageService: DynamicTabPageService;
    action: string;
    private pageDataSubscription;
    constructor(injector: Injector, localStorage: LocalService, alertService: AlertService, dynamicSearchService: DynamicsearchService);
    getTitle(action: string, pageName: string): string;
    static ɵfac: i0.ɵɵFactoryDeclaration<TemplateService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<TemplateService>;
}
