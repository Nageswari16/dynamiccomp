import { Injectable } from '@angular/core';
import { DynamicTabPageService } from '../../@core/service/dynamic-tab-page-service';
import { DataStoreService } from '../../@core/service/data-store.service';
import { OCRService } from '../../@core/service/ocr.service';
import { OcrValidationService } from '../../@core/service/ocr-validation.service';
import * as i0 from "@angular/core";
import * as i1 from "../../@core/service/local.service";
import * as i2 from "../../@core/service/alert.service";
import * as i3 from "../../@core/service/dynamicsearch.service";
export class ocrResponseService {
    localStorage;
    alertService;
    dynamicSearchService;
    formId;
    pageId;
    jsonForm;
    ocrValidationService;
    dataStore;
    dynamicTabPageService;
    ocr;
    action;
    pageDataSubscription;
    constructor(injector, localStorage, alertService, dynamicSearchService) {
        this.localStorage = localStorage;
        this.alertService = alertService;
        this.dynamicSearchService = dynamicSearchService;
        this.dataStore = injector.get(DataStoreService);
        this.ocr = injector.get(OCRService);
        this.dynamicTabPageService = injector.get(DynamicTabPageService);
        this.ocrValidationService = injector.get(OcrValidationService);
        this.action = this.dataStore.getData('gridAction') || this.localStorage.getItem('gridAction');
    } //not called in any other function - uploadFile function
    processResponseData(file) {
        this.dynamicTabPageService.uploadFile(file).subscribe(response => {
            if (response.status) {
                console.log(response.percent);
            }
        }, _err => {
            console.log('Unable to process your request.');
        });
    }
    //not called in any other function - uploadFile function
    processOCRResponse(result, scannerConfig, submittedData, FormInputs) {
        const response = result.response;
        if (scannerConfig && scannerConfig.scanType) {
            if (scannerConfig.scanType === 'text' && scannerConfig.scanPatch) {
                const sdata = submittedData;
                if (sdata && sdata.data) {
                    sdata.data[scannerConfig.scanPatch] = response.raw_text;
                    submittedData = JSON.parse(JSON.stringify(sdata));
                }
            }
            else {
                const formDatav1 = this.ocr.prepare_form_data(response, JSON.parse(JSON.stringify(FormInputs)));
                const formDatav2 = this.ocr.prepare_from_data_v1(response, JSON.parse(JSON.stringify(FormInputs)));
                const finalData = { ...formDatav1, ...formDatav2 };
                submittedData = { data: finalData };
            }
        }
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: ocrResponseService, deps: [{ token: i0.Injector }, { token: i1.LocalService }, { token: i2.AlertService }, { token: i3.DynamicsearchService }], target: i0.ɵɵFactoryTarget.Injectable });
    static ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: ocrResponseService, providedIn: 'root' });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: ocrResponseService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return [{ type: i0.Injector }, { type: i1.LocalService }, { type: i2.AlertService }, { type: i3.DynamicsearchService }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2NyLXJlc3BvbnNlLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9waWNzLWNvcmUvZHluYW1pYy9zcmMvbGliL3BpY3MtZHluYW1pYy9keW5hbWljLXRhYi1wYWdlL2Zvcm0tcGFnZS9vY3ItcmVzcG9uc2Uuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFZLE1BQU0sZUFBZSxDQUFDO0FBR3JELE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLDhDQUE4QyxDQUFDO0FBSXJGLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHdDQUF3QyxDQUFDO0FBQzFFLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUM3RCxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSw0Q0FBNEMsQ0FBQzs7Ozs7QUFPbEYsTUFBTSxPQUFPLGtCQUFrQjtJQVlqQjtJQUNBO0lBQ0E7SUFiSixNQUFNLENBQXFCO0lBQzNCLE1BQU0sQ0FBcUI7SUFDM0IsUUFBUSxDQUFNO0lBQ3RCLG9CQUFvQixDQUF1QjtJQUMzQyxTQUFTLENBQW1CO0lBQzVCLHFCQUFxQixDQUF3QjtJQUM3QyxHQUFHLENBQWE7SUFDaEIsTUFBTSxDQUFTO0lBQ1Asb0JBQW9CLENBQU07SUFDaEMsWUFDRSxRQUFrQixFQUNWLFlBQTBCLEVBQzFCLFlBQTBCLEVBQzFCLG9CQUEwQztRQUYxQyxpQkFBWSxHQUFaLFlBQVksQ0FBYztRQUMxQixpQkFBWSxHQUFaLFlBQVksQ0FBYztRQUMxQix5QkFBb0IsR0FBcEIsb0JBQW9CLENBQXNCO1FBRWxELElBQUksQ0FBQyxTQUFTLEdBQUcsUUFBUSxDQUFDLEdBQUcsQ0FBbUIsZ0JBQWdCLENBQUMsQ0FBQztRQUNsRSxJQUFJLENBQUMsR0FBRyxHQUFHLFFBQVEsQ0FBQyxHQUFHLENBQWEsVUFBVSxDQUFDLENBQUM7UUFDaEQsSUFBSSxDQUFDLHFCQUFxQixHQUFHLFFBQVEsQ0FBQyxHQUFHLENBQXdCLHFCQUFxQixDQUFDLENBQUM7UUFDeEYsSUFBSSxDQUFDLG9CQUFvQixHQUFHLFFBQVEsQ0FBQyxHQUFHLENBQXVCLG9CQUFvQixDQUFDLENBQUM7UUFDckYsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsSUFBSSxJQUFJLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUNoRyxDQUFDLENBQW9CLHdEQUF3RDtJQUUzRSxtQkFBbUIsQ0FBQyxJQUFJO1FBQ3RCLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUMsU0FBUyxDQUNuRCxRQUFRLENBQUMsRUFBRTtZQUNULElBQUksUUFBUSxDQUFDLE1BQU0sRUFBRTtnQkFDbkIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUM7YUFDL0I7UUFDSCxDQUFDLEVBQ0QsSUFBSSxDQUFDLEVBQUU7WUFDTCxPQUFPLENBQUMsR0FBRyxDQUFDLGlDQUFpQyxDQUFDLENBQUM7UUFDakQsQ0FBQyxDQUNGLENBQUM7SUFDSixDQUFDO0lBQ2Esd0RBQXdEO0lBRXRFLGtCQUFrQixDQUFDLE1BQU0sRUFBRSxhQUFhLEVBQUUsYUFBYSxFQUFFLFVBQVU7UUFDakUsTUFBTSxRQUFRLEdBQUcsTUFBTSxDQUFDLFFBQVEsQ0FBQztRQUNqQyxJQUFJLGFBQWEsSUFBSSxhQUFhLENBQUMsUUFBUSxFQUFFO1lBQzNDLElBQUksYUFBYSxDQUFDLFFBQVEsS0FBSyxNQUFNLElBQUksYUFBYSxDQUFDLFNBQVMsRUFBRTtnQkFDaEUsTUFBTSxLQUFLLEdBQUcsYUFBYSxDQUFDO2dCQUM1QixJQUFJLEtBQUssSUFBSSxLQUFLLENBQUMsSUFBSSxFQUFFO29CQUN2QixLQUFLLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsR0FBRyxRQUFRLENBQUMsUUFBUSxDQUFDO29CQUN4RCxhQUFhLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7aUJBQ25EO2FBQ0Y7aUJBQU07Z0JBQ0wsTUFBTSxVQUFVLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDaEcsTUFBTSxVQUFVLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxvQkFBb0IsQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDbkcsTUFBTSxTQUFTLEdBQUcsRUFBRSxHQUFHLFVBQVUsRUFBRSxHQUFHLFVBQVUsRUFBRSxDQUFDO2dCQUNuRCxhQUFhLEdBQUcsRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLENBQUM7YUFDckM7U0FDRjtJQUNILENBQUM7d0dBckRNLGtCQUFrQjs0R0FBbEIsa0JBQWtCLGNBSGpCLE1BQU07OzRGQUdQLGtCQUFrQjtrQkFKOUIsVUFBVTttQkFBQztvQkFDVixVQUFVLEVBQUUsTUFBTTtpQkFDbkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlICwgSW5qZWN0b3J9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSwgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHsgTG9jYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgeyBEeW5hbWljVGFiUGFnZVNlcnZpY2UgfSBmcm9tICcuLi8uLi9AY29yZS9zZXJ2aWNlL2R5bmFtaWMtdGFiLXBhZ2Utc2VydmljZSc7XHJcbmltcG9ydCB7IExvY2FsU2VydmljZSB9IGZyb20gJy4uLy4uL0Bjb3JlL3NlcnZpY2UvbG9jYWwuc2VydmljZSc7XHJcbmltcG9ydCB7IEFsZXJ0U2VydmljZSB9IGZyb20gJy4uLy4uL0Bjb3JlL3NlcnZpY2UvYWxlcnQuc2VydmljZSc7XHJcbmltcG9ydCB7IER5bmFtaWNzZWFyY2hTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vQGNvcmUvc2VydmljZS9keW5hbWljc2VhcmNoLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBEYXRhU3RvcmVTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vQGNvcmUvc2VydmljZS9kYXRhLXN0b3JlLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBPQ1JTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vQGNvcmUvc2VydmljZS9vY3Iuc2VydmljZSc7XHJcbmltcG9ydCB7IE9jclZhbGlkYXRpb25TZXJ2aWNlIH0gZnJvbSAnLi4vLi4vQGNvcmUvc2VydmljZS9vY3ItdmFsaWRhdGlvbi5zZXJ2aWNlJztcclxuaW1wb3J0IHsgRmlsZUVycm9yIH0gZnJvbSAnbmd4Zi11cGxvYWRlcic7XHJcblxyXG5ASW5qZWN0YWJsZSh7XHJcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3Mgb2NyUmVzcG9uc2VTZXJ2aWNlIHtcclxuICBwcml2YXRlIGZvcm1JZDogc3RyaW5nIHwgdW5kZWZpbmVkO1xyXG4gIHByaXZhdGUgcGFnZUlkOiBzdHJpbmcgfCB1bmRlZmluZWQ7XHJcbiAgcHJpdmF0ZSBqc29uRm9ybTogYW55O1xyXG4gIG9jclZhbGlkYXRpb25TZXJ2aWNlOiBPY3JWYWxpZGF0aW9uU2VydmljZTtcclxuICBkYXRhU3RvcmU6IERhdGFTdG9yZVNlcnZpY2U7XHJcbiAgZHluYW1pY1RhYlBhZ2VTZXJ2aWNlOiBEeW5hbWljVGFiUGFnZVNlcnZpY2U7XHJcbiAgb2NyOiBPQ1JTZXJ2aWNlO1xyXG4gIGFjdGlvbjogc3RyaW5nO1xyXG4gIHByaXZhdGUgcGFnZURhdGFTdWJzY3JpcHRpb246IGFueTtcclxuICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgICBpbmplY3RvcjogSW5qZWN0b3IsXHJcbiAgICAgIHByaXZhdGUgbG9jYWxTdG9yYWdlOiBMb2NhbFNlcnZpY2UsXHJcbiAgICAgIHByaXZhdGUgYWxlcnRTZXJ2aWNlOiBBbGVydFNlcnZpY2UsXHJcbiAgICAgIHByaXZhdGUgZHluYW1pY1NlYXJjaFNlcnZpY2U6IER5bmFtaWNzZWFyY2hTZXJ2aWNlICAsXHJcbiAgICApIHtcclxuICAgICAgdGhpcy5kYXRhU3RvcmUgPSBpbmplY3Rvci5nZXQ8RGF0YVN0b3JlU2VydmljZT4oRGF0YVN0b3JlU2VydmljZSk7XHJcbiAgICAgIHRoaXMub2NyID0gaW5qZWN0b3IuZ2V0PE9DUlNlcnZpY2U+KE9DUlNlcnZpY2UpO1xyXG4gICAgICB0aGlzLmR5bmFtaWNUYWJQYWdlU2VydmljZSA9IGluamVjdG9yLmdldDxEeW5hbWljVGFiUGFnZVNlcnZpY2U+KER5bmFtaWNUYWJQYWdlU2VydmljZSk7XHJcbiAgICAgIHRoaXMub2NyVmFsaWRhdGlvblNlcnZpY2UgPSBpbmplY3Rvci5nZXQ8T2NyVmFsaWRhdGlvblNlcnZpY2U+KE9jclZhbGlkYXRpb25TZXJ2aWNlKTtcclxuICAgICAgdGhpcy5hY3Rpb24gPSB0aGlzLmRhdGFTdG9yZS5nZXREYXRhKCdncmlkQWN0aW9uJykgfHwgdGhpcy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnZ3JpZEFjdGlvbicpO1xyXG4gICAgfSAgICAgICAgICAgICAgICAgICAgLy9ub3QgY2FsbGVkIGluIGFueSBvdGhlciBmdW5jdGlvbiAtIHVwbG9hZEZpbGUgZnVuY3Rpb25cclxuICAgIFxyXG4gICAgICBwcm9jZXNzUmVzcG9uc2VEYXRhKGZpbGUpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmR5bmFtaWNUYWJQYWdlU2VydmljZS51cGxvYWRGaWxlKGZpbGUpLnN1YnNjcmliZShcclxuICAgICAgICAgIHJlc3BvbnNlID0+IHtcclxuICAgICAgICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cykge1xyXG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlLnBlcmNlbnQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgX2VyciA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdVbmFibGUgdG8gcHJvY2VzcyB5b3VyIHJlcXVlc3QuJyk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgKTtcclxuICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC8vbm90IGNhbGxlZCBpbiBhbnkgb3RoZXIgZnVuY3Rpb24gLSB1cGxvYWRGaWxlIGZ1bmN0aW9uXHJcbiAgICBcclxuICAgICAgcHJvY2Vzc09DUlJlc3BvbnNlKHJlc3VsdCwgc2Nhbm5lckNvbmZpZywgc3VibWl0dGVkRGF0YSwgRm9ybUlucHV0cykge1xyXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gcmVzdWx0LnJlc3BvbnNlO1xyXG4gICAgICAgIGlmIChzY2FubmVyQ29uZmlnICYmIHNjYW5uZXJDb25maWcuc2NhblR5cGUpIHtcclxuICAgICAgICAgIGlmIChzY2FubmVyQ29uZmlnLnNjYW5UeXBlID09PSAndGV4dCcgJiYgc2Nhbm5lckNvbmZpZy5zY2FuUGF0Y2gpIHtcclxuICAgICAgICAgICAgY29uc3Qgc2RhdGEgPSBzdWJtaXR0ZWREYXRhO1xyXG4gICAgICAgICAgICBpZiAoc2RhdGEgJiYgc2RhdGEuZGF0YSkge1xyXG4gICAgICAgICAgICAgIHNkYXRhLmRhdGFbc2Nhbm5lckNvbmZpZy5zY2FuUGF0Y2hdID0gcmVzcG9uc2UucmF3X3RleHQ7XHJcbiAgICAgICAgICAgICAgc3VibWl0dGVkRGF0YSA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkoc2RhdGEpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY29uc3QgZm9ybURhdGF2MSA9IHRoaXMub2NyLnByZXBhcmVfZm9ybV9kYXRhKHJlc3BvbnNlLCBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KEZvcm1JbnB1dHMpKSk7XHJcbiAgICAgICAgICAgIGNvbnN0IGZvcm1EYXRhdjIgPSB0aGlzLm9jci5wcmVwYXJlX2Zyb21fZGF0YV92MShyZXNwb25zZSwgSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShGb3JtSW5wdXRzKSkpO1xyXG4gICAgICAgICAgICBjb25zdCBmaW5hbERhdGEgPSB7IC4uLmZvcm1EYXRhdjEsIC4uLmZvcm1EYXRhdjIgfTtcclxuICAgICAgICAgICAgc3VibWl0dGVkRGF0YSA9IHsgZGF0YTogZmluYWxEYXRhIH07XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbn1cclxuIl19