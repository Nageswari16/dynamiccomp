import { Injector } from '@angular/core';
import { DynamicTabPageService } from '../../@core/service/dynamic-tab-page-service';
import { LocalService } from '../../@core/service/local.service';
import { AlertService } from '../../@core/service/alert.service';
import { DynamicsearchService } from '../../@core/service/dynamicsearch.service';
import { DataStoreService } from '../../@core/service/data-store.service';
import { OCRService } from '../../@core/service/ocr.service';
import { OcrValidationService } from '../../@core/service/ocr-validation.service';
import * as i0 from "@angular/core";
export declare class ocrResponseService {
    private localStorage;
    private alertService;
    private dynamicSearchService;
    private formId;
    private pageId;
    private jsonForm;
    ocrValidationService: OcrValidationService;
    dataStore: DataStoreService;
    dynamicTabPageService: DynamicTabPageService;
    ocr: OCRService;
    action: string;
    private pageDataSubscription;
    constructor(injector: Injector, localStorage: LocalService, alertService: AlertService, dynamicSearchService: DynamicsearchService);
    processResponseData(file: any): void;
    processOCRResponse(result: any, scannerConfig: any, submittedData: any, FormInputs: any): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ocrResponseService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<ocrResponseService>;
}
