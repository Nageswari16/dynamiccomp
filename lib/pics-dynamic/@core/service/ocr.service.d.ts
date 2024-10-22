import { Observable } from 'rxjs';
import * as i0 from "@angular/core";
export declare class OCRService {
    private listener;
    FormIncrementer: number;
    ocrIncrementer: number;
    textractInput: any;
    constructor();
    sendResponse(message: any): void;
    clearResponse(): void;
    getResponse(): Observable<any>;
    sendForDoucumentAnalysis(_s3_bucket_path: any): void;
    prepare_form_data(ocrResponse: any, formioInputs: any): {};
    conditionSelectedInput(selectedInput: any, formData: any, ocrforms: any): void;
    conditionFormValues(formValues: any, ocrforms: any, selectedInput: any, selectionValue: any, formData: any): void;
    prepare_from_data_v1(ocr_response: any, formioInputs: any): any;
    getSelectedDate(item: any, selectedInput: any): {};
    static ɵfac: i0.ɵɵFactoryDeclaration<OCRService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<OCRService>;
}
