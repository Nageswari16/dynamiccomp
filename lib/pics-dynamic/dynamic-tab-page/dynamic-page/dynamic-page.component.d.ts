import { Location } from '@angular/common';
import { AfterViewInit, ElementRef, EventEmitter, Injector, OnDestroy, OnInit, TemplateRef } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { FormioComponent } from '@formio/angular';
import { FileError, NgxfUploaderService } from 'ngxf-uploader';
import { SpeechRecognitionService } from '../../@core/service/speech-recognition.service';
import { OCRService } from '../../@core/service/ocr.service';
import { LocalService } from '../../@core/service/local.service';
import { PlatformDataStoreService } from '../../@core/service/platform-data-store.service';
import { DataStoreService } from '../../@core/service/data-store.service';
import { DynamicTabPageService } from '../../@core/service/dynamic-tab-page-service';
import { DynamicsearchService } from '../../@core/service/dynamicsearch.service';
import { AuthService } from '../../@core/service/auth.service';
import { AttachmentsService } from '../../@core/service/attachments.service';
import { OcrValidationService } from '../../@core/service/ocr-validation.service';
import { FormioService } from '../../@core/service/formio.service';
import { AlertService } from '../../@core/service/alert.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Store } from '@ngrx/store';
import { ComponentState } from '../../@shared/master-view-state/master-view.state';
import { Observable, Subscription } from 'rxjs';
import { AppState } from '../../@core/core.state';
import * as i0 from "@angular/core";
export declare class DynamicPageComponent implements OnInit, OnDestroy, AfterViewInit {
    router: Router;
    private route;
    private _formIO;
    private store;
    private _storeservice;
    private submitSuccess;
    private submitFailed;
    formId: any;
    tabId: any;
    jsonForm: any;
    fromTitle: any;
    editId: any;
    id: any;
    submittedData: any;
    afterEntityName: string;
    afterRuleAppName: string;
    beforeEntityName: string;
    beforeRuleAppName: string;
    beforerulemethod: string;
    afterrulemethod: string;
    user: any;
    multiSelectDropDowns: Array<string>;
    pageId: any;
    sourceid: string;
    externalParameters: string;
    pageDataSubscription: any;
    isDialogPopup: boolean;
    private dialogRef;
    external_scanner: ElementRef;
    validationPopup: TemplateRef<any>;
    private validationPopupRef;
    isReadOnly: boolean;
    showBack: boolean;
    isTitle: any;
    afterSubmit: EventEmitter<any>;
    personId: any;
    triggerRefresh: any;
    fromWorkFlow: boolean;
    clickedServiceCase: boolean;
    serviceId: any;
    speechRecogninitionOn: boolean;
    speechData: string;
    notification: string;
    organizationId: any;
    FormInputs: any[];
    scannerConfig: any;
    tabData: any;
    narrative: any;
    purpose: any;
    pagetype: string;
    localstorage: LocalService;
    sessionStorage: LocalService;
    location: Location;
    dataStore: DataStoreService;
    speechRecognitionService: SpeechRecognitionService;
    uploadService: NgxfUploaderService;
    ocr: OCRService;
    appointmentList: Promise<boolean> | undefined;
    isformIO: boolean;
    formIO: FormioComponent;
    currentYouthId: any;
    dynamicTabPageService: DynamicTabPageService;
    dynamicSearchService: DynamicsearchService;
    authService: AuthService;
    attachmentInfo: any;
    uploadedFiles: any;
    parentGridPage: string;
    parentGridPageId: any;
    alertService: AlertService;
    uploadedFile: any;
    isOcrForm: boolean;
    documentType: string;
    imgUrl: string;
    showOcrForm: boolean;
    attachmentService: AttachmentsService;
    imageData: {
        contentType: any;
        fileName: string;
    };
    tableschemaconfig: any;
    formResponse: any;
    action: string;
    contentArray: any[];
    templateResult: any;
    ocrValidationService: OcrValidationService;
    dataSub: any;
    btnVerify: boolean;
    editValue: any;
    loggedUser: any;
    providerData: any;
    check: any;
    showbackbtn: boolean;
    showTitle: boolean;
    componentId: any;
    selectedComponent: ComponentState;
    componentConfig$: Observable<ComponentState>;
    eventSubscription: Subscription;
    submissionDone: EventEmitter<Boolean>;
    confirmationmessage: string;
    showButton1: any;
    showButton2: any;
    button1Text: any;
    button2Text: any;
    button1Key: any;
    button2Key: any;
    button1Action: any;
    button2Action: any;
    modalService: NgbModal;
    button1Style: any;
    button2Style: any;
    dialog: MatDialog;
    httpService: any;
    appService: any;
    fallbackIdFromRoute: any;
    constructor(injector: Injector, router: Router, route: ActivatedRoute, _formIO: FormioService, store: Store<AppState>, data: any, _storeservice: PlatformDataStoreService);
    conditionCheckData(data: any): void;
    ngOnInit(): void;
    ngAfterViewInit(): void;
    routerPageData(data: any): void;
    getPageTabs(): void;
    getConfiguration(): Promise<any>;
    getRouterConfig(isCompositePageRefresh?: boolean): void;
    getSource(): void;
    private getTemplate;
    checkParams(element: any): any;
    conditionCheckTemplate(result: any): void;
    loadIncidentData(): void;
    private callGetAPI;
    conditionCheckCallGetAPI(): void;
    formresponse(action: any): void;
    resultNullCheck(data: any): any;
    getActionSelect(result: any, action: any): void;
    getMultipleFrom(result: any): void;
    private processMultiSelectDropdowns;
    nextSubmit(event: any): void;
    onClickConfirmation(userAction: any, actionKey: any): void;
    closeValidationPopup(): void;
    validateForm(): void;
    onSubmit(submission: any): void;
    submiteWithoutId(requestData: any): void;
    addAttachment(info: any): void;
    submittedDate(result: any): void;
    submitToSurvey(): void;
    updateForm(requestData: any): void;
    closePopup(): void;
    goBack(): void;
    openBottomSheet(): void;
    modifyVideoContent(): void;
    customClickEvents(_data: any, event: any): void;
    redirect(): void;
    customEventsButton(event: any): void;
    downloadReport(data: any): void;
    downloadFile(s3BucketUrlName: any): void;
    customEvents(evt: any): void;
    speechToTextContent(): void;
    activateSpeechToText(ctrl: any, evt: any, item: any): void;
    conditionCheckError(narrativeElement: any, ctrl: any, evt: any, item: any, err: any): void;
    errorExecution(narrativeElement: any, ctrl: any, evt: any, item: any, err: any): void;
    micNotAvailableAlert(): string;
    micUnauthorisedAlert(): string;
    noSpeechAlert(): string;
    deActivateSpeechRecognition(ctrl: any): void;
    ngOnDestroy(): void;
    uploadFile(file: File | FileError): void;
    processResponseData(file: any): void;
    processOCRResponse(result: any): void;
    prepareFormKeyLabel(json: any): void;
    financeCustomEventsFunctionality(event: any): void;
    routeToGrid(val: any): void;
    customEvent(event: any): void;
    ocrUpload(files: any): void;
    condionCheckErrorAlert(error: any): void;
    getUpload(obj: any): void;
    verifiData(ocrDocumentDetails: any): void;
    conditionCheckVerify(element: any, ocrDocumentDetails: any, respose: any, jsonForm: any): void;
    getEmittedData(data: any): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<DynamicPageComponent, [null, null, null, null, null, { optional: true; }, null]>;
    static ɵcmp: i0.ɵɵComponentDeclaration<DynamicPageComponent, "app-dynamic-page", never, { "editId": { "alias": "editId"; "required": false; }; "pageId": { "alias": "pageId"; "required": false; }; "sourceid": { "alias": "sourceid"; "required": false; }; "externalParameters": { "alias": "externalParameters"; "required": false; }; "isReadOnly": { "alias": "isReadOnly"; "required": false; }; "componentId": { "alias": "componentId"; "required": false; }; }, { "afterSubmit": "afterSubmit"; "submissionDone": "submissionDone"; }, never, never, false, never>;
}
