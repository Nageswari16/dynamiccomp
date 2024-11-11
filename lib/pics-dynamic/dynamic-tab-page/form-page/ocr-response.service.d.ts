import { Injector } from '@angular/core';
import { DynamicTabPageService } from '../../@core/service/dynamic-tab-page-service';
import { OCRService } from '../../@core/service/ocr.service';
import { OcrValidationService } from '../../@core/service/ocr-validation.service';
import * as i0 from "@angular/core";
export declare class OcrResponseService {
    ocrValidationService: OcrValidationService;
    dynamicTabPageService: DynamicTabPageService;
    ocr: OCRService;
    constructor(injector: Injector);
    processResponseData(file: any): void;
    processOCRResponse(result: any, scannerConfig: any, submittedData: any, FormInputs: any): any;
    static ɵfac: i0.ɵɵFactoryDeclaration<OcrResponseService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<OcrResponseService>;
}
