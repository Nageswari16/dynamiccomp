import { Injectable } from '@angular/core';
import { OcrValidationServiceConfig } from '../urls/ocr-validation-url.config';
import * as i0 from "@angular/core";
import * as i1 from "./platform-data-store.service";
export class OcrValidationService {
    _storeservice;
    httpService;
    constructor(_storeservice) {
        this._storeservice = _storeservice;
        console.log('log');
        this._storeservice.currentStore.subscribe((res) => {
            if (res) {
                this.httpService = res['HTTPSERVICE'];
            }
        });
    }
    getUpload(obj) {
        return this.httpService.post(OcrValidationServiceConfig.EndPoint.OCRValidate.GetNewOcrData, JSON.parse(obj));
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: OcrValidationService, deps: [{ token: i1.PlatformDataStoreService }], target: i0.ɵɵFactoryTarget.Injectable });
    static ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: OcrValidationService, providedIn: 'root' });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: OcrValidationService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return [{ type: i1.PlatformDataStoreService }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2NyLXZhbGlkYXRpb24uc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3BpY3MtY29yZS9keW5hbWljL3NyYy9saWIvcGljcy1keW5hbWljL0Bjb3JlL3NlcnZpY2Uvb2NyLXZhbGlkYXRpb24uc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLG1DQUFtQyxDQUFDOzs7QUFNL0UsTUFBTSxPQUFPLG9CQUFvQjtJQUVYO0lBRHBCLFdBQVcsQ0FBSztJQUNoQixZQUFvQixhQUFzQztRQUF0QyxrQkFBYSxHQUFiLGFBQWEsQ0FBeUI7UUFDeEQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNuQixJQUFJLENBQUMsYUFBYSxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsQ0FBQyxHQUFRLEVBQUUsRUFBRTtZQUNyRCxJQUFHLEdBQUcsRUFBQztnQkFDTCxJQUFJLENBQUMsV0FBVyxHQUFHLEdBQUcsQ0FBQyxhQUFhLENBQUMsQ0FBQTthQUN0QztRQUNILENBQUMsQ0FBQyxDQUFBO0lBQ0osQ0FBQztJQUVELFNBQVMsQ0FBQyxHQUFHO1FBQ1gsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQywwQkFBMEIsQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFDL0csQ0FBQzt3R0FiVSxvQkFBb0I7NEdBQXBCLG9CQUFvQixjQUZuQixNQUFNOzs0RkFFUCxvQkFBb0I7a0JBSGhDLFVBQVU7bUJBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBPY3JWYWxpZGF0aW9uU2VydmljZUNvbmZpZyB9IGZyb20gJy4uL3VybHMvb2NyLXZhbGlkYXRpb24tdXJsLmNvbmZpZyc7XHJcbmltcG9ydCB7IFBsYXRmb3JtRGF0YVN0b3JlU2VydmljZSB9IGZyb20gJy4vcGxhdGZvcm0tZGF0YS1zdG9yZS5zZXJ2aWNlJztcclxuXHJcbkBJbmplY3RhYmxlKHtcclxuICBwcm92aWRlZEluOiAncm9vdCdcclxufSlcclxuZXhwb3J0IGNsYXNzIE9jclZhbGlkYXRpb25TZXJ2aWNlIHtcclxuICBodHRwU2VydmljZTphbnk7XHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfc3RvcmVzZXJ2aWNlOlBsYXRmb3JtRGF0YVN0b3JlU2VydmljZSkge1xyXG4gICAgY29uc29sZS5sb2coJ2xvZycpO1xyXG4gICAgdGhpcy5fc3RvcmVzZXJ2aWNlLmN1cnJlbnRTdG9yZS5zdWJzY3JpYmUoKHJlczogYW55KSA9PiB7XHJcbiAgICAgIGlmKHJlcyl7XHJcbiAgICAgICAgdGhpcy5odHRwU2VydmljZSA9IHJlc1snSFRUUFNFUlZJQ0UnXVxyXG4gICAgICB9XHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbiAgZ2V0VXBsb2FkKG9iaikge1xyXG4gICAgcmV0dXJuIHRoaXMuaHR0cFNlcnZpY2UucG9zdChPY3JWYWxpZGF0aW9uU2VydmljZUNvbmZpZy5FbmRQb2ludC5PQ1JWYWxpZGF0ZS5HZXROZXdPY3JEYXRhLCBKU09OLnBhcnNlKG9iaikpO1xyXG4gIH1cclxufVxyXG4iXX0=