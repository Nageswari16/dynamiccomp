import { Injectable } from '@angular/core';
import { DynamicTabPageService } from '../../@core/service/dynamic-tab-page-service';
import { OCRService } from '../../@core/service/ocr.service';
import { OcrValidationService } from '../../@core/service/ocr-validation.service';
import * as i0 from "@angular/core";
export class OcrResponseService {
    ocrValidationService;
    dynamicTabPageService;
    ocr;
    constructor(injector) {
        this.ocr = injector.get(OCRService);
        this.dynamicTabPageService = injector.get(DynamicTabPageService);
        this.ocrValidationService = injector.get(OcrValidationService);
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
        return submittedData;
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: OcrResponseService, deps: [{ token: i0.Injector }], target: i0.ɵɵFactoryTarget.Injectable });
    static ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: OcrResponseService, providedIn: 'root' });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: OcrResponseService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return [{ type: i0.Injector }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2NyLXJlc3BvbnNlLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9waWNzLWNvcmUvZHluYW1pYy9zcmMvbGliL3BpY3MtZHluYW1pYy9keW5hbWljLXRhYi1wYWdlL2Zvcm0tcGFnZS9vY3ItcmVzcG9uc2Uuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFZLE1BQU0sZUFBZSxDQUFDO0FBQ3JELE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLDhDQUE4QyxDQUFDO0FBRXJGLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUM3RCxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSw0Q0FBNEMsQ0FBQzs7QUFNbEYsTUFBTSxPQUFPLGtCQUFrQjtJQUM3QixvQkFBb0IsQ0FBdUI7SUFDM0MscUJBQXFCLENBQXdCO0lBQzdDLEdBQUcsQ0FBYTtJQUNkLFlBQ0UsUUFBa0I7UUFFbEIsSUFBSSxDQUFDLEdBQUcsR0FBRyxRQUFRLENBQUMsR0FBRyxDQUFhLFVBQVUsQ0FBQyxDQUFDO1FBQ2hELElBQUksQ0FBQyxxQkFBcUIsR0FBRyxRQUFRLENBQUMsR0FBRyxDQUF3QixxQkFBcUIsQ0FBQyxDQUFDO1FBQ3hGLElBQUksQ0FBQyxvQkFBb0IsR0FBRyxRQUFRLENBQUMsR0FBRyxDQUF1QixvQkFBb0IsQ0FBQyxDQUFDO0lBQ3ZGLENBQUMsQ0FBb0Isd0RBQXdEO0lBRTNFLG1CQUFtQixDQUFDLElBQUk7UUFDdEIsSUFBSSxDQUFDLHFCQUFxQixDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxTQUFTLENBQ25ELFFBQVEsQ0FBQyxFQUFFO1lBQ1QsSUFBSSxRQUFRLENBQUMsTUFBTSxFQUFFO2dCQUNuQixPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQzthQUMvQjtRQUNILENBQUMsRUFDRCxJQUFJLENBQUMsRUFBRTtZQUNMLE9BQU8sQ0FBQyxHQUFHLENBQUMsaUNBQWlDLENBQUMsQ0FBQztRQUNqRCxDQUFDLENBQ0YsQ0FBQztJQUNKLENBQUM7SUFDYSx3REFBd0Q7SUFFdEUsa0JBQWtCLENBQUMsTUFBTSxFQUFFLGFBQWEsRUFBRSxhQUFhLEVBQUUsVUFBVTtRQUNqRSxNQUFNLFFBQVEsR0FBRyxNQUFNLENBQUMsUUFBUSxDQUFDO1FBQ2pDLElBQUksYUFBYSxJQUFJLGFBQWEsQ0FBQyxRQUFRLEVBQUU7WUFDM0MsSUFBSSxhQUFhLENBQUMsUUFBUSxLQUFLLE1BQU0sSUFBSSxhQUFhLENBQUMsU0FBUyxFQUFFO2dCQUNoRSxNQUFNLEtBQUssR0FBRyxhQUFhLENBQUM7Z0JBQzVCLElBQUksS0FBSyxJQUFJLEtBQUssQ0FBQyxJQUFJLEVBQUU7b0JBQ3ZCLEtBQUssQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxHQUFHLFFBQVEsQ0FBQyxRQUFRLENBQUM7b0JBQ3hELGFBQWEsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztpQkFDbkQ7YUFDRjtpQkFBTTtnQkFDTCxNQUFNLFVBQVUsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLGlCQUFpQixDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUNoRyxNQUFNLFVBQVUsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLG9CQUFvQixDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUNuRyxNQUFNLFNBQVMsR0FBRyxFQUFFLEdBQUcsVUFBVSxFQUFFLEdBQUcsVUFBVSxFQUFFLENBQUM7Z0JBQ25ELGFBQWEsR0FBRyxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUUsQ0FBQzthQUNyQztTQUNGO1FBQ0QsT0FBTyxhQUFhLENBQUM7SUFDdkIsQ0FBQzt3R0EzQ00sa0JBQWtCOzRHQUFsQixrQkFBa0IsY0FIakIsTUFBTTs7NEZBR1Asa0JBQWtCO2tCQUo5QixVQUFVO21CQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgLCBJbmplY3Rvcn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IER5bmFtaWNUYWJQYWdlU2VydmljZSB9IGZyb20gJy4uLy4uL0Bjb3JlL3NlcnZpY2UvZHluYW1pYy10YWItcGFnZS1zZXJ2aWNlJztcclxuaW1wb3J0IHsgTG9jYWxTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vQGNvcmUvc2VydmljZS9sb2NhbC5zZXJ2aWNlJztcclxuaW1wb3J0IHsgT0NSU2VydmljZSB9IGZyb20gJy4uLy4uL0Bjb3JlL3NlcnZpY2Uvb2NyLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBPY3JWYWxpZGF0aW9uU2VydmljZSB9IGZyb20gJy4uLy4uL0Bjb3JlL3NlcnZpY2Uvb2NyLXZhbGlkYXRpb24uc2VydmljZSc7XHJcblxyXG5ASW5qZWN0YWJsZSh7XHJcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgT2NyUmVzcG9uc2VTZXJ2aWNlIHtcclxuICBvY3JWYWxpZGF0aW9uU2VydmljZTogT2NyVmFsaWRhdGlvblNlcnZpY2U7XHJcbiAgZHluYW1pY1RhYlBhZ2VTZXJ2aWNlOiBEeW5hbWljVGFiUGFnZVNlcnZpY2U7XHJcbiAgb2NyOiBPQ1JTZXJ2aWNlO1xyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAgIGluamVjdG9yOiBJbmplY3RvclxyXG4gICAgICApIHtcclxuICAgICAgdGhpcy5vY3IgPSBpbmplY3Rvci5nZXQ8T0NSU2VydmljZT4oT0NSU2VydmljZSk7XHJcbiAgICAgIHRoaXMuZHluYW1pY1RhYlBhZ2VTZXJ2aWNlID0gaW5qZWN0b3IuZ2V0PER5bmFtaWNUYWJQYWdlU2VydmljZT4oRHluYW1pY1RhYlBhZ2VTZXJ2aWNlKTtcclxuICAgICAgdGhpcy5vY3JWYWxpZGF0aW9uU2VydmljZSA9IGluamVjdG9yLmdldDxPY3JWYWxpZGF0aW9uU2VydmljZT4oT2NyVmFsaWRhdGlvblNlcnZpY2UpO1xyXG4gICAgfSAgICAgICAgICAgICAgICAgICAgLy9ub3QgY2FsbGVkIGluIGFueSBvdGhlciBmdW5jdGlvbiAtIHVwbG9hZEZpbGUgZnVuY3Rpb25cclxuICAgIFxyXG4gICAgICBwcm9jZXNzUmVzcG9uc2VEYXRhKGZpbGUpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmR5bmFtaWNUYWJQYWdlU2VydmljZS51cGxvYWRGaWxlKGZpbGUpLnN1YnNjcmliZShcclxuICAgICAgICAgIHJlc3BvbnNlID0+IHtcclxuICAgICAgICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cykge1xyXG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlLnBlcmNlbnQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgX2VyciA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdVbmFibGUgdG8gcHJvY2VzcyB5b3VyIHJlcXVlc3QuJyk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgKTtcclxuICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC8vbm90IGNhbGxlZCBpbiBhbnkgb3RoZXIgZnVuY3Rpb24gLSB1cGxvYWRGaWxlIGZ1bmN0aW9uXHJcbiAgICBcclxuICAgICAgcHJvY2Vzc09DUlJlc3BvbnNlKHJlc3VsdCwgc2Nhbm5lckNvbmZpZywgc3VibWl0dGVkRGF0YSwgRm9ybUlucHV0cykge1xyXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gcmVzdWx0LnJlc3BvbnNlO1xyXG4gICAgICAgIGlmIChzY2FubmVyQ29uZmlnICYmIHNjYW5uZXJDb25maWcuc2NhblR5cGUpIHtcclxuICAgICAgICAgIGlmIChzY2FubmVyQ29uZmlnLnNjYW5UeXBlID09PSAndGV4dCcgJiYgc2Nhbm5lckNvbmZpZy5zY2FuUGF0Y2gpIHtcclxuICAgICAgICAgICAgY29uc3Qgc2RhdGEgPSBzdWJtaXR0ZWREYXRhO1xyXG4gICAgICAgICAgICBpZiAoc2RhdGEgJiYgc2RhdGEuZGF0YSkge1xyXG4gICAgICAgICAgICAgIHNkYXRhLmRhdGFbc2Nhbm5lckNvbmZpZy5zY2FuUGF0Y2hdID0gcmVzcG9uc2UucmF3X3RleHQ7XHJcbiAgICAgICAgICAgICAgc3VibWl0dGVkRGF0YSA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkoc2RhdGEpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY29uc3QgZm9ybURhdGF2MSA9IHRoaXMub2NyLnByZXBhcmVfZm9ybV9kYXRhKHJlc3BvbnNlLCBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KEZvcm1JbnB1dHMpKSk7XHJcbiAgICAgICAgICAgIGNvbnN0IGZvcm1EYXRhdjIgPSB0aGlzLm9jci5wcmVwYXJlX2Zyb21fZGF0YV92MShyZXNwb25zZSwgSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShGb3JtSW5wdXRzKSkpO1xyXG4gICAgICAgICAgICBjb25zdCBmaW5hbERhdGEgPSB7IC4uLmZvcm1EYXRhdjEsIC4uLmZvcm1EYXRhdjIgfTtcclxuICAgICAgICAgICAgc3VibWl0dGVkRGF0YSA9IHsgZGF0YTogZmluYWxEYXRhIH07XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBzdWJtaXR0ZWREYXRhO1xyXG4gICAgICB9XHJcbn1cclxuIl19