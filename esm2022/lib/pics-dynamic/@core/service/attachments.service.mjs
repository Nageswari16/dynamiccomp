import { Injectable } from '@angular/core';
import { AttachmentConfig } from '../config/common-url.config';
import * as i0 from "@angular/core";
import * as i1 from "./data-store.service";
export class AttachmentsService {
    _storeservice;
    http;
    constructor(_storeservice) {
        this._storeservice = _storeservice;
        this._storeservice.currentStore.subscribe((res) => {
            if (res) {
                this.http = res['HTTPSERVICE'];
            }
        });
    }
    getAttachmentReferral(referralid) {
        return this.http.get(AttachmentConfig.EndPoint.Attachments.GetAttachmentReferral + '/' + referralid);
    }
    getCategoryLookup(name) {
        return this.http.get(AttachmentConfig.EndPoint.Attachments.GetCategoryLookup + '/' + name);
    }
    uploadKey(objparams) {
        return this.http.post(AttachmentConfig.EndPoint.Attachments.UploadKey, objparams);
    }
    downloadKey(objparams) {
        return this.http.post(AttachmentConfig.EndPoint.Attachments.DownloadKey, objparams);
    }
    postAttachment(objparams) {
        return this.http.post(AttachmentConfig.EndPoint.Attachments.PostAttachment, objparams);
    }
    putAttachment(objparams, attachmentId) {
        console.log(AttachmentConfig.EndPoint.Attachments.PutAttachment + '/' + attachmentId, objparams);
        return this.http.patch(AttachmentConfig.EndPoint.Attachments.PutAttachment + '/' + attachmentId, objparams);
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: AttachmentsService, deps: [{ token: i1.DataStoreService }], target: i0.ɵɵFactoryTarget.Injectable });
    static ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: AttachmentsService, providedIn: 'root' });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: AttachmentsService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return [{ type: i1.DataStoreService }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXR0YWNobWVudHMuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3BpY3MtY29yZS9keW5hbWljL3NyYy9saWIvcGljcy1keW5hbWljL0Bjb3JlL3NlcnZpY2UvYXR0YWNobWVudHMuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDZCQUE2QixDQUFDOzs7QUFNL0QsTUFBTSxPQUFPLGtCQUFrQjtJQUVUO0lBRHBCLElBQUksQ0FBSztJQUNULFlBQW9CLGFBQStCO1FBQS9CLGtCQUFhLEdBQWIsYUFBYSxDQUFrQjtRQUNqRCxJQUFJLENBQUMsYUFBYSxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsQ0FBQyxHQUFRLEVBQUUsRUFBRTtZQUNyRCxJQUFJLEdBQUcsRUFBRTtnQkFDUCxJQUFJLENBQUMsSUFBSSxHQUFHLEdBQUcsQ0FBQyxhQUFhLENBQUMsQ0FBQTthQUMvQjtRQUNILENBQUMsQ0FBQyxDQUFBO0lBQ0osQ0FBQztJQUVELHFCQUFxQixDQUFDLFVBQVU7UUFDOUIsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLHFCQUFxQixHQUFHLEdBQUcsR0FBRyxVQUFVLENBQUMsQ0FBQztJQUN2RyxDQUFDO0lBQ0QsaUJBQWlCLENBQUMsSUFBSTtRQUNwQixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsaUJBQWlCLEdBQUcsR0FBRyxHQUFHLElBQUksQ0FBQyxDQUFDO0lBQzdGLENBQUM7SUFDRCxTQUFTLENBQUMsU0FBUztRQUNqQixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsU0FBUyxFQUFFLFNBQVMsQ0FBQyxDQUFDO0lBQ3BGLENBQUM7SUFDRCxXQUFXLENBQUMsU0FBUztRQUNuQixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsV0FBVyxFQUFFLFNBQVMsQ0FBQyxDQUFDO0lBQ3RGLENBQUM7SUFDRCxjQUFjLENBQUMsU0FBUztRQUN0QixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsY0FBYyxFQUFFLFNBQVMsQ0FBQyxDQUFDO0lBQ3pGLENBQUM7SUFDRCxhQUFhLENBQUMsU0FBUyxFQUFFLFlBQVk7UUFDbkMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLGFBQWEsR0FBRyxHQUFHLEdBQUcsWUFBWSxFQUFFLFNBQVMsQ0FBQyxDQUFDO1FBQ2pHLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxhQUFhLEdBQUcsR0FBRyxHQUFHLFlBQVksRUFBRSxTQUFTLENBQUMsQ0FBQztJQUM5RyxDQUFDO3dHQTVCVSxrQkFBa0I7NEdBQWxCLGtCQUFrQixjQUZqQixNQUFNOzs0RkFFUCxrQkFBa0I7a0JBSDlCLFVBQVU7bUJBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBBdHRhY2htZW50Q29uZmlnIH0gZnJvbSAnLi4vY29uZmlnL2NvbW1vbi11cmwuY29uZmlnJztcclxuaW1wb3J0IHsgRGF0YVN0b3JlU2VydmljZSB9IGZyb20gJy4vZGF0YS1zdG9yZS5zZXJ2aWNlJztcclxuXHJcbkBJbmplY3RhYmxlKHtcclxuICBwcm92aWRlZEluOiAncm9vdCdcclxufSlcclxuZXhwb3J0IGNsYXNzIEF0dGFjaG1lbnRzU2VydmljZSB7XHJcbiAgaHR0cDphbnk7XHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfc3RvcmVzZXJ2aWNlOiBEYXRhU3RvcmVTZXJ2aWNlKSB7XHJcbiAgICB0aGlzLl9zdG9yZXNlcnZpY2UuY3VycmVudFN0b3JlLnN1YnNjcmliZSgocmVzOiBhbnkpID0+IHtcclxuICAgICAgaWYgKHJlcykge1xyXG4gICAgICAgIHRoaXMuaHR0cCA9IHJlc1snSFRUUFNFUlZJQ0UnXVxyXG4gICAgICB9XHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbiAgZ2V0QXR0YWNobWVudFJlZmVycmFsKHJlZmVycmFsaWQpIHtcclxuICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KEF0dGFjaG1lbnRDb25maWcuRW5kUG9pbnQuQXR0YWNobWVudHMuR2V0QXR0YWNobWVudFJlZmVycmFsICsgJy8nICsgcmVmZXJyYWxpZCk7XHJcbiAgfVxyXG4gIGdldENhdGVnb3J5TG9va3VwKG5hbWUpIHtcclxuICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KEF0dGFjaG1lbnRDb25maWcuRW5kUG9pbnQuQXR0YWNobWVudHMuR2V0Q2F0ZWdvcnlMb29rdXAgKyAnLycgKyBuYW1lKTtcclxuICB9XHJcbiAgdXBsb2FkS2V5KG9ianBhcmFtcykge1xyXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0KEF0dGFjaG1lbnRDb25maWcuRW5kUG9pbnQuQXR0YWNobWVudHMuVXBsb2FkS2V5LCBvYmpwYXJhbXMpO1xyXG4gIH1cclxuICBkb3dubG9hZEtleShvYmpwYXJhbXMpIHtcclxuICAgIHJldHVybiB0aGlzLmh0dHAucG9zdChBdHRhY2htZW50Q29uZmlnLkVuZFBvaW50LkF0dGFjaG1lbnRzLkRvd25sb2FkS2V5LCBvYmpwYXJhbXMpO1xyXG4gIH1cclxuICBwb3N0QXR0YWNobWVudChvYmpwYXJhbXMpIHtcclxuICAgIHJldHVybiB0aGlzLmh0dHAucG9zdChBdHRhY2htZW50Q29uZmlnLkVuZFBvaW50LkF0dGFjaG1lbnRzLlBvc3RBdHRhY2htZW50LCBvYmpwYXJhbXMpO1xyXG4gIH1cclxuICBwdXRBdHRhY2htZW50KG9ianBhcmFtcywgYXR0YWNobWVudElkKSB7XHJcbiAgICBjb25zb2xlLmxvZyhBdHRhY2htZW50Q29uZmlnLkVuZFBvaW50LkF0dGFjaG1lbnRzLlB1dEF0dGFjaG1lbnQgKyAnLycgKyBhdHRhY2htZW50SWQsIG9ianBhcmFtcyk7XHJcbiAgICByZXR1cm4gdGhpcy5odHRwLnBhdGNoKEF0dGFjaG1lbnRDb25maWcuRW5kUG9pbnQuQXR0YWNobWVudHMuUHV0QXR0YWNobWVudCArICcvJyArIGF0dGFjaG1lbnRJZCwgb2JqcGFyYW1zKTtcclxuICB9XHJcbn1cclxuIl19