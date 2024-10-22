import { EventEmitter, OnInit } from '@angular/core';
import { FormioCustomComponent, FormioEvent } from '@formio/angular';
import { ConfirmationService } from 'primeng/api';
import { PlatformDataStoreService } from '../../@core/service/platform-data-store.service';
import { AlertService } from '../../@core/service/alert.service';
import { AuthService } from '../../@core/service/auth.service';
import { PageBuilderAddService } from '../../@core/service/page-builder-add.service';
import { AttachmentsService } from '../../@core/service/attachments.service';
import * as i0 from "@angular/core";
export interface FileUpload {
    fileName: string;
    contentType: string;
    type: string;
}
export interface FileUploadInfo {
    type: string;
    formid: number;
    attachmentdetails: any[];
}
export declare class FileUploadWrapperComponent implements FormioCustomComponent<any>, OnInit {
    private _storeservice;
    private alertService;
    private authService;
    private pageBuilderAddService;
    private confirmationService;
    private attachmentsService;
    value: any;
    valueChange: EventEmitter<any>;
    disabled: boolean;
    formioEvent: EventEmitter<FormioEvent>;
    uploadedFiles: any[];
    formStatus: string;
    sharedInfo: any;
    pageId: any;
    responseId: any;
    uploadedFilesTest: any;
    tableColumns: any[];
    updateGrid: any;
    categoryList: any;
    subCategoryList: any;
    category: string;
    subCategory: string;
    lookupList: any;
    categoryid: any;
    subcategoryid: any;
    httpService: any;
    constructor(_storeservice: PlatformDataStoreService, alertService: AlertService, authService: AuthService, pageBuilderAddService: PageBuilderAddService, confirmationService: ConfirmationService, attachmentsService: AttachmentsService);
    ngOnInit(): void;
    onUpload(event: any, upload: any): void;
    getAllAttachments(): void;
    deleteAttachment(e: any): void;
    downloadAttachment(event: any): void;
    confirm(event: any): void;
    setTableColumns(): void;
    getCategory(): void;
    getSubCategory(): void;
    getCatogoryItem(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<FileUploadWrapperComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<FileUploadWrapperComponent, "app-file-upload-wrapper", never, { "value": { "alias": "value"; "required": false; }; "disabled": { "alias": "disabled"; "required": false; }; }, { "valueChange": "valueChange"; "formioEvent": "formioEvent"; }, never, never, false, never>;
}
