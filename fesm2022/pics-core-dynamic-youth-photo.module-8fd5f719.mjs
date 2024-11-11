import * as i0 from '@angular/core';
import { Component, ViewChild, NgModule, NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import * as i4 from '@angular/common';
import { CommonModule } from '@angular/common';
import { a as AlertService, L as LoaderService, Y as YouthPhotoService, H as HttpService, b as LocalService, c as LocalStorageService, d as PermissionStore, e as AppService, S as SharedService, V as ViewYouthPhotoComponent, f as DirectivesModule } from './pics-core-dynamic-pics-core-dynamic-7ab44c35.mjs';
import * as i1 from '@angular/router';
import { RouterModule } from '@angular/router';
import * as i2 from '@angular/forms';
import { Validators } from '@angular/forms';
import moment from 'moment/moment';
import * as i5 from 'primeng/api';
import * as i12 from 'primeng/tooltip';
import * as i13 from 'primeng/inputtext';
import * as i14 from 'primeng/calendar';
import * as i25 from 'primeng/dropdown';
import * as i1$1 from 'ngxf-uploader';
import 'rxjs';
import '@formio/angular';
import 'rxjs/operators';
import '@angular/common/http';
import 'devextreme-angular';
import 'ng-dynamic-component';
import '@angular/material/dialog';
import '@ngrx/store';
import 'devextreme/data/custom_store';
import 'devextreme/pdf_exporter';
import 'jspdf';
import 'primeng/multiselect';
import 'print-js';
import 'rxjs/add/operator/map';
import 'rxjs/internal/observable/throwError';
import '@ngrx/router-store';
import 'lodash';
import '@ng-bootstrap/ng-bootstrap';
import '@angular/material/button';
import '@angular/material/icon';
import '@angular/material/input';
import '@angular/material/form-field';
import '@angular/material/menu';
import '@angular/material/tooltip';
import 'devextreme-angular/ui/nested';
import 'devextreme-angular/core';
import 'primeng/accordion';
import 'primeng/inputtextarea';
import '@angular/material/bottom-sheet';
import '@angular/material/card';
import '@angular/material/checkbox';
import '@angular/material/core';
import '@angular/material/datepicker';
import '@angular/material/radio';
import '@angular/material/select';
import '@angular/material/slide-toggle';
import '@angular/material/sort';
import '@angular/material/stepper';
import '@angular/material/table';
import '@angular/material/tabs';
import 'ngx-mask';
import 'ngx-pagination';
import '@angular/platform-browser';
import 'primeng/tabmenu';
import 'primeng/message';
import 'primeng/table';
import 'primeng/checkbox';
import 'primeng/editor';
import 'primeng/fieldset';
import 'primeng/button';
import 'primeng/radiobutton';
import 'primeng/inputmask';
import 'primeng/steps';
import 'primeng/card';
import 'primeng/toast';
import 'primeng/ripple';
import 'primeng/avatar';
import 'primeng/badge';
import 'primeng/inputswitch';
import 'primeng/confirmdialog';
import 'primeng/treeselect';
import 'primeng/progressspinner';
import 'primeng/speeddial';
import 'primeng/orderlist';
import 'primeng/dialog';
import 'primeng/fileupload';
import 'primeng/password';
import 'primeng/knob';
import 'primeng/tabview';
import 'primeng/sidebar';
import 'primeng/panel';
import '@angular/cdk/drag-drop';
import 'primeng/autocomplete';
import '@angular/cdk/stepper';
import '@angular/elements';
import 'formiojs';
import 'angular-gridster2';

class DocumentUploadComponent {
    formBuilder;
    route;
    youthPhotoService;
    httpService;
    localStoreService;
    storageService;
    permissionStore;
    appService;
    sharedService;
    localStorage;
    router;
    documentUploadForm;
    alertService;
    fileInput;
    imageHeight;
    imageWidth;
    isButtonShowHide = false;
    photoTypeList;
    fileName = '';
    fileSize = 0;
    isImageUploaded = false;
    imgUrl;
    imgUrl2;
    photoId;
    youthPhotoDetails;
    settingInfo;
    showDescription = false;
    sourceKey;
    sourceValue;
    youthId;
    descriptionList = [];
    defaultDescriptionList;
    fileNamePath;
    workerId;
    loaderService;
    maxDate;
    previousType;
    isEditMode = false;
    fileSizeRaw;
    pageId;
    hidePrimaryFlag = false;
    hideReadAccess = false;
    pageAccess;
    assetAccess;
    enablePrimaryFlag;
    enableSaveButton;
    constructor(injector, formBuilder, route, youthPhotoService, httpService, localStoreService, storageService, permissionStore, appService, sharedService, localStorage, router) {
        this.formBuilder = formBuilder;
        this.route = route;
        this.youthPhotoService = youthPhotoService;
        this.httpService = httpService;
        this.localStoreService = localStoreService;
        this.storageService = storageService;
        this.permissionStore = permissionStore;
        this.appService = appService;
        this.sharedService = sharedService;
        this.localStorage = localStorage;
        this.router = router;
        this.alertService = injector.get(AlertService);
        this.loaderService = injector.get(LoaderService);
        this.photoTypeList = [
            { value: 'YTH', label: 'Youth' },
            { value: 'SCR', label: 'Scar, Mark or Tattoo' }
        ];
        this.defaultDescriptionList = [
            { value: 'Intake/Commitment', label: 'Intake/Commitment' },
            { value: 'Annual', label: 'Annual' },
            { value: 'Appearance Change', label: 'Appearance Change' },
            { value: 'Exit/Release', label: 'Exit/Release' },
            { value: 'Other', label: 'Other' }
        ];
        this.photoId = this.route.snapshot.paramMap.get('photoid');
        this.sourceKey = this.route.parent.parent.snapshot.paramMap.get('sourceKey');
        this.sourceValue = this.route.parent.parent.snapshot.paramMap.get('sourceValue');
        if (this.sourceKey && this.sourceKey.includes('youth_id')) {
            this.youthId = this.sourceValue;
        }
        this.maxDate = new Date();
        this.localStoreService.setItem('gridAction', 'add');
        this.route.parent?.params.subscribe(params => {
            this.pageId = params['pageId'];
            console.log('Page ID:', this.pageId);
        });
    }
    ngOnInit() {
        this.youthPhotoService.getActivePage(this.pageId, true, 'add').subscribe(res => {
            if (res && 'data' in res) {
                const pageResponse = res;
                this.pageAccess = pageResponse.data.pagePermission;
                this.assetAccess = pageResponse.data.assetPermissions;
                const gridAction = this.localStoreService.getItem('gridAction'); // Get the current action (add or edit)
                this.assetAccess.forEach(asset => {
                    if (asset.key === 'submit') {
                        this.enableSaveButton = gridAction === 'add' ? asset.c : gridAction === 'edit' ? asset.u : false;
                    }
                    if (asset.key === 'primary_flag') {
                        this.enablePrimaryFlag = gridAction === 'add' ? asset.c : gridAction === 'edit' ? asset.u : false;
                    }
                });
                this.permissionStore.state['pageAccess'] = this.pageAccess;
                this.permissionStore.state['assetAccess'] = this.assetAccess;
            }
            else {
                console.error('Unexpected response format:', res);
            }
        });
        this.initializeDocumentUploadForm();
        const REGISTRATION = this.storageService.getItem('REGISTRATION');
        if (REGISTRATION) {
            this.settingInfo = JSON.parse(REGISTRATION);
        }
        if (this.photoId) {
            this.getByPhotoId();
            this.isButtonShowHide = true;
        }
    }
    initializeDocumentUploadForm() {
        const currentDate = new Date();
        const username = JSON.parse(this.localStoreService.getItem('user'));
        const userId = this.localStoreService.getItem('id');
        this.documentUploadForm = this.formBuilder.group({
            youth_id: [Number(this.youthId)],
            entered_date: [{ value: currentDate, disabled: true }, Validators.required],
            type_code: ['', Validators.required],
            photo_date: [currentDate, Validators.required],
            primary_flag: [{ value: false, disabled: true }],
            entered_by_worker_name: [{ value: `${username.lastname}, ${username.firstname}${username.middlename ? ' ' + username.middlename : ''}`, disabled: true }],
            entered_by_worker_id: [`${userId}`],
            description: ['', Validators.required],
            moreDescription: ['', [Validators.required, Validators.maxLength(100)]],
            url_pic: ['', Validators.required]
        });
    }
    uploadFile(fileValue) {
        const file = fileValue[0];
        this.validateDocument(file).then(isValid => {
            if (isValid) {
                const imageData = {
                    contentType: fileValue[0].type,
                    fileName: this.fileNamePath
                };
                this.youthPhotoService.uploadKey(imageData).subscribe((res) => {
                    this.httpService.putUpload(res.data, file, file.type).subscribe((_resp) => {
                        this.imgUrl2 = res.data;
                        this.documentUploadForm.patchValue({ url_pic: this.fileName });
                        this.isImageUploaded = true;
                    });
                }, (_error) => {
                    this.alertService.error('Something went wrong.');
                });
            }
        });
    }
    validateDocument(file) {
        return new Promise((resolve, _reject) => {
            const fileSize = Number(file.size) / 1024;
            const filetype = file.type.split('/')[1];
            const fileNameLength = file.name.length;
            const reader = new FileReader();
            this.loaderService.show();
            reader.onload = (e) => {
                this.loaderService.hide();
                if (filetype !== 'jpg' && filetype !== 'jpeg' && filetype !== 'png' && filetype !== 'jfif') {
                    this.fileInput.nativeElement.value = "";
                    this.alertService.error(`JPG, JPEG, PNG & JFIF are supported.`);
                    this.clearImage();
                    resolve(false);
                    return;
                }
                else if (fileNameLength > 100) {
                    this.alertService.warn('The filename is too long.');
                    resolve(false);
                    return;
                }
                const img = new Image();
                img.src = e.target.result;
                img.onload = () => {
                    this.imageWidth = img.width;
                    this.imageHeight = img.height;
                    if (fileSize <= 3072) {
                        this.fileName = file.name;
                        this.fileSizeRaw = parseFloat(fileSize.toFixed(1));
                        this.fileSize = this.getFileSize(parseFloat(fileSize.toFixed(1)));
                        this.fileNamePath = `youth-photo/${this.youthId}/${moment().valueOf()}-${this.fileName.replaceAll(' ', '')}`;
                        resolve(true);
                    }
                    else {
                        this.fileInput.nativeElement.value = "";
                        this.alertService.warn('File size exceeds 3MB limit.');
                        resolve(false);
                    }
                };
            };
            reader.readAsDataURL(file);
        });
    }
    sendDocument() {
        if (this.documentUploadForm.valid) {
            const formData = this.documentUploadForm.getRawValue();
            if (formData.primary_flag) {
                formData['primary_flag'] = 'Y';
            }
            else {
                formData['primary_flag'] = 'N';
            }
            formData['youth_photo_id'] = Number(this.photoId);
            formData['url_pic'] = this.fileNamePath;
            if (this.showDescription) {
                formData['description'] = formData.moreDescription;
            }
            formData['photo_date'] = moment(formData['photo_date']).format("YYYY-MM-DD");
            formData['entered_date'] = moment(formData['entered_date']).format("YYYY-MM-DD");
            if (this.photoId) {
                this.youthPhotoService.updateYouthPhoto(formData).subscribe((_res) => {
                    this.alertService.success('Youth Photo updated successfully.', true);
                    this.resetData();
                    this.router.navigate(['../../image-list'], { relativeTo: this.route });
                }, (_error) => {
                    this.alertService.error('Something went wrong.');
                });
            }
            else {
                this.youthPhotoService.addPhoto(formData).subscribe((res) => {
                    formData['primary_flag'] === 'Y' && this.appService.setValue('youth_pic', res?.data?.url_pic);
                    this.alertService.success('Youth Photo added successfully.', true);
                    this.resetData();
                    this.router.navigate(['../image-list'], { relativeTo: this.route });
                }, (_error) => {
                    this.alertService.error('Something went wrong.');
                });
            }
        }
    }
    openModal() {
        $('#deletephoto').modal('show');
    }
    resetValue() {
        if (this.photoId) {
            this.isEditMode = true;
            this.fileName = this.youthPhotoDetails['file_name'].split('/')[1];
            this.documentUploadForm.patchValue(this.youthPhotoDetails);
            if (this.documentUploadForm.get('type_code').value === 'YTH') {
                this.descriptionList = [];
                this.descriptionList = this.defaultDescriptionList;
                this.showDescription = false;
                this.documentUploadForm.get('primary_flag')?.enable();
                this.imgUrl2 = this.documentUploadForm.get('url_pic').value;
                this.isImageUploaded = true;
                this.documentUploadForm.patchValue({ description: this.youthPhotoDetails['description'] });
            }
            else {
                this.showDescription = true;
                this.documentUploadForm.get('primary_flag')?.disable();
                this.documentUploadForm.patchValue({
                    moreDescription: this.documentUploadForm.get('description').value,
                    description: 'Other',
                });
            }
        }
        else {
            this.router.navigate(['../image-list'], { relativeTo: this.route });
        }
        this.localStorage.setItem('setTabAction', '');
        this.sharedService.sendMessage();
    }
    clearImage() {
        this.documentUploadForm.patchValue({ url_pic: '' });
        this.fileName = '';
        this.fileSize = 0;
        this.fileSizeRaw = 0;
        this.isImageUploaded = false;
        this.isEditMode = false;
        this.imgUrl2 = '';
    }
    getByPhotoId() {
        this.youthPhotoService.getByPhotoId(this.photoId).subscribe((res) => {
            console.log('getByPhotoId', res);
            if (res && res.data && res.data.length) {
                this.isEditMode = true;
                const youthPhotoDetails = res.data[0];
                youthPhotoDetails['entered_date'] = moment().format('MM/DD/YYYY');
                youthPhotoDetails['photo_date'] = moment().format('MM/DD/YYYY');
                if (youthPhotoDetails.primary_flag === 'Y') {
                    youthPhotoDetails['primary_flag'] = true;
                }
                else if (youthPhotoDetails.primary_flag === 'N') {
                    youthPhotoDetails['primary_flag'] = false;
                }
                youthPhotoDetails['youth_id'] = Number(this.youthId);
                youthPhotoDetails['entered_by_worker_id'] = Number(youthPhotoDetails.entered_by_worker_id);
                this.documentUploadForm.patchValue(youthPhotoDetails);
                this.previousType = youthPhotoDetails['type_code'];
                this.youthPhotoDetails = youthPhotoDetails;
                if (youthPhotoDetails.type_code === 'YTH') {
                    this.documentUploadForm.get('primary_flag')?.enable();
                    this.documentUploadForm.controls['moreDescription'].clearValidators();
                    this.documentUploadForm.controls['moreDescription'].updateValueAndValidity();
                }
                else {
                    this.getPhysicalDescriptionList();
                    this.documentUploadForm.get('primary_flag')?.disable();
                }
                this.isImageUploaded = true;
                this.imgUrl2 = youthPhotoDetails.url_pic;
                this.fileName = youthPhotoDetails.file_name.split('/')[1];
                const url = youthPhotoDetails.url_pic.split('?')[0].split('/');
                this.fileNamePath = `${url[4]}/${url[5]}`;
            }
        }, (_error) => {
            this.alertService.error('Something went wrong.');
        });
    }
    getDateFormat(value) {
        if (this.settingInfo) {
            if (value === 'date') {
                return this.settingInfo['datetimeformat'].split(' ')[0];
            }
            return this.settingInfo['datetimeformat'];
        }
        return 'MM/dd/yyyy';
    }
    resetData() {
        this.documentUploadForm.reset();
        this.fileSize = 0;
        this.fileSizeRaw = 0;
        this.fileName = '';
        this.isImageUploaded = false;
        this.fileNamePath = '';
    }
    changeTypeValue(e) {
        if (e.value === null) {
            this.hidePrimaryFlag = false;
            this.hideReadAccess = false;
            this.documentUploadForm.get('primary_flag')?.setValue(false);
            this.documentUploadForm.get('primary_flag')?.disable();
        }
        else if (e.value !== 'YTH') {
            this.getPhysicalDescriptionList();
            this.documentUploadForm.patchValue({ primary_flag: false });
            this.documentUploadForm.get('primary_flag')?.disable();
            this.hidePrimaryFlag = true;
            this.hideReadAccess = true;
            this.documentUploadForm.get('description')?.reset();
            this.documentUploadForm.get('moreDescription')?.reset();
            this.showDescription = false;
        }
        else {
            this.descriptionList = this.defaultDescriptionList;
            this.documentUploadForm.get('description')?.reset();
            this.documentUploadForm.get('moreDescription')?.reset();
            if (this.enablePrimaryFlag) {
                this.documentUploadForm.get('primary_flag')?.enable();
                this.documentUploadForm.get('primary_flag')?.setValue(true);
            }
            this.youthPhotoService.getYouthPhoto(this.youthId).subscribe((res) => {
                const getPrimaryYouth = res.data.filter((item) => item.primary_flag === 'Y');
                if (getPrimaryYouth?.length === 0) {
                    this.documentUploadForm.get('primary_flag')?.disable();
                }
            });
            this.hidePrimaryFlag = false;
            this.hideReadAccess = false;
            this.showDescription = false;
        }
    }
    deletePhoto() {
        this.youthPhotoService.deleteYouthPhoto(this.photoId).subscribe((res) => {
            if (res?.data?.warn) {
                this.alertService.warn(res.data.warn);
                this.photoId = '';
                $("#deletephoto").modal('hide');
                this.resetData();
                this.router.navigate(['../../image-list'], { relativeTo: this.route });
            }
            else if (res?.data?.message) {
                this.alertService.success(res.data.message);
                this.photoId = '';
                $("#deletephoto").modal('hide');
                this.resetData();
                this.router.navigate(['../../image-list'], { relativeTo: this.route });
            }
        }, (_error) => {
            this.alertService.error('Something went wrong.');
        });
    }
    changeDescriptionValue(e) {
        if (e.value === 'Other') {
            this.showDescription = true;
            this.documentUploadForm.controls['moreDescription'].setValidators([
                Validators.required,
                Validators.maxLength(100)
            ]);
            this.documentUploadForm.controls['moreDescription'].updateValueAndValidity();
        }
        else {
            this.showDescription = false;
            this.documentUploadForm.controls['moreDescription'].clearValidators();
            this.documentUploadForm.controls['moreDescription'].updateValueAndValidity();
        }
    }
    getPhysicalDescriptionList() {
        this.youthPhotoService.getPhysicalDescription(this.youthId).subscribe((res) => {
            if (res && res.data) {
                this.descriptionList = [];
                res.data.forEach(pd => {
                    this.descriptionList.push({
                        value: [
                            pd.type_description,
                            pd.body_part_description,
                            pd.body_side_description,
                            pd.design
                        ].filter(Boolean).join('; '),
                        label: [
                            pd.type_description,
                            pd.body_part_description,
                            pd.body_side_description,
                            pd.design
                        ].filter(Boolean).join('; ')
                    });
                });
                this.descriptionList.push({ value: 'Other', label: 'Other' });
                this.validateDescription();
            }
        }, (_error) => {
            this.alertService.error('Something went wrong.');
        });
    }
    validateDescription() {
        const isPresent = this.descriptionList.some(item => item.label === this.documentUploadForm.get('description').value);
        if (!isPresent && this.photoId && this.previousType !== 'YTH') {
            this.showDescription = true;
            this.documentUploadForm.patchValue({
                moreDescription: this.documentUploadForm.get('description').value,
                description: 'Other',
            });
        }
    }
    getFileSize(fileSize) {
        if (fileSize > 1024) {
            fileSize = fileSize / 1024;
            return `${fileSize.toFixed(2)} MB`;
        }
        else {
            return `${fileSize.toFixed(2)} KB`;
        }
    }
    get moreDescription() {
        return this.documentUploadForm.get('moreDescription');
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: DocumentUploadComponent, deps: [{ token: i0.Injector }, { token: i2.FormBuilder }, { token: i1.ActivatedRoute }, { token: YouthPhotoService }, { token: HttpService }, { token: LocalService }, { token: LocalStorageService }, { token: PermissionStore }, { token: AppService }, { token: SharedService }, { token: LocalService }, { token: i1.Router }], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: DocumentUploadComponent, selector: "app-document-upload", viewQueries: [{ propertyName: "fileInput", first: true, predicate: ["file"], descendants: true }], ngImport: i0, template: "<div class=\"bg-white p-3 mt-1\">\r\n  <div class=\"row mb-3\">\r\n    <div class=\"col-lg-12\">\r\n      <div class=\"photo-upload-title\">Upload Photo</div>\r\n    </div>\r\n  </div>\r\n  <div class=\"row\">\r\n    <div class=\"col-md-4 col-xl-4\">\r\n      <div class=\"uploaded-files mb-3\">\r\n        <div class=\"upload-sec\" appFieldPermission=\"upload_photo\">\r\n          <div class=\"block drop-container\" [hidden]=\"isImageUploaded\" #file (ngxf-drop)=\"uploadFile($event)\"\r\n            (ngxf-select)=\"uploadFile($event)\" drop-class=\"drop\" [ngxf-validate]=\"{ size: { min: 5 } }\" multiple >\r\n            <i class=\"fa fa-cloud-upload mb-2\" aria-hidden=\"true\" ></i>\r\n            <p>Drag and Drop or <a href=\"javascript:;\">Browse</a></p>\r\n            <p class=\"mt-5\">Max file size 3MB <br> Supported formats: JPG, JPEG, PNG, JFIF</p>\r\n          </div>\r\n          <div [hidden]=\"!isImageUploaded\">\r\n            <img class=\"upload-image-preview\" [src]=\"imgUrl2\" alt=\"Youth Image\">\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"progress-wrap\">\r\n        <div class=\"d-flex justify-content-between mb-1\">\r\n          <h6>{{fileName}}</h6>\r\n          <span [hidden]=\"isEditMode\" >{{fileSize}}/3MB</span>\r\n          <a href=\"javascript:;\" class=\"progress-close\" (click)=\"clearImage()\">\r\n            <i class=\"fa fa-times\" aria-hidden=\"true\"></i>\r\n          </a>\r\n        </div>\r\n        <div class=\"progress\">\r\n          <div class=\"progress-bar bg-info\" role=\"progressbar\" [style.width.%]=\"fileSizeRaw / 3072 * 100\"\r\n            [attr.aria-valuenow]=\"fileSizeRaw\" aria-valuemin=\"0\" aria-valuemax=\"3072\"></div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-lg-8 col-xl-8\">\r\n      <div class=\"upload-wrap dd-overflow-inherit\" [formGroup]=\"documentUploadForm\">\r\n        <div class=\"uploaded-form\">\r\n          <div class=\"p-fluid p-formgrid row\">\r\n            <!-- <div class=\"p-field col-lg-3 col-sm-4 col-md-12 col-12\">\r\n              <label for=\"fname\" class=\"referral-form-labels\">\r\n                Photo Type\r\n                <span class=\"requiredfield text-danger\">*</span>\r\n                <i class=\"fa fa-question-circle ml-1\" aria-hidden=\"true\"></i>\r\n              </label>\r\n              <input type=\"text\" pInputText placeholder=\"[current user]\" formControlName=\"photoType\" />\r\n              <p-dropdown [options]=\"typeList\" inputId=\"role\" placeholder=\"Please Select\" styleClass=\"w-100\"\r\n                optionLabel=\"label\" optionValue=\"value\" filter=\"true\" formControlName=\"photoType\" (onChange)=\"\"\r\n                ariaFilterLabel=\"null\">\r\n              </p-dropdown>\r\n            </div> -->\r\n            <div class=\"p-field col-lg-4 col-sm-4 col-md-12 col-12\" appFieldPermission=\"entered_date\">\r\n              <label for=\"fname\" class=\"referral-form-labels\">\r\n                Entered Date\r\n                <span class=\"requiredfield text-danger\">*</span>\r\n              </label>\r\n              <p-calendar type=\"date\" formControlName=\"entered_date\" placeholder=\"[current date]\" appFieldPermission=\"entered_date\"\r\n                [selectOtherMonths]=\"true\" [showIcon]=\"true\" [showOnFocus]=\"false\"></p-calendar>\r\n            </div>\r\n            <div class=\"p-field col-lg-4 col-sm-4 col-md-12 col-12\" appFieldPermission=\"photo_date\">\r\n              <div>\r\n                <label for=\"fname\" class=\"referral-form-labels\">\r\n                  Photo Date\r\n                  <span class=\"requiredfield text-danger\">*</span>\r\n                </label>\r\n                <p-calendar type=\"date\" formControlName=\"photo_date\" placeholder=\"MM/DD/YYYY\" [selectOtherMonths]=\"true\" appFieldPermission=\"photo_date\"\r\n                  [showIcon]=\"true\" [maxDate]=\"maxDate\" [showOnFocus]=\"false\"></p-calendar>\r\n              </div>\r\n\r\n            </div>\r\n            <div class=\"p-field col-lg-4 col-sm-4 col-md-12 col-12\" appFieldPermission=\"type_code\">\r\n              <label for=\"fname\" class=\"referral-form-labels\" >\r\n                Type\r\n                <span class=\"requiredfield text-danger\">*</span>\r\n              </label>\r\n              <p-dropdown [options]=\"photoTypeList\" inputId=\"role\"  placeholder=\"Please Select\"\r\n              styleClass=\"w-100\" optionLabel=\"label\" optionValue=\"value\" [filter]=\"true\" formControlName=\"type_code\" appFieldPermission=\"type_code\"\r\n              (onChange)=\"changeTypeValue($event)\" ariaFilterLabel=\"null\" [showClear]=\"true\">\r\n              <ng-template let-item pTemplate=\"selectedItem\">\r\n                <div pTooltip=\"{{item?.label}}\" tooltipPosition=\"top\" class=\"text-truncate\"> {{ item?.label }}</div>\r\n              </ng-template>\r\n              <ng-template let-object pTemplate=\"item\">\r\n                {{ object.label }}\r\n              </ng-template>\r\n              </p-dropdown>\r\n            </div>\r\n\r\n          </div>\r\n          <div class=\"p-fluid p-formgrid row\">\r\n\r\n            <div class=\"p-field col-lg-6 col-sm-4 col-md-12 col-12\" appFieldPermission=\"entered_by_worker_name\">\r\n              <div>\r\n                <label for=\"fname\" class=\"referral-form-labels\">\r\n                  Entered By\r\n                  <span class=\"requiredfield text-danger\">*</span>\r\n                </label>\r\n                <input type=\"text\" pInputText placeholder=\"[current user]\" formControlName=\"entered_by_worker_name\" appFieldPermission=\"entered_by_worker_name\"/>\r\n              </div>\r\n            </div>\r\n            <div class=\"p-field col-lg-6 col-sm-4 col-md-12 col-12\" *ngIf=\"!hidePrimaryFlag && !hideReadAccess\">\r\n              <div class=\"g-checkbox mtc-2\">\r\n                <input type=\"checkbox\" formControlName=\"primary_flag\" appFieldPermission=\"primary_flag\" id=\"\" class=\"packetsub-cls\" />\r\n                <label for=\"\" aria-labelledby=\"\" class=\"pl-2 mt-0 mb-0\">Primary Photo</label>\r\n              </div>\r\n            </div>\r\n\r\n          </div>\r\n          <div  class=\"p-fluid p-formgrid row\">\r\n            <div class=\"p-field col-lg-6 col-sm-4 col-md-12 col-12\"  appFieldPermission=\"description\">\r\n              <label for=\"fname\" class=\"referral-form-labels\">\r\n                Description\r\n                <span class=\"requiredfield text-danger\">*</span>\r\n              </label>\r\n              <p-dropdown [options]=\"descriptionList\" inputId=\"description\" placeholder=\"Please Select\"\r\n              styleClass=\"w-100\" optionLabel=\"label\" optionValue=\"value\" [filter]=\"true\" formControlName=\"description\" appFieldPermission=\"description\"\r\n              (onChange)=\"changeDescriptionValue($event)\" ariaFilterLabel=\"null\" [showClear]=\"true\">\r\n              <ng-template let-item pTemplate=\"selectedItem\">\r\n                <div pTooltip=\"{{item?.value}}\" tooltipPosition=\"top\" class=\"text-truncate\"> {{ item?.value }}</div>\r\n              </ng-template>\r\n              <ng-template let-object pTemplate=\"item\">\r\n                {{ object.value }}\r\n              </ng-template>\r\n            </p-dropdown>\r\n\r\n            </div>\r\n            <div class=\"p-field col-lg-6 col-sm-4 col-md-12 col-12\" [hidden]=\"!showDescription\" appFieldPermission=\"moreDescription\">\r\n              <label for=\"fname\" class=\"referral-form-labels\">\r\n                Other\r\n                <span class=\"requiredfield text-danger\">*</span>\r\n              </label>\r\n              <input type=\"text\" pInputText placeholder=\"Other\" formControlName=\"moreDescription\" appFieldPermission=\"moreDescription\"/>\r\n              <!-- <textarea class=\"form-control\" formControlName=\"moreDescription\" placeholder=\"Others\"></textarea> -->\r\n              <div *ngIf=\"moreDescription?.errors?.maxlength\">\r\n                <div class=\"p-error block mt-1\">Description cannot be more than 100 characters.</div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"mt-3\">\r\n            <button class=\"pull-right mb-2 btn btn-primary btncommon\" [disabled]=\"documentUploadForm.invalid || !enableSaveButton\" (click)=\"sendDocument()\"\r\n            appFieldPermission=\"submit\">Save</button>\r\n            <button (click)=\"resetValue()\"\r\n              class=\"pull-right mb-2 mr-2 btn btn-white border border-1 border-primary text-primary btncancel\" appFieldPermission=\"cancel\">\r\n              {{ isButtonShowHide ? 'Cancel Changes' : 'Cancel' }}\r\n            </button>\r\n            <button class=\"pull-right mb-2 btn btn-danger\" [hidden]=\"!isButtonShowHide\"\r\n              (click)=\"openModal()\">Delete</button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <!-- Modal -->\r\n  <div class=\"modal fade\" id=\"deletephoto\" data-backdrop=\"static\" data-keyboard=\"false\" tabindex=\"-1\"\r\n    aria-labelledby=\"deletephoto\" aria-hidden=\"true\">\r\n    <div class=\"modal-dialog\">\r\n      <div class=\"modal-content\">\r\n        <div class=\"modal-body\">\r\n          <p>Are you sure you want to delete this photo?</p>\r\n          <div class=\"clearfix\"></div>\r\n          <div class=\"mt-2\"><button class=\"pull-right mb-2 btn btn-primary btncommon delete\" (click)=\"deletePhoto()\">\r\n              Delete\r\n            </button>\r\n            <button data-dismiss=\"modal\"\r\n              class=\"pull-right mb-2 mr-2 btn bg-white text-primary btncancel\">Cancel</button>\r\n          </div>\r\n          <div class=\"clearfix\"></div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n", styles: [".doc .drop-container{background:var(--white);border-radius:6px;height:150px;width:100%;box-shadow:1px 2px 20px #0a0a0a1a;display:flex;align-items:center;justify-content:center;border:2px dashed #c0c4c7}.doc .drop-container p{font-size:16px;font-weight:400;color:#c0c4c7}.doc .drop-container p .upload-button{display:inline-block;border:none;outline:none;cursor:pointer;color:#5754a3}.doc .drop-container p .upload-button input{display:none}.wizard .nav-tabs>li{width:calc(50% - 5px);padding:10px;background:#585858}.wizard .nav-tabs>li.active{background:#1bbc9b}.wizard .nav-tabs>li:first-child{margin-right:10px}.uploaded-files{overflow:hidden;display:block}.uploaded-form{background:var(--primary-chat-light);padding:0 0 0 5px;margin-bottom:0;border-radius:2px}.uploaded-form .form-control{padding:5px;border:1px solid #ccc;border-radius:3px;margin-bottom:6px;font-size:12px;height:30px}.uploaded-form textarea.form-control{height:115px!important;margin-bottom:0}.uploaded-files h4{margin:15px 0;font-size:15px;text-transform:uppercase;color:#f97054}.uploaded-files .media-body h4{color:var(--black);font-size:12px;margin:4px 0;text-transform:none;font-weight:700}.uploaded-form .progress{height:5px}.uploaded-form a>span{font-size:25px}.uploaded-files .btn-bs-file{position:relative;margin-bottom:0}.uploaded-files .btn-bs-file input[type=file]{position:absolute;top:-9999999;filter:alpha(opacity=0);opacity:0;width:0;height:0;outline:none;cursor:inherit}.uploaded-files .remove-upld{text-align:center;position:relative;min-height:75px}.uploaded-files .remove-upld span{display:inline-block;width:26px;padding:2px 0;border:1px solid #555;border-radius:100%;color:#555;position:absolute;left:28%;cursor:pointer;top:38%}.upload-wrap{max-height:unset;overflow:unset}h6.upldr-name{font-size:11px;margin:0;color:#777;display:inline-block;padding-right:8px}h6.upldr-name:first-child{border-right:1px solid #ccc}.upldr-name span{color:var(--black);font-size:12px;margin-top:3px;display:block}.no-file h6{margin:0;font-size:14px;font-weight:600}.upload-number{text-align:center}:host ::ng-deep .p-component:disabled{opacity:1}.upload-number span{display:inline-block;width:25px;height:25px;padding-top:2px;border:1px solid #777;color:#777;font-size:13px;font-weight:900;border-radius:100%}.block.drop-container{background:#fff;border:2px dashed #585858;padding:15px 0}.block.drop-container p{margin-bottom:0}i.fa.fa-cloud-upload{font-size:30px;cursor:pointer}.btn-bs-file{cursor:pointer}.Persons-Involved h4.modal-header{margin:0 0 5px;padding:0;font-size:15px;border-bottom:0}.uploaded-form .media{margin-top:0}.mh-450{min-height:450px}.required{position:relative}.required:after{color:#d00;content:\"*\";margin-left:5px;top:0;right:3px;position:absolute}.media-heading{display:flex;padding:11px}.media-left{margin:auto}.clsInputDesign{padding:5px;border:1px solid #ccc;border-radius:3px;margin-bottom:6px;font-size:12px;height:30px;white-space:nowrap;background:#fff;overflow:hidden;text-overflow:ellipsis}.photo-upload-title{background:#032361;color:var(--bg-light);padding:10px 15px;text-transform:uppercase;font-weight:500}i.fa.fa-question-circle{color:var(--primary);font-size:11px}.progress-wrap{position:relative}.progress-wrap h6{margin-bottom:0}.progress-wrap span{padding-right:30px;text-align:right}.progress-wrap h6,.progress-wrap span{font-size:14px;font-weight:400;width:60%;word-wrap:break-word}.progress-wrap a.progress-close{position:absolute;right:0;color:red;top:-2px}.progress-wrap .progress{height:5px;background-color:#d9d9d9;border-radius:0}.progress-wrap .progress .bg-info{background-color:#1b7bb7}.upload-image-preview{width:100%;height:285px;max-height:285px;object-fit:contain;object-position:center center;background-color:#f9f9f9}.mtc-2{margin-top:2rem!important}\n"], dependencies: [{ kind: "directive", type: i4.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i5.PrimeTemplate, selector: "[pTemplate]", inputs: ["type", "pTemplate"] }, { kind: "directive", type: i12.Tooltip, selector: "[pTooltip]", inputs: ["tooltipPosition", "tooltipEvent", "appendTo", "positionStyle", "tooltipStyleClass", "tooltipZIndex", "escape", "showDelay", "hideDelay", "life", "positionTop", "positionLeft", "autoHide", "fitContent", "hideOnEscape", "pTooltip", "tooltipDisabled", "tooltipOptions"] }, { kind: "directive", type: i13.InputText, selector: "[pInputText]" }, { kind: "component", type: i14.Calendar, selector: "p-calendar", inputs: ["style", "styleClass", "inputStyle", "inputId", "name", "inputStyleClass", "placeholder", "ariaLabelledBy", "ariaLabel", "iconAriaLabel", "disabled", "dateFormat", "multipleSeparator", "rangeSeparator", "inline", "showOtherMonths", "selectOtherMonths", "showIcon", "icon", "appendTo", "readonlyInput", "shortYearCutoff", "monthNavigator", "yearNavigator", "hourFormat", "timeOnly", "stepHour", "stepMinute", "stepSecond", "showSeconds", "required", "showOnFocus", "showWeek", "showClear", "dataType", "selectionMode", "maxDateCount", "showButtonBar", "todayButtonStyleClass", "clearButtonStyleClass", "autoZIndex", "baseZIndex", "panelStyleClass", "panelStyle", "keepInvalid", "hideOnDateTimeSelect", "touchUI", "timeSeparator", "focusTrap", "showTransitionOptions", "hideTransitionOptions", "tabindex", "minDate", "maxDate", "disabledDates", "disabledDays", "yearRange", "showTime", "responsiveOptions", "numberOfMonths", "firstDayOfWeek", "locale", "view", "defaultDate"], outputs: ["onFocus", "onBlur", "onClose", "onSelect", "onClear", "onInput", "onTodayClick", "onClearClick", "onMonthChange", "onYearChange", "onClickOutside", "onShow"] }, { kind: "component", type: i25.Dropdown, selector: "p-dropdown", inputs: ["id", "scrollHeight", "filter", "name", "style", "panelStyle", "styleClass", "panelStyleClass", "readonly", "required", "editable", "appendTo", "tabindex", "placeholder", "filterPlaceholder", "filterLocale", "inputId", "dataKey", "filterBy", "filterFields", "autofocus", "resetFilterOnHide", "dropdownIcon", "optionLabel", "optionValue", "optionDisabled", "optionGroupLabel", "optionGroupChildren", "autoDisplayFirst", "group", "showClear", "emptyFilterMessage", "emptyMessage", "lazy", "virtualScroll", "virtualScrollItemSize", "virtualScrollOptions", "overlayOptions", "ariaFilterLabel", "ariaLabel", "ariaLabelledBy", "filterMatchMode", "maxlength", "tooltip", "tooltipPosition", "tooltipPositionStyle", "tooltipStyleClass", "focusOnHover", "selectOnFocus", "autoOptionFocus", "autofocusFilter", "disabled", "itemSize", "autoZIndex", "baseZIndex", "showTransitionOptions", "hideTransitionOptions", "filterValue", "options"], outputs: ["onChange", "onFilter", "onFocus", "onBlur", "onClick", "onShow", "onHide", "onClear", "onLazyLoad"] }, { kind: "directive", type: i2.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { kind: "directive", type: i2.CheckboxControlValueAccessor, selector: "input[type=checkbox][formControlName],input[type=checkbox][formControl],input[type=checkbox][ngModel]" }, { kind: "directive", type: i2.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i2.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { kind: "directive", type: i2.FormGroupDirective, selector: "[formGroup]", inputs: ["formGroup"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }, { kind: "directive", type: i2.FormControlName, selector: "[formControlName]", inputs: ["formControlName", "disabled", "ngModel"], outputs: ["ngModelChange"] }, { kind: "directive", type: i1$1.NgxfSelectDirective, selector: "[ngxf-select]", inputs: ["ngxf-validate", "multiple", "accept", "folder", "structure"], outputs: ["ngxf-select"] }, { kind: "directive", type: i1$1.NgxfDropDirective, selector: "[ngxf-drop]", inputs: ["ngxf-validate", "multiple", "accept", "structure", "drop-class"], outputs: ["ngxf-drop"] }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: DocumentUploadComponent, decorators: [{
            type: Component,
            args: [{ selector: 'app-document-upload', template: "<div class=\"bg-white p-3 mt-1\">\r\n  <div class=\"row mb-3\">\r\n    <div class=\"col-lg-12\">\r\n      <div class=\"photo-upload-title\">Upload Photo</div>\r\n    </div>\r\n  </div>\r\n  <div class=\"row\">\r\n    <div class=\"col-md-4 col-xl-4\">\r\n      <div class=\"uploaded-files mb-3\">\r\n        <div class=\"upload-sec\" appFieldPermission=\"upload_photo\">\r\n          <div class=\"block drop-container\" [hidden]=\"isImageUploaded\" #file (ngxf-drop)=\"uploadFile($event)\"\r\n            (ngxf-select)=\"uploadFile($event)\" drop-class=\"drop\" [ngxf-validate]=\"{ size: { min: 5 } }\" multiple >\r\n            <i class=\"fa fa-cloud-upload mb-2\" aria-hidden=\"true\" ></i>\r\n            <p>Drag and Drop or <a href=\"javascript:;\">Browse</a></p>\r\n            <p class=\"mt-5\">Max file size 3MB <br> Supported formats: JPG, JPEG, PNG, JFIF</p>\r\n          </div>\r\n          <div [hidden]=\"!isImageUploaded\">\r\n            <img class=\"upload-image-preview\" [src]=\"imgUrl2\" alt=\"Youth Image\">\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"progress-wrap\">\r\n        <div class=\"d-flex justify-content-between mb-1\">\r\n          <h6>{{fileName}}</h6>\r\n          <span [hidden]=\"isEditMode\" >{{fileSize}}/3MB</span>\r\n          <a href=\"javascript:;\" class=\"progress-close\" (click)=\"clearImage()\">\r\n            <i class=\"fa fa-times\" aria-hidden=\"true\"></i>\r\n          </a>\r\n        </div>\r\n        <div class=\"progress\">\r\n          <div class=\"progress-bar bg-info\" role=\"progressbar\" [style.width.%]=\"fileSizeRaw / 3072 * 100\"\r\n            [attr.aria-valuenow]=\"fileSizeRaw\" aria-valuemin=\"0\" aria-valuemax=\"3072\"></div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-lg-8 col-xl-8\">\r\n      <div class=\"upload-wrap dd-overflow-inherit\" [formGroup]=\"documentUploadForm\">\r\n        <div class=\"uploaded-form\">\r\n          <div class=\"p-fluid p-formgrid row\">\r\n            <!-- <div class=\"p-field col-lg-3 col-sm-4 col-md-12 col-12\">\r\n              <label for=\"fname\" class=\"referral-form-labels\">\r\n                Photo Type\r\n                <span class=\"requiredfield text-danger\">*</span>\r\n                <i class=\"fa fa-question-circle ml-1\" aria-hidden=\"true\"></i>\r\n              </label>\r\n              <input type=\"text\" pInputText placeholder=\"[current user]\" formControlName=\"photoType\" />\r\n              <p-dropdown [options]=\"typeList\" inputId=\"role\" placeholder=\"Please Select\" styleClass=\"w-100\"\r\n                optionLabel=\"label\" optionValue=\"value\" filter=\"true\" formControlName=\"photoType\" (onChange)=\"\"\r\n                ariaFilterLabel=\"null\">\r\n              </p-dropdown>\r\n            </div> -->\r\n            <div class=\"p-field col-lg-4 col-sm-4 col-md-12 col-12\" appFieldPermission=\"entered_date\">\r\n              <label for=\"fname\" class=\"referral-form-labels\">\r\n                Entered Date\r\n                <span class=\"requiredfield text-danger\">*</span>\r\n              </label>\r\n              <p-calendar type=\"date\" formControlName=\"entered_date\" placeholder=\"[current date]\" appFieldPermission=\"entered_date\"\r\n                [selectOtherMonths]=\"true\" [showIcon]=\"true\" [showOnFocus]=\"false\"></p-calendar>\r\n            </div>\r\n            <div class=\"p-field col-lg-4 col-sm-4 col-md-12 col-12\" appFieldPermission=\"photo_date\">\r\n              <div>\r\n                <label for=\"fname\" class=\"referral-form-labels\">\r\n                  Photo Date\r\n                  <span class=\"requiredfield text-danger\">*</span>\r\n                </label>\r\n                <p-calendar type=\"date\" formControlName=\"photo_date\" placeholder=\"MM/DD/YYYY\" [selectOtherMonths]=\"true\" appFieldPermission=\"photo_date\"\r\n                  [showIcon]=\"true\" [maxDate]=\"maxDate\" [showOnFocus]=\"false\"></p-calendar>\r\n              </div>\r\n\r\n            </div>\r\n            <div class=\"p-field col-lg-4 col-sm-4 col-md-12 col-12\" appFieldPermission=\"type_code\">\r\n              <label for=\"fname\" class=\"referral-form-labels\" >\r\n                Type\r\n                <span class=\"requiredfield text-danger\">*</span>\r\n              </label>\r\n              <p-dropdown [options]=\"photoTypeList\" inputId=\"role\"  placeholder=\"Please Select\"\r\n              styleClass=\"w-100\" optionLabel=\"label\" optionValue=\"value\" [filter]=\"true\" formControlName=\"type_code\" appFieldPermission=\"type_code\"\r\n              (onChange)=\"changeTypeValue($event)\" ariaFilterLabel=\"null\" [showClear]=\"true\">\r\n              <ng-template let-item pTemplate=\"selectedItem\">\r\n                <div pTooltip=\"{{item?.label}}\" tooltipPosition=\"top\" class=\"text-truncate\"> {{ item?.label }}</div>\r\n              </ng-template>\r\n              <ng-template let-object pTemplate=\"item\">\r\n                {{ object.label }}\r\n              </ng-template>\r\n              </p-dropdown>\r\n            </div>\r\n\r\n          </div>\r\n          <div class=\"p-fluid p-formgrid row\">\r\n\r\n            <div class=\"p-field col-lg-6 col-sm-4 col-md-12 col-12\" appFieldPermission=\"entered_by_worker_name\">\r\n              <div>\r\n                <label for=\"fname\" class=\"referral-form-labels\">\r\n                  Entered By\r\n                  <span class=\"requiredfield text-danger\">*</span>\r\n                </label>\r\n                <input type=\"text\" pInputText placeholder=\"[current user]\" formControlName=\"entered_by_worker_name\" appFieldPermission=\"entered_by_worker_name\"/>\r\n              </div>\r\n            </div>\r\n            <div class=\"p-field col-lg-6 col-sm-4 col-md-12 col-12\" *ngIf=\"!hidePrimaryFlag && !hideReadAccess\">\r\n              <div class=\"g-checkbox mtc-2\">\r\n                <input type=\"checkbox\" formControlName=\"primary_flag\" appFieldPermission=\"primary_flag\" id=\"\" class=\"packetsub-cls\" />\r\n                <label for=\"\" aria-labelledby=\"\" class=\"pl-2 mt-0 mb-0\">Primary Photo</label>\r\n              </div>\r\n            </div>\r\n\r\n          </div>\r\n          <div  class=\"p-fluid p-formgrid row\">\r\n            <div class=\"p-field col-lg-6 col-sm-4 col-md-12 col-12\"  appFieldPermission=\"description\">\r\n              <label for=\"fname\" class=\"referral-form-labels\">\r\n                Description\r\n                <span class=\"requiredfield text-danger\">*</span>\r\n              </label>\r\n              <p-dropdown [options]=\"descriptionList\" inputId=\"description\" placeholder=\"Please Select\"\r\n              styleClass=\"w-100\" optionLabel=\"label\" optionValue=\"value\" [filter]=\"true\" formControlName=\"description\" appFieldPermission=\"description\"\r\n              (onChange)=\"changeDescriptionValue($event)\" ariaFilterLabel=\"null\" [showClear]=\"true\">\r\n              <ng-template let-item pTemplate=\"selectedItem\">\r\n                <div pTooltip=\"{{item?.value}}\" tooltipPosition=\"top\" class=\"text-truncate\"> {{ item?.value }}</div>\r\n              </ng-template>\r\n              <ng-template let-object pTemplate=\"item\">\r\n                {{ object.value }}\r\n              </ng-template>\r\n            </p-dropdown>\r\n\r\n            </div>\r\n            <div class=\"p-field col-lg-6 col-sm-4 col-md-12 col-12\" [hidden]=\"!showDescription\" appFieldPermission=\"moreDescription\">\r\n              <label for=\"fname\" class=\"referral-form-labels\">\r\n                Other\r\n                <span class=\"requiredfield text-danger\">*</span>\r\n              </label>\r\n              <input type=\"text\" pInputText placeholder=\"Other\" formControlName=\"moreDescription\" appFieldPermission=\"moreDescription\"/>\r\n              <!-- <textarea class=\"form-control\" formControlName=\"moreDescription\" placeholder=\"Others\"></textarea> -->\r\n              <div *ngIf=\"moreDescription?.errors?.maxlength\">\r\n                <div class=\"p-error block mt-1\">Description cannot be more than 100 characters.</div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"mt-3\">\r\n            <button class=\"pull-right mb-2 btn btn-primary btncommon\" [disabled]=\"documentUploadForm.invalid || !enableSaveButton\" (click)=\"sendDocument()\"\r\n            appFieldPermission=\"submit\">Save</button>\r\n            <button (click)=\"resetValue()\"\r\n              class=\"pull-right mb-2 mr-2 btn btn-white border border-1 border-primary text-primary btncancel\" appFieldPermission=\"cancel\">\r\n              {{ isButtonShowHide ? 'Cancel Changes' : 'Cancel' }}\r\n            </button>\r\n            <button class=\"pull-right mb-2 btn btn-danger\" [hidden]=\"!isButtonShowHide\"\r\n              (click)=\"openModal()\">Delete</button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <!-- Modal -->\r\n  <div class=\"modal fade\" id=\"deletephoto\" data-backdrop=\"static\" data-keyboard=\"false\" tabindex=\"-1\"\r\n    aria-labelledby=\"deletephoto\" aria-hidden=\"true\">\r\n    <div class=\"modal-dialog\">\r\n      <div class=\"modal-content\">\r\n        <div class=\"modal-body\">\r\n          <p>Are you sure you want to delete this photo?</p>\r\n          <div class=\"clearfix\"></div>\r\n          <div class=\"mt-2\"><button class=\"pull-right mb-2 btn btn-primary btncommon delete\" (click)=\"deletePhoto()\">\r\n              Delete\r\n            </button>\r\n            <button data-dismiss=\"modal\"\r\n              class=\"pull-right mb-2 mr-2 btn bg-white text-primary btncancel\">Cancel</button>\r\n          </div>\r\n          <div class=\"clearfix\"></div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n", styles: [".doc .drop-container{background:var(--white);border-radius:6px;height:150px;width:100%;box-shadow:1px 2px 20px #0a0a0a1a;display:flex;align-items:center;justify-content:center;border:2px dashed #c0c4c7}.doc .drop-container p{font-size:16px;font-weight:400;color:#c0c4c7}.doc .drop-container p .upload-button{display:inline-block;border:none;outline:none;cursor:pointer;color:#5754a3}.doc .drop-container p .upload-button input{display:none}.wizard .nav-tabs>li{width:calc(50% - 5px);padding:10px;background:#585858}.wizard .nav-tabs>li.active{background:#1bbc9b}.wizard .nav-tabs>li:first-child{margin-right:10px}.uploaded-files{overflow:hidden;display:block}.uploaded-form{background:var(--primary-chat-light);padding:0 0 0 5px;margin-bottom:0;border-radius:2px}.uploaded-form .form-control{padding:5px;border:1px solid #ccc;border-radius:3px;margin-bottom:6px;font-size:12px;height:30px}.uploaded-form textarea.form-control{height:115px!important;margin-bottom:0}.uploaded-files h4{margin:15px 0;font-size:15px;text-transform:uppercase;color:#f97054}.uploaded-files .media-body h4{color:var(--black);font-size:12px;margin:4px 0;text-transform:none;font-weight:700}.uploaded-form .progress{height:5px}.uploaded-form a>span{font-size:25px}.uploaded-files .btn-bs-file{position:relative;margin-bottom:0}.uploaded-files .btn-bs-file input[type=file]{position:absolute;top:-9999999;filter:alpha(opacity=0);opacity:0;width:0;height:0;outline:none;cursor:inherit}.uploaded-files .remove-upld{text-align:center;position:relative;min-height:75px}.uploaded-files .remove-upld span{display:inline-block;width:26px;padding:2px 0;border:1px solid #555;border-radius:100%;color:#555;position:absolute;left:28%;cursor:pointer;top:38%}.upload-wrap{max-height:unset;overflow:unset}h6.upldr-name{font-size:11px;margin:0;color:#777;display:inline-block;padding-right:8px}h6.upldr-name:first-child{border-right:1px solid #ccc}.upldr-name span{color:var(--black);font-size:12px;margin-top:3px;display:block}.no-file h6{margin:0;font-size:14px;font-weight:600}.upload-number{text-align:center}:host ::ng-deep .p-component:disabled{opacity:1}.upload-number span{display:inline-block;width:25px;height:25px;padding-top:2px;border:1px solid #777;color:#777;font-size:13px;font-weight:900;border-radius:100%}.block.drop-container{background:#fff;border:2px dashed #585858;padding:15px 0}.block.drop-container p{margin-bottom:0}i.fa.fa-cloud-upload{font-size:30px;cursor:pointer}.btn-bs-file{cursor:pointer}.Persons-Involved h4.modal-header{margin:0 0 5px;padding:0;font-size:15px;border-bottom:0}.uploaded-form .media{margin-top:0}.mh-450{min-height:450px}.required{position:relative}.required:after{color:#d00;content:\"*\";margin-left:5px;top:0;right:3px;position:absolute}.media-heading{display:flex;padding:11px}.media-left{margin:auto}.clsInputDesign{padding:5px;border:1px solid #ccc;border-radius:3px;margin-bottom:6px;font-size:12px;height:30px;white-space:nowrap;background:#fff;overflow:hidden;text-overflow:ellipsis}.photo-upload-title{background:#032361;color:var(--bg-light);padding:10px 15px;text-transform:uppercase;font-weight:500}i.fa.fa-question-circle{color:var(--primary);font-size:11px}.progress-wrap{position:relative}.progress-wrap h6{margin-bottom:0}.progress-wrap span{padding-right:30px;text-align:right}.progress-wrap h6,.progress-wrap span{font-size:14px;font-weight:400;width:60%;word-wrap:break-word}.progress-wrap a.progress-close{position:absolute;right:0;color:red;top:-2px}.progress-wrap .progress{height:5px;background-color:#d9d9d9;border-radius:0}.progress-wrap .progress .bg-info{background-color:#1b7bb7}.upload-image-preview{width:100%;height:285px;max-height:285px;object-fit:contain;object-position:center center;background-color:#f9f9f9}.mtc-2{margin-top:2rem!important}\n"] }]
        }], ctorParameters: function () { return [{ type: i0.Injector }, { type: i2.FormBuilder }, { type: i1.ActivatedRoute }, { type: YouthPhotoService }, { type: HttpService }, { type: LocalService }, { type: LocalStorageService }, { type: PermissionStore }, { type: AppService }, { type: SharedService }, { type: LocalService }, { type: i1.Router }]; }, propDecorators: { fileInput: [{
                type: ViewChild,
                args: ['file']
            }] } });

const routes = [
    {
        path: 'upload-image',
        component: DocumentUploadComponent,
    },
    {
        path: 'upload-image/:photoid',
        component: DocumentUploadComponent,
    },
    {
        path: 'image-list',
        component: ViewYouthPhotoComponent,
    },
    { path: '**', redirectTo: 'image-list', pathMatch: 'full' }
];
class YouthPhotoRoutingModule {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: YouthPhotoRoutingModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
    static ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "16.2.12", ngImport: i0, type: YouthPhotoRoutingModule, imports: [i1.RouterModule], exports: [RouterModule] });
    static ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: YouthPhotoRoutingModule, imports: [RouterModule.forChild(routes), RouterModule] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: YouthPhotoRoutingModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [RouterModule.forChild(routes)],
                    exports: [RouterModule]
                }]
        }] });

class YouthPhotoModule {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: YouthPhotoModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
    static ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "16.2.12", ngImport: i0, type: YouthPhotoModule, imports: [CommonModule,
            YouthPhotoRoutingModule,
            DirectivesModule] });
    static ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: YouthPhotoModule, imports: [CommonModule,
            YouthPhotoRoutingModule,
            DirectivesModule] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: YouthPhotoModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [],
                    imports: [
                        CommonModule,
                        YouthPhotoRoutingModule,
                        DirectivesModule
                    ],
                    schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA],
                }]
        }] });

export { YouthPhotoModule };
//# sourceMappingURL=pics-core-dynamic-youth-photo.module-8fd5f719.mjs.map
