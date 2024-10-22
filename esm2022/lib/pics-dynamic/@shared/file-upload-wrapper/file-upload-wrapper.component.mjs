import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ConfirmationService } from 'primeng/api';
import * as i0 from "@angular/core";
import * as i1 from "../../@core/service/platform-data-store.service";
import * as i2 from "../../@core/service/alert.service";
import * as i3 from "../../@core/service/auth.service";
import * as i4 from "../../@core/service/page-builder-add.service";
import * as i5 from "primeng/api";
import * as i6 from "../../@core/service/attachments.service";
import * as i7 from "@angular/common";
import * as i8 from "@angular/forms";
import * as i9 from "primeng/dropdown";
import * as i10 from "primeng/card";
import * as i11 from "primeng/confirmdialog";
import * as i12 from "primeng/fileupload";
export class FileUploadWrapperComponent {
    _storeservice;
    alertService;
    authService;
    pageBuilderAddService;
    confirmationService;
    attachmentsService;
    value;
    valueChange = new EventEmitter();
    disabled = false;
    formioEvent = new EventEmitter();
    uploadedFiles = [];
    formStatus;
    sharedInfo = {};
    pageId;
    responseId;
    uploadedFilesTest = [];
    tableColumns;
    updateGrid;
    categoryList = [];
    subCategoryList = [];
    category;
    subCategory;
    lookupList = [];
    categoryid;
    subcategoryid;
    httpService;
    constructor(_storeservice, alertService, authService, pageBuilderAddService, confirmationService, attachmentsService) {
        this._storeservice = _storeservice;
        this.alertService = alertService;
        this.authService = authService;
        this.pageBuilderAddService = pageBuilderAddService;
        this.confirmationService = confirmationService;
        this.attachmentsService = attachmentsService;
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
        this.setTableColumns();
        this.getCategory();
        if (this.responseId) {
            this.formStatus = `${this.formStatus}UPDATE`;
        }
        else {
            this.formStatus = `${this.formStatus}CREATE`;
        }
        this.uploadedFiles = [];
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
                const fileURL = res.data.split('?')[0];
                this.uploadedFiles.push({
                    name: f.name,
                    path: fileURL,
                    attachmenttype: f.type,
                    category: this.categoryid[0].id,
                    subcategory: this.subcategoryid[0].id,
                    categoryName: this.category,
                    subcategoryName: this.subCategory
                });
                const fileInfo = {
                    type: this.formStatus,
                    formid: Number(this.pageId),
                    attachmentdetails: this.uploadedFiles
                };
                this.httpService.putUpload(url, uploadDetails, type).subscribe(() => {
                    this.alertService.success('Uploaded Successfully!');
                    this.value = fileInfo;
                    this.valueChange.emit(fileInfo);
                    this.formioEvent.emit({ eventName: 'customEvent', data: { value: { fileInfo }, type: 'fileUpload' } });
                    this.setTableColumns();
                    upload.clear();
                    this.subCategory = '';
                    this.category = '';
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
            this.authService.setSharedMessage(fileInfo);
            this.uploadedFiles = data.map(f => {
                return {
                    id: f.id,
                    name: f.name,
                    path: f.path,
                    categoryName: f.categoryDetails.key,
                    subcategoryName: f.subcategoryDetails.key,
                    attachmenttype: f.attachmenttype,
                    category: f.category,
                    subcategory: f.subcategory
                };
            });
        });
    }
    deleteAttachment(e) {
        const file = e?.data;
        if (file?.id) {
            this.pageBuilderAddService.deleteFormResponseAttachment(file.id).subscribe(() => {
                this.alertService.success('Deleted successfully!');
                this.getAllAttachments();
            });
        }
        else {
            this.uploadedFiles.forEach((f, i) => {
                if (f.path === file.path) {
                    this.uploadedFiles.splice(i, 1);
                    this.setTableColumns();
                }
            });
        }
    }
    downloadAttachment(event) {
        const path = event.data.path.split('/');
        const path1 = path.pop();
        const path2 = path.pop();
        const path3 = path.pop();
        const path4 = path.pop();
        const data = {
            fileName: `${path4}/${path3}/${path2}/${path1}`
        };
        this.pageBuilderAddService.downloadFormResponseAttachment(data).subscribe((res) => {
            if (res && res.status == 'success') {
                window.open(res.data, '_blank');
            }
        });
    }
    confirm(event) {
        this.confirmationService.confirm({
            message: 'Are you sure that you want to perform this action?',
            accept: () => {
                this.deleteAttachment(event);
            }
        });
    }
    setTableColumns() {
        this.tableColumns = [
            // {
            //   columnDef: 'id',
            //   header: 'Id',
            //   cell: (element: any) => `${element.id}`,
            //   dateFormat: false,
            //   icon: false,
            //   filter: false,
            //   link: false
            // },
            {
                columnDef: 'name',
                header: 'File Name',
                cell: (element) => console.log(element, 'elementssss'),
                dateFormat: false,
                icon: false,
                filter: false,
                link: false
            },
            {
                columnDef: 'categoryName',
                header: 'Category',
                dateFormat: false,
                icon: false,
                filter: false,
                link: false
            },
            {
                columnDef: 'subcategoryName',
                header: 'Sub Category',
                dateFormat: false,
                icon: false,
                filter: false,
                link: false
            },
            {
                columnDef: 'attachmenttype',
                header: 'Type',
                cell: (element) => `${element.type}`,
                dateFormat: false,
                icon: false,
                filter: false,
                link: false
            }
        ];
        this.updateGrid = {
            edit: false,
            view: false,
            lock: false,
            duplicate: false,
            delete: false,
            externalLink: false,
            showDownload: true,
            showDelete: true,
            isNewlyUploaded: this.responseId ? false : true
        };
    }
    getCategory() {
        const categoryname = 'DOCUMENT_LIST';
        this.attachmentsService.getCategoryLookup(categoryname).subscribe((res) => {
            this.lookupList = res.data;
            this.lookupList.map(z => {
                if (!z.parentid) {
                    this.categoryList.push(z);
                }
            });
        });
    }
    getSubCategory() {
        this.subcategoryid = this.subCategoryList.filter(e => e.lookupvalue === this.subCategory);
    }
    getCatogoryItem() {
        const data = this.lookupList.filter(x => x.lookupvalue === this.category);
        this.categoryid = data;
        this.subCategoryList = this.lookupList.filter(y => y.parentid === data[0].id);
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: FileUploadWrapperComponent, deps: [{ token: i1.PlatformDataStoreService }, { token: i2.AlertService }, { token: i3.AuthService }, { token: i4.PageBuilderAddService }, { token: i5.ConfirmationService }, { token: i6.AttachmentsService }], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: FileUploadWrapperComponent, selector: "app-file-upload-wrapper", inputs: { value: "value", disabled: "disabled" }, outputs: { valueChange: "valueChange", formioEvent: "formioEvent" }, providers: [ConfirmationService], ngImport: i0, template: "<p-confirmDialog header=\"Confirmation\" icon=\"pi pi-exclamation-triangle\"></p-confirmDialog>\r\n<p-fileUpload\r\n  #fileUpload\r\n  name=\"demo[]\"\r\n  [customUpload]=\"true\"\r\n  (uploadHandler)=\"onUpload($event, fileUpload)\"\r\n  [auto]=\"true\"\r\n  maxFileSize=\"1000000\"\r\n  multiple=\"multiple\"\r\n  [disabled]=\"!subCategory\">\r\n  <ng-template pTemplate=\"toolbar\">\r\n    <span class=\"d-flex fileUpload-category\">\r\n      <p-dropdown\r\n        [options]=\"categoryList\"\r\n        placeholder=\"Select Category\"\r\n        [(ngModel)]=\"category\"\r\n        optionLabel=\"lookupkey\"\r\n        optionValue=\"lookupvalue\"\r\n        (onChange)=\"getCatogoryItem()\"\r\n        styleClass=\"mr-2\">\r\n      </p-dropdown>\r\n      <p-dropdown\r\n        [options]=\"subCategoryList\"\r\n        placeholder=\"Select Subcategory\"\r\n        [(ngModel)]=\"subCategory\"\r\n        optionLabel=\"lookupkey\"\r\n        (onChange)=\"getSubCategory()\"\r\n        optionValue=\"lookupvalue\"\r\n        styleClass=\"mr-2\">\r\n      </p-dropdown>\r\n    </span>\r\n  </ng-template>\r\n  <ng-template pTemplate=\"content\">\r\n    <p-card styleClass=\"rbac-card gridview w-100\" *ngIf=\"uploadedFiles.length\">\r\n      <app-grid-list\r\n        [dataList]=\"uploadedFiles\"\r\n        [updateGrid]=\"updateGrid\"\r\n        [columns]=\"tableColumns\"\r\n        (downloadFormResponseFiles)=\"downloadAttachment($event)\"\r\n        (deleteFormResponseFiles)=\"confirm($event)\">\r\n      </app-grid-list>\r\n    </p-card>\r\n  </ng-template>\r\n</p-fileUpload>\r\n", styles: [":host ::ng-deep .p-fileupload{font-size:12px!important}:host ::ng-deep .p-fileupload .p-fileupload-choose{padding:5px 10px;font-size:12px!important}:host ::ng-deep .p-fileupload .p-fileupload-choose .pi-plus{font-size:12px!important}:host ::ng-deep .p-fileupload .p-fileupload-choose .pTemplate{padding:5px 10px}:host ::ng-deep .p-fileupload .p-fileupload-buttonbar{display:flex;flex-direction:row-reverse;justify-content:flex-start}:host ::ng-deep .fileUpload-category .p-dropdown{max-width:180px}:host ::ng-deep .fileUpload-category .p-dropdown .p-dropdown-empty-message{font-size:var(--base-font-size)}:host ::ng-deep .fileUpload-category .p-fileupload-buttonbar{display:flex;flex-direction:row-reverse;justify-content:flex-start}\n"], dependencies: [{ kind: "directive", type: i7.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i8.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i8.NgModel, selector: "[ngModel]:not([formControlName]):not([formControl])", inputs: ["name", "disabled", "ngModel", "ngModelOptions"], outputs: ["ngModelChange"], exportAs: ["ngModel"] }, { kind: "directive", type: i5.PrimeTemplate, selector: "[pTemplate]", inputs: ["type", "pTemplate"] }, { kind: "component", type: i9.Dropdown, selector: "p-dropdown", inputs: ["id", "scrollHeight", "filter", "name", "style", "panelStyle", "styleClass", "panelStyleClass", "readonly", "required", "editable", "appendTo", "tabindex", "placeholder", "filterPlaceholder", "filterLocale", "inputId", "dataKey", "filterBy", "filterFields", "autofocus", "resetFilterOnHide", "dropdownIcon", "optionLabel", "optionValue", "optionDisabled", "optionGroupLabel", "optionGroupChildren", "autoDisplayFirst", "group", "showClear", "emptyFilterMessage", "emptyMessage", "lazy", "virtualScroll", "virtualScrollItemSize", "virtualScrollOptions", "overlayOptions", "ariaFilterLabel", "ariaLabel", "ariaLabelledBy", "filterMatchMode", "maxlength", "tooltip", "tooltipPosition", "tooltipPositionStyle", "tooltipStyleClass", "focusOnHover", "selectOnFocus", "autoOptionFocus", "autofocusFilter", "disabled", "itemSize", "autoZIndex", "baseZIndex", "showTransitionOptions", "hideTransitionOptions", "filterValue", "options"], outputs: ["onChange", "onFilter", "onFocus", "onBlur", "onClick", "onShow", "onHide", "onClear", "onLazyLoad"] }, { kind: "component", type: i10.Card, selector: "p-card", inputs: ["header", "subheader", "style", "styleClass"] }, { kind: "component", type: i11.ConfirmDialog, selector: "p-confirmDialog", inputs: ["header", "icon", "message", "style", "styleClass", "maskStyleClass", "acceptIcon", "acceptLabel", "closeAriaLabel", "acceptAriaLabel", "acceptVisible", "rejectIcon", "rejectLabel", "rejectAriaLabel", "rejectVisible", "acceptButtonStyleClass", "rejectButtonStyleClass", "closeOnEscape", "dismissableMask", "blockScroll", "rtl", "closable", "appendTo", "key", "autoZIndex", "baseZIndex", "transitionOptions", "focusTrap", "defaultFocus", "breakpoints", "visible", "position"], outputs: ["onHide"] }, { kind: "component", type: i12.FileUpload, selector: "p-fileUpload", inputs: ["name", "url", "method", "multiple", "accept", "disabled", "auto", "withCredentials", "maxFileSize", "invalidFileSizeMessageSummary", "invalidFileSizeMessageDetail", "invalidFileTypeMessageSummary", "invalidFileTypeMessageDetail", "invalidFileLimitMessageDetail", "invalidFileLimitMessageSummary", "style", "styleClass", "previewWidth", "chooseLabel", "uploadLabel", "cancelLabel", "chooseIcon", "uploadIcon", "cancelIcon", "showUploadButton", "showCancelButton", "mode", "headers", "customUpload", "fileLimit", "uploadStyleClass", "cancelStyleClass", "removeStyleClass", "chooseStyleClass", "files"], outputs: ["onBeforeUpload", "onSend", "onUpload", "onError", "onClear", "onRemove", "onSelect", "onProgress", "uploadHandler", "onImageError"] }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: FileUploadWrapperComponent, decorators: [{
            type: Component,
            args: [{ selector: 'app-file-upload-wrapper', providers: [ConfirmationService], template: "<p-confirmDialog header=\"Confirmation\" icon=\"pi pi-exclamation-triangle\"></p-confirmDialog>\r\n<p-fileUpload\r\n  #fileUpload\r\n  name=\"demo[]\"\r\n  [customUpload]=\"true\"\r\n  (uploadHandler)=\"onUpload($event, fileUpload)\"\r\n  [auto]=\"true\"\r\n  maxFileSize=\"1000000\"\r\n  multiple=\"multiple\"\r\n  [disabled]=\"!subCategory\">\r\n  <ng-template pTemplate=\"toolbar\">\r\n    <span class=\"d-flex fileUpload-category\">\r\n      <p-dropdown\r\n        [options]=\"categoryList\"\r\n        placeholder=\"Select Category\"\r\n        [(ngModel)]=\"category\"\r\n        optionLabel=\"lookupkey\"\r\n        optionValue=\"lookupvalue\"\r\n        (onChange)=\"getCatogoryItem()\"\r\n        styleClass=\"mr-2\">\r\n      </p-dropdown>\r\n      <p-dropdown\r\n        [options]=\"subCategoryList\"\r\n        placeholder=\"Select Subcategory\"\r\n        [(ngModel)]=\"subCategory\"\r\n        optionLabel=\"lookupkey\"\r\n        (onChange)=\"getSubCategory()\"\r\n        optionValue=\"lookupvalue\"\r\n        styleClass=\"mr-2\">\r\n      </p-dropdown>\r\n    </span>\r\n  </ng-template>\r\n  <ng-template pTemplate=\"content\">\r\n    <p-card styleClass=\"rbac-card gridview w-100\" *ngIf=\"uploadedFiles.length\">\r\n      <app-grid-list\r\n        [dataList]=\"uploadedFiles\"\r\n        [updateGrid]=\"updateGrid\"\r\n        [columns]=\"tableColumns\"\r\n        (downloadFormResponseFiles)=\"downloadAttachment($event)\"\r\n        (deleteFormResponseFiles)=\"confirm($event)\">\r\n      </app-grid-list>\r\n    </p-card>\r\n  </ng-template>\r\n</p-fileUpload>\r\n", styles: [":host ::ng-deep .p-fileupload{font-size:12px!important}:host ::ng-deep .p-fileupload .p-fileupload-choose{padding:5px 10px;font-size:12px!important}:host ::ng-deep .p-fileupload .p-fileupload-choose .pi-plus{font-size:12px!important}:host ::ng-deep .p-fileupload .p-fileupload-choose .pTemplate{padding:5px 10px}:host ::ng-deep .p-fileupload .p-fileupload-buttonbar{display:flex;flex-direction:row-reverse;justify-content:flex-start}:host ::ng-deep .fileUpload-category .p-dropdown{max-width:180px}:host ::ng-deep .fileUpload-category .p-dropdown .p-dropdown-empty-message{font-size:var(--base-font-size)}:host ::ng-deep .fileUpload-category .p-fileupload-buttonbar{display:flex;flex-direction:row-reverse;justify-content:flex-start}\n"] }]
        }], ctorParameters: function () { return [{ type: i1.PlatformDataStoreService }, { type: i2.AlertService }, { type: i3.AuthService }, { type: i4.PageBuilderAddService }, { type: i5.ConfirmationService }, { type: i6.AttachmentsService }]; }, propDecorators: { value: [{
                type: Input
            }], valueChange: [{
                type: Output
            }], disabled: [{
                type: Input
            }], formioEvent: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsZS11cGxvYWQtd3JhcHBlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9waWNzLWNvcmUvZHluYW1pYy9zcmMvbGliL3BpY3MtZHluYW1pYy9Ac2hhcmVkL2ZpbGUtdXBsb2FkLXdyYXBwZXIvZmlsZS11cGxvYWQtd3JhcHBlci5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9waWNzLWNvcmUvZHluYW1pYy9zcmMvbGliL3BpY3MtZHluYW1pYy9Ac2hhcmVkL2ZpbGUtdXBsb2FkLXdyYXBwZXIvZmlsZS11cGxvYWQtd3JhcHBlci5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQVUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRS9FLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGFBQWEsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7QUF3QmxELE1BQU0sT0FBTywwQkFBMEI7SUEwQjNCO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQTdCVixLQUFLLENBQU07SUFFWCxXQUFXLEdBQUcsSUFBSSxZQUFZLEVBQU8sQ0FBQztJQUV0QyxRQUFRLEdBQUcsS0FBSyxDQUFDO0lBRWpCLFdBQVcsR0FBRyxJQUFJLFlBQVksRUFBZSxDQUFDO0lBQzlDLGFBQWEsR0FBVSxFQUFFLENBQUM7SUFDMUIsVUFBVSxDQUFTO0lBQ25CLFVBQVUsR0FBUSxFQUFFLENBQUM7SUFDckIsTUFBTSxDQUFNO0lBQ1osVUFBVSxDQUFNO0lBQ2hCLGlCQUFpQixHQUFRLEVBQUUsQ0FBQztJQUM1QixZQUFZLENBQVE7SUFDcEIsVUFBVSxDQUFNO0lBQ2hCLFlBQVksR0FBUSxFQUFFLENBQUM7SUFDdkIsZUFBZSxHQUFRLEVBQUUsQ0FBQztJQUMxQixRQUFRLENBQVM7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QUMsQ0FBQyxFQUFFO2dCQUN0QixJQUFJLENBQUMsQ0FBQyxDQUFDLFFBQVEsRUFBRTtvQkFDZixJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztpQkFDM0I7WUFDSCxDQUFDLENBQUMsQ0FBQztRQUNMLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUNELGNBQWM7UUFDWixJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLFdBQVcsS0FBSyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDNUYsQ0FBQztJQUNELGVBQWU7UUFDYixNQUFNLElBQUksR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxXQUFXLEtBQUssSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQzFFLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsUUFBUSxLQUFLLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUNoRixDQUFDO3dHQS9PVSwwQkFBMEI7NEZBQTFCLDBCQUEwQix5S0FGMUIsQ0FBQyxtQkFBbUIsQ0FBQywwQkN4QmxDLHNqREE0Q0E7OzRGRGxCYSwwQkFBMEI7a0JBTnRDLFNBQVM7K0JBQ0UseUJBQXlCLGFBR3hCLENBQUMsbUJBQW1CLENBQUM7MlFBSWhDLEtBQUs7c0JBREosS0FBSztnQkFHTixXQUFXO3NCQURWLE1BQU07Z0JBR1AsUUFBUTtzQkFEUCxLQUFLO2dCQUdOLFdBQVc7c0JBRFYsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT25Jbml0LCBPdXRwdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgRm9ybWlvQ3VzdG9tQ29tcG9uZW50LCBGb3JtaW9FdmVudCB9IGZyb20gJ0Bmb3JtaW8vYW5ndWxhcic7XHJcbmltcG9ydCB7IENvbmZpcm1hdGlvblNlcnZpY2UgfSBmcm9tICdwcmltZW5nL2FwaSc7XHJcbmltcG9ydCB7ICBQbGF0Zm9ybURhdGFTdG9yZVNlcnZpY2UgfSBmcm9tICcuLi8uLi9AY29yZS9zZXJ2aWNlL3BsYXRmb3JtLWRhdGEtc3RvcmUuc2VydmljZSc7XHJcbmltcG9ydCB7IEFsZXJ0U2VydmljZSB9IGZyb20gJy4uLy4uL0Bjb3JlL3NlcnZpY2UvYWxlcnQuc2VydmljZSc7XHJcbmltcG9ydCB7IEF1dGhTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vQGNvcmUvc2VydmljZS9hdXRoLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBQYWdlQnVpbGRlckFkZFNlcnZpY2UgfSBmcm9tICcuLi8uLi9AY29yZS9zZXJ2aWNlL3BhZ2UtYnVpbGRlci1hZGQuc2VydmljZSc7XHJcbmltcG9ydCB7IEF0dGFjaG1lbnRzU2VydmljZSB9IGZyb20gJy4uLy4uL0Bjb3JlL3NlcnZpY2UvYXR0YWNobWVudHMuc2VydmljZSc7XHJcblxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBGaWxlVXBsb2FkIHtcclxuICBmaWxlTmFtZTogc3RyaW5nO1xyXG4gIGNvbnRlbnRUeXBlOiBzdHJpbmc7XHJcbiAgdHlwZTogc3RyaW5nO1xyXG59XHJcbmV4cG9ydCBpbnRlcmZhY2UgRmlsZVVwbG9hZEluZm8ge1xyXG4gIHR5cGU6IHN0cmluZztcclxuICBmb3JtaWQ6IG51bWJlcjtcclxuICBhdHRhY2htZW50ZGV0YWlsczogYW55W107XHJcbn1cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdhcHAtZmlsZS11cGxvYWQtd3JhcHBlcicsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2ZpbGUtdXBsb2FkLXdyYXBwZXIuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL2ZpbGUtdXBsb2FkLXdyYXBwZXIuY29tcG9uZW50LnNjc3MnXSxcclxuICBwcm92aWRlcnM6IFtDb25maXJtYXRpb25TZXJ2aWNlXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgRmlsZVVwbG9hZFdyYXBwZXJDb21wb25lbnQgaW1wbGVtZW50cyBGb3JtaW9DdXN0b21Db21wb25lbnQ8YW55PiwgT25Jbml0IHtcclxuICBASW5wdXQoKVxyXG4gIHZhbHVlOiBhbnk7XHJcbiAgQE91dHB1dCgpXHJcbiAgdmFsdWVDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcclxuICBASW5wdXQoKVxyXG4gIGRpc2FibGVkID0gZmFsc2U7XHJcbiAgQE91dHB1dCgpXHJcbiAgZm9ybWlvRXZlbnQgPSBuZXcgRXZlbnRFbWl0dGVyPEZvcm1pb0V2ZW50PigpO1xyXG4gIHVwbG9hZGVkRmlsZXM6IGFueVtdID0gW107XHJcbiAgZm9ybVN0YXR1czogc3RyaW5nO1xyXG4gIHNoYXJlZEluZm86IGFueSA9IHt9O1xyXG4gIHBhZ2VJZDogYW55O1xyXG4gIHJlc3BvbnNlSWQ6IGFueTtcclxuICB1cGxvYWRlZEZpbGVzVGVzdDogYW55ID0gW107XHJcbiAgdGFibGVDb2x1bW5zOiBhbnlbXTtcclxuICB1cGRhdGVHcmlkOiBhbnk7XHJcbiAgY2F0ZWdvcnlMaXN0OiBhbnkgPSBbXTtcclxuICBzdWJDYXRlZ29yeUxpc3Q6IGFueSA9IFtdO1xyXG4gIGNhdGVnb3J5OiBzdHJpbmc7XHJcbiAgc3ViQ2F0ZWdvcnk6IHN0cmluZztcclxuICBsb29rdXBMaXN0OiBhbnkgPSBbXTtcclxuICBjYXRlZ29yeWlkOiBhbnk7XHJcbiAgc3ViY2F0ZWdvcnlpZDogYW55O1xyXG4gIGh0dHBTZXJ2aWNlOiBhbnk7XHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwcml2YXRlIF9zdG9yZXNlcnZpY2U6IFBsYXRmb3JtRGF0YVN0b3JlU2VydmljZSxcclxuICAgIHByaXZhdGUgYWxlcnRTZXJ2aWNlOiBBbGVydFNlcnZpY2UsXHJcbiAgICBwcml2YXRlIGF1dGhTZXJ2aWNlOiBBdXRoU2VydmljZSxcclxuICAgIHByaXZhdGUgcGFnZUJ1aWxkZXJBZGRTZXJ2aWNlOiBQYWdlQnVpbGRlckFkZFNlcnZpY2UsXHJcbiAgICBwcml2YXRlIGNvbmZpcm1hdGlvblNlcnZpY2U6IENvbmZpcm1hdGlvblNlcnZpY2UsXHJcbiAgICBwcml2YXRlIGF0dGFjaG1lbnRzU2VydmljZTogQXR0YWNobWVudHNTZXJ2aWNlXHJcbiAgKSB7XHJcbiAgICB0aGlzLmZvcm1TdGF0dXMgPSAnRk9STV9SRVNQT05TRV9BVFRBQ0hNRU5UU18nO1xyXG4gICAgdGhpcy5zaGFyZWRJbmZvID0gdGhpcy5hdXRoU2VydmljZS5nZXRTaGFyZWRNZXNzYWdlKCk7XHJcbiAgICB0aGlzLnBhZ2VJZCA9IHRoaXMuc2hhcmVkSW5mbz8ucGFnZUlkO1xyXG4gICAgdGhpcy5yZXNwb25zZUlkID0gdGhpcy5zaGFyZWRJbmZvPy5pZDtcclxuICAgIHRoaXMuX3N0b3Jlc2VydmljZS5jdXJyZW50U3RvcmUuc3Vic2NyaWJlKChyZXM6IGFueSkgPT4ge1xyXG4gICAgICBpZiAocmVzKSB7XHJcbiAgICAgICAgdGhpcy5odHRwU2VydmljZSA9IHJlc1snSFRUUFNFUlZJQ0UnXVxyXG4gICAgICB9XHJcbiAgICB9KVxyXG4gIH1cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIHRoaXMuc2V0VGFibGVDb2x1bW5zKCk7XHJcbiAgICB0aGlzLmdldENhdGVnb3J5KCk7XHJcbiAgICBpZiAodGhpcy5yZXNwb25zZUlkKSB7XHJcbiAgICAgIHRoaXMuZm9ybVN0YXR1cyA9IGAke3RoaXMuZm9ybVN0YXR1c31VUERBVEVgO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5mb3JtU3RhdHVzID0gYCR7dGhpcy5mb3JtU3RhdHVzfUNSRUFURWA7XHJcbiAgICB9XHJcbiAgICB0aGlzLnVwbG9hZGVkRmlsZXMgPSBbXTtcclxuICAgIGlmICh0aGlzLnJlc3BvbnNlSWQpIHtcclxuICAgICAgdGhpcy5nZXRBbGxBdHRhY2htZW50cygpO1xyXG4gICAgfVxyXG4gIH1cclxuICBvblVwbG9hZChldmVudCwgdXBsb2FkKSB7XHJcbiAgICBsZXQgcmVzSUQgPSAnJztcclxuICAgIGlmICh0aGlzLnJlc3BvbnNlSWQpIHtcclxuICAgICAgcmVzSUQgPSBgLyR7dGhpcy5yZXNwb25zZUlkfWA7XHJcbiAgICB9XHJcbiAgICBsZXQgZGF0YTogRmlsZVVwbG9hZDtcclxuICAgIGV2ZW50LmZpbGVzLm1hcChmID0+IHtcclxuICAgICAgZGF0YSA9IHtcclxuICAgICAgICBmaWxlTmFtZTogYCR7dGhpcy5wYWdlSWR9JHtyZXNJRH0vJHtmLm5hbWV9YCxcclxuICAgICAgICBjb250ZW50VHlwZTogZi50eXBlLFxyXG4gICAgICAgIHR5cGU6IHRoaXMuZm9ybVN0YXR1c1xyXG4gICAgICB9O1xyXG4gICAgICB0aGlzLnBhZ2VCdWlsZGVyQWRkU2VydmljZS5nZXRVcGxvYWRLZXkoZGF0YSkuc3Vic2NyaWJlKChyZXM6IGFueSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHVybCA9IHJlcy5kYXRhO1xyXG4gICAgICAgIGNvbnN0IHVwbG9hZERldGFpbHMgPSBmO1xyXG4gICAgICAgIGNvbnN0IHR5cGUgPSBmLnR5cGU7XHJcbiAgICAgICAgY29uc3QgZmlsZVVSTCA9IHJlcy5kYXRhLnNwbGl0KCc/JylbMF07XHJcbiAgICAgICAgdGhpcy51cGxvYWRlZEZpbGVzLnB1c2goe1xyXG4gICAgICAgICAgbmFtZTogZi5uYW1lLFxyXG4gICAgICAgICAgcGF0aDogZmlsZVVSTCxcclxuICAgICAgICAgIGF0dGFjaG1lbnR0eXBlOiBmLnR5cGUsXHJcbiAgICAgICAgICBjYXRlZ29yeTogdGhpcy5jYXRlZ29yeWlkWzBdLmlkLFxyXG4gICAgICAgICAgc3ViY2F0ZWdvcnk6IHRoaXMuc3ViY2F0ZWdvcnlpZFswXS5pZCxcclxuICAgICAgICAgIGNhdGVnb3J5TmFtZTogdGhpcy5jYXRlZ29yeSxcclxuICAgICAgICAgIHN1YmNhdGVnb3J5TmFtZTogdGhpcy5zdWJDYXRlZ29yeVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGNvbnN0IGZpbGVJbmZvOiBGaWxlVXBsb2FkSW5mbyA9IHtcclxuICAgICAgICAgIHR5cGU6IHRoaXMuZm9ybVN0YXR1cyxcclxuICAgICAgICAgIGZvcm1pZDogTnVtYmVyKHRoaXMucGFnZUlkKSxcclxuICAgICAgICAgIGF0dGFjaG1lbnRkZXRhaWxzOiB0aGlzLnVwbG9hZGVkRmlsZXNcclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMuaHR0cFNlcnZpY2UucHV0VXBsb2FkKHVybCwgdXBsb2FkRGV0YWlscywgdHlwZSkuc3Vic2NyaWJlKCgpID0+IHtcclxuICAgICAgICAgIHRoaXMuYWxlcnRTZXJ2aWNlLnN1Y2Nlc3MoJ1VwbG9hZGVkIFN1Y2Nlc3NmdWxseSEnKTtcclxuICAgICAgICAgIHRoaXMudmFsdWUgPSBmaWxlSW5mbztcclxuICAgICAgICAgIHRoaXMudmFsdWVDaGFuZ2UuZW1pdChmaWxlSW5mbyk7XHJcbiAgICAgICAgICB0aGlzLmZvcm1pb0V2ZW50LmVtaXQoeyBldmVudE5hbWU6ICdjdXN0b21FdmVudCcsIGRhdGE6IHsgdmFsdWU6IHsgZmlsZUluZm8gfSwgdHlwZTogJ2ZpbGVVcGxvYWQnIH0gfSk7XHJcbiAgICAgICAgICB0aGlzLnNldFRhYmxlQ29sdW1ucygpO1xyXG4gICAgICAgICAgdXBsb2FkLmNsZWFyKCk7XHJcbiAgICAgICAgICB0aGlzLnN1YkNhdGVnb3J5ID0gJyc7XHJcbiAgICAgICAgICB0aGlzLmNhdGVnb3J5ID0gJyc7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5hdXRoU2VydmljZS5zZXRTaGFyZWRNZXNzYWdlKGZpbGVJbmZvKTtcclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuICB9XHJcbiAgZ2V0QWxsQXR0YWNobWVudHMoKSB7XHJcbiAgICB0aGlzLnBhZ2VCdWlsZGVyQWRkU2VydmljZS5nZXRGb3JtUmVzcG9uc2VBdHRhY2htZW50KHRoaXMucGFnZUlkLCB0aGlzLnJlc3BvbnNlSWQpLnN1YnNjcmliZShyZXMgPT4ge1xyXG4gICAgICBjb25zdCBkYXRhID0gcmVzWydkYXRhJ107XHJcbiAgICAgIGNvbnN0IGZpbGVJbmZvOiBGaWxlVXBsb2FkSW5mbyA9IHtcclxuICAgICAgICB0eXBlOiB0aGlzLmZvcm1TdGF0dXMsXHJcbiAgICAgICAgZm9ybWlkOiBOdW1iZXIodGhpcy5wYWdlSWQpLFxyXG4gICAgICAgIGF0dGFjaG1lbnRkZXRhaWxzOiBkYXRhXHJcbiAgICAgIH07XHJcbiAgICAgIHRoaXMuYXV0aFNlcnZpY2Uuc2V0U2hhcmVkTWVzc2FnZShmaWxlSW5mbyk7XHJcbiAgICAgIHRoaXMudXBsb2FkZWRGaWxlcyA9IGRhdGEubWFwKGYgPT4ge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICBpZDogZi5pZCxcclxuICAgICAgICAgIG5hbWU6IGYubmFtZSxcclxuICAgICAgICAgIHBhdGg6IGYucGF0aCxcclxuICAgICAgICAgIGNhdGVnb3J5TmFtZTogZi5jYXRlZ29yeURldGFpbHMua2V5LFxyXG4gICAgICAgICAgc3ViY2F0ZWdvcnlOYW1lOiBmLnN1YmNhdGVnb3J5RGV0YWlscy5rZXksXHJcbiAgICAgICAgICBhdHRhY2htZW50dHlwZTogZi5hdHRhY2htZW50dHlwZSxcclxuICAgICAgICAgIGNhdGVnb3J5OiBmLmNhdGVnb3J5LFxyXG4gICAgICAgICAgc3ViY2F0ZWdvcnk6IGYuc3ViY2F0ZWdvcnlcclxuICAgICAgICB9O1xyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG4gIH1cclxuICBkZWxldGVBdHRhY2htZW50KGUpIHtcclxuICAgIGNvbnN0IGZpbGUgPSBlPy5kYXRhO1xyXG4gICAgaWYgKGZpbGU/LmlkKSB7XHJcbiAgICAgIHRoaXMucGFnZUJ1aWxkZXJBZGRTZXJ2aWNlLmRlbGV0ZUZvcm1SZXNwb25zZUF0dGFjaG1lbnQoZmlsZS5pZCkuc3Vic2NyaWJlKCgpID0+IHtcclxuICAgICAgICB0aGlzLmFsZXJ0U2VydmljZS5zdWNjZXNzKCdEZWxldGVkIHN1Y2Nlc3NmdWxseSEnKTtcclxuICAgICAgICB0aGlzLmdldEFsbEF0dGFjaG1lbnRzKCk7XHJcbiAgICAgIH0pO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy51cGxvYWRlZEZpbGVzLmZvckVhY2goKGYsIGkpID0+IHtcclxuICAgICAgICBpZiAoZi5wYXRoID09PSBmaWxlLnBhdGgpIHtcclxuICAgICAgICAgIHRoaXMudXBsb2FkZWRGaWxlcy5zcGxpY2UoaSwgMSk7XHJcbiAgICAgICAgICB0aGlzLnNldFRhYmxlQ29sdW1ucygpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIGRvd25sb2FkQXR0YWNobWVudChldmVudCkge1xyXG4gICAgY29uc3QgcGF0aCA9IGV2ZW50LmRhdGEucGF0aC5zcGxpdCgnLycpO1xyXG4gICAgY29uc3QgcGF0aDEgPSBwYXRoLnBvcCgpO1xyXG4gICAgY29uc3QgcGF0aDIgPSBwYXRoLnBvcCgpO1xyXG4gICAgY29uc3QgcGF0aDMgPSBwYXRoLnBvcCgpO1xyXG4gICAgY29uc3QgcGF0aDQgPSBwYXRoLnBvcCgpO1xyXG4gICAgY29uc3QgZGF0YSA9IHtcclxuICAgICAgZmlsZU5hbWU6IGAke3BhdGg0fS8ke3BhdGgzfS8ke3BhdGgyfS8ke3BhdGgxfWBcclxuICAgIH07XHJcbiAgICB0aGlzLnBhZ2VCdWlsZGVyQWRkU2VydmljZS5kb3dubG9hZEZvcm1SZXNwb25zZUF0dGFjaG1lbnQoZGF0YSkuc3Vic2NyaWJlKChyZXM6IGFueSkgPT4ge1xyXG4gICAgICBpZiAocmVzICYmIHJlcy5zdGF0dXMgPT0gJ3N1Y2Nlc3MnKSB7XHJcbiAgICAgICAgd2luZG93Lm9wZW4ocmVzLmRhdGEsICdfYmxhbmsnKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG4gIGNvbmZpcm0oZXZlbnQpIHtcclxuICAgIHRoaXMuY29uZmlybWF0aW9uU2VydmljZS5jb25maXJtKHtcclxuICAgICAgbWVzc2FnZTogJ0FyZSB5b3Ugc3VyZSB0aGF0IHlvdSB3YW50IHRvIHBlcmZvcm0gdGhpcyBhY3Rpb24/JyxcclxuICAgICAgYWNjZXB0OiAoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5kZWxldGVBdHRhY2htZW50KGV2ZW50KTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG4gIHNldFRhYmxlQ29sdW1ucygpIHtcclxuICAgIHRoaXMudGFibGVDb2x1bW5zID0gW1xyXG4gICAgICAvLyB7XHJcbiAgICAgIC8vICAgY29sdW1uRGVmOiAnaWQnLFxyXG4gICAgICAvLyAgIGhlYWRlcjogJ0lkJyxcclxuICAgICAgLy8gICBjZWxsOiAoZWxlbWVudDogYW55KSA9PiBgJHtlbGVtZW50LmlkfWAsXHJcbiAgICAgIC8vICAgZGF0ZUZvcm1hdDogZmFsc2UsXHJcbiAgICAgIC8vICAgaWNvbjogZmFsc2UsXHJcbiAgICAgIC8vICAgZmlsdGVyOiBmYWxzZSxcclxuICAgICAgLy8gICBsaW5rOiBmYWxzZVxyXG4gICAgICAvLyB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgY29sdW1uRGVmOiAnbmFtZScsXHJcbiAgICAgICAgaGVhZGVyOiAnRmlsZSBOYW1lJyxcclxuICAgICAgICBjZWxsOiAoZWxlbWVudDogYW55KSA9PiBjb25zb2xlLmxvZyhlbGVtZW50LCAnZWxlbWVudHNzc3MnKSxcclxuICAgICAgICBkYXRlRm9ybWF0OiBmYWxzZSxcclxuICAgICAgICBpY29uOiBmYWxzZSxcclxuICAgICAgICBmaWx0ZXI6IGZhbHNlLFxyXG4gICAgICAgIGxpbms6IGZhbHNlXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBjb2x1bW5EZWY6ICdjYXRlZ29yeU5hbWUnLFxyXG4gICAgICAgIGhlYWRlcjogJ0NhdGVnb3J5JyxcclxuICAgICAgICBkYXRlRm9ybWF0OiBmYWxzZSxcclxuICAgICAgICBpY29uOiBmYWxzZSxcclxuICAgICAgICBmaWx0ZXI6IGZhbHNlLFxyXG4gICAgICAgIGxpbms6IGZhbHNlXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBjb2x1bW5EZWY6ICdzdWJjYXRlZ29yeU5hbWUnLFxyXG4gICAgICAgIGhlYWRlcjogJ1N1YiBDYXRlZ29yeScsXHJcbiAgICAgICAgZGF0ZUZvcm1hdDogZmFsc2UsXHJcbiAgICAgICAgaWNvbjogZmFsc2UsXHJcbiAgICAgICAgZmlsdGVyOiBmYWxzZSxcclxuICAgICAgICBsaW5rOiBmYWxzZVxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgY29sdW1uRGVmOiAnYXR0YWNobWVudHR5cGUnLFxyXG4gICAgICAgIGhlYWRlcjogJ1R5cGUnLFxyXG4gICAgICAgIGNlbGw6IChlbGVtZW50OiBhbnkpID0+IGAke2VsZW1lbnQudHlwZX1gLFxyXG4gICAgICAgIGRhdGVGb3JtYXQ6IGZhbHNlLFxyXG4gICAgICAgIGljb246IGZhbHNlLFxyXG4gICAgICAgIGZpbHRlcjogZmFsc2UsXHJcbiAgICAgICAgbGluazogZmFsc2VcclxuICAgICAgfVxyXG4gICAgXTtcclxuICAgIHRoaXMudXBkYXRlR3JpZCA9IHtcclxuICAgICAgZWRpdDogZmFsc2UsXHJcbiAgICAgIHZpZXc6IGZhbHNlLFxyXG4gICAgICBsb2NrOiBmYWxzZSxcclxuICAgICAgZHVwbGljYXRlOiBmYWxzZSxcclxuICAgICAgZGVsZXRlOiBmYWxzZSxcclxuICAgICAgZXh0ZXJuYWxMaW5rOiBmYWxzZSxcclxuICAgICAgc2hvd0Rvd25sb2FkOiB0cnVlLFxyXG4gICAgICBzaG93RGVsZXRlOiB0cnVlLFxyXG4gICAgICBpc05ld2x5VXBsb2FkZWQ6IHRoaXMucmVzcG9uc2VJZCA/IGZhbHNlIDogdHJ1ZVxyXG4gICAgfTtcclxuICB9XHJcbiAgZ2V0Q2F0ZWdvcnkoKSB7XHJcbiAgICBjb25zdCBjYXRlZ29yeW5hbWUgPSAnRE9DVU1FTlRfTElTVCc7XHJcbiAgICB0aGlzLmF0dGFjaG1lbnRzU2VydmljZS5nZXRDYXRlZ29yeUxvb2t1cChjYXRlZ29yeW5hbWUpLnN1YnNjcmliZSgocmVzOiBhbnkpID0+IHtcclxuICAgICAgdGhpcy5sb29rdXBMaXN0ID0gcmVzLmRhdGE7XHJcbiAgICAgIHRoaXMubG9va3VwTGlzdC5tYXAoeiA9PiB7XHJcbiAgICAgICAgaWYgKCF6LnBhcmVudGlkKSB7XHJcbiAgICAgICAgICB0aGlzLmNhdGVnb3J5TGlzdC5wdXNoKHopO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuICB9XHJcbiAgZ2V0U3ViQ2F0ZWdvcnkoKSB7XHJcbiAgICB0aGlzLnN1YmNhdGVnb3J5aWQgPSB0aGlzLnN1YkNhdGVnb3J5TGlzdC5maWx0ZXIoZSA9PiBlLmxvb2t1cHZhbHVlID09PSB0aGlzLnN1YkNhdGVnb3J5KTtcclxuICB9XHJcbiAgZ2V0Q2F0b2dvcnlJdGVtKCkge1xyXG4gICAgY29uc3QgZGF0YSA9IHRoaXMubG9va3VwTGlzdC5maWx0ZXIoeCA9PiB4Lmxvb2t1cHZhbHVlID09PSB0aGlzLmNhdGVnb3J5KTtcclxuICAgIHRoaXMuY2F0ZWdvcnlpZCA9IGRhdGE7XHJcbiAgICB0aGlzLnN1YkNhdGVnb3J5TGlzdCA9IHRoaXMubG9va3VwTGlzdC5maWx0ZXIoeSA9PiB5LnBhcmVudGlkID09PSBkYXRhWzBdLmlkKTtcclxuICB9XHJcbn1cclxuIiwiPHAtY29uZmlybURpYWxvZyBoZWFkZXI9XCJDb25maXJtYXRpb25cIiBpY29uPVwicGkgcGktZXhjbGFtYXRpb24tdHJpYW5nbGVcIj48L3AtY29uZmlybURpYWxvZz5cclxuPHAtZmlsZVVwbG9hZFxyXG4gICNmaWxlVXBsb2FkXHJcbiAgbmFtZT1cImRlbW9bXVwiXHJcbiAgW2N1c3RvbVVwbG9hZF09XCJ0cnVlXCJcclxuICAodXBsb2FkSGFuZGxlcik9XCJvblVwbG9hZCgkZXZlbnQsIGZpbGVVcGxvYWQpXCJcclxuICBbYXV0b109XCJ0cnVlXCJcclxuICBtYXhGaWxlU2l6ZT1cIjEwMDAwMDBcIlxyXG4gIG11bHRpcGxlPVwibXVsdGlwbGVcIlxyXG4gIFtkaXNhYmxlZF09XCIhc3ViQ2F0ZWdvcnlcIj5cclxuICA8bmctdGVtcGxhdGUgcFRlbXBsYXRlPVwidG9vbGJhclwiPlxyXG4gICAgPHNwYW4gY2xhc3M9XCJkLWZsZXggZmlsZVVwbG9hZC1jYXRlZ29yeVwiPlxyXG4gICAgICA8cC1kcm9wZG93blxyXG4gICAgICAgIFtvcHRpb25zXT1cImNhdGVnb3J5TGlzdFwiXHJcbiAgICAgICAgcGxhY2Vob2xkZXI9XCJTZWxlY3QgQ2F0ZWdvcnlcIlxyXG4gICAgICAgIFsobmdNb2RlbCldPVwiY2F0ZWdvcnlcIlxyXG4gICAgICAgIG9wdGlvbkxhYmVsPVwibG9va3Vwa2V5XCJcclxuICAgICAgICBvcHRpb25WYWx1ZT1cImxvb2t1cHZhbHVlXCJcclxuICAgICAgICAob25DaGFuZ2UpPVwiZ2V0Q2F0b2dvcnlJdGVtKClcIlxyXG4gICAgICAgIHN0eWxlQ2xhc3M9XCJtci0yXCI+XHJcbiAgICAgIDwvcC1kcm9wZG93bj5cclxuICAgICAgPHAtZHJvcGRvd25cclxuICAgICAgICBbb3B0aW9uc109XCJzdWJDYXRlZ29yeUxpc3RcIlxyXG4gICAgICAgIHBsYWNlaG9sZGVyPVwiU2VsZWN0IFN1YmNhdGVnb3J5XCJcclxuICAgICAgICBbKG5nTW9kZWwpXT1cInN1YkNhdGVnb3J5XCJcclxuICAgICAgICBvcHRpb25MYWJlbD1cImxvb2t1cGtleVwiXHJcbiAgICAgICAgKG9uQ2hhbmdlKT1cImdldFN1YkNhdGVnb3J5KClcIlxyXG4gICAgICAgIG9wdGlvblZhbHVlPVwibG9va3VwdmFsdWVcIlxyXG4gICAgICAgIHN0eWxlQ2xhc3M9XCJtci0yXCI+XHJcbiAgICAgIDwvcC1kcm9wZG93bj5cclxuICAgIDwvc3Bhbj5cclxuICA8L25nLXRlbXBsYXRlPlxyXG4gIDxuZy10ZW1wbGF0ZSBwVGVtcGxhdGU9XCJjb250ZW50XCI+XHJcbiAgICA8cC1jYXJkIHN0eWxlQ2xhc3M9XCJyYmFjLWNhcmQgZ3JpZHZpZXcgdy0xMDBcIiAqbmdJZj1cInVwbG9hZGVkRmlsZXMubGVuZ3RoXCI+XHJcbiAgICAgIDxhcHAtZ3JpZC1saXN0XHJcbiAgICAgICAgW2RhdGFMaXN0XT1cInVwbG9hZGVkRmlsZXNcIlxyXG4gICAgICAgIFt1cGRhdGVHcmlkXT1cInVwZGF0ZUdyaWRcIlxyXG4gICAgICAgIFtjb2x1bW5zXT1cInRhYmxlQ29sdW1uc1wiXHJcbiAgICAgICAgKGRvd25sb2FkRm9ybVJlc3BvbnNlRmlsZXMpPVwiZG93bmxvYWRBdHRhY2htZW50KCRldmVudClcIlxyXG4gICAgICAgIChkZWxldGVGb3JtUmVzcG9uc2VGaWxlcyk9XCJjb25maXJtKCRldmVudClcIj5cclxuICAgICAgPC9hcHAtZ3JpZC1saXN0PlxyXG4gICAgPC9wLWNhcmQ+XHJcbiAgPC9uZy10ZW1wbGF0ZT5cclxuPC9wLWZpbGVVcGxvYWQ+XHJcbiJdfQ==