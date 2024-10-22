import { Component, EventEmitter, Input, Output } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "../../@core/service/platform-data-store.service";
import * as i2 from "../../@core/service/alert.service";
import * as i3 from "../../@core/service/auth.service";
import * as i4 from "../../@core/service/page-builder-add.service";
import * as i5 from "@angular/common";
import * as i6 from "primeng/button";
import * as i7 from "primeng/fileupload";
export class FileUploadBasicComponent {
    _storeservice;
    alertService;
    authService;
    pageBuilderAddService;
    value;
    valueChange = new EventEmitter();
    disabled = false;
    formioEvent = new EventEmitter();
    uploadedFiles;
    formStatus;
    sharedInfo = {};
    pageId;
    responseId;
    uploadedFilesTest = [];
    isShow;
    httpService;
    constructor(_storeservice, alertService, authService, pageBuilderAddService) {
        this._storeservice = _storeservice;
        this.alertService = alertService;
        this.authService = authService;
        this.pageBuilderAddService = pageBuilderAddService;
        this.formStatus = 'FORM_RESPONSE_ATTACHMENTS_';
        this.sharedInfo = this.authService.getSharedMessage();
        this.pageId = this.sharedInfo?.pageId;
        this.responseId = this.sharedInfo?.id;
        this._storeservice.currentStore.subscribe((res) => {
            if (res) {
                this.httpService = res['HTTPSERVICE'];
            }
        });
    }
    ngOnInit() {
        if (this.responseId) {
            this.formStatus = `${this.formStatus}UPDATE`;
        }
        else {
            this.formStatus = `${this.formStatus}CREATE`;
        }
        this.uploadedFiles = [];
        if (this.sharedInfo?.attachmentdetails) {
            this.uploadedFiles = this.sharedInfo?.attachmentdetails;
        }
        if (this.responseId) {
            this.getAllAttachments();
        }
    }
    onUpload(event, upload) {
        let resID = '';
        if (this.responseId) {
            resID = `/${this.responseId}`;
        }
        let data;
        event.files.map(f => {
            data = {
                fileName: `${this.pageId}${resID}/${f.name}`,
                contentType: f.type,
                type: this.formStatus
            };
            this.pageBuilderAddService.getUploadKey(data).subscribe((res) => {
                const url = res.data;
                const uploadDetails = f;
                const type = f.type;
                const fileURL = res.data;
                this.uploadedFiles = [
                    {
                        name: f.name,
                        path: fileURL,
                        attachmenttype: f.type
                    }
                ];
                const fileInfo = {
                    type: this.formStatus,
                    formid: Number(this.pageId),
                    attachmentdetails: this.uploadedFiles
                };
                this.httpService.putUpload(url, uploadDetails, type).subscribe(() => {
                    this.alertService.success('Uploaded Successfully!');
                    this.isShow = true;
                    console.log(this.uploadedFiles);
                    this.value = fileInfo;
                    this.valueChange.emit(fileInfo);
                    this.formioEvent.emit({ eventName: 'customEvent', data: { value: { fileInfo }, type: 'fileUpload' } });
                    upload.clear();
                });
                this.authService.setSharedMessage(fileInfo);
            });
        });
    }
    getAllAttachments() {
        this.pageBuilderAddService.getFormResponseAttachment(this.pageId, this.responseId).subscribe(res => {
            const data = res['data'];
            const fileInfo = {
                type: this.formStatus,
                formid: Number(this.pageId),
                attachmentdetails: data
            };
            this.formioEvent.emit({ eventName: 'customEvent', data: { value: { fileInfo }, type: 'fileUpload' } });
            this.authService.setSharedMessage(fileInfo);
            this.uploadedFiles = data.map(f => {
                return {
                    name: f.name,
                    path: f.path,
                    attachmenttype: f.attachmenttype
                };
            });
        });
    }
    deleteAttachment(e) {
        this.isShow = false;
        const file = e;
        if (file?.id) {
            this.pageBuilderAddService.deleteFormResponseAttachment(file.id).subscribe(() => {
                this.alertService.success('Deleted successfully!');
            });
        }
        else {
            this.uploadedFiles = [];
        }
    }
    viewAttachment(file) {
        console.log(file);
        const fileURL = file.path;
        window.open(fileURL, '_blank');
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: FileUploadBasicComponent, deps: [{ token: i1.PlatformDataStoreService }, { token: i2.AlertService }, { token: i3.AuthService }, { token: i4.PageBuilderAddService }], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: FileUploadBasicComponent, selector: "app-file-upload-basic", inputs: { value: "value", disabled: "disabled" }, outputs: { valueChange: "valueChange", formioEvent: "formioEvent" }, ngImport: i0, template: "<p-fileUpload\r\n  #fileUpload\r\n  mode=\"basic\"\r\n  name=\"demo[]\"\r\n  [customUpload]=\"true\"\r\n  chooseLabel=\"Upload\"\r\n  [maxFileSize]=\"1000000\"\r\n  [auto]=\"true\"\r\n  [disabled]=\"isShow\"\r\n  (uploadHandler)=\"onUpload($event, fileUpload)\">\r\n</p-fileUpload>\r\n\r\n<ng-container *ngIf=\"isShow\">\r\n  <p>{{ uploadedFiles?.name }}</p>\r\n  <p-button (click)=\"deleteAttachment(uploadedFiles)\"><em class=\"pi pi-trash\"></em></p-button>\r\n  <p-button (click)=\"viewAttachment(uploadedFiles)\"><em class=\"fa fa-eye\"></em></p-button>\r\n</ng-container>\r\n", styles: ["li{list-style:none}\n"], dependencies: [{ kind: "directive", type: i5.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "component", type: i6.Button, selector: "p-button", inputs: ["type", "iconPos", "icon", "badge", "label", "disabled", "loading", "loadingIcon", "raised", "rounded", "text", "plain", "severity", "outlined", "link", "size", "style", "styleClass", "badgeClass", "ariaLabel"], outputs: ["onClick", "onFocus", "onBlur"] }, { kind: "component", type: i7.FileUpload, selector: "p-fileUpload", inputs: ["name", "url", "method", "multiple", "accept", "disabled", "auto", "withCredentials", "maxFileSize", "invalidFileSizeMessageSummary", "invalidFileSizeMessageDetail", "invalidFileTypeMessageSummary", "invalidFileTypeMessageDetail", "invalidFileLimitMessageDetail", "invalidFileLimitMessageSummary", "style", "styleClass", "previewWidth", "chooseLabel", "uploadLabel", "cancelLabel", "chooseIcon", "uploadIcon", "cancelIcon", "showUploadButton", "showCancelButton", "mode", "headers", "customUpload", "fileLimit", "uploadStyleClass", "cancelStyleClass", "removeStyleClass", "chooseStyleClass", "files"], outputs: ["onBeforeUpload", "onSend", "onUpload", "onError", "onClear", "onRemove", "onSelect", "onProgress", "uploadHandler", "onImageError"] }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: FileUploadBasicComponent, decorators: [{
            type: Component,
            args: [{ selector: 'app-file-upload-basic', template: "<p-fileUpload\r\n  #fileUpload\r\n  mode=\"basic\"\r\n  name=\"demo[]\"\r\n  [customUpload]=\"true\"\r\n  chooseLabel=\"Upload\"\r\n  [maxFileSize]=\"1000000\"\r\n  [auto]=\"true\"\r\n  [disabled]=\"isShow\"\r\n  (uploadHandler)=\"onUpload($event, fileUpload)\">\r\n</p-fileUpload>\r\n\r\n<ng-container *ngIf=\"isShow\">\r\n  <p>{{ uploadedFiles?.name }}</p>\r\n  <p-button (click)=\"deleteAttachment(uploadedFiles)\"><em class=\"pi pi-trash\"></em></p-button>\r\n  <p-button (click)=\"viewAttachment(uploadedFiles)\"><em class=\"fa fa-eye\"></em></p-button>\r\n</ng-container>\r\n", styles: ["li{list-style:none}\n"] }]
        }], ctorParameters: function () { return [{ type: i1.PlatformDataStoreService }, { type: i2.AlertService }, { type: i3.AuthService }, { type: i4.PageBuilderAddService }]; }, propDecorators: { value: [{
                type: Input
            }], valueChange: [{
                type: Output
            }], disabled: [{
                type: Input
            }], formioEvent: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsZS11cGxvYWQtYmFzaWMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvcGljcy1jb3JlL2R5bmFtaWMvc3JjL2xpYi9waWNzLWR5bmFtaWMvQHNoYXJlZC9maWxlLXVwbG9hZC1iYXNpYy9maWxlLXVwbG9hZC1iYXNpYy5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9waWNzLWNvcmUvZHluYW1pYy9zcmMvbGliL3BpY3MtZHluYW1pYy9Ac2hhcmVkL2ZpbGUtdXBsb2FkLWJhc2ljL2ZpbGUtdXBsb2FkLWJhc2ljLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBVSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7Ozs7OztBQXFCL0UsTUFBTSxPQUFPLHdCQUF3QjtJQWtCekI7SUFDQTtJQUNBO0lBQ0E7SUFuQlYsS0FBSyxDQUFNO0lBRVgsV0FBVyxHQUFHLElBQUksWUFBWSxFQUFPLENBQUM7SUFFdEMsUUFBUSxHQUFHLEtBQUssQ0FBQztJQUVqQixXQUFXLEdBQUcsSUFBSSxZQUFZLEVBQWUsQ0FBQztJQUM5QyxhQUFhLENBQU07SUFDbkIsVUFBVSxDQUFTO0lBQ25CLFVBQVUsR0FBUSxFQUFFLENBQUM7SUFDckIsTUFBTSxDQUFNO0lBQ1osVUFBVSxDQUFNO0lBQ2hCLGlCQUFpQixHQUFRLEVBQUUsQ0FBQztJQUM1QixNQUFNLENBQVU7SUFDaEIsV0FBVyxDQUFNO0lBQ2pCLFlBQ1UsYUFBdUMsRUFDdkMsWUFBMEIsRUFDMUIsV0FBd0IsRUFDeEIscUJBQTRDO1FBSDVDLGtCQUFhLEdBQWIsYUFBYSxDQUEwQjtRQUN2QyxpQkFBWSxHQUFaLFlBQVksQ0FBYztRQUMxQixnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUN4QiwwQkFB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QUF3QjtrQkFMcEMsU0FBUzsrQkFDRSx1QkFBdUI7d01BTWpDLEtBQUs7c0JBREosS0FBSztnQkFHTixXQUFXO3NCQURWLE1BQU07Z0JBR1AsUUFBUTtzQkFEUCxLQUFLO2dCQUdOLFdBQVc7c0JBRFYsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT25Jbml0LCBPdXRwdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgRm9ybWlvQ3VzdG9tQ29tcG9uZW50LCBGb3JtaW9FdmVudCB9IGZyb20gJ0Bmb3JtaW8vYW5ndWxhcic7XHJcbmltcG9ydCB7IFBsYXRmb3JtRGF0YVN0b3JlU2VydmljZSB9IGZyb20gJy4uLy4uL0Bjb3JlL3NlcnZpY2UvcGxhdGZvcm0tZGF0YS1zdG9yZS5zZXJ2aWNlJztcclxuaW1wb3J0IHsgQWxlcnRTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vQGNvcmUvc2VydmljZS9hbGVydC5zZXJ2aWNlJztcclxuaW1wb3J0IHsgQXV0aFNlcnZpY2UgfSBmcm9tICcuLi8uLi9AY29yZS9zZXJ2aWNlL2F1dGguc2VydmljZSc7XHJcbmltcG9ydCB7IFBhZ2VCdWlsZGVyQWRkU2VydmljZSB9IGZyb20gJy4uLy4uL0Bjb3JlL3NlcnZpY2UvcGFnZS1idWlsZGVyLWFkZC5zZXJ2aWNlJztcclxuZXhwb3J0IGludGVyZmFjZSBGaWxlVXBsb2FkIHtcclxuICBmaWxlTmFtZTogc3RyaW5nO1xyXG4gIGNvbnRlbnRUeXBlOiBzdHJpbmc7XHJcbiAgdHlwZTogc3RyaW5nO1xyXG59XHJcbmV4cG9ydCBpbnRlcmZhY2UgRmlsZVVwbG9hZEluZm8ge1xyXG4gIHR5cGU6IHN0cmluZztcclxuICBmb3JtaWQ6IG51bWJlcjtcclxuICBhdHRhY2htZW50ZGV0YWlsczogYW55O1xyXG59XHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnYXBwLWZpbGUtdXBsb2FkLWJhc2ljJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vZmlsZS11cGxvYWQtYmFzaWMuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL2ZpbGUtdXBsb2FkLWJhc2ljLmNvbXBvbmVudC5zY3NzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIEZpbGVVcGxvYWRCYXNpY0NvbXBvbmVudCBpbXBsZW1lbnRzIEZvcm1pb0N1c3RvbUNvbXBvbmVudDxhbnk+LCBPbkluaXQge1xyXG4gIEBJbnB1dCgpXHJcbiAgdmFsdWU6IGFueTtcclxuICBAT3V0cHV0KClcclxuICB2YWx1ZUNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xyXG4gIEBJbnB1dCgpXHJcbiAgZGlzYWJsZWQgPSBmYWxzZTtcclxuICBAT3V0cHV0KClcclxuICBmb3JtaW9FdmVudCA9IG5ldyBFdmVudEVtaXR0ZXI8Rm9ybWlvRXZlbnQ+KCk7XHJcbiAgdXBsb2FkZWRGaWxlczogYW55O1xyXG4gIGZvcm1TdGF0dXM6IHN0cmluZztcclxuICBzaGFyZWRJbmZvOiBhbnkgPSB7fTtcclxuICBwYWdlSWQ6IGFueTtcclxuICByZXNwb25zZUlkOiBhbnk7XHJcbiAgdXBsb2FkZWRGaWxlc1Rlc3Q6IGFueSA9IFtdO1xyXG4gIGlzU2hvdzogYm9vbGVhbjtcclxuICBodHRwU2VydmljZTogYW55O1xyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJpdmF0ZSBfc3RvcmVzZXJ2aWNlOiBQbGF0Zm9ybURhdGFTdG9yZVNlcnZpY2UsXHJcbiAgICBwcml2YXRlIGFsZXJ0U2VydmljZTogQWxlcnRTZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSBhdXRoU2VydmljZTogQXV0aFNlcnZpY2UsXHJcbiAgICBwcml2YXRlIHBhZ2VCdWlsZGVyQWRkU2VydmljZTogUGFnZUJ1aWxkZXJBZGRTZXJ2aWNlXHJcbiAgKSB7XHJcbiAgICB0aGlzLmZvcm1TdGF0dXMgPSAnRk9STV9SRVNQT05TRV9BVFRBQ0hNRU5UU18nO1xyXG4gICAgdGhpcy5zaGFyZWRJbmZvID0gdGhpcy5hdXRoU2VydmljZS5nZXRTaGFyZWRNZXNzYWdlKCk7XHJcbiAgICB0aGlzLnBhZ2VJZCA9IHRoaXMuc2hhcmVkSW5mbz8ucGFnZUlkO1xyXG4gICAgdGhpcy5yZXNwb25zZUlkID0gdGhpcy5zaGFyZWRJbmZvPy5pZDtcclxuICAgIHRoaXMuX3N0b3Jlc2VydmljZS5jdXJyZW50U3RvcmUuc3Vic2NyaWJlKChyZXM6IGFueSkgPT4ge1xyXG4gICAgICBpZiAocmVzKSB7XHJcbiAgICAgICAgdGhpcy5odHRwU2VydmljZSA9IHJlc1snSFRUUFNFUlZJQ0UnXVxyXG4gICAgICB9XHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICBpZiAodGhpcy5yZXNwb25zZUlkKSB7XHJcbiAgICAgIHRoaXMuZm9ybVN0YXR1cyA9IGAke3RoaXMuZm9ybVN0YXR1c31VUERBVEVgO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5mb3JtU3RhdHVzID0gYCR7dGhpcy5mb3JtU3RhdHVzfUNSRUFURWA7XHJcbiAgICB9XHJcbiAgICB0aGlzLnVwbG9hZGVkRmlsZXMgPSBbXTtcclxuICAgIGlmICh0aGlzLnNoYXJlZEluZm8/LmF0dGFjaG1lbnRkZXRhaWxzKSB7XHJcbiAgICAgIHRoaXMudXBsb2FkZWRGaWxlcyA9IHRoaXMuc2hhcmVkSW5mbz8uYXR0YWNobWVudGRldGFpbHM7XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5yZXNwb25zZUlkKSB7XHJcbiAgICAgIHRoaXMuZ2V0QWxsQXR0YWNobWVudHMoKTtcclxuICAgIH1cclxuICB9XHJcbiAgb25VcGxvYWQoZXZlbnQsIHVwbG9hZCkge1xyXG4gICAgbGV0IHJlc0lEID0gJyc7XHJcbiAgICBpZiAodGhpcy5yZXNwb25zZUlkKSB7XHJcbiAgICAgIHJlc0lEID0gYC8ke3RoaXMucmVzcG9uc2VJZH1gO1xyXG4gICAgfVxyXG4gICAgbGV0IGRhdGE6IEZpbGVVcGxvYWQ7XHJcbiAgICBldmVudC5maWxlcy5tYXAoZiA9PiB7XHJcbiAgICAgIGRhdGEgPSB7XHJcbiAgICAgICAgZmlsZU5hbWU6IGAke3RoaXMucGFnZUlkfSR7cmVzSUR9LyR7Zi5uYW1lfWAsXHJcbiAgICAgICAgY29udGVudFR5cGU6IGYudHlwZSxcclxuICAgICAgICB0eXBlOiB0aGlzLmZvcm1TdGF0dXNcclxuICAgICAgfTtcclxuICAgICAgdGhpcy5wYWdlQnVpbGRlckFkZFNlcnZpY2UuZ2V0VXBsb2FkS2V5KGRhdGEpLnN1YnNjcmliZSgocmVzOiBhbnkpID0+IHtcclxuICAgICAgICBjb25zdCB1cmwgPSByZXMuZGF0YTtcclxuICAgICAgICBjb25zdCB1cGxvYWREZXRhaWxzID0gZjtcclxuICAgICAgICBjb25zdCB0eXBlID0gZi50eXBlO1xyXG4gICAgICAgIGNvbnN0IGZpbGVVUkwgPSByZXMuZGF0YTtcclxuICAgICAgICB0aGlzLnVwbG9hZGVkRmlsZXMgPSBbXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIG5hbWU6IGYubmFtZSxcclxuICAgICAgICAgICAgcGF0aDogZmlsZVVSTCxcclxuICAgICAgICAgICAgYXR0YWNobWVudHR5cGU6IGYudHlwZVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIF07XHJcbiAgICAgICAgY29uc3QgZmlsZUluZm86IEZpbGVVcGxvYWRJbmZvID0ge1xyXG4gICAgICAgICAgdHlwZTogdGhpcy5mb3JtU3RhdHVzLFxyXG4gICAgICAgICAgZm9ybWlkOiBOdW1iZXIodGhpcy5wYWdlSWQpLFxyXG4gICAgICAgICAgYXR0YWNobWVudGRldGFpbHM6IHRoaXMudXBsb2FkZWRGaWxlc1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5odHRwU2VydmljZS5wdXRVcGxvYWQodXJsLCB1cGxvYWREZXRhaWxzLCB0eXBlKS5zdWJzY3JpYmUoKCkgPT4ge1xyXG4gICAgICAgICAgdGhpcy5hbGVydFNlcnZpY2Uuc3VjY2VzcygnVXBsb2FkZWQgU3VjY2Vzc2Z1bGx5IScpO1xyXG4gICAgICAgICAgdGhpcy5pc1Nob3cgPSB0cnVlO1xyXG4gICAgICAgICAgY29uc29sZS5sb2codGhpcy51cGxvYWRlZEZpbGVzKTtcclxuICAgICAgICAgIHRoaXMudmFsdWUgPSBmaWxlSW5mbztcclxuICAgICAgICAgIHRoaXMudmFsdWVDaGFuZ2UuZW1pdChmaWxlSW5mbyk7XHJcbiAgICAgICAgICB0aGlzLmZvcm1pb0V2ZW50LmVtaXQoeyBldmVudE5hbWU6ICdjdXN0b21FdmVudCcsIGRhdGE6IHsgdmFsdWU6IHsgZmlsZUluZm8gfSwgdHlwZTogJ2ZpbGVVcGxvYWQnIH0gfSk7XHJcbiAgICAgICAgICB1cGxvYWQuY2xlYXIoKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLmF1dGhTZXJ2aWNlLnNldFNoYXJlZE1lc3NhZ2UoZmlsZUluZm8pO1xyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgZ2V0QWxsQXR0YWNobWVudHMoKSB7XHJcbiAgICB0aGlzLnBhZ2VCdWlsZGVyQWRkU2VydmljZS5nZXRGb3JtUmVzcG9uc2VBdHRhY2htZW50KHRoaXMucGFnZUlkLCB0aGlzLnJlc3BvbnNlSWQpLnN1YnNjcmliZShyZXMgPT4ge1xyXG4gICAgICBjb25zdCBkYXRhID0gcmVzWydkYXRhJ107XHJcbiAgICAgIGNvbnN0IGZpbGVJbmZvOiBGaWxlVXBsb2FkSW5mbyA9IHtcclxuICAgICAgICB0eXBlOiB0aGlzLmZvcm1TdGF0dXMsXHJcbiAgICAgICAgZm9ybWlkOiBOdW1iZXIodGhpcy5wYWdlSWQpLFxyXG4gICAgICAgIGF0dGFjaG1lbnRkZXRhaWxzOiBkYXRhXHJcbiAgICAgIH07XHJcbiAgICAgIHRoaXMuZm9ybWlvRXZlbnQuZW1pdCh7IGV2ZW50TmFtZTogJ2N1c3RvbUV2ZW50JywgZGF0YTogeyB2YWx1ZTogeyBmaWxlSW5mbyB9LCB0eXBlOiAnZmlsZVVwbG9hZCcgfSB9KTtcclxuICAgICAgdGhpcy5hdXRoU2VydmljZS5zZXRTaGFyZWRNZXNzYWdlKGZpbGVJbmZvKTtcclxuICAgICAgdGhpcy51cGxvYWRlZEZpbGVzID0gZGF0YS5tYXAoZiA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgIG5hbWU6IGYubmFtZSxcclxuICAgICAgICAgIHBhdGg6IGYucGF0aCxcclxuICAgICAgICAgIGF0dGFjaG1lbnR0eXBlOiBmLmF0dGFjaG1lbnR0eXBlXHJcbiAgICAgICAgfTtcclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGRlbGV0ZUF0dGFjaG1lbnQoZSkge1xyXG4gICAgdGhpcy5pc1Nob3cgPSBmYWxzZTtcclxuICAgIGNvbnN0IGZpbGUgPSBlO1xyXG4gICAgaWYgKGZpbGU/LmlkKSB7XHJcbiAgICAgIHRoaXMucGFnZUJ1aWxkZXJBZGRTZXJ2aWNlLmRlbGV0ZUZvcm1SZXNwb25zZUF0dGFjaG1lbnQoZmlsZS5pZCkuc3Vic2NyaWJlKCgpID0+IHtcclxuICAgICAgICB0aGlzLmFsZXJ0U2VydmljZS5zdWNjZXNzKCdEZWxldGVkIHN1Y2Nlc3NmdWxseSEnKTtcclxuICAgICAgfSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLnVwbG9hZGVkRmlsZXMgPSBbXTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHZpZXdBdHRhY2htZW50KGZpbGUpIHtcclxuICAgIGNvbnNvbGUubG9nKGZpbGUpO1xyXG4gICAgY29uc3QgZmlsZVVSTCA9IGZpbGUucGF0aDtcclxuICAgIHdpbmRvdy5vcGVuKGZpbGVVUkwsICdfYmxhbmsnKTtcclxuICB9XHJcbn1cclxuIiwiPHAtZmlsZVVwbG9hZFxyXG4gICNmaWxlVXBsb2FkXHJcbiAgbW9kZT1cImJhc2ljXCJcclxuICBuYW1lPVwiZGVtb1tdXCJcclxuICBbY3VzdG9tVXBsb2FkXT1cInRydWVcIlxyXG4gIGNob29zZUxhYmVsPVwiVXBsb2FkXCJcclxuICBbbWF4RmlsZVNpemVdPVwiMTAwMDAwMFwiXHJcbiAgW2F1dG9dPVwidHJ1ZVwiXHJcbiAgW2Rpc2FibGVkXT1cImlzU2hvd1wiXHJcbiAgKHVwbG9hZEhhbmRsZXIpPVwib25VcGxvYWQoJGV2ZW50LCBmaWxlVXBsb2FkKVwiPlxyXG48L3AtZmlsZVVwbG9hZD5cclxuXHJcbjxuZy1jb250YWluZXIgKm5nSWY9XCJpc1Nob3dcIj5cclxuICA8cD57eyB1cGxvYWRlZEZpbGVzPy5uYW1lIH19PC9wPlxyXG4gIDxwLWJ1dHRvbiAoY2xpY2spPVwiZGVsZXRlQXR0YWNobWVudCh1cGxvYWRlZEZpbGVzKVwiPjxlbSBjbGFzcz1cInBpIHBpLXRyYXNoXCI+PC9lbT48L3AtYnV0dG9uPlxyXG4gIDxwLWJ1dHRvbiAoY2xpY2spPVwidmlld0F0dGFjaG1lbnQodXBsb2FkZWRGaWxlcylcIj48ZW0gY2xhc3M9XCJmYSBmYS1leWVcIj48L2VtPjwvcC1idXR0b24+XHJcbjwvbmctY29udGFpbmVyPlxyXG4iXX0=