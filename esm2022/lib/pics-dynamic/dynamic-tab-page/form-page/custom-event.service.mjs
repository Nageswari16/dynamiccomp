import { Injectable } from '@angular/core';
import { DynamicTabPageService } from '../../@core/service/dynamic-tab-page-service';
import { DataStoreService } from '../../@core/service/data-store.service';
import * as i0 from "@angular/core";
export class customEventService {
    dataStore;
    dynamicTabPageService;
    action;
    constructor(injector) {
        this.dataStore = injector.get(DataStoreService);
        this.dynamicTabPageService = injector.get(DynamicTabPageService);
    }
    customEventsButton(event) {
        if (event.type === 'reportdownload') {
            const queryData = this.dataStore.getData('gridData');
            const pageData = this.dataStore.getData('pageData');
            event.data['currentYear'] = event.data.report1 === 'currentYear' ? 'yes' : '';
            if (event.data['currentYear'] === 'yes') {
                event.data['fromRange'] = '2021-06-18T14:33:06.366+0000';
                event.data['toRange'] = '2021-06-18T14:33:06.366+0000';
            }
            const data = {
                formData: event.data,
                queryData: queryData,
                pageData: pageData
            };
            this.downloadReport(data);
        }
    }
    downloadReport(data) {
        if (data) {
            this.dynamicTabPageService.exportReport(data).subscribe(result => {
                const resp = result['data'];
                if (resp.pdfAwsUrl && resp.excelAwsUrl) {
                    const urls = [];
                    urls.push(resp.pdfAwsUrl);
                    urls.push(resp.excelAwsUrl);
                    this.downloadFile(urls);
                }
                else if (resp.excelAwsUrl) {
                    this.downloadFile(resp.excelAwsUrl);
                }
                else if (resp.pdfAwsUrl) {
                    this.downloadFile(resp.pdfAwsUrl);
                }
            }, error => {
                console.log(error);
            });
        }
    }
    downloadFile(s3BucketUrlName) {
        if (s3BucketUrlName && Array.isArray(s3BucketUrlName)) {
            for (const item of s3BucketUrlName) {
                let link = document.createElement('a');
                link.href = item;
                link.download = 'download';
                link.target = '_blank';
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
                link = null;
            }
        }
        else {
            const link = document.createElement('a');
            link.href = s3BucketUrlName.trim();
            link.download = 'download';
            link.click();
            link.remove();
        }
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: customEventService, deps: [{ token: i0.Injector }], target: i0.ɵɵFactoryTarget.Injectable });
    static ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: customEventService, providedIn: 'root' });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: customEventService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return [{ type: i0.Injector }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VzdG9tLWV2ZW50LnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9waWNzLWNvcmUvZHluYW1pYy9zcmMvbGliL3BpY3MtZHluYW1pYy9keW5hbWljLXRhYi1wYWdlL2Zvcm0tcGFnZS9jdXN0b20tZXZlbnQuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFZLE1BQU0sZUFBZSxDQUFDO0FBQ3JELE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLDhDQUE4QyxDQUFDO0FBQ3JGLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHdDQUF3QyxDQUFDOztBQUsxRSxNQUFNLE9BQU8sa0JBQWtCO0lBQzdCLFNBQVMsQ0FBbUI7SUFDNUIscUJBQXFCLENBQXdCO0lBQzdDLE1BQU0sQ0FBUztJQUNiLFlBQ0UsUUFBa0I7UUFFbEIsSUFBSSxDQUFDLFNBQVMsR0FBRyxRQUFRLENBQUMsR0FBRyxDQUFtQixnQkFBZ0IsQ0FBQyxDQUFDO1FBQ2xFLElBQUksQ0FBQyxxQkFBcUIsR0FBRyxRQUFRLENBQUMsR0FBRyxDQUF3QixxQkFBcUIsQ0FBQyxDQUFDO0lBQzFGLENBQUM7SUFFRCxrQkFBa0IsQ0FBQyxLQUFLO1FBQ3BCLElBQUksS0FBSyxDQUFDLElBQUksS0FBSyxnQkFBZ0IsRUFBRTtZQUNqQyxNQUFNLFNBQVMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQztZQUNyRCxNQUFNLFFBQVEsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQztZQUNwRCxLQUFLLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUMsT0FBTyxLQUFLLGFBQWEsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUFFLENB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b3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlICwgSW5qZWN0b3J9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBEeW5hbWljVGFiUGFnZVNlcnZpY2UgfSBmcm9tICcuLi8uLi9AY29yZS9zZXJ2aWNlL2R5bmFtaWMtdGFiLXBhZ2Utc2VydmljZSc7XHJcbmltcG9ydCB7IERhdGFTdG9yZVNlcnZpY2UgfSBmcm9tICcuLi8uLi9AY29yZS9zZXJ2aWNlL2RhdGEtc3RvcmUuc2VydmljZSc7XHJcblxyXG5ASW5qZWN0YWJsZSh7XHJcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBjdXN0b21FdmVudFNlcnZpY2Uge1xyXG4gIGRhdGFTdG9yZTogRGF0YVN0b3JlU2VydmljZTtcclxuICBkeW5hbWljVGFiUGFnZVNlcnZpY2U6IER5bmFtaWNUYWJQYWdlU2VydmljZTtcclxuICBhY3Rpb246IHN0cmluZztcclxuICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgICBpbmplY3RvcjogSW5qZWN0b3IsXHJcbiAgICApIHtcclxuICAgICAgdGhpcy5kYXRhU3RvcmUgPSBpbmplY3Rvci5nZXQ8RGF0YVN0b3JlU2VydmljZT4oRGF0YVN0b3JlU2VydmljZSk7XHJcbiAgICAgIHRoaXMuZHluYW1pY1RhYlBhZ2VTZXJ2aWNlID0gaW5qZWN0b3IuZ2V0PER5bmFtaWNUYWJQYWdlU2VydmljZT4oRHluYW1pY1RhYlBhZ2VTZXJ2aWNlKTtcclxuICAgIH1cclxuXHJcbiAgICBjdXN0b21FdmVudHNCdXR0b24oZXZlbnQpe1xyXG4gICAgICAgIGlmIChldmVudC50eXBlID09PSAncmVwb3J0ZG93bmxvYWQnKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHF1ZXJ5RGF0YSA9IHRoaXMuZGF0YVN0b3JlLmdldERhdGEoJ2dyaWREYXRhJyk7XHJcbiAgICAgICAgICAgIGNvbnN0IHBhZ2VEYXRhID0gdGhpcy5kYXRhU3RvcmUuZ2V0RGF0YSgncGFnZURhdGEnKTtcclxuICAgICAgICAgICAgZXZlbnQuZGF0YVsnY3VycmVudFllYXInXSA9IGV2ZW50LmRhdGEucmVwb3J0MSA9PT0gJ2N1cnJlbnRZZWFyJyA/ICd5ZXMnIDogJyc7XHJcbiAgICAgICAgICAgIGlmIChldmVudC5kYXRhWydjdXJyZW50WWVhciddID09PSAneWVzJykge1xyXG4gICAgICAgICAgICAgIGV2ZW50LmRhdGFbJ2Zyb21SYW5nZSddID0gJzIwMjEtMDYtMThUMTQ6MzM6MDYuMzY2KzAwMDAnO1xyXG4gICAgICAgICAgICAgIGV2ZW50LmRhdGFbJ3RvUmFuZ2UnXSA9ICcyMDIxLTA2LTE4VDE0OjMzOjA2LjM2NiswMDAwJztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjb25zdCBkYXRhID0ge1xyXG4gICAgICAgICAgICAgIGZvcm1EYXRhOiBldmVudC5kYXRhLFxyXG4gICAgICAgICAgICAgIHF1ZXJ5RGF0YTogcXVlcnlEYXRhLFxyXG4gICAgICAgICAgICAgIHBhZ2VEYXRhOiBwYWdlRGF0YVxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICB0aGlzLmRvd25sb2FkUmVwb3J0KGRhdGEpO1xyXG4gICAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGRvd25sb2FkUmVwb3J0KGRhdGEpIHtcclxuICAgICAgICBpZiAoZGF0YSkge1xyXG4gICAgICAgICAgdGhpcy5keW5hbWljVGFiUGFnZVNlcnZpY2UuZXhwb3J0UmVwb3J0KGRhdGEpLnN1YnNjcmliZShcclxuICAgICAgICAgICAgcmVzdWx0ID0+IHtcclxuICAgICAgICAgICAgICBjb25zdCByZXNwID0gcmVzdWx0WydkYXRhJ107XHJcbiAgICAgICAgICAgICAgaWYgKHJlc3AucGRmQXdzVXJsICYmIHJlc3AuZXhjZWxBd3NVcmwpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHVybHMgPSBbXTtcclxuICAgICAgICAgICAgICAgIHVybHMucHVzaChyZXNwLnBkZkF3c1VybCk7XHJcbiAgICAgICAgICAgICAgICB1cmxzLnB1c2gocmVzcC5leGNlbEF3c1VybCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRvd25sb2FkRmlsZSh1cmxzKTtcclxuICAgICAgICAgICAgICB9IGVsc2UgaWYgKHJlc3AuZXhjZWxBd3NVcmwpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZG93bmxvYWRGaWxlKHJlc3AuZXhjZWxBd3NVcmwpO1xyXG4gICAgICAgICAgICAgIH0gZWxzZSBpZiAocmVzcC5wZGZBd3NVcmwpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZG93bmxvYWRGaWxlKHJlc3AucGRmQXdzVXJsKTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGVycm9yID0+IHtcclxuICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICBcclxuICAgICAgZG93bmxvYWRGaWxlKHMzQnVja2V0VXJsTmFtZSkge1xyXG4gICAgICAgIGlmIChzM0J1Y2tldFVybE5hbWUgJiYgQXJyYXkuaXNBcnJheShzM0J1Y2tldFVybE5hbWUpKSB7XHJcbiAgICAgICAgICBmb3IgKGNvbnN0IGl0ZW0gb2YgczNCdWNrZXRVcmxOYW1lKSB7XHJcbiAgICAgICAgICAgIGxldCBsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xyXG4gICAgICAgICAgICBsaW5rLmhyZWYgPSBpdGVtO1xyXG4gICAgICAgICAgICBsaW5rLmRvd25sb2FkID0gJ2Rvd25sb2FkJztcclxuICAgICAgICAgICAgbGluay50YXJnZXQgPSAnX2JsYW5rJztcclxuICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChsaW5rKTtcclxuICAgICAgICAgICAgbGluay5jbGljaygpO1xyXG4gICAgICAgICAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKGxpbmspO1xyXG4gICAgICAgICAgICBsaW5rID0gbnVsbDtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgY29uc3QgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcclxuICAgICAgICAgIGxpbmsuaHJlZiA9IHMzQnVja2V0VXJsTmFtZS50cmltKCk7XHJcbiAgICAgICAgICBsaW5rLmRvd25sb2FkID0gJ2Rvd25sb2FkJztcclxuICAgICAgICAgIGxpbmsuY2xpY2soKTtcclxuICAgICAgICAgIGxpbmsucmVtb3ZlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbn1cclxuIl19